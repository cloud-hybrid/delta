import * as HTTPs from "https";
import * as URI from "url";

/***
 * HTTPs Query Configuration Object
 * --------------------------------
 *
 * @param url { String }
 *
 * @param method {String}
 *
 * @return {{headers?: OutgoingHttpHeaders | undefined, setHost?: boolean | undefined, lookup?: LookupFunction | undefined, agent: boolean, socketPath?: string | undefined, method: string, auth?: string | null | undefined, createConnection?: ((options: ClientRequestArgs, oncreate: (err: Error, socket: Socket) => void) => Socket) | undefined, timeout?: number | undefined, maxHeaderSize?: number | undefined, defaultPort?: number | string | undefined, rejectUnauthorized: boolean, path: string | null | undefined, protocol?: string | null | undefined, hostname?: string | null | undefined, _defaultAgent?: Agent | undefined, port, localAddress?: string | undefined, requestCert: boolean, host, family?: number | undefined, signal?: AbortSignal | undefined}}
 *
 * @constructor
 *
 */

const Configuration = (url, method = "GET") => {
    const $ = new URI.URL(url);

    $.rejectUnauthorized = false;

    return $;
};

/***
 * HTTPs Query Request Function
 * ----------------------------
 *
 * @param configuration {Configuration}
 *
 * @return {Promise<*>}
 *
 * @constructor
 *
 */

const Query = (configuration) => {
    return new Promise((resolve, reject) => {
        // console.log(configuration);
        const Request = HTTPs.request(configuration, (response) => {
            let $;

            response.on("data", (chunk) => {
                const Allocation = String(Buffer.from(chunk));
                if ( Allocation !== undefined ) {
                    ($ === undefined) ? $ = Allocation
                        : $ += Allocation;
                }
            });

            response.on("end", () => {
                resolve(JSON.parse($));
            });
        });

        Request.on("error", (_) => reject(_));

        Request.end();
    });
};

export { Configuration, Query };