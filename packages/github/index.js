const Main = async () => await import("./src/index.js").then((Data) => {
    const Buffer = process.stdout;
    const Output = JSON.stringify(Data.Module, null, 4);

    Buffer.write(Output + "\n");

    return true;
});

await Main() && process.exit(0);

process.exit(-1);