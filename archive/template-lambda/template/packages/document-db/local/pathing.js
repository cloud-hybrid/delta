const Path = require("path");

const CWD = __dirname;
const CID = Path.dirname(CWD);
const PKG = Path.dirname(CID);

module.exports = {
    cwd: CWD,
    cid: CID,
    pkg: PKG
};
