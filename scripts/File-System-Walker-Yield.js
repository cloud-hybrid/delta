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
 * @param directory {String}
 * @return {any}
 *
 */

export function * Walk(directory) {
    const files = FS.readdirSync(directory, {withFileTypes: true});
    for ( const file of files ) {
        if ( file.isDirectory() ) {
            yield * Walk(Path.join(directory, file.name));
        } else {
            yield Path.join(directory, file.name);
        }
    }
}

function * files(path) {
    if ( !FS.lstatSync(path).isDirectory() ) return null;

    const files = FS.readdirSync(path, {withFileTypes: true});

    for ( const file of files ) {
        (!file.isDirectory()) ? yield Path.join(path, file.name) : null;
    }
}

function * directories(path) {
    if ( !FS.lstatSync(path).isDirectory() ) return null;

    const files = FS.readdirSync(path, {withFileTypes: true});

    for ( const file of files ) {
        (file.isDirectory()) ? yield Path.join(path, file.name) : null;
    }
}

export const Files = (path) => {
    const $ = Object.create({
        container: null
    });

    const Data = [];

    for ( const $ of files(path) ) {
        Data.push($);
    }

    $.container = Data;

    return $;
};

export const Directories = (path) => {
    const $ = Object.create({
        container: null
    });

    const Data = [];

    for ( const $ of directories(path) ) {
        Data.push($);
    }

    $.container = Data;

    return $;
};

export default Walk;
