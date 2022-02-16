#!/usr/bin/env node

const Utility = require("util");

const { MongoClient: Client } = require("mongodb");

const Path = require("path");
const Subprocess = require("child_process");

const Environment = require("dotenv");

Environment.config({
    path: Path.join(process.cwd(), ".env"),
    encoding: "UTF-8",
    override: true,
    debug: true
});

console.debug("[Debug] Environment Configuration" + ":", Environment.config()?.parsed, "\n");

const URI = ["mongodb", "://", process.env["LOCAL"], ":", process.env["BASTION_PORT"]].join("");

const Tunnel = [process.env["LOCAL"], ":", process.env["BASTION_PORT"], ":", process.env["DOCUMENTDB_HOSTNAME"], ":", process.env["DOCUMENTDB_PORT"]].join("");

const Bastion = process.env["BASTION_HOSTNAME"];
const User = process.env["BASTION_USERNAME"];
const Key = process.env["BASTION_SSH_KEY"];

console.log("[Log] Initializing Proxy ... ");

const Test = async () => {
    const client = new Client(URI, {
        auth: {
            username: process.env["DOCUMENTDB_USERNAME"],
            password: process.env["DOCUMENTDB_PASSWORD"]
        }, directConnection: true,
        tls: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tlsAllowInvalidHostnames: true,
        tlsAllowInvalidCertificates: true,
        monitorCommands: true,
        loggerLevel: "debug"
    });

    try {
        await client.connect();

        const query = async () => await client.db().admin().listDatabases();

        const data = await query();

        console.info("[Informational]", Utility.inspect(data, { showHidden: true, sorted: true, colors: true }));
    } catch (error) {
        console.error("[Error]", error);
    } finally {
        await client.close();
    }
}

const Main = () => {
    const options = ["-L", Tunnel, [User, "@", Bastion].join(""), "-i", Key, "-N"];
    const Process = Subprocess.spawn("ssh", options, { shell: true, stdio: "inherit" });

    Process.on("spawn", () => {
        setTimeout(() => {
            setTimeout(() => {
                console.log("Successfully Spawned SSH Process");
                console.log("   - A Connection to the Bastion has been Established");
                console.log("   - However, a VPN Still Might be Required");
                console.log("     For Database Connectivity");
                console.log("");
            }, 1500);
        }, 1500);
        setTimeout(() => {
            Process.emit("close");
        }, 3.6e+6); // One Hour

        Process.on("close", () => {
            process.exit(0);
        });
    });

    setTimeout(async () => {
        process.stdout.write("\n");

        Subprocess.execSync("lsof -i:27017", { stdio: "inherit" });

        process.stdout.write("\n");

        await Test().catch(console.error);
    }, 2500);
};

Main();
