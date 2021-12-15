/***
 * @name        SSH-Configuration
 * @package     @cloud-technology
 * @summary     ESM SSH Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */


import * as OS from "os";
import * as FS from "fs";
import * as Path from "path";
import * as Module from "module";

import { Entry, Overwrite } from "./SSH-Configuration-Entry.js";

/***
 * Compatability Replacement for `__dirname` (Commonjs)
 *
 * @type {function(): string}
 *
 * @constructor
 *
 * @example
 * >>> const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
 *
 */

const URI = () => Path.normalize(import.meta.url).replace("file" + ":", "");
const Directory = () => Path.dirname(URI());

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

const User = {... OS.userInfo()};

const File = Path.join(Directory(), "SSH-Utility.config");
const Home = User.homedir;

const Script = "Kernel-Check.Bash"

const EC2 = (servers = []) => {
    const Schema = {
        alias: null,
        hostname: null,
        user: null,
        key: null,
        bastion: null
    };

    const Entries = [];

    const Key = {Location: Path.join(Directory(), "SSH-Key")};

    Key.exists = FS.existsSync(Key.Location);

    if ( !Key.exists ) console.error("Error", "SSH-Key Not Found");

    (!Key.exists) && process.exit(1);
    servers.forEach(($) => {
        Entries.push({
            alias: $?.alias,
            hostname: $?.hostname,
            user: "ec2-user",
            key: Key.Location,
            bastion: $?.bastion
        });
    });

    return Entries;
};

const Fleet = Import(Path.join(Directory(), "Instances.json"));

const Bastion = {
    Name: "bastion-qa-stage",
    Hostname: "ec2-13-58-76-0.us-east-2.compute.amazonaws.com"
};

const Targets = [];
const Commands = [];

Fleet.Instances.forEach(($) => {
    const Name = {};

    $.Tags.forEach(($) => {
        if ( $?.Key === "Name" ) Name.value = $?.Value;
    });

    if ( Name.value !== Bastion.Name ) {
        Targets.push({
            alias: Name?.value || $.PrivateDnsName,
            hostname: $.PrivateDnsName,
            bastion: Bastion.Hostname
        });

        Commands.push([
            "ssh", "-F", File, Name?.value || $.PrivateDnsName,
            "\"bash -s\" -- < " + Script
        ].join(" "));
    }
});

const Entries = EC2(Targets);

const Configuration = [];

Entries.forEach(($) => {
    Configuration.push(
        Entry({... $})
    );
});

FS.writeFileSync(File, [Overwrite(), Configuration.join("\n")].join("\n"));
FS.writeFileSync("Command-Output.json", JSON.stringify(Commands, null, 4));