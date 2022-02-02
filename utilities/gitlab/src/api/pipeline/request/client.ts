import HTTPs from "https";
import { Form } from "./form-data.js";

import { Options } from "./options.js";

interface Response {
    response: string;
    headers: {
        link: string;
        "x-next-page": string;
        "x-page": string;
        "x-per-page": string;
        "x-prev-page": string;
        "x-request-id": string;
        "x-runtime": string;
        "x-total": string;
        "x-total-pages": string;
    };
    status: {
        code?: number,
        message?: string
    };
}

type Data = Response | any;

const Client = (input: Options): Promise<Data> => new Promise( (resolve, reject) => {
    const Configuration: Options = input;

    const $: Data = {
        response: null,
        headers: {},
        status: {
            code: -1,
            message: ""
        }
    };

    const Request = HTTPs.request( Configuration, (response) => {
        $.status.code = response.statusCode;
        $.status.message = response.statusMessage;
        $.headers = response.headers;

        response.setEncoding( "utf8" );
        response.on( "data", (chunk) => {
            $.response = ($.response) ? $.response + chunk : chunk;
        } );
    } );

    Request.on( "error", (e) => {
        reject( e );
    } );

    // Post Data ...
//    (data) && Request.write(data);

    Request.end();

    Request.on( "close", () => {
        resolve( $ );
    } );
} );

export default Client;
