export default async () => {
    return Promise.allSettled((
        [
            import("./Compression.js").then((Module) => Module.Compression()),
            import("./Environment.js").then((Module) => Module.Inject()),
            import("./Headers.js").then((Module) => Module.Headers()),
            import("./CORS.js").then((Module) => Module.CORS())
        ]
    ));
};