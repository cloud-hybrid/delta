import {FormData as Form} from "formdata-node";

type Input = { [$: string]: object | string | number | boolean };

type Entries = Array<{
    name: string;
    value: object | string | number | boolean;
    fileName?: string;
}>;

type Data = typeof Form;

export { Form };
export type { Input, Entries, Data };
export default Form;