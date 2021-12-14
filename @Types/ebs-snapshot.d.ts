import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface EbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#description EbsSnapshot#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#tags EbsSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#tags_all EbsSnapshot#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#volume_id EbsSnapshot#volume_id}
    */
    readonly volumeId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#timeouts EbsSnapshot#timeouts}
    */
    readonly timeouts?: EbsSnapshotTimeouts;
}
export interface EbsSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#create EbsSnapshot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#delete EbsSnapshot#delete}
    */
    readonly delete?: string;
}
export declare function ebsSnapshotTimeoutsToTerraform(struct?: EbsSnapshotTimeoutsOutputReference | EbsSnapshotTimeouts): any;
export declare class EbsSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EbsSnapshotTimeouts | undefined;
    set internalValue(value: EbsSnapshotTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot}
*/
export declare class EbsSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: EbsSnapshotConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get encrypted(): any;
    get id(): string;
    get kmsKeyId(): string;
    get ownerAlias(): string;
    get ownerId(): string;
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
    private _volumeId?;
    get volumeId(): string;
    set volumeId(value: string);
    get volumeIdInput(): string;
    get volumeSize(): number;
    private _timeouts;
    get timeouts(): EbsSnapshotTimeoutsOutputReference;
    putTimeouts(value: EbsSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EbsSnapshotTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ebs-snapshot.d.ts.map