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

const Import = Module.createImport(URI());

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

import Resolve from "resolve";

import * as Environment from "./src/Environment/Dot-Configuration.js";

const fs = Import("fs-extra");
const path = Import("path");
const chalk = Import("react-dev-utils/chalk");
const execSync = Import("child_process").execSync;
const spawn = Import("react-dev-utils/crossSpawn");
const {defaultBrowsers} = Import("react-dev-utils/browsersHelper");
const os = Import("os");
const verifyTypeScriptSetup = Import("./utils/verifyTypeScriptSetup");

function isInGitRepository() {
    try {
        execSync("git rev-parse --is-inside-work-tree", {stdio: "ignore"});
        return true;
    } catch ( e ) {
        return false;
    }
}

function isInMercurialRepository() {
    try {
        execSync("hg --cwd . root", {stdio: "ignore"});
        return true;
    } catch ( e ) {
        return false;
    }
}

function tryGitInit() {
    try {
        execSync("git --version", {stdio: "ignore"});
        if ( isInGitRepository() || isInMercurialRepository() ) {
            return false;
        }

        execSync("git init", {stdio: "ignore"});
        return true;
    } catch ( e ) {
        console.warn("Git repo not initialized", e);
        return false;
    }
}

function tryGitCommit(appPath) {
    try {
        execSync("git add -A", {stdio: "ignore"});
        execSync("git commit -m \"Initialization\"", {
            stdio: "ignore"
        });

        return true;
    } catch ( e ) {
        // We couldn't commit in already initialized git repo,
        // maybe the commit author config is not set.
        // In the future, we might supply our own committer
        // like Ember CLI does, but for now, let's just
        // remove the Git files to avoid a half-done state.
        console.warn("Git Commit Couldn't be  Established ...", e);
        console.warn("Removing .git directory ...");
        try {
            FS.removeSync(Path.join(appPath, ".git"));
        } catch ( removeErr ) {
            console.log(removeErr);
        }
        return false;
    }
}

