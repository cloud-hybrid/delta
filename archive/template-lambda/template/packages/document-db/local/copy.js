const FS = require("fs");
const Path = require("path");

const Copy = (source, target) => {
    console.log("[Debug] Source", source);
    console.log("   -> Target", target);

    /*** Exclusions to Avoid Recursive Parsing; i.e. libraries, lambda-layers, or otherwise bundled requirements */
    const Exclusions = [ ".git", ".idea", ".vscode", "artifacts", "cdktf.out", "templates" ];

    FS.mkdirSync( target, { recursive: true } );
    FS.readdirSync( source, { withFileTypes: true } ).forEach( (element) => {
        const Directory = element?.isDirectory() || false;
        const Socket = element?.isSocket() || false;
        const File = element?.isFile() || false;

        try {
            if ( !Socket && Directory ) {
                if ( !Exclusions.includes( element.name ) ) {
                    Copy( Path.join( source, element.name ), Path.join( target, element.name ) );
                }
            } else {
                if ( File && !Exclusions.includes( element.name ) ) {
                    FS.copyFileSync( Path.join( source, element.name ), Path.join( target, element.name ) );
                }
            }
        } catch ( e ) {
            throw e;
        }
    } );
};

module.exports = module.exports.copy = Copy;