import { Configuration, Query } from "./request.js";

const Settings = Configuration("https://checkpoint-api.hashicorp.com/v1/check/terraform");

const Request = await Query(Settings);

const Data = await Request;

console.log(JSON.stringify(Data, null, 4));