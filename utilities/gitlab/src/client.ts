import { Client } from "@cloud-technology/secrets-manager-client";

const service = await Client.initialize();

const secret = await service.get("Capstone/Global/GitLab/Pipelines/API-Token");

console.log(secret);