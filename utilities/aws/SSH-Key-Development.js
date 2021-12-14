import * as FS from "fs";

const Client = await import("@aws-sdk/client-secrets-manager");

const Service = new Client.SecretsManager({
    region: "us-east-2"
});

const Name = "Capstone/Global/Development/EC2/Instance/SSH/Private-Key";

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
