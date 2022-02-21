/*** Terminal Controller (Router)
 *
 * @module Terminal
 * `forkpty(3)` bindings for `node.js`. Allows the API to fork processes with pseudoterminal file descriptors.
 *
 * It returns a terminal object which allows reads and writes.
 *
 * Use Cases:
 * - Writing a terminal emulator (e.g. via `xterm.js`).
 * - Getting certain programs to believe a Terminal is the controlling process.
 *     - Applications often, and explicitly, check for `TTY` control, and will issue
 *     a SIGTERM if the process was initialized from a daemon, or otherwise headless
 *     call.
 *
 */

import { Application, Router, Exception } from "..";

import { Terminal } from "./terminal";

import Process from "process";
import PTY     from "node-pty";

const TTYs: { number: PTY.IPty } | {} = {};
const Logs: { number: PTY.IPty } | {} = {};

const Controller = Router();

const Online = () => JSON.stringify( { Status: "Online" }, null, 4 );
Controller.get( "/", async ( _, response ) => {
    response.shouldKeepAlive = true;
    response.statusMessage = "Online";
    response.statusCode = 200;

    response.setHeader( "Keep-Alive", 5 );
    response.setHeader( "Content-Type", "Application/JSON" );

    response.write( Online() );

    response.send();
} );

Controller.use( "/terminal", Terminal );

export { Application, Router, Exception, TTYs, Logs, PTY, Process };
export { Controller as TTY };
export default Controller;