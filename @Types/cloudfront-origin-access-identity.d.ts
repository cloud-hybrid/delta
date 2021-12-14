import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontOriginAccessIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html#comment CloudfrontOriginAccessIdentity#comment}
    */
    readonly comment?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity}
*/
export declare class CloudfrontOriginAccessIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity.html aws_cloudfront_origin_access_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontOriginAccessIdentityConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CloudfrontOriginAccessIdentityConfig);
    get callerReference(): string;
    get cloudfrontAccessIdentityPath(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    get etag(): string;
    get iamArn(): string;
    get id(): string;
    get s3CanonicalUserId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-origin-access-identity.d.ts.map