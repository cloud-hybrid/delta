import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3ControlMultiRegionAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#account_id S3ControlMultiRegionAccessPointPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * details block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#details S3ControlMultiRegionAccessPointPolicy#details}
    */
    readonly details: S3ControlMultiRegionAccessPointPolicyDetails;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#timeouts S3ControlMultiRegionAccessPointPolicy#timeouts}
    */
    readonly timeouts?: S3ControlMultiRegionAccessPointPolicyTimeouts;
}
export interface S3ControlMultiRegionAccessPointPolicyDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#name S3ControlMultiRegionAccessPointPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#policy S3ControlMultiRegionAccessPointPolicy#policy}
    */
    readonly policy: string;
}
export declare function s3ControlMultiRegionAccessPointPolicyDetailsToTerraform(struct?: S3ControlMultiRegionAccessPointPolicyDetailsOutputReference | S3ControlMultiRegionAccessPointPolicyDetails): any;
export declare class S3ControlMultiRegionAccessPointPolicyDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlMultiRegionAccessPointPolicyDetails | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointPolicyDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
}
export interface S3ControlMultiRegionAccessPointPolicyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#create S3ControlMultiRegionAccessPointPolicy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#update S3ControlMultiRegionAccessPointPolicy#update}
    */
    readonly update?: string;
}
export declare function s3ControlMultiRegionAccessPointPolicyTimeoutsToTerraform(struct?: S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference | S3ControlMultiRegionAccessPointPolicyTimeouts): any;
export declare class S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlMultiRegionAccessPointPolicyTimeouts | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointPolicyTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html aws_s3control_multi_region_access_point_policy}
*/
export declare class S3ControlMultiRegionAccessPointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html aws_s3control_multi_region_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlMultiRegionAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get established(): string;
    get id(): string;
    get proposed(): string;
    private _details;
    get details(): S3ControlMultiRegionAccessPointPolicyDetailsOutputReference;
    putDetails(value: S3ControlMultiRegionAccessPointPolicyDetails): void;
    get detailsInput(): S3ControlMultiRegionAccessPointPolicyDetails;
    private _timeouts;
    get timeouts(): S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference;
    putTimeouts(value: S3ControlMultiRegionAccessPointPolicyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): S3ControlMultiRegionAccessPointPolicyTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3control-multi-region-access-point-policy.d.ts.map