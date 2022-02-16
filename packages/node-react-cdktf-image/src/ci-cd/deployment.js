import Path from "path";
import Module from "module";
import Process from "process";
import Subprocess from "child_process";
class Deployment {
    constructor() {
        /*** *Current Module Path* */
        this.module = Path.dirname(import.meta.url.replace("file" + ":" + "//", ""));
        this.cwd = Path.dirname(this.module);
        this.directory = Path.dirname(this.cwd);
        this.require = Module.createRequire(this.directory);
    }
    dependencies() {
        Deployment.execute("npm install --save --quiet --user --save-dev --strict-peer-deps --no-audit --no-fund" + " " + this.cwd);
    }
    get() {
        const CWD = process.cwd();
        Process.chdir(this.cwd);
        Deployment.execute("npm run get");
        Process.chdir(CWD);
    }
    build() {
        const CWD = process.cwd();
        Process.chdir(Path.join(this.directory, "front-end"));
        Deployment.execute("npm install --no-audit --no-funding");
        Deployment.execute("npm run build");
        Process.chdir(this.cwd);
        Deployment.execute("npm run build");
        Process.chdir(CWD);
    }
    synth() {
        const CWD = process.cwd();
        Process.chdir(this.cwd);
        Deployment.execute("npm run synth");
        Process.chdir(CWD);
    }
    deploy() {
        Deployment.execute("cdktf deploy --auto-approve");
    }
    destroy() {
        Deployment.execute("cdktf destroy --auto-approve");
    }
}
/*** @param command {string} - Command as String for Shell Inherited Execution */
Deployment.execute = (command) => {
    Subprocess.execSync(command, {
        stdio: "inherit"
    });
};
export { Deployment };
export default Deployment;
//# sourceMappingURL=deployment.js.map