import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudHSM
*/
export interface CloudhsmV2HsmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#availability_zone CloudhsmV2Hsm#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#cluster_id CloudhsmV2Hsm#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#ip_address CloudhsmV2Hsm#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#subnet_id CloudhsmV2Hsm#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#timeouts CloudhsmV2Hsm#timeouts}
    */
    readonly timeouts?: CloudhsmV2HsmTimeouts;
}
export interface CloudhsmV2HsmTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#create CloudhsmV2Hsm#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html#delete CloudhsmV2Hsm#delete}
    */
    readonly delete?: string;
}
export declare function cloudhsmV2HsmTimeoutsToTerraform(struct?: CloudhsmV2HsmTimeoutsOutputReference | CloudhsmV2HsmTimeouts): any;
export declare class CloudhsmV2HsmTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudhsmV2HsmTimeouts | undefined;
    set internalValue(value: CloudhsmV2HsmTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm}
*/
export declare class CloudhsmV2Hsm extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html aws_cloudhsm_v2_hsm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2HsmConfig
    */
    constructor(scope: Construct, id: string, config: CloudhsmV2HsmConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    get hsmEniId(): string;
    get hsmId(): string;
    get hsmState(): string;
    get id(): string;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
    private _timeouts;
    get timeouts(): CloudhsmV2HsmTimeoutsOutputReference;
    putTimeouts(value: CloudhsmV2HsmTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): CloudhsmV2HsmTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudhsm-v2-hsm.d.ts.map