/***
 * @name        Host SSH-Entry
 * @package     @cloud-technology
 * @summary     ESM SSH Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */


import * as OS from "os";
import * as Path from "path";

/***
 * User Information (OS)
 *
 * @type {{uid: number, gid: number, shell: string, username: string, homedir: string}}
 *
 */

const User = {... OS.userInfo()};

const Default = {
    SSH: Path.join(User.homedir, ".ssh", "id_rsa"),
    Username: User.username,
    Bastion: "localhost",
    Alias: "Local-Host",
    IP: "127.0.0.1"
};

/***
 * Create a SSH Configuration Entry
 *
 * @param alias {String} Target SSH Cofiguration Common-Name
 * @param hostname {String} Target SSH Hostname
 * @param user {String} Target SSH Username
 * @param key {String} System Path Location of SSH-Private Key
 * @param bastion {String} Target Bastion Host
 *
 * @return {string}
 *
 * @constructor
 *
 * @example
 *
 * console.log(Entry());
 *
 * >>> Host Local-Host
 * >>>     Hostname 127.0.0.1
 * >>>     User Jacob-Sanders
 * >>>     IdentityFile /Users/Jacob-Sanders/.ssh/id_rsa
 * >>>     ProxyCommand ssh localhost nc %h %p
 *
 */

const Entry = ({alias = Default.Alias, hostname = Default.IP, user = Default.Username, key = Default.SSH, bastion = Default.Bastion}) => {
    return [
        ["Host", alias].join(" "),
        ["   ", "Hostname", hostname].join(" "),
        ["   ", "User", user].join(" "),
        ["   ", "IdentityFile", key].join(" "),
        ["   ", "ProxyCommand", "ssh", bastion, "-i", key, "-W", "%h:%p"].join(" ")
    ].join("\n");
};

const Overwrite = () => {
    return [
        ["Host", "*"].join(" "),
        ["   StrictHostKeyChecking", "no"].join(" "),
        ["   UserKnownHostsFile=/dev/null"]
    ].join("\n");
}

export { Entry, Overwrite, User, Default };

export default Entry;

/// console.log(Entry());
