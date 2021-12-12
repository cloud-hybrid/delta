const Variable = (variable) => {
    return {
        key: variable,
        value: process.env[variable] || null
    };
};

const Package = () => {
    const prefix = ["npm", "package"];

    const name = [... prefix, "name"].join("_");
    const json = [... prefix, "json"].join("_");
    const version = [... prefix, "version"].join("_");

    return {
        name: Variable(name),
        json: Variable(json),
        version: Variable(version)
    };
};

const Configuration = () => {
    const prefix = ["npm", "config"];

    const cache = [... prefix, "cache"].join("_");

    return {
        cache: Variable(cache)
    };
};

const Node = () => {
    const prefix = ["npm", "node"];

    const exec = [... prefix, "exec"].join("_");

    return {
        exec: Variable(exec)
    };
};

const Lifecycle = () => {
    const prefix = ["npm", "lifecycle"];

    const event = [... prefix, "event"].join("_");

    return {
        event: Variable(event)
    };
};

const Command = () => {
    return Variable(["npm", "command"].join("_"));
};

const Abstraction = {
    Command: Command(),
    Package: Package(),
    Node: Node(),
    Lifecycle: Lifecycle(),
    Configuration: Configuration()
};

export { Abstraction };

export default Abstraction;