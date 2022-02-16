const FS = require("fs");
const Utility = require("util");
const Path = require("path");
const Subprocess = require("child_process");

const Copy = require("./copy");

const Remove = Utility.promisify(FS.rm);

const Input = {
    Parameters: {
        Hostname: process.env["HOSTNAME"],
        Port: process.env["PORT"],
        Username: process.env["USERNAME"],
        Password: process.env["PASSWORD"],
        Secret: process.env["SECRET"],
        Database: process.env["DB"]
    }
};

const Parameters = [];
Object.keys(Input.Parameters).forEach(($) => {
    Parameters.push($ + "=" + "'" + Input.Parameters[$] + "'");
});

const Overrides = "\"" + Parameters.join(" ") + "\"";

const Main = async () => {
    await Remove(Path.join(__dirname, "..", "layer", "nodejs", "node_modules"), { force: true, recursive: true, maxRetries: 5 });

    FS.mkdirSync(Path.join(__dirname, "..", "layer", "nodejs"), { recursive: true });

    await Remove(Path.join(__dirname, "..", "node_modules"), { recursive: true, force: true });

    Subprocess.execSync(["npm", "install", "--production", "--omit-dev", "--omit-optional", "--no-funding", "--omit-peer"].join(" "), { stdio: "inherit", shell: false });

    Copy(Path.join(__dirname, "..", "node_modules"), Path.join(__dirname, "..", "layer", "nodejs", "node_modules"));

    await Remove(Path.join(__dirname, "..", "node_modules"), { force: true, recursive: true, maxRetries: 5 });

    Subprocess.execSync(["sam", "build", "--debug", "--config-file", Path.join(__dirname, "..", "configuration", "samconfig.toml"), "--template", Path.join(__dirname, "..", "configuration", "template.yaml")].join(" "), { stdio: "inherit", shell: false });

    Subprocess.execSync(["sam", "package", "--debug", "--output-template-file", Path.join(__dirname, "..", "template.stack.yaml"), "--template-file", Path.join(__dirname, "..", "configuration", "template.yaml"), "--config-file", Path.join(__dirname, "..", "configuration", "samconfig.toml"), "--s3-prefix", "sam-local-deployments", "--resolve-s3"].join(" "), { stdio: "inherit", shell: false });

    Subprocess.spawnSync(["sam", "deploy", "--debug", "--template-file", Path.join(__dirname, "..", "template.stack.yaml"), "--config-file", Path.join(__dirname, "..", "configuration", "samconfig.toml"), "--parameter-overrides", Overrides].join(" "), { stdio: "inherit", shell: true });
};

Main().catch(console.warn);