/***
 *
 *  @typedef {{
 *     Blobs: Any,
 *     Files: Any,
 *     Directories: Any,
 *     Sockets: Any,
 *     FIFOs: Any,
 *     Devices: Any,
 *     Zips: Any
 * }} Exportable
 *
 */

// ---------------------------------------------------------------------------------------------------------------------
// Standard Library
// ---------------------------------------------------------------------------------------------------------------------

import FS from "fs";
import Path from "path";
import Runtime from "process";

const CWD = Runtime.cwd();

// ---------------------------------------------------------------------------------------------------------------------
// Global(s)
// ---------------------------------------------------------------------------------------------------------------------

const Mapping = new Map();
const Contents = (_: any) => {
    return FS.readdirSync(_, {
        withFileTypes: true,
    });
};

const Parse = (directory: any) => {
    const Data: { Name: any; Path: any; Properties: { Size: any; UID: any; Mode: any; }; Type: { File: any; Directory: any; Socket: any; Pipe: any; Device: any; Zip: boolean; }; }[] = [];

    Contents(directory).forEach((File: { name: any; }) => {
        const Name = File.name;
        const Absolute = FS.realpathSync(Path.join(directory, Name));

        const Type = {
            File: FS.statSync(Absolute).isFile(),
            Directory: FS.statSync(Absolute).isDirectory(),
            Socket: FS.statSync(Absolute).isSocket(),
            Pipe: FS.statSync(Absolute).isFIFO(),
            Device: FS.statSync(Absolute).isBlockDevice(),
            Zip: (Name.slice(Name.length - 3).toLowerCase() === "zip"),
        };

        const Properties = {
            Size: FS.statSync(Absolute).size,
            UID: FS.statSync(Absolute).uid,
            Mode: FS.statSync(Absolute).mode,
        };

        Data.push({
            Name,
            Path: Absolute,
            Properties,
            Type,
        });
    });

    return Data;
};

// ---------------------------------------------------------------------------------------------------------------------
// Exportable
// ---------------------------------------------------------------------------------------------------------------------

const Blobs = (directory: any) => Parse(directory);

const Files = (directory: any) => Blobs(directory).filter((_) => (_.Type.File === true));
const Directories = (directory: any) => Blobs(directory).filter((_) => (_.Type.Directory === true));
const Sockets = (directory: any) => Blobs(directory).filter((_) => (_.Type.Socket === true));
const FIFOs = (directory: any) => Blobs(directory).filter((_) => (_.Type.Pipe === true));
const Devices = (directory: any) => Blobs(directory).filter((_) => (_.Type.Device === true));

const Zips = (directory: any) => Blobs(directory).filter((_) => (_.Type.Zip === true));

Mapping.set("Blobs", Blobs);
Mapping.set("Files", Files);
Mapping.set("Directories", Directories);
Mapping.set("Sockets", Sockets);
Mapping.set("FIFOs", FIFOs);
Mapping.set("Devices", Devices);
Mapping.set("Zips", Zips);

/***
 *
 * @param {FS.PathLike} directory
 *
 * @return {Exportable}
 *
 * @constructor
 *
 */

//@ts-ignore
const Walk = (directory: FS.PathLike) => {
    const Data = {
        Path: directory,
        // @ts-ignore
        Blobs: null,
        // @ts-ignore
        Files: null,
        // @ts-ignore
        Directories: null,
        // @ts-ignore
        Sockets: null,
        // @ts-ignore
        FIFOs: null,
        // @ts-ignore
        Devices: null,
        // @ts-ignore
        Zips: null,
    };

    Mapping.forEach(
        (Callable, Key) => {
            //@ts-ignore
            Data[Key] = Callable(directory);
        },
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
    Zips,
};

// ---------------------------------------------------------------------------------------------------------------------
// Module
// ---------------------------------------------------------------------------------------------------------------------

export { Walk, Exports };

export default Walk;