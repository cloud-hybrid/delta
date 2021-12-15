/***
 * @name        Secrets-Manager Utility
 * @package     @cloud-technology
 * @summary     ESM Secrets-Manager Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import * as FS from "fs";

import { Configuration } from "./../index.js";

const Organization = Configuration["Organization"];

const Client = await import("@aws-sdk/client-secrets-manager");

const Service = new Client.SecretsManager({
    region: "us-east-2"
});

const Name = [Organization, "/Global/Development/EC2/Instance/SSH/Private-Key"].join();

const Secret = await Service.getSecretValue({SecretId: Name});

const Data = {
    ARN: Secret.ARN,
    Name: Secret.Name,
    Creation: Secret.CreatedDate,
    Binary: Secret.SecretBinary,
    Secret: Secret.SecretString,
    Version: Secret.VersionId,
    Stage: Secret.VersionStages
};

FS.writeFileSync("SSH-Key", Data.Secret);
