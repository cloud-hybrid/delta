import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#db_instance_identifier DbSnapshot#db_instance_identifier}
    */
    readonly dbInstanceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#tags DbSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#tags_all DbSnapshot#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#timeouts DbSnapshot#timeouts}
    */
    readonly timeouts?: DbSnapshotTimeouts;
}
export interface DbSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html#read DbSnapshot#read}
    */
    readonly read?: string;
}
export declare function dbSnapshotTimeoutsToTerraform(struct?: DbSnapshotTimeoutsOutputReference | DbSnapshotTimeouts): any;
export declare class DbSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbSnapshotTimeouts | undefined;
    set internalValue(value: DbSnapshotTimeouts | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot}
*/
export declare class DbSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_snapshot.html aws_db_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: DbSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZone(): string;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    get dbInstanceIdentifierInput(): string;
    get dbSnapshotArn(): string;
    private _dbSnapshotIdentifier?;
    get dbSnapshotIdentifier(): string;
    set dbSnapshotIdentifier(value: string);
    get dbSnapshotIdentifierInput(): string;
    get encrypted(): any;
    get engine(): string;
    get engineVersion(): string;
    get id(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    get optionGroupName(): string;
    get port(): number;
    get snapshotType(): string;
    get sourceDbSnapshotIdentifier(): string;
    get sourceRegion(): string;
    get status(): string;
    get storageType(): string;
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
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DbSnapshotTimeoutsOutputReference;
    putTimeouts(value: DbSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DbSnapshotTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-snapshot.d.ts.map