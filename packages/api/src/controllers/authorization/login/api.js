/***
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

    if ( !User ) return null;

    const Validation = User.validatePassword(password, function (error, match) {
        return !error;
    });

    await Validation;

    if ( !Validation ) return false;

    /***
     *
     * @type {Signature}
     *
     */

    const Signature = Token.sign({ID: User.id}, Secret, {
        expiresIn: 86400 // 24 hours
    });

    return {
        User: {
            ID: User.id,
            Role: User?.Role
        }, JWT: Signature
    };

};
