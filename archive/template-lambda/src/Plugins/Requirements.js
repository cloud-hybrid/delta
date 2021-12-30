import FS from "fs";
import Path from "path";

/***
 * @param files
 *
 * @return {boolean}
 *
 * @example
 *
 * >>> import Path from "path";
 * >>> import { default as Validate } from "Requirements-Plugin.js"
 * >>> if (!Validate([".env.json", "src/index.js"]) process.exit(1)
 *
 */

const Validate = (files) => {
    const Runtime = {
        CWD: null
    };

    try {
        files.forEach((filePath) => {
            Runtime.CWD = filePath;
            FS.accessSync(filePath, FS.constants.F_OK);
        });

        return true;
    } catch ( error ) {
        const Directory = Path.dirname(Runtime.CWD);
        const Target = Path.basename(Runtime.CWD);

        console.log("Error - Could not find a required file.");
        console.log("Name: " + Target);
        console.log("Search: " + Directory);

        return false;
    }
};

export { Validate };

export default Validate;