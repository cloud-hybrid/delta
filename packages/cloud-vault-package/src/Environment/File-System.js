// @remove-on-eject-begin
/**
 * Copyright (c)
 */
// @remove-on-eject-end
"use strict";

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

const appDirectory = FS.realpathSync(process.cwd());
const resolveTarget = relativePath => Path.resolve(appDirectory, relativePath);
const resolveSource = relativePath => Path.resolve(Path.normalize(Process.env["npm_package_json"]).replace("file" + ":", ""), "..", relativePath);

const buildPath = Process.env.BUILD_PATH || "build";

const moduleFileExtensions = [
    "cjs",
    "mjs",
    "js",
    "ts",
    "json"
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension =>
        FS.existsSync(resolveFn(`${ filePath }.${ extension }`))
    );

    if ( extension ) {
        return resolveFn(`${ filePath }.${ extension }`);
    }

    return resolveFn(`${ filePath }.js`);
};

// config after eject: we're in ./config/
const Configuration = {
    dotenv: resolveTarget(".env"),
    appPath: resolveTarget("."),
    appBuild: resolveTarget(buildPath),
    appIndexJs: resolveModule(resolveTarget, "src/index"),
    appPackageJson: resolveTarget("package.json"),
    appSrc: resolveTarget("src"),
    appTsConfig: resolveTarget("tsconfig.json"),
    appJsConfig: resolveTarget("jsconfig.json"),
    appNodeModules: resolveTarget("node_modules"),
    sourcePath: resolveSource("."),
    sourceNodeModules: resolveSource("node_modules")
};

export { Configuration };

// @remove-on-eject-begin

// config before eject: we're in ./node_modules/react-scripts/config/
const Ejection = {
    dotenv: resolveTarget(".env"),
    appPath: resolveTarget("."),
    appBuild: resolveTarget(buildPath),
    appPublic: resolveTarget("public"),
    appIndexJs: resolveModule(resolveTarget, "src/index"),
    appPackageJson: resolveTarget("package.json"),
    appSrc: resolveTarget("src"),
    appJsConfig: resolveTarget("jsconfig.json"),
    appNodeModules: resolveTarget("node_modules"),
    sourcePath: resolveSource("."),
    sourceNodeModules: resolveSource("node_modules")
};

export { Ejection };

const ownPackageJson = Import("../../package.json"); /// @Note: Needs to be relative

const sourcePath = resolveTarget(`node_modules/${ ownPackageJson.name }`);
const sourcePathLinked =
    FS.existsSync(sourcePath) &&
    FS.lstatSync(sourcePath).isSymbolicLink();

const templatePath = "../template/lambda";

// config before publish: we're in ./packages/react-scripts/config/
const Publish = (!sourcePathLinked)
    ? {
        dotenv: resolveSource(`${ templatePath }/.env`),
        appPath: resolveTarget("."),
        appBuild: resolveSource(Path.join("../..", buildPath)),
        appIndexJs: resolveModule(resolveSource, `${ templatePath }/src/index`),
        appPackageJson: resolveSource("package.json"),
        appSrc: resolveSource(`${ templatePath }/src`),
        appJsConfig: resolveSource(`${ templatePath }/jsconfig.json`),
        appNodeModules: resolveSource("node_modules"),
        sourcePath: resolveSource("."),
        sourceNodeModules: resolveSource("node_modules")
    } : {};

export { Publish };

const Paths = {
    ... Configuration, Ejection, Publish
};

export default Paths;