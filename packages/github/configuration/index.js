import * as Module from "module";

export const Import = Module.createRequire(import.meta.url);

export const Settings = Import("./settings.json");

export default Settings;
