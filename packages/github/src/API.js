import { Octokit } from "@octokit/core";

import { Settings as Environment } from "./../configuration/index.js";

const Settings = Environment["GitHub"];

export const API = new Octokit({
    auth: Settings.Token
});

export const Token = Settings.Token;
export const Username = Settings.User;
export const Organization = Settings.Organization;

export const Configuration = {
    Organization: Settings.Organization,
    Token: Settings.Token,
    User: Settings.User
};

export default Configuration;