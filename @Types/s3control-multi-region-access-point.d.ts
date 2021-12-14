import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3ControlMultiRegionAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#account_id S3ControlMultiRegionAccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * details block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#details S3ControlMultiRegionAccessPoint#details}
    */
    readonly details: S3ControlMultiRegionAccessPointDetails;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#timeouts S3ControlMultiRegionAccessPoint#timeouts}
    */
    readonly timeouts?: S3ControlMultiRegionAccessPointTimeouts;
}
export interface S3ControlMultiRegionAccessPointDetailsPublicAccessBlock {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}
export declare function s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference | S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): any;
export declare class S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined);
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
export interface S3ControlMultiRegionAccessPointDetailsRegion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#bucket S3ControlMultiRegionAccessPoint#bucket}
    */
    readonly bucket: string;
}
export declare function s3ControlMultiRegionAccessPointDetailsRegionToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsRegion): any;
export interface S3ControlMultiRegionAccessPointDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#name S3ControlMultiRegionAccessPoint#name}
    */
    readonly name: string;
    /**
    * public_access_block block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}
    */
    readonly publicAccessBlock?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock;
    /**
    * region block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#region S3ControlMultiRegionAccessPoint#region}
    */
    readonly region: S3ControlMultiRegionAccessPointDetailsRegion[];
}
export declare function s3ControlMultiRegionAccessPointDetailsToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsOutputReference | S3ControlMultiRegionAccessPointDetails): any;
export declare class S3ControlMultiRegionAccessPointDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlMultiRegionAccessPointDetails | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _publicAccessBlock;
    get publicAccessBlock(): S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference;
    putPublicAccessBlock(value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): void;
    resetPublicAccessBlock(): void;
    get publicAccessBlockInput(): S3ControlMultiRegionAccessPointDetailsPublicAccessBlock;
    private _region?;
    get region(): S3ControlMultiRegionAccessPointDetailsRegion[];
    set region(value: S3ControlMultiRegionAccessPointDetailsRegion[]);
    get regionInput(): S3ControlMultiRegionAccessPointDetailsRegion[];
}
export interface S3ControlMultiRegionAccessPointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#create S3ControlMultiRegionAccessPoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#delete S3ControlMultiRegionAccessPoint#delete}
    */
    readonly delete?: string;
}
export declare function s3ControlMultiRegionAccessPointTimeoutsToTerraform(struct?: S3ControlMultiRegionAccessPointTimeoutsOutputReference | S3ControlMultiRegionAccessPointTimeouts): any;
export declare class S3ControlMultiRegionAccessPointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlMultiRegionAccessPointTimeouts | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html aws_s3control_multi_region_access_point}
*/
export declare class S3ControlMultiRegionAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html aws_s3control_multi_region_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlMultiRegionAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get alias(): string;
    get arn(): string;
    get domainName(): string;
    get id(): string;
    get status(): string;
    private _details;
    get details(): S3ControlMultiRegionAccessPointDetailsOutputReference;
    putDetails(value: S3ControlMultiRegionAccessPointDetails): void;
    get detailsInput(): S3ControlMultiRegionAccessPointDetails;
    private _timeouts;
    get timeouts(): S3ControlMultiRegionAccessPointTimeoutsOutputReference;
    putTimeouts(value: S3ControlMultiRegionAccessPointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): S3ControlMultiRegionAccessPointTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3control-multi-region-access-point.d.ts.map