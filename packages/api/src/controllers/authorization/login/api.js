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

    return new Promise((resolve, reject) => {
        User.validatePassword(password, (match) => {
            if ( match ) {
                const Signature = Token.sign({ID: User.id}, Secret, {
                    expiresIn: 86400 // 24 hours
                });

                resolve({
                    User: {
                        ID: User.id,
                        Role: User?.Role
                    }, JWT: Signature
                });
            } else reject();
        });
    });
};
