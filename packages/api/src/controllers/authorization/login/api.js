/*** Login API
 *
 * @module API
 *
 * @typedef {import("./../../../database/index.js").ORM} ORM
 * @typedef {import("./../../../database/model/user/index.js").Instance} Instance
 * @typedef {import("./../../../library/index.js").Token} Signature
 */

import { Token } from "./../../../library/index.js";

const Secret = await import("./../../../library/secret.js").then((Module) => Module.Secret);

/***
 *
 * @param User {Instance}
 * @param password
 *
 * @returns {Promise<null|boolean|{User: {Role: *, Email: *, Username: *, ID: *, Name: *}, JWT: Signature}>}
 *
 * @constructor
 */

export const Generate = async (User, password) => {
    /***
     * @type {Instance}
     */

    if ( !User ) throw new Error("NIL");

    console.debug("[Login (API)]", "[Debug]", "User-Profile" + ":", User);

    return new Promise((resolve, reject) => {
        User.validatePassword(password, (match) => {
            if ( !match ) {
                const e = new Error("Incorrect Password Match");
                e.name = "Password-Validation-Error";
                reject(e);
            } else {
                const Signature = Token.sign({id: User.id}, Secret, {
                    audience: "Audience",
                    issuer: "Issuer",
                    expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
                });

                console.debug("[Authorization (API)]", "[Debug]", "JWT-Decoded" + ":", Token.decode(Signature, Secret));

                resolve({
                    ID: User.id,
                    JWT: Signature
                });
            }
        });
    });
};
