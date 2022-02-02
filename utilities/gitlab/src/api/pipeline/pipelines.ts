import { Interface, Interfaces } from "./pipelines.type.js";

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
}

class Pipelines extends Array {
    link?: string | undefined;
    token?: string | undefined;
    pages?: string | undefined;
    indices?: string | undefined;

    total: number;
    count: number;

    constructor(items: Interfaces, token?: string, total?: string, indices?: string, pages?: string, link?: string) {
        super();

        items.forEach(($) => {
            this.push($);
        });

        this.link = link?.split(";")[0]?.replace("<", "")?.replace(">", "");
        this.token = token;
        this.pages = pages;
        this.indices = indices;

        this.total = (total) ? Number(total) ?? this.length : this.length;
        this.count = this.length;
    }
}

export { Pipeline, Pipelines };

export default Pipeline;