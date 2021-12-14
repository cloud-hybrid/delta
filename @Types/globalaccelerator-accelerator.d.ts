import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Global Accelerator
*/
export interface GlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#enabled GlobalacceleratorAccelerator#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#ip_address_type GlobalacceleratorAccelerator#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#name GlobalacceleratorAccelerator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags GlobalacceleratorAccelerator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags_all GlobalacceleratorAccelerator#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#attributes GlobalacceleratorAccelerator#attributes}
    */
    readonly attributes?: GlobalacceleratorAcceleratorAttributes;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#timeouts GlobalacceleratorAccelerator#timeouts}
    */
    readonly timeouts?: GlobalacceleratorAcceleratorTimeouts;
}
export declare class GlobalacceleratorAcceleratorIpSets extends cdktf.ComplexComputedList {
    get ipAddresses(): string[];
    get ipFamily(): string;
}
export interface GlobalacceleratorAcceleratorAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}
    */
    readonly flowLogsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}
    */
    readonly flowLogsS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}
    */
    readonly flowLogsS3Prefix?: string;
}
export declare function globalacceleratorAcceleratorAttributesToTerraform(struct?: GlobalacceleratorAcceleratorAttributesOutputReference | GlobalacceleratorAcceleratorAttributes): any;
export declare class GlobalacceleratorAcceleratorAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlobalacceleratorAcceleratorAttributes | undefined;
    set internalValue(value: GlobalacceleratorAcceleratorAttributes | undefined);
    private _flowLogsEnabled?;
    get flowLogsEnabled(): boolean | cdktf.IResolvable;
    set flowLogsEnabled(value: boolean | cdktf.IResolvable);
    resetFlowLogsEnabled(): void;
    get flowLogsEnabledInput(): boolean | cdktf.IResolvable;
    private _flowLogsS3Bucket?;
    get flowLogsS3Bucket(): string;
    set flowLogsS3Bucket(value: string);
    resetFlowLogsS3Bucket(): void;
    get flowLogsS3BucketInput(): string;
    private _flowLogsS3Prefix?;
    get flowLogsS3Prefix(): string;
    set flowLogsS3Prefix(value: string);
    resetFlowLogsS3Prefix(): void;
    get flowLogsS3PrefixInput(): string;
}
export interface GlobalacceleratorAcceleratorTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#create GlobalacceleratorAccelerator#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#update GlobalacceleratorAccelerator#update}
    */
    readonly update?: string;
}
export declare function globalacceleratorAcceleratorTimeoutsToTerraform(struct?: GlobalacceleratorAcceleratorTimeoutsOutputReference | GlobalacceleratorAcceleratorTimeouts): any;
export declare class GlobalacceleratorAcceleratorTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlobalacceleratorAcceleratorTimeouts | undefined;
    set internalValue(value: GlobalacceleratorAcceleratorTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}
*/
export declare class GlobalacceleratorAccelerator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorAcceleratorConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig);
    get dnsName(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get hostedZoneId(): string;
    get id(): string;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string;
    ipSets(index: string): GlobalacceleratorAcceleratorIpSets;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _attributes;
    get attributes(): GlobalacceleratorAcceleratorAttributesOutputReference;
    putAttributes(value: GlobalacceleratorAcceleratorAttributes): void;
    resetAttributes(): void;
    get attributesInput(): GlobalacceleratorAcceleratorAttributes;
    private _timeouts;
    get timeouts(): GlobalacceleratorAcceleratorTimeoutsOutputReference;
    putTimeouts(value: GlobalacceleratorAcceleratorTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): GlobalacceleratorAcceleratorTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=globalaccelerator-accelerator.d.ts.map