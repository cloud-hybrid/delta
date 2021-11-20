export const initialize = async () => {
    console.debug("[Debug] Initializing Middleware ...");

    const Promises = Promise.allSettled((
        [
            import("./Compression.js").then((Module) => Module.Compression()),
            import("./Environment.js").then((Module) => Module.Inject()),
            import("./Headers.js").then((Module) => Module.Headers()),
            import("./CORS.js").then((Module) => Module.CORS())
        ]
    ));

    Promises.finally(() => console.debug("[Debug] Application Middleware Successfully Injected"));

    return Promises;
};

export default async () => await initialize();