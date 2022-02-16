import FS from "fs";
import Assert from "assert";
import Process from "process";
import { Pipe } from "./pipe.js";
/***
 * Porcelain is a abstraction around `git`'s `git-status` command
 *
 * The class's primary use-case includes validating an entire
 * repository's status - assigning a `dirty` property if
 * any uncommitted, unsaved modifications are found.
 *
 * Other modules can compose the `Porcelain` class to determine whether
 * file-system modifications should be made the repository, or any of its
 * descendents.
 *
 * @example
 * console.log(new Porcelain());
 *
 * @example
 * console.log(new Porcelain("~/home/development/git-repository"));
 *
 * @see {@link https://git-scm.com/docs/git-status|Official Documentation Page(s)}
 *
 */
class Porcelain {
    constructor(repository = Process.cwd()) {
        var _a, _b;
        /***
         * Git Repository Status
         *
         * Returns the targeted change(s) for a given repository target (`directory`),
         * with an additional boolean (`Dirty`) that establishes if uncommitted changes
         * are present.
         *
         */
        this.status = () => {
            Assert.equal(FS.existsSync(String(this.repository)), true, "File Descriptor" + " " + String(this.repository) + " " + "Doesn't Exist");
            const transformations = Porcelain.transform(this.spawn().output);
            this.dirty = (transformations.total > 0 || transformations.modified);
            this.output = transformations;
        };
        this.abi = (_a = Porcelain.command[0]) !== null && _a !== void 0 ? _a : "git";
        this.arguments = (_b = Porcelain.command[1]) !== null && _b !== void 0 ? _b : ["status", "--porcelain"];
        this.repository = repository;
        this.status();
    }
    /***
     * A function compositional around the `Pipe` class constructor
     * - Reference below for additional details
     *
     * @implements {Pipe}
     *
     * @see {@link Pipe|Subprocess Class - Pipe}
     * @see {@link Stream|Pipe Output - Stream}
     *
     * @returns {Stream}
     *
     * @private
     *
     */
    spawn() {
        return Pipe.run(this.abi, this.arguments);
    }
}
Porcelain.command = ["git", ["status", "--porcelain"]];
/***
 * A `git-status` command will return the current state of the process's
 * current-working directory, if applicable. Please refer to the following
 * mapping for the status character to its respective description:
 *
 * - ' ' = unmodified
 * - M = modified
 * - T = file type changed (regular file, symbolic link or submodule)
 * - A = added
 * - D = deleted
 * - R = renamed
 * - C = copied (if config option status.renames is set to "copies")
 * - U = updated but unmerged
 *
 * Non-important statuses are disregarded.
 *
 * @see {@link https://git-scm.com/docs/git-status|Official Documentation Page(s)}
 *
 * @param {string[]} input - Subprocess Return Stream Type
 *
 * @returns {Mutations}
 *
 * @constructor
 *
 */
Porcelain.transform = (input) => {
    const Output = {
        stream: input,
        modified: false,
        total: 0,
        mutations: [{
                target: "",
                modify: false,
                add: false,
                delete: false,
                rename: false,
                updated: false,
                copied: false
            }]
    };
    input.forEach(($) => {
        var _a;
        const Split = String($).trim().normalize().split(" ");
        const Enumeration = Split[0].trim();
        const Modifications = {
            modify: (Enumeration.search(RegExp("M", "i")) !== -1),
            add: (Enumeration.search(RegExp("A", "i")) !== -1),
            delete: (Enumeration.search(RegExp("R", "i")) !== -1),
            rename: (Enumeration.search("R") !== -1),
            updated: (Enumeration.search("U") !== -1),
            copied: (Enumeration.search("C") !== -1),
            target: (_a = Split[1]) !== null && _a !== void 0 ? _a : null
        };
        if (Modifications.modify)
            Output.modified = true;
        Output.mutations.push({
            ...Modifications
        });
    });
    Output.total = Output.mutations.length;
    return Output;
};
export var State;
(function (State) {
    State["M"] = "M";
    State["T"] = "T";
    State["A"] = "A";
    State["D"] = "D";
    State["R"] = "R";
    State["C"] = "C";
    State["U"] = "U";
})(State || (State = {}));
export var IO;
(function (IO) {
    IO["PIPE"] = "pipe";
    IO["NULL"] = "ignore";
    IO["DEFAULT"] = "inherit";
})(IO || (IO = {}));
export { Porcelain };
export default Porcelain;
//# sourceMappingURL=porcelain.js.map