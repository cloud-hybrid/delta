import FS from "fs";
import Path from "path";
import Process from "process";

/// import HTTP from "http";
import HTTPs from "https";

/// import { Initializer as Error } from "./src/utilities/error.js";

const CWD = Process.cwd();

/***  @type {Number} - Primary Server Listening Port, Configured in `package.json` */
const Port = Process.env["npm_package_config_port"];

import { Application } from "./src/index.js";

console.debug("[Main] [Debug] Loading CI Setting(s) ...");
await import("./.ci/settings.js").finally(() => {
    console.debug("[Main] [Log]", "Instantiated Package Metadata");
});

console.debug("[Main] [Debug] Loading Environment Variable(s) ...");
await import("./src/library/Environment.js")
    .then((Module) => {
        console.debug("[Main] [Debug]", "Imported Packaged Configuration Loader");

        Module.Inject();
    })
    .finally(() => {
        console.log("[Main] [Log] Injected Runtime Process");
    });

console.debug("[Main] [Debug] Importing API Server ...");
import("./src/index.js")
    .then(async ($) => {
        console.debug("[Main] [Debug] Package has been Imported");

        await import("./src/middleware/index.js").then(
            async ($) => await $.initialize()
        );

        /*** @type {Router} */
        const Controller = await import("./src/controllers/index.js").then(
            ($) => $.Router
        );

        Application.use("/v1", Controller);

        /*** @type {{PFX: Buffer, Key: Buffer, Certificate: Buffer}} */
        const Content = {
            Key: FS.readFileSync(Path.join(CWD, Process.env["TLS"]["Key"])),
            PFX: FS.readFileSync(Path.join(CWD, Process.env["TLS"]["PFX"])),
            Certificate: FS.readFileSync(
                Path.join(CWD, Process.env["TLS"]["Certificate"])
            )
        };

        /*** @type {{pfx: Buffer, passphrase: *, cert: Buffer, key: Buffer}} */
        const options = {
            passphrase: Process.env["TLS"]["Passphrase"],

            key: Content.Key,
            pfx: Content.PFX,
            cert: Content.Certificate
        };

        /// HTTP.createServer(Application).listen(3080);
        const Server = HTTPs.createServer(options, Application).listen(Port);

        /// const Socket = await import("./src/library/socket.js");

        /// Socket.Link(Server);
    }).finally(() => {
    console.debug("[Main] [Debug]", "Starting API Server ...");
    console.log("[Main] [Log]", "Listening @" + " " + [ "https", "://", "localhost", ":", Port, "/v1" ].join(""));
});
