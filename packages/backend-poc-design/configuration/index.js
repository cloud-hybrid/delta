const FS = require("fs");
const Path = require("path");
const Environment = require("dotenv");

process.env["ENVIRONMENT"] = (process.env?.NODE_ENV)
    ? process.env["NODE_ENV"]
    : "development";

const Debug = (process.env["ENVIRONMENT"] !== "production");

const CWD = module.path || __dirname;

const Local = FS.existsSync(Path.join(process.cwd(), ".env"));

/***
 * Dot-ENV Settings
 * ---
 *
 * @type {import("dotenv") | import("dotenv").DotenvParseOutput}
 */

const Settings = Environment.config({
    debug: Debug,
    encoding: "utf-8",
    path: (Local)
        ? Path.join(process.cwd(), ".env")
        : Path.join(CWD, ".env")
});

(Settings.error) && console.error("[Configuration][Error][Global]", "Dot-ENV Parsing Error", Settings.error);
(Settings.error) || (Debug)
    ? console.debug("[Configuration][Debug][Global]" + "\t", Settings.parsed)
    : console.log("[Configuration][Log][Global]" + "\t", "Successfully Loaded Configuration");

exports = Settings;
module.exports = Settings;