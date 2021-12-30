"use strict";

import FS from "fs";
import Path from "path";
import Module from "module";
import Process from "process";

import { default as Paths } from "./File-System.js";

import * as Resolve from "resolve";

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

/**
 * Get additional module paths based on the baseUrl of a compilerOptions object.
 *
 * @param {Object} options
 */
function getAdditionalModulePaths(options = {}) {
    const baseUrl = options.baseUrl;

    if ( !baseUrl ) {
        return "";
    }

    const baseUrlResolved = Path.resolve(Paths.appPath, baseUrl);

    if ( Path.relative(Paths.appNodeModules, baseUrlResolved) === "" ) {
        return null;
    }

    if ( Path.relative(Paths.appSrc, baseUrlResolved) === "" ) {
        return [Paths.appSrc];
    }

    if ( Path.relative(Paths.appPath, baseUrlResolved) === "" ) {
        return null;
    }

    throw new Error("Your project's `baseUrl` can only be set to `src` or `node_modules`.");
}

/**
 * Get webpack aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getWebpackAliases(options = {}) {
    const baseUrl = options.baseUrl;

    if ( !baseUrl ) {
        return {};
    }

    const baseUrlResolved = Path.resolve(Paths.appPath, baseUrl);

    if ( Path.relative(Paths.appPath, baseUrlResolved) === "" ) {
        return {
            src: Paths.appSrc
        };
    }
}

/**
 * Get jest aliases based on the baseUrl of a compilerOptions object.
 *
 * @param {*} options
 */
function getJestAliases(options = {}) {
    const baseUrl = options.baseUrl;

    if ( !baseUrl ) {
        return {};
    }

    const baseUrlResolved = Path.resolve(Paths.appPath, baseUrl);

    if ( Path.relative(Paths.appPath, baseUrlResolved) === "" ) {
        return {
            "^src/(.*)$": "<rootDir>/src/$1"
        };
    }
}

function getModules() {
    // Check if TypeScript is setup
    const hasTsConfig = FS.existsSync(Paths.appTsConfig);
    const hasJsConfig = FS.existsSync(Paths.appJsConfig);

    if ( hasTsConfig && hasJsConfig ) {
        throw new Error(
            "You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file."
        );
    }

    let config;

    if ( hasTsConfig ) {
        const ts = Import(Resolve.sync("typescript", {
            basedir: Paths.appNodeModules
        }));
        config = ts.readConfigFile(Paths.appTsConfig, ts.sys.readFile).config;

    } else if ( hasJsConfig ) {
        config = Import(Paths.appJsConfig);
    }

    config = config || {};
    const options = config.compilerOptions || {};

    const additionalModulePaths = getAdditionalModulePaths(options);

    return {
        additionalModulePaths: additionalModulePaths,
        webpackAliases: getWebpackAliases(options),
        jestAliases: getJestAliases(options),
        hasTsConfig
    };
}

export { getModules };

export default getModules;