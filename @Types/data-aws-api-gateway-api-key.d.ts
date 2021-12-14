import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface DataAwsApiGatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html#id DataAwsApiGatewayApiKey#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html#tags DataAwsApiGatewayApiKey#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html aws_api_gateway_api_key}
*/
export declare class DataAwsApiGatewayApiKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html aws_api_gateway_api_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayApiKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsApiGatewayApiKeyConfig);
    get createdDate(): string;
    get description(): string;
    get enabled(): any;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedDate(): string;
    get name(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get value(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-api-gateway-api-key.d.ts.map