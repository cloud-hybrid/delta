// Rainbow Table Brute-Force Attacks https://en.wikipedia.org/wiki/Rainbow_table
// Blowfish Cryptography https://en.wikipedia.org/wiki/Blowfish_(cipher)
// Cryptographic Salting https://en.wikipedia.org/wiki/Salt_(cryptography)

// ORM Middleware https://mongoosejs.com/docs/middleware.html

import { Cryptography } from "./../../../../database/index.js";

export const Middleware = (Schema) => {
    Schema.methods.validatePassword = function (password, callback) {
        const $ = this;

        Cryptography.compare(password, $.Password, function (error, match) {
            if ( error ) return callback(error);
            callback(null, match);
        });
    };
};

export default Middleware;