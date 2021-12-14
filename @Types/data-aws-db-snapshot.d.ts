import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsDbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#include_public DataAwsDbSnapshot#include_public}
    */
    readonly includePublic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#include_shared DataAwsDbSnapshot#include_shared}
    */
    readonly includeShared?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#most_recent DataAwsDbSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html#snapshot_type DataAwsDbSnapshot#snapshot_type}
    */
    readonly snapshotType?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot}
*/
export declare class DataAwsDbSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbSnapshotConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDbSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZone(): string;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    resetDbInstanceIdentifier(): void;
    get dbInstanceIdentifierInput(): string;
    get dbSnapshotArn(): string;
    private _dbSnapshotIdentifier?;
    get dbSnapshotIdentifier(): string;
    set dbSnapshotIdentifier(value: string);
    resetDbSnapshotIdentifier(): void;
    get dbSnapshotIdentifierInput(): string;
    get encrypted(): any;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    private _includePublic?;
    get includePublic(): boolean | cdktf.IResolvable;
    set includePublic(value: boolean | cdktf.IResolvable);
    resetIncludePublic(): void;
    get includePublicInput(): boolean | cdktf.IResolvable;
    private _includeShared?;
    get includeShared(): boolean | cdktf.IResolvable;
    set includeShared(value: boolean | cdktf.IResolvable);
    resetIncludeShared(): void;
    get includeSharedInput(): boolean | cdktf.IResolvable;
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable;
    get optionGroupName(): string;
    get port(): number;
    get snapshotCreateTime(): string;
    private _snapshotType?;
    get snapshotType(): string;
    set snapshotType(value: string);
    resetSnapshotType(): void;
    get snapshotTypeInput(): string;
    get sourceDbSnapshotIdentifier(): string;
    get sourceRegion(): string;
    get status(): string;
    get storageType(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-db-snapshot.d.ts.map