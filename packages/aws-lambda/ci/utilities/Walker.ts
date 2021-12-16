/***
 * @name        Schema-Reset
 * @module      @cloud-technology
 * @summary     .....
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 *
 * @package     {@link https://github.com/cloud-hybrid/delta @cloud-technology}
 *
 * @example
 * >>> import { default as Walk } from "Walker.js";
 * >>> const Descriptors = Walk();
 * >>> console.log(Descriptors);
 * >>> process.exit(0);
 *
 */

import FS from "fs";
import Path from "path";
import Process from "process";


/***
 *
 * @param {FS.PathLike} directory
 * @return {Generator<string | Generator<any | string, void, any>, void, unknown>}
 * @constructor
 */

/// @ts-ignore
export function * Walk(directory: FS.PathLike) {
    const files = FS.readdirSync(directory, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            if (typeof directory === "string") {yield * Walk(Path.join(directory, file.name));}
        } else {
            if (typeof directory === "string") {yield Path.join(directory, file.name);}
        }
    }
}


/***
 *
 * @param {FS.PathLike} path
 *
 * @return {Generator<string, null, null>}
 *
 */

/// @ts-ignore
function * files(path: FS.PathLike) {
    if (!FS.lstatSync(path).isDirectory()) return null;

    const files = FS.readdirSync(path, { withFileTypes: true });

    for (const file of files) {
        //@ts-ignore
        yield Path.join(path, file.name);
    }
}

/***
 *
 * @param {FS.PathLike} path
 *
 * @return {Generator<string, null, null>}
 *
 */

/// @ts-ignore
function * directories(path: FS.PathLike) {
    if (!FS.lstatSync(path).isDirectory()) return null;

    const files = FS.readdirSync(path, { withFileTypes: true });

    for (const file of files) {
        //@ts-ignore
        (file.isDirectory()) ? yield Path.join(path, file.name) : null;
    }
}

/***
 *
 * @param {FS.PathLike} path
 * @return {any}
 * @constructor
 */
export const Files = (path: FS.PathLike) => {
    const $ = Object.create({
        container: null,
    });

    const Data = [];

    for (const $ of files(path)) {
        Data.push($);
    }

    $.container = Data;

    return $;
};

/***
 *
 * @param {FS.PathLike} path
 * @return {any}
 * @constructor
 */
export const Directories = (path: FS.PathLike) => {
    const $ = Object.create({
        container: null,
    });

    const Data = [];

    for (const $ of directories(path)) {
        Data.push($);
    }

    $.container = Data;

    return $;
};

/***
 *
 * @param {FS.PathLike} path
 * @return {any}
 * @constructor
 */

export const Packages = (path: FS.PathLike, data: Object | null = null) => {
    const $ = Object.create({
        container: data,
    });

    const Data = [];

    for (const $ of files(path)) {
        Data.push($);
    }

    for (const directory of directories(path)) {
        console.log(directory);
        const files = Files($);

        const iterations: string[] = [];
        files.container.forEach(($: string | FS.PathLike) => {
            iterations.push(String($).split(Path.sep).pop());
        });

        if ("package.json" in iterations) {
            Data.push(Packages(String(directory).valueOf(), $.container));
        }
    }

    $.container = Data;

    return $;
};