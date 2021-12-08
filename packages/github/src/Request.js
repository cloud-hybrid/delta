import { Octokit } from "@octokit/core";

import { Settings } from "./../configuration/index.js";

const Authentication = {
    Organization: Settings.GitHub.Organization,
    Token: Settings.GitHub.Token,
    User: Settings.GitHub.User
};

const Request = async () => {
    const Data = {
        People: [],
        Members: [],
        Total: {
            People: null,
            Members: null
        },
        Valid: null
    };

    const API = new Octokit({
        auth: Authentication.Token
    });

    const Members = await API.request("GET /orgs/{org}/members", {
        org: Authentication.Organization
    });

    const People = await API.request("GET /orgs/{org}/people", {
        org: Authentication.Organization
    });

    People.data.forEach((User, _) => {
        Data.People.push({
            User
        });
    });

    Members.data.forEach((User, _) => {
        Data.Members.push({
            User
        });
    });

    Data.Total.People = Data.People.length;
    Data.Total.Members = Data.Members.length;

    (Data.People.Total !== 0 && Data.Members.Total !== 0) ? Data.Valid = true
        : Data.Valid = false;

    return Data;
};

export const Data = await Request();

export const Serial = JSON.stringify(await Request(), null, 4);

export default {
    Data, Serial
};