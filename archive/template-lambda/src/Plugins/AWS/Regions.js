import TTY from "tty";
import Subprocess from "child_process";

const Defaults = {
    profile: "default", debug: true, verbose: false
};

const API = async (profile = "default", debug = true, verbose = false) => {
    const Awaitable = new Promise((resolve, reject) => {
        try {
            const $ = [
                "aws", "ec2", "describe-regions", "--profile", profile, "--output", "json"
            ];

            (verbose) && $.push(... ["--debug"]);

            const CLI = $.join(" ");

            (debug) && console.debug("[Debug] Running AWS-CLI Command" + ":", CLI);

            resolve(Subprocess.execSync(CLI, {stdio: "pipe", shell: null}));
        } catch ( error ) {
            reject(error);
        }
    });

    try {
        const Output = String(await Awaitable);
        const Data = {
            Object: [... JSON.parse(Output)["Regions"]].map(($) => $["RegionName"]),
            JSON: () => JSON.stringify(Data.Object, null, 4)
        };

        return Data;
    } catch ( error ) {
        throw error;
    }
};

const Data = async (profile, debug, verbose = {... Defaults}) => await API(profile, debug, verbose);
const Regions = async (profile) => (await API(profile, false, false)).Object || null;

export { Data, Regions };

export default Regions;

(TTY.isatty(process.stdout.fd) && process.env["npm_command"] === undefined)
    ? console.debug(JSON.stringify(await Regions(), null, 4))
    : null;