export default function (
    appPath,
    appName,
    verbose,
    originalDirectory,
    templateName
) {
    const appPackage = Import(Path.join(appPath, "package.json"));
    const useYarn = FS.existsSync(Path.join(appPath, "yarn.lock"));

    if ( !templateName ) {
        console.log("");
        console.error(`A template was not provided. This is likely because you're using an outdated version of ...`);
        console.error(`Please note that global installs of ... are no longer supported.`);
    }

    const templatePath = Path.dirname(
        Import.resolve(`${ templateName }/package.json`, {paths: [appPath]})
    );

    const templateJsonPath = Path.join(templatePath, "template.json");

    let templateJson = {};
    if ( FS.existsSync(templateJsonPath) ) {
        templateJson = Import(templateJsonPath);
    }

    const templatePackage = templateJson.package || {};

    // This was deprecated in CRA v5.
    if ( templateJson.dependencies || templateJson.scripts ) {
        console.log();
        console.log(
            "Root-level `dependencies` and `scripts` keys in `template.json` were deprecated for Create React App 5.\n" +
            "This template needs to be updated to use the new `package` key."
        );
        console.log("For more information, visit https://cra.link/templates");
    }

    // Keys to ignore in templatePackage
    const templatePackageBlacklist = [
        "name",
        "version",
        "description",
        "keywords",
        "bugs",
        "license",
        "author",
        "contributors",
        "files",
        "browser",
        "bin",
        "man",
        "directories",
        "repository",
        "peerDependencies",
        "bundledDependencies",
        "optionalDependencies",
        "engineStrict",
        "os",
        "cpu",
        "preferGlobal",
        "private",
        "publishConfig"
    ];

    // Keys from templatePackage that will be merged with appPackage
    const templatePackageToMerge = ["dependencies", "scripts"];

    // Keys from templatePackage that will be added to appPackage,
    // replacing any existing entries.
    const templatePackageToReplace = Object.keys(templatePackage).filter(key => {
        return (
            !templatePackageBlacklist.includes(key) &&
            !templatePackageToMerge.includes(key)
        );
    });

    // Copy over some of the devDependencies
    appPackage.dependencies = appPackage.dependencies || {};

    // Setup the script rules
    const templateScripts = templatePackage.scripts || {};
    appPackage.scripts = Object.assign(
        {
            start: "react-scripts start",
            build: "react-scripts build",
            test: "react-scripts test",
            eject: "react-scripts eject"
        },
        templateScripts
    );

    // Update scripts for Yarn users
    if ( useYarn ) {
        appPackage.scripts = Object.entries(appPackage.scripts).reduce(
            (acc, [key, value]) => ({
                ... acc,
                [key]: value.replace(/(npm run |npm )/, "yarn ")
            }),
            {}
        );
    }

    // Setup the eslint config
    appPackage.eslintConfig = {
        extends: "react-app"
    };

    // Setup the browsers list
    appPackage.browserslist = defaultBrowsers;

    // Add templatePackage keys/values to appPackage, replacing existing entries
    templatePackageToReplace.forEach(key => {
        appPackage[key] = templatePackage[key];
    });

    FS.writeFileSync(
        Path.join(appPath, "package.json"),
        JSON.stringify(appPackage, null, 2) + os.EOL
    );

    const readmeExists = FS.existsSync(Path.join(appPath, "README.md"));
    if ( readmeExists ) {
        FS.renameSync(
            Path.join(appPath, "README.md"),
            Path.join(appPath, "README.old.md")
        );
    }

    // Copy the files for the user
    const templateDir = Path.join(templatePath, "template");
    if ( FS.existsSync(templateDir) ) {
        FS.copySync(templateDir, appPath);
    } else {
        console.error(
            `Could not locate supplied template: ${ chalk.green(templateDir) }`
        );
        return;
    }

    // modifies README.md commands based on user used package manager.
    if ( useYarn ) {
        try {
            const readme = FS.readFileSync(Path.join(appPath, "README.md"), "utf8");
            FS.writeFileSync(
                Path.join(appPath, "README.md"),
                readme.replace(/(npm run |npm )/g, "yarn "),
                "utf8"
            );
        } catch ( err ) {
            // Silencing the error. As it fall backs to using default npm commands.
        }
    }

    const gitignoreExists = FS.existsSync(Path.join(appPath, ".gitignore"));
    if ( gitignoreExists ) {
        // Append if there's already a `.gitignore` file there
        const data = FS.readFileSync(Path.join(appPath, "gitignore"));
        FS.appendFileSync(Path.join(appPath, ".gitignore"), data);
        FS.unlinkSync(Path.join(appPath, "gitignore"));
    } else {
        // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
        // See: https://github.com/npm/npm/issues/1862
        FS.moveSync(
            Path.join(appPath, "gitignore"),
            Path.join(appPath, ".gitignore"),
            []
        );
    }

    // Initialize git repo
    let initializedGit = false;

    if ( tryGitInit() ) {
        initializedGit = true;
        console.log();
        console.log("Initialized a git repository.");
    }

    let command;
    let remove;
    let args;

    if ( useYarn ) {
        command = "yarnpkg";
        remove = "remove";
        args = ["add"];
    } else {
        command = "npm";
        remove = "uninstall";
        args = [
            "install",
            "--no-audit", // https://github.com/facebook/create-react-app/issues/11174
            "--save",
            verbose && "--verbose"
        ].filter(e => e);
    }

    // Install additional template dependencies, if present.
    const dependenciesToInstall = Object.entries({
        ... templatePackage.dependencies,
        ... templatePackage.devDependencies
    });
    if ( dependenciesToInstall.length ) {
        args = args.concat(
            dependenciesToInstall.map(([dependency, version]) => {
                return `${ dependency }@${ version }`;
            })
        );
    }

    // Install template dependencies, and react and react-dom if missing.
    if ( (templateName) && args.length > 1 ) {
        console.log();
        console.log(`Installing template dependencies using ${ command }...`);

        const proc = spawn.sync(command, args, {stdio: "inherit"});
        if ( proc.status !== 0 ) {
            console.error(`\`${ command } ${ args.join(" ") }\` failed`);
            return;
        }
    }

    // Remove template
    console.log(`Removing template package using ${ command }...`);
    console.log();

    const proc = spawn.sync(command, [remove, templateName], {
        stdio: "inherit"
    });
    if ( proc.status !== 0 ) {
        console.error(`\`${ command } ${ args.join(" ") }\` failed`);
        return;
    }

    // Create git commit if git repo was initialized
    if ( initializedGit && tryGitCommit(appPath) ) {
        console.log();
        console.log("Successfully Established Git Commit");
    }

    // Display the most elegant way to cd.
    // This needs to handle an undefined originalDirectory for
    // backward compatibility with old global-cli's.
    let cdpath;
    if ( originalDirectory && Path.join(originalDirectory, appName) === appPath ) {
        cdpath = appName;
    } else {
        cdpath = appPath;
    }

    // Change displayed command to yarn instead of yarnpkg
    const displayedCommand = useYarn ? "yarn" : "npm";

    console.log();
    console.log(`Success! Created ${ appName } at ${ appPath }`);
    console.log("Inside that directory, you can run several commands:");
    console.log();
    console.log(chalk.cyan(`  ${ displayedCommand } start`));
    console.log("    Starts the development server.");
    console.log();
    console.log(
        chalk.cyan(`  ${ displayedCommand } ${ useYarn ? "" : "run " }build`)
    );
    console.log("    Bundles the app into static files for production.");
    console.log();
    console.log(chalk.cyan(`  ${ displayedCommand } test`));
    console.log("    Starts the test runner.");
    console.log();
    console.log(
        chalk.cyan(`  ${ displayedCommand } ${ useYarn ? "" : "run " }eject`)
    );
    console.log(
        "    Removes this tool and copies build dependencies, configuration files"
    );
    console.log(
        "    and scripts into the app directory. If you do this, you can’t go back!"
    );
    console.log();
    console.log("We suggest that you begin by typing:");
    console.log();
    console.log("  cd", cdpath);
    console.log(`${ displayedCommand } start`);
    if ( readmeExists ) {
        console.log();
        console.log(
            chalk.yellow(
                "You had a `README.md` file, we renamed it to `README.old.md`"
            )
        );
    }
    console.log();
    console.log("Happy hacking!");
};
