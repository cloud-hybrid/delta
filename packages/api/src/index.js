import Library from "./library/index.js";

export const Application = Library.API();

Application.set("env", process.env["Environment"]);

console.debug("[API] [Debug] Server Settings" + ":", JSON.stringify(Application.settings, null, 4));

import { default as Middleware } from "./middleware/index.js";

const Server = () => {
    Application.listen(process.env["Port"], "localhost", async () => {
        await Middleware();

        const Controller = (await import("./controllers/index.js")).default;

        Application.use("/v1", Controller);
    }).on("listening", async () => {
        console.debug("[API] [Debug] Server Successfully Started via Port" + " " + process.env["Port"]);
        console.log("[API] [Log] http://localhost" + ":" + process.env["Port"] + "/v1");
    });
};

export { Server };
