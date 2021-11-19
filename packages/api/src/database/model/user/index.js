/*** User Model & Schema Definitions, and Initialization Unit-Tests
 *
 * Please note, most of the following module is composed of debug messages
 *
 * Mongo-DB Official User Authentication Walk-Through(s) (2018)
 *  - https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
 *  - https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-2
 */

const Global = Object.create({
    initialize: true
});

import { default as Name } from "./name.js";

import {
    ORM
} from "./../../index.js";

/*** Model Definition ===================================================== - */

import { default as Password } from "./utility/hash.js";
import { default as Validator } from "./utility/comparator.js";

/***
 * Definition - Schema Instance that Defines a Model
 *
 * @type {ORM.Schema}
 */

export const Model = new ORM.Schema({
    /// _id: Schema.Types.ObjectId,

    Email: {
        name: "Email",
        alias: "email",
        type: String,
        required: true,
        index: true,
        unique: true,
        default: null,
        lowercase: true,
        uppercase: false,
        trim: true
    },

    Username: {
        name: "Username",
        alias: "username",
        type: String,
        required: true,
        index: true,
        unique: true,
        default: null,
        lowercase: false,
        uppercase: false,
        trim: true
    },

    Password: {
        name: "Password",
        alias: "password",
        type: String,
        required: true,
        index: false,
        unique: false,
        default: null,
        lowercase: false,
        uppercase: false,
        trim: true
    },

    Definition: {
        name: "Definition-Date",
        alias: "definition-date",
        type: ORM.Schema.Types.Date,
        required: true,
        index: false,
        unique: false,
        default: Date.now(),
        lowercase: false,
        uppercase: false,
        trim: false
    },

    Name: {
        name: "Name",
        alias: "name",
        type: ORM.Schema.Types.ObjectId,
        required: false,
        ref: "Name"
    }
}, {
    timestamps: {
        createdAt: "Creation-Date",
        updatedAt: "Modification-Date"
    }
});

/*** Middleware =========================================================== - */

Password(Model);
Validator(Model);

/*** Schema =============================================================== - */

export const Schema = ORM.model("User", Model, "User", false);

/*** Initialization Unit-Tests ============================================ - */

const Record = new Schema({Email: "administrator@internal.io", Username: "Administrator", Password: "Kn0wledge!"});

const Initialize = (await Schema.collection.stats()).count === 0;

const empty = (await Schema.collection.stats()).count === 0;
(Global.initialize || Initialize) && await Record.save(async (error) => {
    if ( error && empty ) {
        const e = new Error("[Fatal] Validation Failure").stack.split("\n");
        console.error([e[0], e[1].trim(), "\n"].join(" "));
        throw error;
    } else {
        if ( empty ) {
            try {
                console.debug("[Debug]", "Instantiated Base User Record");

                console.debug("[Debug]", "Validating Password Hashing Middleware ...");

                // Test Valid Password
                Record?.validatePassword("Kn0wledge!", function (error, match) {
                    if ( error ) throw error;
                    console.debug("[Debug] Password Hashing Truthy Assertion" + ":", match);
                    console.debug("[Debug]", "Successfully Validated Truthy Password Comparator");
                });

                // Test Invalid Password
                Record?.validatePassword("Kn0wledge!#$", function (error, match) {
                    if ( error ) throw error;
                    console.debug("[Debug] Password Hashing Falsy Assertion" + ":", match);
                    console.debug("[Debug]", "Successfully Validated Falsy Password Comparator");
                });

                console.debug("[Debug]", "Updating Record Relationship(s) ...");

                const $ = {Models: {}, Instances: {}};

                console.debug("[Debug]", "Established In-Place Container for Model(s) & Instance(s)");

                $.Models.Name = ORM.model("Name", Name, "Name", false);
                console.debug("[Debug]", "Established (Name) Model");

                $.Instances.Name = new $.Models.Name({
                    User: Record.id,

                    First: "First-Name",
                    Middle: "Middle-Name",
                    Last: "Last-Name"
                });

                console.debug("[Debug]", "Established (Name) Instance");

                console.debug("[Debug]", "Saving (Name) Instance ...");

                await $.Instances.Name.save();
                console.debug("[Debug]", "Successfully Saved Instance (Name)");

                console.debug("[Debug]", "Updating Parent Record ...");

                await Record.updateOne({Name: $.Instances.Name});

                console.debug("[Debug]", "Update has been Committed");
                console.debug("[Debug]", "Writing Update(s) & Synchronizing Parent Record ...");

                await Record.save();

                console.debug("[Debug]", "Record & Update(s) Successfully Written to Database");
            } catch ( error ) {
                const e = new Error("[Fatal] Validation Failure").stack.split("\n");
                console.error([e[0], e[1].trim(), "\n"].join(" "));

                await Record.delete({_id: Record.id});

                throw error;
            }

            console.debug("[Debug] User Model Successfully Initialized");
        }
    }
});

export default Model;