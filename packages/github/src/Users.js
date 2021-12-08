import { Octokit } from "@octokit/core";

import { Settings } from "./../configuration/index.js";

const Authentication = {
    Organization: Settings.GitHub.Organization,
    Token: Settings.GitHub.Token,
    User: Settings.GitHub.User
};

const Users = async () => {
    const Data = {
        Members: [],
        Total: -1,
        Valid: null
    };

    const API = new Octokit({
        auth: Authentication.Token
    });

    const Members = await API.request("GET /orgs/{org}/members", {
        org: Authentication.Organization
    });

    Members.data.forEach((User, _) => {
        Data.Members.push({
            User
        });
    });

    Data.Total = Data.Members.length;

    (Data.Total !== 0) ? Data.Valid = true
        : Data.Valid = false;

    return Data;
};

export const Data = await Users();

export const Serial = JSON.stringify(await Users(), null, 4);

export default Data;