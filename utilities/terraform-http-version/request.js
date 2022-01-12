import HTTPs from "https";
import URI from "url";

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
    $.method = method;

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
    const Pool = Object.create(null);

    /// Radix := 10 Initial Padding
    Pool.data = 0o0000000000;
    return new Promise((resolve, reject) => {
        const Request = HTTPs.request(configuration, (response) => {
            const Fill = parseInt(response.headers["content-length"], 10);

            response.on("data", (chunk) => {
                const Allocation = String(Buffer.from(chunk, 10, Fill));

                (Pool.data) ? Pool.data += Allocation : Pool.data = Allocation;
            });

            response.on("end", () => {
                const Allocator = Buffer.allocUnsafeSlow(Fill);
                Allocator.write(Pool.data);
                delete Pool.data;

                resolve(JSON.parse(Allocator.toString()));
            });
        });

        Request.on("error", (_) => {
            reject(_);
        });

        Request.end();
    });
};

export { Configuration, Query };