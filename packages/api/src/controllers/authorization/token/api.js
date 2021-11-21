import { Token } from "./../../../library/index.js";

const Secret = await import("./../../../library/secret.js").then((Module) => Module.Secret);

/***
 * @param token
 * @returns {Promise<import("jsonwebtoken").Jwt|string|null>}
 * @constructor
 */

export const Validate = async (token) => {
    const JWT = token;

    if ( !JWT ) return null;

    return Token.verify(JWT, Secret, (error, decoded) => {
        if ( error ) return false;

        const {
            ID: User,
            ... properties
        } = decoded;

        return {User, properties};
    });
};
