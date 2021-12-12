import FS from "fs";
import Path from "path";

/***
 * @param files
 * @return {boolean}
 * @example
 * >>> import Path from "path";
 * >>> import Requirements from "Requirements-Plugin.js"
 *
 * >>> if (
 * >>>      !Requirements.checkRequiredFiles([
 * >>>        path.resolve('public/index.html'),
 * >>>        path.resolve('src/index.js'),
 * >>>      ])
 * >>> ) {
 * >>>      process.exit(1);
 * >>> }
 *
 */

const checkRequiredFiles = (files) => {
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

export { checkRequiredFiles };

export default checkRequiredFiles;