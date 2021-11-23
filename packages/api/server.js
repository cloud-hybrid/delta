import FS from "fs";
import Path from "path";
import Process from "process";

import HTTP from "http";
import HTTPs from "https";

const CWD = Process.cwd();

import { Application } from "./src/index.js";

console.debug("[Main] [Debug] Loading CI Setting(s) ...");
await import("./.ci/settings.js").finally(() => {
    console.debug("[Main] [Log]", "Instantiated Package Metadata");
});

console.debug("[Main] [Debug] Loading Environment Variable(s) ...");
await import("./src/library/Environment.js").then((Module) => {
    console.debug("[Main] [Debug]", "Imported Packaged Configuration Loader");

    Module.Inject();
}).finally(() => {
    console.log("[Main] [Log] Injected Runtime Process");
});

console.debug("[Main] [Debug] Importing API Server ...");
import("./src/index.js").then(async ($) => {
    console.debug("[Main] [Debug] Package has been Imported");

    await import("./src/middleware/index.js").then(
        async ($) => await $.initialize()
    );

    const Controller = await import("./src/controllers/index.js").then(($) => $.Router);

    Application.use("/v1", Controller);

    const Content = {
        Key: FS.readFileSync(Path.join(CWD, Process.env["TLS"]["Key"])),
        PFX: FS.readFileSync(Path.join(CWD, Process.env["TLS"]["PFX"])),
        Certificate: FS.readFileSync(Path.join(CWD, Process.env["TLS"]["Certificate"]))
    };

    const options = {
        passphrase: Process.env["TLS"]["Passphrase"],

        key: Content.Key,
        pfx: Content.PFX,
        cert: Content.Certificate
    };

    HTTP.createServer(Application).listen(3080);
    HTTPs.createServer(options, Application).listen(3443);

}).finally(() => {
    console.debug("[Main] [Log]", "Starting API Server ...");
});