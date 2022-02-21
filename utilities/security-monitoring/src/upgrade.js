import FS from "fs";
import Path from "path";
import Subprocess from "child_process";

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

const Regions = JSON.parse(Command("aws ec2 describe-regions --all-region --query '*[].RegionName'"));

console.debug("[Debug] Target Region(s)" + ":", Regions, "\n");
console.log("Iterating Region(s) w/Terraform Deployable(s) ...", "\n");

const Upgrade = () => {
    Regions.forEach(($) => {
        Command("terraform workspace" + " " + $);
        const Output = Command("terraform init --upgrade", $);

        console.log(Output);
    });

    process.exit();
}

Upgrade();
