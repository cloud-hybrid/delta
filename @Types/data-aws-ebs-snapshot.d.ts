import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#most_recent DataAwsEbsSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#owners DataAwsEbsSnapshot#owners}
    */
    readonly owners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#restorable_by_user_ids DataAwsEbsSnapshot#restorable_by_user_ids}
    */
    readonly restorableByUserIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#snapshot_ids DataAwsEbsSnapshot#snapshot_ids}
    */
    readonly snapshotIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#tags DataAwsEbsSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#filter DataAwsEbsSnapshot#filter}
    */
    readonly filter?: DataAwsEbsSnapshotFilter[];
}
export interface DataAwsEbsSnapshotFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#name DataAwsEbsSnapshot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html#values DataAwsEbsSnapshot#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsSnapshotFilterToTerraform(struct?: DataAwsEbsSnapshotFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot}
*/
export declare class DataAwsEbsSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot.html aws_ebs_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsSnapshotConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    get description(): string;
    get encrypted(): any;
    get id(): string;
    get kmsKeyId(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable;
    get ownerAlias(): string;
    get ownerId(): string;
    private _owners?;
    get owners(): string[];
    set owners(value: string[]);
    resetOwners(): void;
    get ownersInput(): string[];
    private _restorableByUserIds?;
    get restorableByUserIds(): string[];
    set restorableByUserIds(value: string[]);
    resetRestorableByUserIds(): void;
    get restorableByUserIdsInput(): string[];
    get snapshotId(): string;
    private _snapshotIds?;
    get snapshotIds(): string[];
    set snapshotIds(value: string[]);
    resetSnapshotIds(): void;
    get snapshotIdsInput(): string[];
    get state(): string;
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
    get volumeId(): string;
    get volumeSize(): number;
    private _filter?;
    get filter(): DataAwsEbsSnapshotFilter[];
    set filter(value: DataAwsEbsSnapshotFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEbsSnapshotFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ebs-snapshot.d.ts.map