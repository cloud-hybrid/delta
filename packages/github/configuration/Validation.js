import FS from "fs";
import Path from "path";
import Assertion from "assert";

export const URL = import.meta.url;

export const File = URL.replace("file" + ":" + "//", "");
export const Normalize = Path.normalize(File);
export const Directory = Path.dirname(Normalize);

export const Target = Path.join(Directory, "Settings.json");

export const validate = () => {
    try {
        Assertion.equal(FS.existsSync(Target), true, "Settings.json Not Found");
    } catch ( error ) {
        const $ = new Error("Settings.json Not Found");

        $.error = true;

        $.target = Target;
        $.namespace = File;
        $.module = import.meta.url;

        $.name = "Settings-File-Not-Found-Error";
        $.message = "Settings.json Not Found";

        const Throw = () => {
            throw $;
        };

        return (!$.error) ? true : Throw();
    }

    return true;
};

export default validate();