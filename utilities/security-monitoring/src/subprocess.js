import Subprocess from "child_process";

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

export { Command };

export default Command;