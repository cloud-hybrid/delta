import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface AmiFromInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#description AmiFromInstance#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#name AmiFromInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}
    */
    readonly snapshotWithoutReboot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#source_instance_id AmiFromInstance#source_instance_id}
    */
    readonly sourceInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags AmiFromInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags_all AmiFromInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ebs_block_device AmiFromInstance#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ephemeral_block_device AmiFromInstance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#timeouts AmiFromInstance#timeouts}
    */
    readonly timeouts?: AmiFromInstanceTimeouts;
}
export interface AmiFromInstanceEbsBlockDevice {
}
export declare function amiFromInstanceEbsBlockDeviceToTerraform(struct?: AmiFromInstanceEbsBlockDevice): any;
export interface AmiFromInstanceEphemeralBlockDevice {
}
export declare function amiFromInstanceEphemeralBlockDeviceToTerraform(struct?: AmiFromInstanceEphemeralBlockDevice): any;
export interface AmiFromInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#create AmiFromInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#delete AmiFromInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#update AmiFromInstance#update}
    */
    readonly update?: string;
}
export declare function amiFromInstanceTimeoutsToTerraform(struct?: AmiFromInstanceTimeoutsOutputReference | AmiFromInstanceTimeouts): any;
export declare class AmiFromInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AmiFromInstanceTimeouts | undefined;
    set internalValue(value: AmiFromInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance}
*/
export declare class AmiFromInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiFromInstanceConfig
    */
    constructor(scope: Construct, id: string, config: AmiFromInstanceConfig);
    get architecture(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get enaSupport(): any;
    get hypervisor(): string;
    get id(): string;
    get imageLocation(): string;
    get imageOwnerAlias(): string;
    get imageType(): string;
    get kernelId(): string;
    get manageEbsSnapshots(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerId(): string;
    get platform(): string;
    get platformDetails(): string;
    get public(): any;
    get ramdiskId(): string;
    get rootDeviceName(): string;
    get rootSnapshotId(): string;
    private _snapshotWithoutReboot?;
    get snapshotWithoutReboot(): boolean | cdktf.IResolvable;
    set snapshotWithoutReboot(value: boolean | cdktf.IResolvable);
    resetSnapshotWithoutReboot(): void;
    get snapshotWithoutRebootInput(): boolean | cdktf.IResolvable;
    private _sourceInstanceId?;
    get sourceInstanceId(): string;
    set sourceInstanceId(value: string);
    get sourceInstanceIdInput(): string;
    get sriovNetSupport(): string;
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
    get usageOperation(): string;
    get virtualizationType(): string;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): AmiFromInstanceEbsBlockDevice[];
    set ebsBlockDevice(value: AmiFromInstanceEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): AmiFromInstanceEbsBlockDevice[];
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): AmiFromInstanceEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: AmiFromInstanceEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): AmiFromInstanceEphemeralBlockDevice[];
    private _timeouts;
    get timeouts(): AmiFromInstanceTimeoutsOutputReference;
    putTimeouts(value: AmiFromInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): AmiFromInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ami-from-instance.d.ts.map