import * as URL from "url";
import * as HTTPs from "https";

/***
 *
 * @param url { String }
 *
 * @param method {String}
 * @param port {Number}
 *
 * @return {{headers?: OutgoingHttpHeaders | undefined, setHost?: boolean | undefined, lookup?: LookupFunction | undefined, agent: boolean, socketPath?: string | undefined, method: string, auth?: string | null | undefined, createConnection?: ((options: ClientRequestArgs, oncreate: (err: Error, socket: Socket) => void) => Socket) | undefined, timeout?: number | undefined, maxHeaderSize?: number | undefined, defaultPort?: number | string | undefined, rejectUnauthorized: boolean, path: string | null | undefined, protocol?: string | null | undefined, hostname?: string | null | undefined, _defaultAgent?: Agent | undefined, port, localAddress?: string | undefined, requestCert: boolean, host, family?: number | undefined, signal?: AbortSignal | undefined}}
 *
 * @constructor
 *
 */

const Configuration = (url, method = "GET", port = 443) => {
    const $ = URL.urlToHttpOptions(url);

    $.defaultPort = port;

    return {
        ... $, ... {
            host: $.host || $.hostname,
            port: $.port || $.defaultPort,
            path: $.path,
            method: method,
            rejectUnauthorized: false,
            requestCert: true,
            agent: false
        }
    };
};

/***
 *
 * @param configuration {Configuration}
 *
 * @return {Promise<*>}
 *
 * @constructor
 *
 */

const Query = async (configuration) => {
    const Response = new Promise((resolve, reject) => {
        const Request = HTTPs.request({... configuration}, (response) => {
            let $;

            if ( response.statusCode < 200 || response.statusCode > 400 ) {
                if ( response.statusCode === 401 ) { /// Unauthorized
                    return resolve(JSON.stringify({Status: response.statusCode, Message: response.statusMessage}, null, 4));
                } else if ( response.statusCode === 405 ) { /// Method Not Allowed
                    return resolve(JSON.stringify({Status: response.statusCode, Message: response.statusMessage}, null, 4));
                } else if ( response.statusCode === 404 ) { /// Endpoint not Found
                    return resolve(JSON.stringify({Status: response.statusCode, Message: response.statusMessage}, null, 4));
                } else {
                    console.warn("[Warning]", response);
                    return reject(new Error("[Error]" + " " + String(response.statusCode)));
                }
            }

            response.on("data", (chunk) => {
                const Allocation = String(Buffer.from(chunk));
                if ( Allocation !== undefined ) {
                    ($ === undefined) ? $ = Allocation
                        : $ += Allocation;
                }
            });

            response.on("end", () => {
                Data.Headers = response.headers;
                Data.Method = response.method;
                Data.URL = response.url;
                Data.Status = response.statusCode;
                Data.Message = response.statusMessage;

                resolve($);
            });
        });

        Request.on("error", (_) => reject(_));

        Request.end();
    });

    Data.Response = await Response;

    return Data;
};

export { Configuration, Query };