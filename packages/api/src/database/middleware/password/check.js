// Rainbow Table Brute-Force Attacks https://en.wikipedia.org/wiki/Rainbow_table
// Blowfish Cryptography https://en.wikipedia.org/wiki/Blowfish_(cipher)
// Cryptographic Salting https://en.wikipedia.org/wiki/Salt_(cryptography)

// ORM Middleware https://mongoosejs.com/docs/middleware.html

import { Cryptography } from "./../../index.js";

/***
 *
 * @param Schema
 * @returns {Promise}
 * @constructor
 */
export const Middleware = async (Schema) => {
    console.debug("[Validation]", "[Debug]", "Instantiating Cryptographic Validation Function ...");

    /***
     * @param password
     * @param callback
     * @returns {Promise}
     */
    Schema.methods.validatePassword = async function (password, callback) {
        const $ = this;

        console.debug("[Validation]", "[Debug]", "Evaluating Comparator ...");

        await Cryptography.compare(password, $.Password, function (error, match) {
            if ( error ) return callback(error);
            console.debug("[Validation]", "[Log]", "Password has been Successfully Validated");
            callback(null, match);
        });
    };

    console.debug("[Validation]", "[Debug]", "Validation Successfully Instantiated");
};

export default Middleware;