import Process from "process";

interface Configuration {
    hostname: string;
    port: number;
    path: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    headers: { [$: string]: string };
}

class Options implements Configuration {
    public headers: { [$: string]: string };
    public hostname: string;
    public method: Configuration["method"];
    public path: string;
    public port: number = 443;

    constructor(hostname: string, path: string, token: string = Process.env["TOKEN"] ?? "", method: Options["method"] = "GET", port: number = 443) {
        this.hostname = hostname;

        this.headers = {
            "PRIVATE-TOKEN": token
        };

        this.method = method;
        this.path = path;
        this.port = port;
    }

}

class Pipelines {
    id: string | number;
    path: string = [ "", "api", "v4", "projects" ].join( "/" );

    constructor(id: string | number) {
        this.id = id;
        this.path += [ "", this.id, "pipelines" ].join( "/" );
    }

    static resolve(id: string | number) {
        return new Pipelines( id ).path;
    }
}

class Pipeline {
    id: string | number;
    iid: string | number;
    path: string = [ "", "api", "v4", "projects" ].join( "/" );

    constructor(id: string | number, iid: string | number) {
        this.id = id;
        this.iid = iid;
        this.path += [ "", this.id, "pipelines", this.iid ].join( "/" );
    }

    static resolve(id: string | number, iid: string | number) {
        return new Pipeline( id, iid ).path;
    }
}

class Trigger {
    id: string | number;
    path: string = [ "", "api", "v4", "projects" ].join( "/" );

    constructor(id: string | number, ref: string, token: string) {
        this.id = id;
        this.path += [ "", this.id, "ref", ref, "trigger", "pipeline" ].join( "/" );
        this.path += ["?token=", token].join("");
    }

    static resolve(id: string | number, ref: string, token: string) {
        return new Trigger( id, ref, token).path;
    }
}

class Variables {
    id: string | number;
    iid: string | number;
    path: string = [ "", "api", "v4", "projects" ].join( "/" );

    constructor(id: string | number, iid: string | number) {
        this.id = id;
        this.iid = iid;
        this.path += [ "", this.id, "pipelines", this.iid, "variables" ].join( "/" );
    }

    static resolve(id: string | number, iid: string | number) {
        return new Variables( id, iid ).path;
    }
}

export type { Configuration };

export { Options, Pipeline, Pipelines, Variables, Trigger };

export default { Options, Pipeline, Pipelines, Variables, Trigger };