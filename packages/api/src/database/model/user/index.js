/***
 * @typedef Type
 * @type {Schema<Type>}
 */

const Global = Object.create({
    initialize: true
});

import * as Name from "./name.js";

import {
    ORM, Schema
} from "./../../index.js";

/***
 * @type {{Email: {lowercase: boolean, trim: boolean, unique: boolean, index: boolean, alias: string, type: StringConstructor, required: boolean}, Name: {lowercase: boolean, unique: boolean, alias: string, type: Schema<Type>, required: boolean}}}
 */

export const Type = {
    Email: {
        index: true,
        alias: "email",
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        type: String
    },

    Name: {
        alias: "name",
        unique: false,
        required: true,
        lowercase: false,
        type: Name.default
    }
}

/***
 * @type {Type}
 */

export const Definition = new Schema(Type);

const Instance = ORM.model("User", Definition, "User", false);
const Record = new Instance({ Name: Name.Record, Email: "schema@internal.io" });
const Initialize = (await Instance.collection.stats()).count === 0;

(Global.initialize || Initialize) && await Record.save(async (error) => {
    if (error && (await Instance.collection.stats()).count === 0) {
        console.error("[Error]", error);
    } else {
        console.debug("[Debug]", "Successfully Established Database Record" + ":", "User");
    }
});

export default Instance;