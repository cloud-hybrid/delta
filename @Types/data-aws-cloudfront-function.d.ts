import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html#name DataAwsCloudfrontFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html#stage DataAwsCloudfrontFunction#stage}
    */
    readonly stage: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html aws_cloudfront_function}
*/
export declare class DataAwsCloudfrontFunction extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_function.html aws_cloudfront_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontFunctionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudfrontFunctionConfig);
    get arn(): string;
    get code(): string;
    get comment(): string;
    get etag(): string;
    get id(): string;
    get lastModifiedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get runtime(): string;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    get stageInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudfront-function.d.ts.map