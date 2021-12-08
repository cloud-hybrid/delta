import { Octokit } from "@octokit/core";

import { Settings as Configuration } from "./../configuration/index.js";

const Settings = Configuration["GitHub"];
const Authentication = {
    Organization: Settings.Organization,
    Token: Settings.Token,
    User: Settings.User
};

const Request = async () => {
    const API = new Octokit({
        auth: Authentication.Token
    });

    return await API.request("GET /orgs/{org}", {
        org: Authentication.Organization
    }).then(($) => $["data"]);
};

export const Data = await Request();

export const Serial = JSON.stringify(Data, null, 4);

export default Data;