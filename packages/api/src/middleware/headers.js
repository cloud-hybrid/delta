/*** Default Headers
 * @type {[{Value: string, Key: string}, {Value: string, Key: string}]}
 */
const Overwrites = [
    {
        Key: "Server",
        Value: "Nexus-API"
    },
    {
        Key: "X-Powered-By",
        Value: "Cloud-Technology"
    }
];
export const Headers = (server, headers = Overwrites) => {
    console.debug("[Headers] [Debug] Instantiating Header(s)");
    const $ = (_, response, callback) => {
        headers.forEach((Element) => {
            response.setHeader(Element.Key, Element.Value);
        });
        callback();
    };
    console.debug("[Headers] [Debug] Setting Header Overwrite(s)");
    server.use($);
    console.debug("[Headers] [Debug] Enabled Custom Response Headers");
};
export default Headers;
