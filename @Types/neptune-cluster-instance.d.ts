import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Neptune
*/
export interface NeptuneClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#apply_immediately NeptuneClusterInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#auto_minor_version_upgrade NeptuneClusterInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#availability_zone NeptuneClusterInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#cluster_identifier NeptuneClusterInstance#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#engine NeptuneClusterInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#engine_version NeptuneClusterInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#identifier NeptuneClusterInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#identifier_prefix NeptuneClusterInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#instance_class NeptuneClusterInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#neptune_parameter_group_name NeptuneClusterInstance#neptune_parameter_group_name}
    */
    readonly neptuneParameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#neptune_subnet_group_name NeptuneClusterInstance#neptune_subnet_group_name}
    */
    readonly neptuneSubnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#port NeptuneClusterInstance#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#preferred_backup_window NeptuneClusterInstance#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#preferred_maintenance_window NeptuneClusterInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#promotion_tier NeptuneClusterInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#publicly_accessible NeptuneClusterInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#tags NeptuneClusterInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#tags_all NeptuneClusterInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#timeouts NeptuneClusterInstance#timeouts}
    */
    readonly timeouts?: NeptuneClusterInstanceTimeouts;
}
export interface NeptuneClusterInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#create NeptuneClusterInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#delete NeptuneClusterInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html#update NeptuneClusterInstance#update}
    */
    readonly update?: string;
}
export declare function neptuneClusterInstanceTimeoutsToTerraform(struct?: NeptuneClusterInstanceTimeoutsOutputReference | NeptuneClusterInstanceTimeouts): any;
export declare class NeptuneClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NeptuneClusterInstanceTimeouts | undefined;
    set internalValue(value: NeptuneClusterInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html aws_neptune_cluster_instance}
*/
export declare class NeptuneClusterInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_instance.html aws_neptune_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterInstanceConfig
    */
    constructor(scope: Construct, id: string, config: NeptuneClusterInstanceConfig);
    get address(): string;
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable;
    get arn(): string;
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
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    get dbiResourceId(): string;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string;
    get id(): string;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string;
    private _identifierPrefix?;
    get identifierPrefix(): string;
    set identifierPrefix(value: string);
    resetIdentifierPrefix(): void;
    get identifierPrefixInput(): string;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    get instanceClassInput(): string;
    get kmsKeyArn(): string;
    private _neptuneParameterGroupName?;
    get neptuneParameterGroupName(): string;
    set neptuneParameterGroupName(value: string);
    resetNeptuneParameterGroupName(): void;
    get neptuneParameterGroupNameInput(): string;
    private _neptuneSubnetGroupName?;
    get neptuneSubnetGroupName(): string;
    set neptuneSubnetGroupName(value: string);
    resetNeptuneSubnetGroupName(): void;
    get neptuneSubnetGroupNameInput(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _preferredBackupWindow?;
    get preferredBackupWindow(): string;
    set preferredBackupWindow(value: string);
    resetPreferredBackupWindow(): void;
    get preferredBackupWindowInput(): string;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string;
    private _promotionTier?;
    get promotionTier(): number;
    set promotionTier(value: number);
    resetPromotionTier(): void;
    get promotionTierInput(): number;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable;
    get storageEncrypted(): any;
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
    get writer(): any;
    private _timeouts;
    get timeouts(): NeptuneClusterInstanceTimeoutsOutputReference;
    putTimeouts(value: NeptuneClusterInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): NeptuneClusterInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=neptune-cluster-instance.d.ts.map