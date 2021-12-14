import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html#region DataAwsCloudfrontLogDeliveryCanonicalUserId#region}
    */
    readonly region?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html aws_cloudfront_log_delivery_canonical_user_id}
*/
export declare class DataAwsCloudfrontLogDeliveryCanonicalUserId extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_log_delivery_canonical_user_id.html aws_cloudfront_log_delivery_canonical_user_id} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudfrontLogDeliveryCanonicalUserIdConfig);
    get id(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudfront-log-delivery-canonical-user-id.d.ts.map