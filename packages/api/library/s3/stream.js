import FS from "fs";
import http from "http";
import https from "https";
import * as Assert from "assert";
import { Signer } from "./signer.js";
class Stream extends Signer {
    static stream = ($) => FS.createWriteStream(String($));
    constructor(expiration = 300) {
        super(expiration);
    }
    async download(local) {
        const method = "GET";
        const protocol = !this?.url?.charAt(4)
            .localeCompare("s") ? https : http;
        const file = Stream.stream(local);
        const data = { response: null, request: null, total: 0 };
        Assert.notEqual(this.settings, undefined);
        const $ = new Promise((resolve, reject) => {
            const request = protocol.get(this.settings, response => {
                if (response.statusCode !== 200) {
                    reject(new Error(JSON.stringify({
                        error: true,
                        settings: this.settings,
                        status: response.statusMessage,
                        code: response.statusCode
                    }, null, 4)));
                    return;
                }
                data.request = this.settings;
                data.response = {
                    method: method,
                    headers: response.headers,
                    http: response.httpVersion,
                    status: {
                        code: response.statusCode,
                        message: response.statusMessage
                    }
                };
                response.pipe(file);
            });
            file.on("finish", () => {
                resolve(data);
            });
            request.on("error", (error) => {
                FS.unlink(local, () => reject(error));
            });
            request.on("response", ($) => {
                data.total = Number.parseInt($.headers["content-length"], 10);
            });
            file.on("error", (error) => {
                FS.unlink(local, () => reject(error));
            });
            request.end();
        });
        return data;
    }
}
export { Stream };
export default Stream;
