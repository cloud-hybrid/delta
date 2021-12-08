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
 * @returns {Promise<{Valid: null, Total: {Users: null}, API: {Organization: string, Version: string, VCS: string, Package: string}, Users: *[]}>}
 * @constructor
 *
 */

const Request = async (token) => {
    const Data = {
        Users: [],
        API: { ... Globals },
        Total: {
            Users: null
        }, Valid: null
    };

    const API = new Octokit({
        auth: token
    });

    const Users = await API.request("GET /orgs/{org}/members", {
        org: Data.API.Organization
    });

    Users.data.forEach((User, Index) => {
        Data.Users.push({
            Username: User.login
        })
    });

    Data.Total.Users = Data.Users.length;

    (Data.Users.length !== 0)
        ? Data.Valid = true
        : Data.Valid = false
    ;

    return Data;
}

/*****
 *
 * @param token
 * @returns {Promise<{Valid: null, Total: {Users: null}, API: {Organization: string, Version: string, VCS: string, Package: string}, Users: *[]}>}
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
    "users", "members"
];

/*****
 *
 * @type {(string|*[])[]}
 *
 */

export const Command = [
    ...Callable, []
];

export default { Query: async (token) => await Main(token), Callable, Command };
