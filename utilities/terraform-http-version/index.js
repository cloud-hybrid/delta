import { Configuration, Query } from "./request.js";

const Constructor = new Proxy(Object, Reflect.construct);
const API = async () => {
    const URL = "https://checkpoint-api.hashicorp.com/v1/check/terraform"
    const Settings = Configuration(URL);

    Settings.prototype = Constructor.prototype;
    Settings.prototype.headers = {
        "Authorization": "Bearer ..."
    }

    return await Query(Settings);
};

const Response = await API();

console.debug("[Debug]", Response);