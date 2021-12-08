import Users from "./Users.js";
import Organization from "./Organization.js";

export { default as Users } from "./Users.js";
export { default as Organization } from "./Organization.js";

export const Module = {
    Users, Organization
};

export default JSON.stringify(Module, null, 4);