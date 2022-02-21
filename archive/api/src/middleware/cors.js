﻿/*** CORs */
/*** Default CORS Options
 * @type {{credentials: boolean, origin: string, optionsSuccessStatus: number, preflightContinue: boolean}}
 */
import CORs from "cors";
export const Options = {
    origin: "*",
    credentials: false,
    optionsSuccessStatus: 200,
    preflightContinue: true
};
/*** CORS Middleware Loader
 *
 * @param server {Application}
 *
 * @param options {Options}
 *
 * @return {Application}
 *
 * @constructor
 *
 */
export const CORS = (server) => {
    console.debug("[CORS] [Debug] Setting CORS Policy");
    const Middleware = CORs(Options);
    console.debug("[CORS] [Debug] Updated CORS Settings");
    server.use(Middleware);
    console.debug("[CORS] [Debug] CORS has been Updated & Enabled");
    return server;
};
export default CORS;