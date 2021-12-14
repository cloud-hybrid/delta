import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3BucketOwnershipControlsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#bucket S3BucketOwnershipControls#bucket}
    */
    readonly bucket: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#rule S3BucketOwnershipControls#rule}
    */
    readonly rule: S3BucketOwnershipControlsRule;
}
export interface S3BucketOwnershipControlsRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html#object_ownership S3BucketOwnershipControls#object_ownership}
    */
    readonly objectOwnership: string;
}
export declare function s3BucketOwnershipControlsRuleToTerraform(struct?: S3BucketOwnershipControlsRuleOutputReference | S3BucketOwnershipControlsRule): any;
export declare class S3BucketOwnershipControlsRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketOwnershipControlsRule | undefined;
    set internalValue(value: S3BucketOwnershipControlsRule | undefined);
    private _objectOwnership?;
    get objectOwnership(): string;
    set objectOwnership(value: string);
    get objectOwnershipInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls}
*/
export declare class S3BucketOwnershipControls extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_ownership_controls.html aws_s3_bucket_ownership_controls} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketOwnershipControlsConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketOwnershipControlsConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _rule;
    get rule(): S3BucketOwnershipControlsRuleOutputReference;
    putRule(value: S3BucketOwnershipControlsRule): void;
    get ruleInput(): S3BucketOwnershipControlsRule;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-bucket-ownership-controls.d.ts.map