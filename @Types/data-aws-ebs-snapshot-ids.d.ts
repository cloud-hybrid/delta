import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEbsSnapshotIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#owners DataAwsEbsSnapshotIds#owners}
    */
    readonly owners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#restorable_by_user_ids DataAwsEbsSnapshotIds#restorable_by_user_ids}
    */
    readonly restorableByUserIds?: string[];
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#filter DataAwsEbsSnapshotIds#filter}
    */
    readonly filter?: DataAwsEbsSnapshotIdsFilter[];
}
export interface DataAwsEbsSnapshotIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#name DataAwsEbsSnapshotIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html#values DataAwsEbsSnapshotIds#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsSnapshotIdsFilterToTerraform(struct?: DataAwsEbsSnapshotIdsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html aws_ebs_snapshot_ids}
*/
export declare class DataAwsEbsSnapshotIds extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_snapshot_ids.html aws_ebs_snapshot_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsSnapshotIdsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsSnapshotIdsConfig);
    get id(): string;
    get ids(): string[];
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
    private _filter?;
    get filter(): DataAwsEbsSnapshotIdsFilter[];
    set filter(value: DataAwsEbsSnapshotIdsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEbsSnapshotIdsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ebs-snapshot-ids.d.ts.map