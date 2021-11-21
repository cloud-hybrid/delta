import { default as Hash } from "./hash.js";
import { default as Check } from "./check.js";

const $ = async (Model) => {
    await Check(Model);
    Hash(Model);
};

export default {
    Hash, Check, initialize: async (Model) => await $(Model)
};