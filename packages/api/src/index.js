import Library from "./library/index.js";

export const Application = Library.API();

await import("./../.ci/settings.js");

import { default as Middleware } from "./middleware/index.js";

const Server = () => {
    Application.listen(process.env["Server"]["Port"], "localhost", async () => {
        await Middleware();

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
