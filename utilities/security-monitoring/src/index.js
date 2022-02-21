import OS from "os";
import FS from "fs";
import Path from "path";

import { Command } from "./subprocess.js";
import { Regions } from "./data.js";
import { Export } from "./state.js";

const directory = process.cwd();

console.debug("\n", "[Debug] Target Region(s)" + ":", Regions, "\n");
console.log("Iterating Region(s) w/Terraform Deployable(s) ...", "\n");

(FS.existsSync(Path.join(directory, "terraform.tfstate.d"))) || Regions.forEach(($) => {
    console.debug("[Debug] Establishing Workspace for Region" + ":", $, "...", "\n");
    const Workspace = Command("terraform workspace" + " " + "new" + " " + $);
    console.log(Workspace);
});

Regions.forEach(($) => {
    Command("terraform workspace select" + " " + $);
    console.debug("[Debug] Workspace" + ": " + $, "\n");

    const State = Command("terraform show");
    if (State.includes("No state")) {
        console.log("No State Established for Current Workspace ...", "\n");

        const Initialization = Command("terraform init");

        console.debug("[Debug] Initialization" + ":", Initialization, "\n");
    }

    console.log("Creating TF-Variables (.tfvars.json) File ...", "\n");
    FS.writeFileSync(".tfvars.json", JSON.stringify({region: $}, null, 4));
    console.debug("[Debug]", "Contents" + ":", JSON.parse(FS.readFileSync(".tfvars.json", {encoding: "utf-8"})), "\n");

    try {
        console.log("Establishing Terraform Plan ...", "\n");

        const Plan = Command("terraform plan --parallelism 25 --var-file .tfvars.json" + " " + "--out" + " " + [$, "target-state", "binary"].join("."));
        console.log(Plan, "\n");

        const Deploy = Command("terraform apply" + " " + [$, "target-state", "binary"].join("."));
        console.log(Deploy);

        console.debug("[Debug]", "Successfully Validated Region", '"' + $ + '"', "\n");

        console.log("Refreshing State ...", "\n");
        const Refresh = Command("terraform apply --auto-approve --refresh-only --var-file .tfvars.json");
        console.log(Refresh);

        console.debug("[Debug] Generating Stateful Output ...", "\n");

        const Output = Export();

        FS.writeFileSync([$, "state", "json"].join("."), Output);

        console.debug("[Trace] State Data" + ":", Output, "\n");

        console.log("Complete ...", "\n");
    } catch (error) {
        try {
            Command("terraform destroy --auto-approve --var-file .tfvars.json");
        } finally {
            console.error(error, "\n");

            /*** @see {@link https://man7.org/linux/man-pages/man7/signal.7.htm|Signal Standards & Reference} */
            process.exit(OS.constants.errno.EFAULT);
        }
    }
});