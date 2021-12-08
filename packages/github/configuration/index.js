await import("./Validation.js");

import * as Module from "module";

export const Import = Module.createRequire(import.meta.url);

/***
 *
 * @type {{CI: boolean, Environment: string, GitHub: {API: string, User: string, Token: string, Organization: string}}}
 *
 */

export const Settings = Import("./settings.json");

export default {
    Settings, Import
};
