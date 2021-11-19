import { ORM, Schema } from "./../../index.js";

/***
 * Definition - Schema Instance that Defines a Model
 *
 * @type {ORM.Schema}
 */

export const Model = new Schema({
    User: {type: Schema.Types.ObjectId, ref: "User", required: true},

    First: {
        required: true,
        type: String,
        default: null,
        alias: "first",
        trim: true
    },
    Middle: {
        required: false,
        type: String,
        default: null,
        alias: "middle",
        trim: true
    },
    Last: {
        required: true,
        type: String,
        default: null,
        alias: "last",
        trim: true
    },

    Preferred: {
        required: false,
        type: String,
        default: null,
        alias: "preferred",
        trim: true
    },

    Alias: {
        required: false,
        type: String,
        default: null,
        alias: "alias",
        trim: true
    }
});

export default Model;