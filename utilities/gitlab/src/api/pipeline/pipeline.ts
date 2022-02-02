import { Interface } from "./pipeline.type.js";
import { Options, Pipeline as Path, Trigger } from "./request/options.js";
import Form from "./request/form-data.js";

import API from "./request/client.js";

interface Create {
    project: number;
    id: number;
    hostname: string;
    port: number;
    token: string;
    method: "POST";
}

interface Get {
    project: number;
    id: number;
    hostname: string;
    port: number;
    token: string;
    method: "GET";
}

class Pipeline implements Interface {
    public created_at: Interface["created_at"];
    public id: Interface["id"];
    public iid: Interface["iid"];
    public project_id: Interface["project_id"];
    public ref: Interface["ref"];
    public sha: Interface["sha"];
    public source: Interface["source"];
    public status: Interface["status"];
    public updated_at: Interface["updated_at"];
    public web_url: Interface["web_url"];

    constructor(response: Pipeline) {
        this.created_at = response.created_at;
        this.id = response.id;
        this.iid = response.iid;
        this.project_id = response.project_id;
        this.ref = response.ref;
        this.sha = response.sha;
        this.source = response.source;
        this.status = response.status;
        this.updated_at = response.updated_at;
        this.web_url = response.web_url;
    }

    static async create(settings: Create, form: Form) {
        const method = settings.method;
        const hostname = settings.hostname;
        const port = settings.port;
        const token = settings.token;

        const buffer: { ref: string, variables: string[], token: string } = {
            ref: "",
            token: "",
            variables: []
        };

        for await ( const $ of form.entries() ) {
            if ( $[0] === "token" ) {
                buffer.token = String( $[1] );
            } else {
                if ( $[0] === "ref" ) {
                    buffer.ref = String( $[1] );
                } else {
                    buffer.variables.push( "variables" + "[" + $[0] + "]" + "=" + String( $[1] ) );
                }
            }
        }

        const variables = buffer.variables.map( ($) => "&" + $ ).join("");
        const path = Trigger.resolve( settings.project, buffer.ref, buffer.token ) + variables;
        const configuration = new Options( hostname, path, token, method, port );

        const $ = await API( configuration );

        console.log( "[Log] Response" + ":", JSON.parse( $.response ) );
        return new Pipeline( JSON.parse( $.response ) );
    }

    static async get(settings: Get) {
        const method = settings.method;
        const hostname = settings.hostname;
        const port = settings.port;
        const token = settings.token;

        const path = Path.resolve( settings.project, settings.id );

        const configuration = new Options( hostname, path, token, method, port );

        const $ = await API( configuration );
        return new Pipeline( JSON.parse( $.response ) );
    }
}

export { Pipeline };

export default Pipeline;

/// const GET: Get = { project: 1, id: 1000, hostname: "gitlab.com", port: 443, method: "GET", token: "..." };
/// const POST: Create = { project: 1, id: 1000, hostname: "gitlab.com", port: 443, method: "POST", token: "..." };

/// const Data = new Form();
/// Data.append( "token", "..." );
/// Data.append( "ref", "Development" );
/// Data.append( "BRANCH", "..." );
///
/// await Pipeline.create( POST, Data );