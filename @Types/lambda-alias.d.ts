import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#description LambdaAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#function_name LambdaAlias#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#function_version LambdaAlias#function_version}
    */
    readonly functionVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#name LambdaAlias#name}
    */
    readonly name: string;
    /**
    * routing_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#routing_config LambdaAlias#routing_config}
    */
    readonly routingConfig?: LambdaAliasRoutingConfig;
}
export interface LambdaAliasRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#additional_version_weights LambdaAlias#additional_version_weights}
    */
    readonly additionalVersionWeights?: {
        [key: string]: number;
    } | cdktf.IResolvable;
}
export declare function lambdaAliasRoutingConfigToTerraform(struct?: LambdaAliasRoutingConfigOutputReference | LambdaAliasRoutingConfig): any;
export declare class LambdaAliasRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaAliasRoutingConfig | undefined;
    set internalValue(value: LambdaAliasRoutingConfig | undefined);
    private _additionalVersionWeights?;
    get additionalVersionWeights(): {
        [key: string]: number;
    } | cdktf.IResolvable;
    set additionalVersionWeights(value: {
        [key: string]: number;
    } | cdktf.IResolvable);
    resetAdditionalVersionWeights(): void;
    get additionalVersionWeightsInput(): cdktf.IResolvable | {
        [key: string]: number;
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias}
*/
export declare class LambdaAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaAliasConfig
    */
    constructor(scope: Construct, id: string, config: LambdaAliasConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    private _functionVersion?;
    get functionVersion(): string;
    set functionVersion(value: string);
    get functionVersionInput(): string;
    get id(): string;
    get invokeArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _routingConfig;
    get routingConfig(): LambdaAliasRoutingConfigOutputReference;
    putRoutingConfig(value: LambdaAliasRoutingConfig): void;
    resetRoutingConfig(): void;
    get routingConfigInput(): LambdaAliasRoutingConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-alias.d.ts.map