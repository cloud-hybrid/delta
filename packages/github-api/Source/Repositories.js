const Runtime = process;

import { Octokit } from "@octokit/core";

/*****
 *
 * @type {{Organization: string, Version: string, VCS: string, Package: string}}
 *
 */

const Globals = {
    Organization: Runtime.env.ORGANIZATION,
    Package: "@octokit/core",
    Version: Octokit.VERSION,
    VCS: "GitHub"
};

import Reader from "readline";

/*****
 *
 * @returns {Promise<void>}
 *
 * @constructor
 *
 */

const Prompt = async () => {
    const Input = Reader.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "[Personal Access Token]: "
    });

    Input.prompt();

    Input.on("line", async (stream) => {
        switch (stream.trim()) {
            case "":
                console.log("  ↳ Please Provide a Valid API Token");
                break;
            default:
                const Data = await Request(stream.trim());
                break;

        }

        Input.prompt();

    }).on("close", () => {
        process.exit(0);
    });
}

/*****
 *
 * @param token
 * @returns {Promise<{Repositories: *[], Valid: null, Total: {Repositories: null}, API: {Organization: string, Version: string, VCS: string, Package: string}}>}
 * @constructor
 *
 */

const Request = async (token) => {
    const Data = {
        Repositories: [],
        API: { ... Globals },
        Total: {
            Repositories: null
        }, Valid: null
    };

    const API = new Octokit({
        auth: token
    });

    const Repositories = await API.request("GET /orgs/{org}/repos", {
        org: Data.API.Organization
    });

    Repositories.data.forEach(
        (Repository, Index) => {
            Data.Repositories.push({
                Name: Repository.name,
                Description: Repository.description,
                Path: Repository.full_name,
                URL: {
                    Normalized: Repository.html_url,
                    API: Repository.url,
                    Git: Repository.git_url,
                    HTTPs: Repository.clone_url,
                    SSH: Repository.ssh_url
                },
                Public: ! Repository.private,
                Language: Repository.language,
                Branch: {
                    HEAD: Repository.default_branch
                }
            })
        }
    );

    Data.Total.Repositories = Data.Repositories.length;

    (Data.Repositories.length !== 0)
        ? Data.Valid = true
        : Data.Valid = false
    ;

    return Data;
}

/*****
 *
 * @param token
 * @returns {Promise<{Repositories: *[], Valid: null, Total: {Repositories: null}, API: {Organization: string, Version: string, VCS: string, Package: string}}>}
 * @constructor
 *
 */

export const Main = async (token) => {
    return await Request(token);
}

/*****
 *
 * @type {string[]}
 *
 */

export const Callable = [
    "repos", "projects", "repositories"
];

/*****
 *
 * @type {(string|*[])[]}
 *
 */

export const Command = [
    ... Callable, []
];

export default { Query: async (token) => await Main(token), Callable, Command };
