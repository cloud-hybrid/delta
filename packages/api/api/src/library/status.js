/***
 * **Usage & Example**
 * @example
 * >>> const Responses = await import("./src/library/status.js").then(($) => $.Status);
 *
 */

import * as Module from "module";

const URL = import.meta.url;

/***
 *
 * @type {NodeRequire} Require
 *
 */

const Import = Module.createRequire(URL);

/***
 * @type {{"100": string, "101": string, "102": string, "103": string, "200": string, "201": string, "202": string, "203": string, "204": string, "205": string, "206": string, "207": string, "208": string, "226": string, "300": string, "301": string, "302": string, "303": string, "304": string, "305": string, "307": string, "308": string, "400": string, "401": string, "402": string, "403": string, "404": string, "405": string, "406": string, "407": string, "408": string, "409": string, "410": string, "411": string, "412": string, "413": string, "414": string, "415": string, "416": string, "417": string, "418": string, "421": string, "422": string, "423": string, "424": string, "425": string, "426": string, "428": string, "429": string, "431": string, "451": string, "500": string, "501": string, "502": string, "503": string, "504": string, "505": string, "506": string, "507": string, "508": string, "509": string, "510": string, "511": string}}
 */

export const Status = Import("./status-code.json");

export default Status;