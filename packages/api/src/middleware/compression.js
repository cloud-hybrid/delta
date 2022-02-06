/*** Compression
 * @module Compression
 *
 * @typedef {import("./../index.js").Application} Application
 *
 */
import { Compression } from "@cloud/library";
/*** Compression Middleware Loader
 *
 * @param server {Application}
 *
 * @returns {Application}
 *
 * @constructor
 *
 */
export const Compress = (server) => {
    console.debug("[Compression] [Debug] Setting Compression Configuration(s)");
    server.use(Compression());
    console.debug("[Compression] [Debug] Compression has been Enabled");
    return server;
};
