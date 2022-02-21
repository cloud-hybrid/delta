import FS from "fs";
import Path from "path";
import Subprocess from "child_process";

import { Regions } from "./data.js";

const Directory = Path.dirname(Path.resolve(import.meta.url.replace("file" + "://", "")));

const Command = (command, region = "us-east-1") => {
    return Subprocess.execSync(command, {
        stdio: "pipe",
        env: {
            ...process.env, ...{
                AWS_DEFAULT_REGION: region
            }
        },
        cwd: process.cwd()
    }).toString("utf-8").trim();
};

console.debug("[Debug] Target Region(s)" + ":", Regions, "\n");
console.log("Iterating Region(s) w/Terraform Destroyable(s) ...", "\n");

const Destroy = () => {
    Regions.forEach(($) => {
        Command("terraform workspace select" + " " + $);
        console.debug("[Debug] Workspace" + ": " + $, "\n");

        console.log("Creating TF-Variables (.tfvars.json) File ...", "\n");
        FS.writeFileSync(".tfvars.json", JSON.stringify({region: $}, null, 4));
        console.debug("[Debug]", "Contents" + ":", JSON.parse(FS.readFileSync(".tfvars.json", {encoding: "utf-8"})), "\n");

        Command("terraform workspace" + " " + $);
        const Output = Command("terraform destroy --auto-approve --var-file .tfvars.json", $);

        console.log(Output);
    });

    process.exit(0);
}

Destroy();

Upgrade();
