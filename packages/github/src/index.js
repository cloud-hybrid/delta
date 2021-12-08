import Users from "./Users.js";
import Organization from "./Organization.js";

import { Settings } from "./../configuration/index.js";

export { default as Users } from "./Users.js";
export { default as Organization } from "./Organization.js";

export const Module = {
    Users, Organization, Settings
};

export default JSON.stringify(Module, null, 4);

delete Settings["GitHub"].Token;