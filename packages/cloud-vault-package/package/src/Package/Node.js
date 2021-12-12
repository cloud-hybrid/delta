const Node = {
    Version: process.version,
    Runtimes: process.versions,
    Main: process.mainModule
};

export { Node };

export default Node;