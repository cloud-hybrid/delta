console.debug("[Main] [Debug] Loading CI Setting(s) ...");
await import("./.ci/settings.js").finally(() => {
    console.debug("[Main] [Log]", "Instantiated Package Metadata");
});

console.debug("[Main] [Debug] Loading Environment Variable(s) ...");
await import("./src/library/Environment.js").then((Module) => {
    console.debug("[Main] [Debug]", "Imported Packaged Configuration Loader");

    Module.Inject();
}).finally(() => {
    console.log("[Main] [Log] Injected Runtime Process");
});

console.debug("[Main] [Debug] Importing API Server ...");
import("./src/index.js").then(($) => {
    console.debug("[Main] [Debug] Package has been Imported");

    $.Server();
}).finally(() => {
    console.debug("[Main] [Log]", "Starting API Server ...");
});