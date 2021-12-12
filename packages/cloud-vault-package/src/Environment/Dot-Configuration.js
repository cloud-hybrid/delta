/* @Source-Comment-Start */

/***
 * @Copyright Jacob B. Sanders
 */

/* @Source-Comment-Stop */

import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";

/***
 * Compatability Replacement for `URI` (Commonjs)
 *
 * @type {string}
 *
 * @constructor
 *
 * @example
 * >>> const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 */

const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");

/***
 * Compatability Replacement for `require` (Commonjs)
 *
 * @type {NodeRequire}
 *
 * @constructor
 *
 * @example
 * >>> const Import = Module.createRequire(URI());
 * >>> const Package = Import("package.json");
 *
 */

const Import = Module.createRequire(URI());

import { default as Paths } from "./File-System.js";

import { default as dotenv } from "dotenv";
import * as dotenvExpand from "dotenv-expand";

// Ensure Environment Variable(s) are Read
delete Import.cache[Import.resolve("./File-System.js")];

const NODE_ENV = Process.env.NODE_ENV;
//if ( !NODE_ENV ) {
//    throw new Error(
//        "The NODE_ENV environment variable is required but was not specified."
//    );
//}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use @Task Replace with local readme
const dotenvFiles = [
    `${ Paths.dotenv }.${ NODE_ENV }.local`,
    // Don't include `.env.local` for `test` environment
    // since normally you expect tests to produce the same
    // results for everyone
    NODE_ENV !== "test" && `${ Paths.dotenv }.local`,
    `${ Paths.dotenv }.${ NODE_ENV }`,
    Paths.dotenv
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.  Variable expansion is supported in .env files.
// https://github.com/motdotla/dotenv
// https://github.com/motdotla/dotenv-expand
dotenvFiles.forEach(dotenvFile => {
    if ( FS.existsSync(dotenvFile) ) {
        dotenvExpand(
            dotenv.config({
                path: dotenvFile
            })
        );
    }
});

const appDirectory = FS.realpathSync(Process.cwd());
Process.env.NODE_PATH = (Process.env.NODE_PATH || "")
    .split(Path.delimiter)
    .filter(folder => folder && !Path.isAbsolute(folder))
    .map(folder => Path.resolve(appDirectory, folder))
    .join(Path.delimiter);

// Grab NODE_ENV and Process.env["Environment-Variable-Pattern"]
// environment variables and prepare them to be
// injected into the application via DefinePlugin in webpack configuration.
const Pattern = (Process.env["Environment-Variable-Pattern"])
    ? new RegExp(Process.env["Environment-Variable-Pattern"])
    : new RegExp(/(.*)$/i);

function getClientEnvironment(publicUrl) {
    const raw = Object.keys(Process.env)
        .filter(key => Pattern.test(key))
        .reduce(
            (env, key) => {
                env[key] = Process.env[key];
                return env;
            },
            {
                // Useful Tertiary Flag(s)
                // Ex) (Process.env["NODE_ENV"] !== "production")   \
                //          && console.log(Secret)                  \
                //          || console.log("Redacted");
                NODE_ENV: Process.env.NODE_ENV || "development"
            }
        );
    // Stringify all values so we can feed into webpack DefinePlugin
    const stringified = {
        "Process.env": Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {})
    };

    return {raw, stringified};
}

export { getClientEnvironment };

export default getClientEnvironment;