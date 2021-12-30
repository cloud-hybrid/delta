import Library from "./library/index.js";

export const Application = Library.API();

Application.set("env", process.env["Environment"]);

console.debug("[API] [Debug] Server Settings" + ":", JSON.stringify(Application.settings, null, 4));

/*** @type {Application} */
const Server = () => Application;

export { Server };

export default Server;
