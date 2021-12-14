import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface DataAwsApigatewayv2ApisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#name DataAwsApigatewayv2Apis#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#protocol_type DataAwsApigatewayv2Apis#protocol_type}
    */
    readonly protocolType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html#tags DataAwsApigatewayv2Apis#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis}
*/
export declare class DataAwsApigatewayv2Apis extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_apis.html aws_apigatewayv2_apis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApigatewayv2ApisConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsApigatewayv2ApisConfig);
    get id(): string;
    get ids(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _protocolType?;
    get protocolType(): string;
    set protocolType(value: string);
    resetProtocolType(): void;
    get protocolTypeInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-apigatewayv2-apis.d.ts.map