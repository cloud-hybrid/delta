// wscat -c ws://localhost:10500/tty/terminal/:pid
// websocat ws://localhost:10500/tty/terminal/:pid

import os from "os";

import { Application, Router, Process, PTY, TTYs, Logs } from ".";

const Controller = Router();

Reflect.set( Controller, "ws", Application.ws );

Controller.get( "/", async ( request, response ) => {
    const Environment = Object.assign( {}, Process.env );
    const Columns = Number( request.query?.columns ?? 120 );
    const Rows = Number( request.query?.rows ?? 30 );

    const Terminal = PTY.spawn( ( Process.platform === "win32" ) ? "cmd.exe" : "bash", [], {
        name: Environment["$TERM"] ?? "xterm-256color",
        cols: Columns,
        rows: Rows,
        encoding: "utf8"
    } );

    TTYs[Terminal.pid] = Terminal;
    Logs[Terminal.pid] = "";

    Terminal.onData( function ( data ) {
        Logs[Terminal.pid] += String( data );
    } );

    response.send( Terminal.pid.toString() );
} );

Controller.get( "/:pid/size", async ( request, response ) => {
    const PID = parseInt( request.params?.pid ) ?? -1;

    const Terminal: PTY.IPty | null = TTYs[PID] ?? null;

    const Columns = Number( request.query?.columns ?? -1 );
    const Rows = Number( request.query?.rows ?? -1 );

    const Valid = ( PID !== -1 && Columns !== -1 && Rows !== -1 );
    const Delta = ( Columns !== Terminal?.cols && Rows !== Terminal?.rows );

    ( Terminal && Valid && Delta ) && Terminal?.resize( Columns, Rows );
    ( Terminal && Valid && Delta ) && console.log( "Terminal Resize Event" + " " + "(" + PID + ")" + " " + "[" + Columns + ", " + Rows + "]" );
    ( Terminal && Valid && Delta ) || console.log( "Terminal Resize Event Attempt" + " " + "(" + PID + ")" );

    response.send( {
        Resize: ( Terminal && Valid && Delta )
    } );
} );

Controller.ws( "/:pid", async ( socket, request ) => {
    const PID = parseInt( request.params?.pid ) ?? -1;
    const Terminal: PTY.IPty | null = TTYs[PID] ?? null;

    ( Terminal !== null ) && console.log( "Connected via Terminal" + ":" + " " + "(" + Terminal?.pid + ")" );
    ( Terminal !== null ) || console.log( "Failed Connection Attempt" + ":" + " " + "(" + String(Terminal?.pid ?? "N/A") + ")" );
    ( Terminal !== null ) || socket.close(1007, "No Allocated TTY");

    try {
        socket.send( Logs[Terminal.pid] );
    } catch ( error ) {
        socket.close(1007, "No Allocated TTY");
        socket.terminate();
    }

    // Message Buffering
    const buffer = ( socket: WebSocket, timeout: number ) => {
        const $: { string: string, tick: NodeJS.Timeout | null } = { string: "", tick: null };
        return ( data: Uint8Array ) => {
            $.string += data;

            if ( !$.tick ) {
                $.tick = setTimeout( () => {
                    socket.send( $.string );
                    $.string = "";
                    $.tick = null;
                }, timeout );
            }
        };
    };

    // Binary Message Buffering
    const binary = ( socket: WebSocket, timeout: number ) => {
        const $: { buffer: "", tick: NodeJS.Timeout | null, length: number | null } = { buffer: "", tick: null, length: null };
        return ( data: string | any[] | Uint8Array ) => {
            $.buffer += String( data );
            if ( !$.tick ) {
                $.tick = setTimeout( () => {
                    socket.send( Buffer.from( $.buffer.toString() ) );
                    $.buffer = "";
                    $.tick = null;
                    $.length = 0;
                }, timeout );
            }
        };
    };

    // @ts-ignore
    const send = ( os.platform() === "win32" ) ? buffer( socket, 5 ) :  binary( socket, 5 );

    Terminal?.onData( ( data: Uint8Array | string ) => {
        try {
            // @ts-ignore
            send( data );
        } catch ( error ) {
            // The WebSocket is not open, ignore
        }
    } );

    socket.on( "message", ( stream ) => {
        console.log( "[Log] Socket TTY Input" + ":", "(" + Terminal?.pid + ")", stream );
        // @ts-ignore
        try {
            Terminal.write( String(stream) );
        } catch (error) {
            socket.close(1007, "No Allocated TTY");
        }
    } );

    socket.on( "close", () => {
        Terminal?.kill();
        try {
            delete TTYs[Terminal.pid];
            delete Logs[Terminal.pid];
        } catch (error) {
            // ...
        } finally {
            console.log( "Closed Terminal" + ":" + " " + "(" + String(Terminal?.pid ?? "N/A") + ")" );
        }
    } );
} );

export { Controller as Terminal };

export default Controller;
