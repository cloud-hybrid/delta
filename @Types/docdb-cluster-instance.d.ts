import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DocumentDB
*/
export interface DocdbClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#apply_immediately DocdbClusterInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#availability_zone DocdbClusterInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}
    */
    readonly caCertIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#cluster_identifier DocdbClusterInstance#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#engine DocdbClusterInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#identifier DocdbClusterInstance#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#identifier_prefix DocdbClusterInstance#identifier_prefix}
    */
    readonly identifierPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#instance_class DocdbClusterInstance#instance_class}
    */
    readonly instanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#promotion_tier DocdbClusterInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#tags DocdbClusterInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#tags_all DocdbClusterInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#timeouts DocdbClusterInstance#timeouts}
    */
    readonly timeouts?: DocdbClusterInstanceTimeouts;
}
export interface DocdbClusterInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#create DocdbClusterInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#delete DocdbClusterInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#update DocdbClusterInstance#update}
    */
    readonly update?: string;
}
export declare function docdbClusterInstanceTimeoutsToTerraform(struct?: DocdbClusterInstanceTimeoutsOutputReference | DocdbClusterInstanceTimeouts): any;
export declare class DocdbClusterInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DocdbClusterInstanceTimeouts | undefined;
    set internalValue(value: DocdbClusterInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance}
*/
export declare class DocdbClusterInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DocdbClusterInstanceConfig);
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
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    get dbSubnetGroupName(): string;
    get dbiResourceId(): string;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string;
    get engineVersion(): string;
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
    get kmsKeyId(): string;
    get port(): number;
    get preferredBackupWindow(): string;
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
    get publiclyAccessible(): any;
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
    get timeouts(): DocdbClusterInstanceTimeoutsOutputReference;
    putTimeouts(value: DocdbClusterInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DocdbClusterInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=docdb-cluster-instance.d.ts.map