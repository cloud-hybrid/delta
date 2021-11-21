import Library from "./library/index.js";

export const Application = Library.API();

console.debug("API Server" + ":", Application.settings);

await import("./../.ci/settings.js");

import { default as Middleware } from "./middleware/index.js";

const Server = () => {
    Application.listen(process.env["Server"]["Port"], "localhost", async () => {
        await Middleware();

        Application.set("env", process.env["Environment"]);

        console.debug("API Server" + ":", Application.settings);

        const Controller = (await import("./controllers/index.js")).default;

        Application.use("/api/v1", Controller);
    }).on("listening", async () => {
        console.log("");
        console.log("Server Successfully Started via Port" + " " + process.env["Server"]["Port"]);
        console.log("  - http://localhost" + ":" + process.env["Server"]["Port"] + "/api/v1");
        console.log("");
    });
};

export { Server };
