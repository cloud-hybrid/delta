/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import Path from "path";
import Process from "process";

import AWS from "@cdktf/provider-aws";

import { Construct } from "constructs";

import { TagKey, TagValue } from "aws-sdk/clients/configservice.js";

import { App, TerraformStack, TerraformOutput } from "cdktf";

import { Apigatewayv2Api, Apigatewayv2ApiConfig } from "@cdktf/provider-aws/lib/apigatewayv2";

interface Tag {
    /**
     * One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
     */

    Key?: TagKey;

    /**
     * The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
     */

    Value?: TagValue;
}

type Any = Symbol;
type Tags = Tag[];
type Protocol = "WEBSOCKET" | "HTTP";

type Configuration = Apigatewayv2ApiConfig;

type Constructor = Function;
type Provider = AWS.AwsProvider;

/***
 *
 * The following configuration instantiates a "Quick-Create API" given the following input parameters.
 * Quick create produces an HTTP API with an integration, a default catch-all route, and a default stage
 * which is configured to automatically deploy changes.
 *
 */

interface Settings {
    /// --> stage: string,
    /// --> version: string,

    name: string,
    description: string,
    protocol: Protocol,
    target: string
}

const Provider = (instance: TerraformStack) => {
    new AWS.AwsProvider(instance, "AWS-Provider-ID", {
        region: "us-east-2",
    });
};

class TF extends TerraformStack {}

class Stack extends TF {
    public gateway: Apigatewayv2Api;
    public static Gateway: Constructor = (instance: Stack, Data: Apigatewayv2Api) => {
        instance.gateway = Data;
    };

    public output: Any;
    public static Output: Constructor = (instance: Stack, output: Any) => {
        instance.output = output;
    };

    constructor(
        scope: Construct,
        {
            name,
            protocol,
        }: Settings,
        overwrites: Configuration | {} = {},
    ) {
        super(scope, name);

        /// ==> Cloud Provider
        Provider(this);

        // Create and Configure API Gateway
        const Gateway = new AWS.apigatewayv2.Apigatewayv2Api(this, "AWS-API-Gateway-Version-2", {
            name: name,
            protocolType: protocol,
            ... overwrites,
        });

        /// --> Data Attributes Binding
        Stack.Gateway(this, Gateway);

        /// --> Define Stateful Stack Attributes
        const Output = new TerraformOutput(this, "TF-Output-API-Gateway-URL", {
            value: {
                Name: name,
            },
        });

        // --> Stack Data Output
        Stack.Output(this, Output);
    }
}

class Gateway extends Stack {}

const Application = new App({
    outdir: Path.relative(Process.cwd(), "distribution"),
    skipValidation: false,
    stackTraces: true,
});

export { Gateway, Configuration, Protocol };

export default Gateway;