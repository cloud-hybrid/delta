/***
 * @module Logging
 */
import { Logger } from "@cloud/logging";
const Logging = (server) => {
    console.debug("[Logging] [Debug] Instantiating HTTP Logger");
    server.use(Logger);
    console.debug("[Logging] [Debug] Enabled Custom HTTP Logging");
};
export default Logging;
export { Logging };
