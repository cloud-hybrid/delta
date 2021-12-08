import { API, Organization } from "./API.js";

const Request = async () => {
    return await API.request("GET /orgs/{org}", {
        org: Organization
    }).then(($) => $["data"]);
};

export const Data = await Request();

export const Serial = JSON.stringify(Data, null, 4);

export default Data;