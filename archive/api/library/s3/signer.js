import URI from "url";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Client } from "./client.js";
const Service = await new Client().instantiate();
class Signer {
    client = Service;
    expiration = 900;
    url;
    settings;
    /***
     * HTTPs Query Configuration Object
     *
     * @constructor
     *
     */
    configuration() {
        const $ = new URI.URL(String(this.url));
        $.rejectUnauthorized = false;
        return $;
    }
    ;
    async generate(command) {
        this.url = await getSignedUrl(this.client, command, {
            expiresIn: this.expiration
        });
        this.settings = this.configuration();
    }
    constructor(expiration = 900) {
        this.expiration = expiration;
    }
}
export { Signer };
export default Signer;
