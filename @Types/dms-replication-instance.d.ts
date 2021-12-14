import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Database Migration Service
*/
export interface DmsReplicationInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#allocated_storage DmsReplicationInstance#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#apply_immediately DmsReplicationInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#availability_zone DmsReplicationInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#engine_version DmsReplicationInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#kms_key_arn DmsReplicationInstance#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#multi_az DmsReplicationInstance#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#publicly_accessible DmsReplicationInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_instance_class DmsReplicationInstance#replication_instance_class}
    */
    readonly replicationInstanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_instance_id DmsReplicationInstance#replication_instance_id}
    */
    readonly replicationInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}
    */
    readonly replicationSubnetGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#tags DmsReplicationInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#tags_all DmsReplicationInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#timeouts DmsReplicationInstance#timeouts}
    */
    readonly timeouts?: DmsReplicationInstanceTimeouts;
}
export interface DmsReplicationInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#create DmsReplicationInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#delete DmsReplicationInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#update DmsReplicationInstance#update}
    */
    readonly update?: string;
}
export declare function dmsReplicationInstanceTimeoutsToTerraform(struct?: DmsReplicationInstanceTimeoutsOutputReference | DmsReplicationInstanceTimeouts): any;
export declare class DmsReplicationInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DmsReplicationInstanceTimeouts | undefined;
    set internalValue(value: DmsReplicationInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance}
*/
export declare class DmsReplicationInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DmsReplicationInstanceConfig);
    private _allocatedStorage?;
    get allocatedStorage(): number;
    set allocatedStorage(value: number);
    resetAllocatedStorage(): void;
    get allocatedStorageInput(): number;
    private _allowMajorVersionUpgrade?;
    get allowMajorVersionUpgrade(): boolean | cdktf.IResolvable;
    set allowMajorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAllowMajorVersionUpgrade(): void;
    get allowMajorVersionUpgradeInput(): boolean | cdktf.IResolvable;
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    resetMultiAz(): void;
    get multiAzInput(): boolean | cdktf.IResolvable;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable;
    get replicationInstanceArn(): string;
    private _replicationInstanceClass?;
    get replicationInstanceClass(): string;
    set replicationInstanceClass(value: string);
    get replicationInstanceClassInput(): string;
    private _replicationInstanceId?;
    get replicationInstanceId(): string;
    set replicationInstanceId(value: string);
    get replicationInstanceIdInput(): string;
    get replicationInstancePrivateIps(): string[];
    get replicationInstancePublicIps(): string[];
    private _replicationSubnetGroupId?;
    get replicationSubnetGroupId(): string;
    set replicationSubnetGroupId(value: string);
    resetReplicationSubnetGroupId(): void;
    get replicationSubnetGroupIdInput(): string;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[];
    private _timeouts;
    get timeouts(): DmsReplicationInstanceTimeoutsOutputReference;
    putTimeouts(value: DmsReplicationInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DmsReplicationInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dms-replication-instance.d.ts.map