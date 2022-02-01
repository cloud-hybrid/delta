import { Credential } from "./credential.js";

import { AWS, Secret, Types } from "./types.js";

/***
 * AWS Secrets Manager Client - Augmented Credential Provider
 * ---
 *
 * Creates a credential provider function that reads from a shared credentials file at ~/.aws/credentials and a shared
 * configuration file at ~/.aws/config.
 *
 * Both files are expected to be INI formatted with section names corresponding to
 * profiles.
 *
 * Sections in the credentials file are treated as profile names, whereas profile sections in the config file
 * must have the format of `[profile profile-name]`, except for the default profile.
 *
 * @example
 * import { Client } from "client";
 * const service = await Client.initialize();
 * const secret = await service.get("Organization/Environment/Application/Resource/Identifier");
 *
 */

class Client extends Credential {
    commands = {
        get: AWS.Get
    };

    public constructor(profile: string = "default") {
        super( profile );
    }

    /***
     * Retrieve JSON-Serialized (or String) Secret
     *
     * @param {string} name - Secret Resource's Name
     *
     * @returns {Promise<JSON | String>}
     */
    public async get(name: string): Promise<JSON|String> {
        await this.hydrate();

        const input: Types["Get"] = {
            SecretId: name
        };

        const command = await new AWS.Get( input );
        const response = await this.service?.send( command );
        const secret = new Secret(response);

        return secret.serialize();
    }

    public static async initialize (profile: string = "default") {
        const instance = new Client(profile);
        await instance.hydrate();

        instance.service = new AWS.Client({
            tls: true,
            apiVersion: "2017-10-17",
            customUserAgent: "Cloud-Technology-API",
            runtime: "node"
        });

        return instance;
    }
}

export { Client };

export default Client;
