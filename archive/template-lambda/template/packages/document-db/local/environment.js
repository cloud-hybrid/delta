const Environment = require("dotenv");
const Path = require("path");

Environment.config({
    path: Path.join(process.cwd(), ".env"),
    encoding: "UTF-8",
    override: true,
    debug: true
});
