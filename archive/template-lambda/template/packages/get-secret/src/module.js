const { SecretsManager } = require("@aws-sdk/client-secrets-manager");

const Service = new SecretsManager({
    apiVersion: "latest"
});

const Response = (body, status = 200, headers = {}) => {
    return {
        statusCode: status, body, headers: {
            ... {
                "Server": "X-Secrets-Service",
                "Content-Type": "Application/JSON"
            }, ... headers
        }
    }
};

const Schema = (Properties) => {
    const Tags = Properties.Tags?.filter(($) => !(String($.Key).includes("aws")));

    return {
        "Name": Properties?.Name,
        "Description": Properties?.Description,
        "Creation-Date": Properties?.CreatedDate,
        "Modification-Date": Properties?.LastChangedDate,
        "Access-Date": Properties?.LastAccessedDate,
        "Tags": Tags || Properties?.Tags
    };
};

module.exports = {
    Service, Response, Schema
};
