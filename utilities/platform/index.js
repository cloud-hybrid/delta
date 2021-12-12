import * as OS from "os";
import * as Process from "process";

const Platform = {
    $: OS.platform(),
    Name: null,
    Valid: false
};

switch ( Platform.$ ) {
case "aix":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
case "android":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
case "darwin":
    console.debug("[Debug] OS Support Validated as Successful");

    Platform.Name = "Apple";
    Platform.Valid = true;

    break;
case "freebsd":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
case "haiku":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
case "linux":
    console.debug("[Debug] OS Support Validated as Successful");

    Platform.Name = "Linux";
    Platform.Valid = true;

    break;
case "openbsd":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
case "sunos":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
case "win32":
    console.debug("[Debug] OS Support Validated as Successful");

    Platform.Name = "Windows";
    Platform.Valid = true;

    break;
case "netbsd":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
case "cygwin":
    console.error("[Error] OS Not Supported");
    console.debug("[Debug] Exiting ...");
    break;
}

(Platform.Valid) || Process.exit(1);

export default Platform;