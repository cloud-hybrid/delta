import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS File System FSx
*/
export interface FsxOntapVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#junction_path FsxOntapVolume#junction_path}
    */
    readonly junctionPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#name FsxOntapVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#security_style FsxOntapVolume#security_style}
    */
    readonly securityStyle?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#size_in_megabytes FsxOntapVolume#size_in_megabytes}
    */
    readonly sizeInMegabytes: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}
    */
    readonly storageEfficiencyEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}
    */
    readonly storageVirtualMachineId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#tags FsxOntapVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#tags_all FsxOntapVolume#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#volume_type FsxOntapVolume#volume_type}
    */
    readonly volumeType?: string;
    /**
    * tiering_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#tiering_policy FsxOntapVolume#tiering_policy}
    */
    readonly tieringPolicy?: FsxOntapVolumeTieringPolicy;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#timeouts FsxOntapVolume#timeouts}
    */
    readonly timeouts?: FsxOntapVolumeTimeouts;
}
export interface FsxOntapVolumeTieringPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#cooling_period FsxOntapVolume#cooling_period}
    */
    readonly coolingPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#name FsxOntapVolume#name}
    */
    readonly name?: string;
}
export declare function fsxOntapVolumeTieringPolicyToTerraform(struct?: FsxOntapVolumeTieringPolicyOutputReference | FsxOntapVolumeTieringPolicy): any;
export declare class FsxOntapVolumeTieringPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxOntapVolumeTieringPolicy | undefined;
    set internalValue(value: FsxOntapVolumeTieringPolicy | undefined);
    private _coolingPeriod?;
    get coolingPeriod(): number;
    set coolingPeriod(value: number);
    resetCoolingPeriod(): void;
    get coolingPeriodInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
}
export interface FsxOntapVolumeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#create FsxOntapVolume#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#delete FsxOntapVolume#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html#update FsxOntapVolume#update}
    */
    readonly update?: string;
}
export declare function fsxOntapVolumeTimeoutsToTerraform(struct?: FsxOntapVolumeTimeoutsOutputReference | FsxOntapVolumeTimeouts): any;
export declare class FsxOntapVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FsxOntapVolumeTimeouts | undefined;
    set internalValue(value: FsxOntapVolumeTimeouts | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html aws_fsx_ontap_volume}
*/
export declare class FsxOntapVolume extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_volume.html aws_fsx_ontap_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapVolumeConfig
    */
    constructor(scope: Construct, id: string, config: FsxOntapVolumeConfig);
    get arn(): string;
    get fileSystemId(): string;
    get flexcacheEndpointType(): string;
    get id(): string;
    private _junctionPath?;
    get junctionPath(): string;
    set junctionPath(value: string);
    get junctionPathInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ontapVolumeType(): string;
    private _securityStyle?;
    get securityStyle(): string;
    set securityStyle(value: string);
    resetSecurityStyle(): void;
    get securityStyleInput(): string;
    private _sizeInMegabytes?;
    get sizeInMegabytes(): number;
    set sizeInMegabytes(value: number);
    get sizeInMegabytesInput(): number;
    private _storageEfficiencyEnabled?;
    get storageEfficiencyEnabled(): boolean | cdktf.IResolvable;
    set storageEfficiencyEnabled(value: boolean | cdktf.IResolvable);
    get storageEfficiencyEnabledInput(): boolean | cdktf.IResolvable;
    private _storageVirtualMachineId?;
    get storageVirtualMachineId(): string;
    set storageVirtualMachineId(value: string);
    get storageVirtualMachineIdInput(): string;
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
    get uuid(): string;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string;
    private _tieringPolicy;
    get tieringPolicy(): FsxOntapVolumeTieringPolicyOutputReference;
    putTieringPolicy(value: FsxOntapVolumeTieringPolicy): void;
    resetTieringPolicy(): void;
    get tieringPolicyInput(): FsxOntapVolumeTieringPolicy;
    private _timeouts;
    get timeouts(): FsxOntapVolumeTimeoutsOutputReference;
    putTimeouts(value: FsxOntapVolumeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): FsxOntapVolumeTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=fsx-ontap-volume.d.ts.map