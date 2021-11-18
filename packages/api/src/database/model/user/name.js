/***
 * @typedef Type
 * @type {Schema<Type>}
 */

const Global = Object.create({
    initialize: false
});

import { ORM, Schema } from "./../../index.js";

/***
 * @type {{Preferred: {default: null, alias: string, type: StringConstructor, required: boolean}, Last: {alias: string, type: StringConstructor, required: boolean}, Alias: {default: null, alias: string, type: StringConstructor, required: boolean}, First: {alias: string, type: StringConstructor, required: boolean}, Middle: {default: null, alias: string, type: StringConstructor, required: boolean}}}
 */

export const Type = {
    First: {
        required: true,
        type: String,
        alias: "first"
    },
    Middle: {
        required: false,
        type: String,
        default: null,
        alias: "middle"
    },
    Last: {
        required: true,
        type: String,
        alias: "last"
    },

    Preferred: {
        required: false,
        type: String,
        default: null,
        alias: "preferred"
    },

    Alias: {
        required: false,
        type: String,
        default: null,
        alias: "alias"
    }
};

/***
 * @type {Type}
 */

const Definition = new Schema(Type);

const Instance = ORM.model("User-Name", Definition, "User-Name", false);

export const Record = new Instance({
    First: "First-Name",
    Middle: "Middle-Name",
    Last: "Last-Name"
});

const Initialize = (await Instance.collection.stats()).count === 0;
(Global.initialize || Initialize) && await Record.save(async (error) => {
    if ( error && (await Instance.collection.stats()).count === 0 ) {
        console.error("[Error]", error);
    } else {
        console.debug("[Debug]", "Successfully Established Database Record" + ":", "User.Name");
    }
});

export default Definition;