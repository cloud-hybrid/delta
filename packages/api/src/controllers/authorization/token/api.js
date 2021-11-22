/*** JWT Token API
 *
 * @module API
 *
 * @typedef {import("jsonwebtoken").GetPublicKeyOrSecret} Private
 * @typedef {import("jsonwebtoken").VerifyOptions} Options
 * @typedef {import("jsonwebtoken").VerifyCallback} Callback
 *
 * @typedef {import("jsonwebtoken").JwtPayload} Payload
 *
 */

import Utility from "util";

import { Token } from "./../../../library/index.js";

const Secret = await import("./../../../library/secret.js").then((Module) => Module.Secret);

/***
 * @type {(token: string, secretOrPublicKey: Private, options?: Options, callback?: Callback) => Promise<(err: any, signingKey?: Secret) => void>}
 */

const Verify = Utility.promisify(Token.verify);

/***
 *
 * @param verification {Boolean}
 * @param data {String|Payload}
 * @param error {Boolean}
 * @param type {null | "Expiration" | "Malformation" | "Issuer"}
 *
 * @return {{Type: null, Message, Error, Verification}}
 *
 * @constructor
 *
 */

const Schema = (verification, data, error, type = null) => {
    return {
        Verification: verification,
        Data: data,
        Error: error,
        Type: type
    };
};

/***
 * @param token
 *
 * @returns {Promise<{Type: null | "Expiration" | "Malformation" | "Issuer", Data: String|Payload, Error: Boolean, Verification: Boolean} | Error>}
 *
 * @constructor
 *
 */

export const Validate = async (token) => {
    const JWT = token;

    if ( !JWT ) return null;

    try {
        const Verification = await Verify(JWT, Secret);
        console.debug("[JWT-Validation]", "[Debug]", "Verification" + ":", Verification);
        return Schema(true, Token.decode(JWT, Secret), false);
    } catch ( e ) {
        const $ = JSON.stringify(e, null, 4);

        console.debug("[JWT-Validation]", "[Error]", "Verification" + ":", $);

        /// --> Catch Expiration Error
        if ( e.name === "TokenExpiredError" ) {
            return Schema(false, "JWT Token Expiration", true, "Expiration");
        } else {
            throw new Error(e);
        }
    }
};
