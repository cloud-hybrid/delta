import { default as definitions } from "./definitions.js";

export const types = Object.keys(definitions).reduce((acc, key) => {
    const {builder, type} = definitions[key];
    return {
        ... acc,
        [type]: builder
    };
}, {});

export const Definitions = definitions;

export default {
    Definitions,
    definitions,
    types
};