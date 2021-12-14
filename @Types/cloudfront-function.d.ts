import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#code CloudfrontFunction#code}
    */
    readonly code: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#comment CloudfrontFunction#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#name CloudfrontFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#publish CloudfrontFunction#publish}
    */
    readonly publish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html#runtime CloudfrontFunction#runtime}
    */
    readonly runtime: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html aws_cloudfront_function}
*/
export declare class CloudfrontFunction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_function.html aws_cloudfront_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFunctionConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontFunctionConfig);
    get arn(): string;
    private _code?;
    get code(): string;
    set code(value: string);
    get codeInput(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    get etag(): string;
    get id(): string;
    get liveStageEtag(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _publish?;
    get publish(): boolean | cdktf.IResolvable;
    set publish(value: boolean | cdktf.IResolvable);
    resetPublish(): void;
    get publishInput(): boolean | cdktf.IResolvable;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    get runtimeInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-function.d.ts.map