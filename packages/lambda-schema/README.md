# Configuration #

A rather large series of attributes used to define a construct can be drastically limited when sane defaults
can be assumed. A "construct" is truly a higher-level of abstraction - programmatic examples include:

- classes
- enumerations
- hashable types

Combined with frameworks that support `json-schema +7` validation, applications can be developed to allow for
greater type-hinting, input or data validations, and even IDE integrations that make for a much more
consistent, friendly, and safe development workflow.

Far greater, however, the potential for automation, auto-code-generative tools can begin to take form.

Here's an in-depth example:

```typescript
import FS from "fs";
import Module from "module";
import Process from "process";

import Ajv from "ajv";
import AJV, { ValidateFunction as Validate } from "ajv";
import $ from "ajv-formats";

type Generic = any;

const Import: NodeRequire = Module.createRequire( import.meta.url );

/*** Local File Type -- Relative to `import.meta.url` or `__directory` */
type File = FS.PathOrFileDescriptor | FS.PathLike | string;

interface Property {
    type: string;
    description: string;
    format: string;
    examples: any;
    enum?: object[] | string[] | number[] | boolean[];
    default?: string | object | number | string[] | object[] | number[];
    additionalProperties?: string;
    patternProperties?: string;
    uniqueItems?: boolean;
    minItems?: number;
    items: object[] | string[] | number[] | boolean[];
}

type Properties = Iterable<readonly [ string | number | symbol, Property ]>;

interface Input {
    /*** Constructor Name - Unique Identifier for Class, Unrelated to JSON-Schema */
    name: string;

    /*** Schema Title, Name */
    title: string;
    /*** Description of Schema */
    description: string;
    /*** Object type - almost always an Object or Array */
    type: "object" | [ "object", "boolean" ];
    /*** Schema Attributes, Properties */
    properties: Properties;

    /*** List of Required Attributes */
    required?: string[] | undefined | null;
    /*** References, JSON Pointers - `$defs` */
    definitions?: object[] | undefined | null;
}

interface Map {
    title: string;
    description: string;
    type: string | string[];
    properties: Properties;
    required?: string[] | undefined | null;
    definitions?: Object[] | undefined | null;
}

/*** JSON Schema Construct */
class Constructor implements Input {
    /*** Schema Identifier - `$id` */
    private readonly identifier = "$id";
    /*** Schema URL Definition - `$schema` */
    private readonly schema = "http://json-schema.org/draft-07/schema";

    /*** Constructor Name - Unique Identifier for Class, Unrelated to JSON-Schema */
    readonly name;

    /*** Schema Title, Name */
    readonly title;
    /*** Description of Schema */
    readonly description;
    /*** Object type - almost always an Object or Array */
    readonly type;

    /*** Schema Attributes, Properties */
    readonly properties: Properties;

    /*** List of Required Attributes */
    readonly required?;
    /*** References, JSON Pointers - `$defs`, `definitions` */
    readonly definitions?;

    private static Compiler = new AJV( { strict: true, allowUnionTypes: true } );
    private static Debug = Boolean( Process.env?.debug ) ?? false;

    /*** Reference Schema for IDE Resolve and Type-Hinting */
    private static Reference = Import( "./base.schema.json" );

    readonly identifiers = {
        properties: () => Object.keys( this.properties ),
        requirements: () => Object.keys( this.required ),
        definitions: () => Object.keys( this.definitions ),
        types: () => Object.values( this.type )
    };

    private readonly compilation: Validate<{ [Symbol.iterator](): Iterator<readonly [ (string | number | symbol), Property ]> }>;

    constructor(name: string, schema: File, debug: boolean = Constructor.Debug) {
        const $: typeof Constructor.Reference = Import( String( schema ) );

        this.name = name;

        this.identifier = $.$id;
        this.schema = $.$schema;

        this.title = $.title;

        this.description = $.description;
        this.type = $.type;
        this.properties = $.properties;
        this.required = $.required ?? [];
        this.definitions = $.definitions ?? [];

        this.compilation = Constructor.compile( {
            title: this.title,
            description: this.description,
            type: this.type,
            properties: this.properties,
            required: this.required,
            definitions: this.definitions
        } );

        (debug) && console.debug( "[Debug]", this );
    }

    /*** Data Validator */
    public validate(data: any): Ajv {
        Constructor.Compiler.validate( this.compilation.schema, data );

        return Constructor.Compiler;
    }

    /*** Generate Opinionated Defaults According to Definitions in Schema */
    public defaults() {
        const data: object | any = {};
        const target = this.identifiers.properties();

        target.forEach( ($) => {
            const instance: Property = Reflect.get( this.properties, $ );
            if ( instance.default ) {
                data[$] = instance.default;
            }
        } );

        return data;
    }

    /***
     * Enable Format Extensions
     *
     * @private
     * @example
     * {
     *     "type": "uri-reference"
     * }
     *
     * @returns {boolean}
     */
    private static format(): boolean {
        $( Constructor.Compiler );

        return true;
    }

    private static compile(schema: Map): Validate<{ [Symbol.iterator](): Iterator<readonly [ (string | number | symbol), Property ]> }> | Generic {
        const $ = (Constructor.format()) && Constructor.Compiler.compile( schema );

        /// If Formatting Failed, or if Errors had Occurred
        if ( !$ || $.errors ) {
            const error = new Error();

            error.name = "JSON-Schema-Validation-Error";
            error.message = "Unable to Validate JSON Schema";
            error.stack = JSON.stringify( Constructor.Compiler.errors, null, 4 );

            throw error;
        }

        return $;
    }
}

const constructor = new Constructor( "Lambda", "./lambda.schema.json", true );

const defaults = constructor.defaults();

const success = constructor.validate( { ... defaults, ... { name: "test", description: "description", uri: "./index.handler" } } );
console.log( success?.errors ?? "Successful" + "\n");

const failure = constructor.validate( defaults );
console.log( failure?.errors );

process.exit(0);
```