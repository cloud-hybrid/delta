import FS from "fs-extra";
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
 * >>> const Import = Module.createImport(URI());
 * >>> const Package = Import("package.json");
 *
 */

const Import = Module.createRequire(URI());

Process.env.BABEL_ENV = "production";
Process.env.NODE_ENV = "production";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
Process.on("unhandledRejection", (error) => {
    console.trace(error);

    throw error;
});

// Ensure environment variables are read.
Import("./src/Environment/Dot-Configuration.js");

import { default as Paths } from "./src/Environment/File-System.js";
import * as Environment from "./src/Environment/Dot-Configuration.js";

//const bfj = Import("bfj");
const webpack = Import("webpack");
const configFactory = Import("../config/webpack.config");
const checkRequiredFiles = Import("react-dev-utils/checkRequiredFiles");
const formatWebpackMessages = Import("react-dev-utils/formatWebpackMessages");

const isInteractive = Process.stdout.isTTY;

// Warn and crash if required files are missing
if ( !checkRequiredFiles([Paths.appIndexJs]) ) {
    Process.exit(1);
}

//const argv = Process.argv.slice(2);
//const writeStatsJson = argv.indexOf("--stats") !== -1;

// Generate configuration
const config = configFactory("production");

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
    console.log("Creating an optimized production build...");

    const compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            let messages;
            if ( err ) {
                if ( !err.message ) {
                    return reject(err);
                }

                let errMessage = err.message;

                // Add additional information for postcss errors
                if ( Object.prototype.hasOwnProperty.call(err, "postcssNode") ) {
                    errMessage +=
                        "\nCompileError: Begins at CSS selector " +
                        err["postcssNode"].selector;
                }

                messages = formatWebpackMessages({
                    errors: [errMessage],
                    warnings: []
                });
            } else {
                messages = formatWebpackMessages(
                    stats.toJson({all: false, warnings: true, errors: true})
                );
            }
            if ( messages.errors.length ) {
                // Only keep the first error. Others are often indicative
                // of the same problem, but confuse the reader with noise.
                if ( messages.errors.length > 1 ) {
                    messages.errors.length = 1;
                }
                return reject(new Error(messages.errors.join("\n\n")));
            }
            if (
                Process.env.CI &&
                (typeof Process.env.CI !== "string" ||
                    Process.env.CI.toLowerCase() !== "false") &&
                messages.warnings.length
            ) {
                // Ignore sourcemap warnings in CI builds. See #8227 for more info.
                const filteredWarnings = messages.warnings.filter(
                    w => !/Failed to parse source map/.test(w)
                );
                if ( filteredWarnings.length ) {
                    console.log("\nTreating warnings as errors because Process.env.CI = true.\n" +
                        "Most CI servers set it automatically.\n");
                    return reject(new Error(filteredWarnings.join("\n\n")));
                }
            }

            const resolveArgs = {
                stats,
                previousFileSizes,
                warnings: messages.warnings
            };

            return resolve(resolveArgs);
        });
    });
}