import FS from "fs";
import Path from "path";
import * as URI from "url";

import { default as Status } from "./Status.js";

const File = URI.fileURLToPath(import.meta.url);
const Directory = Path.dirname(import.meta.url);
const Folder = Path.normalize(Directory)
    .replace("file" + ":", "");

const Contents = FS.readdirSync(Folder);

const Module = {
    Import: File,
    Path: {
        File, Directory, Folder
    },
    Exports: Contents
};

const Composition = {
    Module, Status
};

export { Composition };
export default Composition;

export { Status, Module };