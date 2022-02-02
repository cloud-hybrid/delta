import { Service } from "@cloud-technology/secrets-manager-client";
import Module from "module";
import Process from "process";

/***
 * Compatability (ESM) Replacement for `require` (Common-JS)
 *
 * @type {NodeRequire}
 * @constructor
 */

const Import = Module.createRequire( import.meta.url.replace( "file://", "" ) );

/***
 * Type Definition for Local `package.json`
 *
 * However, when interfaced as a dependency, the `Configuration` object
 * functionally becomes the caller's `package.json`.
 *
 */

type Definition = typeof import("../package.json");

const Secret = async () => {
    const Configuration: Definition = Import( Process.env["npm_package_json"] ?? "../package.json" );

    const $ = new Service();
    const api = await $.initialize();

    try {
        return await api.get( Configuration.config.settings );
    } catch (e) {
        console.error("[Error] Secret Not Found");
        console.error(" - Verify \"default\" AWS Credentials Profile is Correct");
        console.error(" - Check AWS Account for Secrets Parameter Value");
        console.error(" - Ensure Reference isn't Malformed in \"package.json\"");

        Process.exit(1);
    }
}

export { Secret };

export default Secret;