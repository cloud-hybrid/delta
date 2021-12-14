import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3AccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#account_id S3AccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#bucket S3AccessPoint#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#name S3AccessPoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#policy S3AccessPoint#policy}
    */
    readonly policy?: string;
    /**
    * public_access_block_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#public_access_block_configuration S3AccessPoint#public_access_block_configuration}
    */
    readonly publicAccessBlockConfiguration?: S3AccessPointPublicAccessBlockConfiguration;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_configuration S3AccessPoint#vpc_configuration}
    */
    readonly vpcConfiguration?: S3AccessPointVpcConfiguration;
}
export interface S3AccessPointPublicAccessBlockConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_acls S3AccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#block_public_policy S3AccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#ignore_public_acls S3AccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#restrict_public_buckets S3AccessPoint#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}
export declare function s3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: S3AccessPointPublicAccessBlockConfigurationOutputReference | S3AccessPointPublicAccessBlockConfiguration): any;
export declare class S3AccessPointPublicAccessBlockConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3AccessPointPublicAccessBlockConfiguration | undefined;
    set internalValue(value: S3AccessPointPublicAccessBlockConfiguration | undefined);
    private _blockPublicAcls?;
    get blockPublicAcls(): boolean | cdktf.IResolvable;
    set blockPublicAcls(value: boolean | cdktf.IResolvable);
    resetBlockPublicAcls(): void;
    get blockPublicAclsInput(): boolean | cdktf.IResolvable;
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean | cdktf.IResolvable;
    set blockPublicPolicy(value: boolean | cdktf.IResolvable);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | cdktf.IResolvable;
    private _ignorePublicAcls?;
    get ignorePublicAcls(): boolean | cdktf.IResolvable;
    set ignorePublicAcls(value: boolean | cdktf.IResolvable);
    resetIgnorePublicAcls(): void;
    get ignorePublicAclsInput(): boolean | cdktf.IResolvable;
    private _restrictPublicBuckets?;
    get restrictPublicBuckets(): boolean | cdktf.IResolvable;
    set restrictPublicBuckets(value: boolean | cdktf.IResolvable);
    resetRestrictPublicBuckets(): void;
    get restrictPublicBucketsInput(): boolean | cdktf.IResolvable;
}
export interface S3AccessPointVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html#vpc_id S3AccessPoint#vpc_id}
    */
    readonly vpcId: string;
}
export declare function s3AccessPointVpcConfigurationToTerraform(struct?: S3AccessPointVpcConfigurationOutputReference | S3AccessPointVpcConfiguration): any;
export declare class S3AccessPointVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3AccessPointVpcConfiguration | undefined;
    set internalValue(value: S3AccessPointVpcConfiguration | undefined);
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point}
*/
export declare class S3AccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_access_point.html aws_s3_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3AccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get alias(): string;
    get arn(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get domainName(): string;
    endpoints(key: string): string;
    get hasPublicAccessPolicy(): any;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get networkOrigin(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    private _publicAccessBlockConfiguration;
    get publicAccessBlockConfiguration(): S3AccessPointPublicAccessBlockConfigurationOutputReference;
    putPublicAccessBlockConfiguration(value: S3AccessPointPublicAccessBlockConfiguration): void;
    resetPublicAccessBlockConfiguration(): void;
    get publicAccessBlockConfigurationInput(): S3AccessPointPublicAccessBlockConfiguration;
    private _vpcConfiguration;
    get vpcConfiguration(): S3AccessPointVpcConfigurationOutputReference;
    putVpcConfiguration(value: S3AccessPointVpcConfiguration): void;
    resetVpcConfiguration(): void;
    get vpcConfigurationInput(): S3AccessPointVpcConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-access-point.d.ts.map