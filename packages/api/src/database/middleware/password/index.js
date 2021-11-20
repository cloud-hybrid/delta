import { default as Hash } from "./hash.js";
import { default as Check } from "./check.js";

const $ = (Model) => {
    Hash(Model);
    Check(Model);
};

export default {
    Hash, Check, initialize: (Model) => $(Model)
};