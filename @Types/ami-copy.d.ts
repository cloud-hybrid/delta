import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface AmiCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#description AmiCopy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#destination_outpost_arn AmiCopy#destination_outpost_arn}
    */
    readonly destinationOutpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#encrypted AmiCopy#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#kms_key_id AmiCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#name AmiCopy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_id AmiCopy#source_ami_id}
    */
    readonly sourceAmiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_region AmiCopy#source_ami_region}
    */
    readonly sourceAmiRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags AmiCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags_all AmiCopy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ebs_block_device AmiCopy#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiCopyEbsBlockDevice[];
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ephemeral_block_device AmiCopy#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#timeouts AmiCopy#timeouts}
    */
    readonly timeouts?: AmiCopyTimeouts;
}
export interface AmiCopyEbsBlockDevice {
}
export declare function amiCopyEbsBlockDeviceToTerraform(struct?: AmiCopyEbsBlockDevice): any;
export interface AmiCopyEphemeralBlockDevice {
}
export declare function amiCopyEphemeralBlockDeviceToTerraform(struct?: AmiCopyEphemeralBlockDevice): any;
export interface AmiCopyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#create AmiCopy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#delete AmiCopy#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#update AmiCopy#update}
    */
    readonly update?: string;
}
export declare function amiCopyTimeoutsToTerraform(struct?: AmiCopyTimeoutsOutputReference | AmiCopyTimeouts): any;
export declare class AmiCopyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AmiCopyTimeouts | undefined;
    set internalValue(value: AmiCopyTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy}
*/
export declare class AmiCopy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiCopyConfig
    */
    constructor(scope: Construct, id: string, config: AmiCopyConfig);
    get architecture(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _destinationOutpostArn?;
    get destinationOutpostArn(): string;
    set destinationOutpostArn(value: string);
    resetDestinationOutpostArn(): void;
    get destinationOutpostArnInput(): string;
    get enaSupport(): any;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable;
    get hypervisor(): string;
    get id(): string;
    get imageLocation(): string;
    get imageOwnerAlias(): string;
    get imageType(): string;
    get kernelId(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
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
    private _sourceAmiId?;
    get sourceAmiId(): string;
    set sourceAmiId(value: string);
    get sourceAmiIdInput(): string;
    private _sourceAmiRegion?;
    get sourceAmiRegion(): string;
    set sourceAmiRegion(value: string);
    get sourceAmiRegionInput(): string;
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
    get ebsBlockDevice(): AmiCopyEbsBlockDevice[];
    set ebsBlockDevice(value: AmiCopyEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): AmiCopyEbsBlockDevice[];
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): AmiCopyEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: AmiCopyEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): AmiCopyEphemeralBlockDevice[];
    private _timeouts;
    get timeouts(): AmiCopyTimeoutsOutputReference;
    putTimeouts(value: AmiCopyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): AmiCopyTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ami-copy.d.ts.map