// ---------------------------------------------------------------------------------------------------------------------
// Standard Library
// ---------------------------------------------------------------------------------------------------------------------

import FS from "fs";
import Path from "path";
import Process from "process";

const CWD = Process.cwd();

// ---------------------------------------------------------------------------------------------------------------------
// Global(s)
// ---------------------------------------------------------------------------------------------------------------------

const Mapping = new Map();

/***
 * Read a Directory's given structure so long as file(s) exist
 *
 * @param $ {String}
 *
 * @returns {string[]}
 *
 * @constructor
 *
 */

const Contents = ($) => {
    return FS.readdirSync($, {
        withFileTypes: true, encoding: "UTF-8"
    });
};

const Parse = (directory) => {
    const Data = [];
    
    Contents(directory).forEach((File) => {
        const Name = File?.name;
        const Absolute = FS.realpathSync(Path.join(directory, Name));

        const Type = {
            File: FS.statSync(Absolute).isFile(),
            Directory: FS.statSync(Absolute).isDirectory(),
            Socket: FS.statSync(Absolute).isSocket(),
            Pipe: FS.statSync(Absolute).isFIFO(),
            Device: FS.statSync(Absolute).isBlockDevice(),
            Zip: (Name.slice(Name.length - 3).toLowerCase() === "zip")
        };

        const Properties = {
            Size: FS.statSync(Absolute).size,
            UID: FS.statSync(Absolute).uid,
            Mode: FS.statSync(Absolute).mode
        };

        Data.push({
            Name,
            Path: Absolute,
            Properties,
            Type
        });
    });

    return Data;
};

// ---------------------------------------------------------------------------------------------------------------------
// Exportable
// ---------------------------------------------------------------------------------------------------------------------

const Blobs = (directory) => Parse(directory);

const Files = (directory) => Blobs(directory).filter(($) => ($.Type.File === true));
const Directories = (directory) => Blobs(directory).filter(($) => ($.Type.Directory === true));
const Sockets = (directory) => Blobs(directory).filter(($) => ($.Type.Socket === true));
const FIFOs = (directory) => Blobs(directory).filter(($) => ($.Type.Pipe === true));
const Devices = (directory) => Blobs(directory).filter(($) => ($.Type.Device === true));

const Zips = (directory) => Blobs(directory).filter(($) => ($.Type.Zip === true));

Mapping.set("Blobs", Blobs);
Mapping.set("Files", Files);
Mapping.set("Directories", Directories);
Mapping.set("Sockets", Sockets);
Mapping.set("FIFOs", FIFOs);
Mapping.set("Devices", Devices);
Mapping.set("Zips", Zips);

const Walk = (directory) => {
    const Data = {};

    Mapping.forEach(
        (Callable, Key) => {
            Data[Key] = Callable(directory);
        }
    );

    return Data;
};

const Exports = {
    Blobs,
    Files,
    Directories,
    Sockets,
    FIFOs,
    Devices,
    Zips
};

// ---------------------------------------------------------------------------------------------------------------------
// Module
// ---------------------------------------------------------------------------------------------------------------------

module.exports = {
    Walk, Map: Mapping, Exports
};

Walk(process.cwd());
