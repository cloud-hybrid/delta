import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsRdsOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#availability_zone_group DataAwsRdsOrderableDbInstance#availability_zone_group}
    */
    readonly availabilityZoneGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#engine DataAwsRdsOrderableDbInstance#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#engine_version DataAwsRdsOrderableDbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#instance_class DataAwsRdsOrderableDbInstance#instance_class}
    */
    readonly instanceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#license_model DataAwsRdsOrderableDbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#preferred_engine_versions DataAwsRdsOrderableDbInstance#preferred_engine_versions}
    */
    readonly preferredEngineVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#preferred_instance_classes DataAwsRdsOrderableDbInstance#preferred_instance_classes}
    */
    readonly preferredInstanceClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#storage_type DataAwsRdsOrderableDbInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_enhanced_monitoring DataAwsRdsOrderableDbInstance#supports_enhanced_monitoring}
    */
    readonly supportsEnhancedMonitoring?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_global_databases DataAwsRdsOrderableDbInstance#supports_global_databases}
    */
    readonly supportsGlobalDatabases?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_iam_database_authentication DataAwsRdsOrderableDbInstance#supports_iam_database_authentication}
    */
    readonly supportsIamDatabaseAuthentication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_iops DataAwsRdsOrderableDbInstance#supports_iops}
    */
    readonly supportsIops?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_kerberos_authentication DataAwsRdsOrderableDbInstance#supports_kerberos_authentication}
    */
    readonly supportsKerberosAuthentication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_performance_insights DataAwsRdsOrderableDbInstance#supports_performance_insights}
    */
    readonly supportsPerformanceInsights?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_storage_autoscaling DataAwsRdsOrderableDbInstance#supports_storage_autoscaling}
    */
    readonly supportsStorageAutoscaling?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#supports_storage_encryption DataAwsRdsOrderableDbInstance#supports_storage_encryption}
    */
    readonly supportsStorageEncryption?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html#vpc DataAwsRdsOrderableDbInstance#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance}
*/
export declare class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsOrderableDbInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsOrderableDbInstanceConfig);
    private _availabilityZoneGroup?;
    get availabilityZoneGroup(): string;
    set availabilityZoneGroup(value: string);
    resetAvailabilityZoneGroup(): void;
    get availabilityZoneGroupInput(): string;
    get availabilityZones(): string[];
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string;
    get id(): string;
    private _instanceClass?;
    get instanceClass(): string;
    set instanceClass(value: string);
    resetInstanceClass(): void;
    get instanceClassInput(): string;
    private _licenseModel?;
    get licenseModel(): string;
    set licenseModel(value: string);
    resetLicenseModel(): void;
    get licenseModelInput(): string;
    get maxIopsPerDbInstance(): number;
    get maxIopsPerGib(): number;
    get maxStorageSize(): number;
    get minIopsPerDbInstance(): number;
    get minIopsPerGib(): number;
    get minStorageSize(): number;
    get multiAzCapable(): any;
    get outpostCapable(): any;
    private _preferredEngineVersions?;
    get preferredEngineVersions(): string[];
    set preferredEngineVersions(value: string[]);
    resetPreferredEngineVersions(): void;
    get preferredEngineVersionsInput(): string[];
    private _preferredInstanceClasses?;
    get preferredInstanceClasses(): string[];
    set preferredInstanceClasses(value: string[]);
    resetPreferredInstanceClasses(): void;
    get preferredInstanceClassesInput(): string[];
    get readReplicaCapable(): any;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string;
    get supportedEngineModes(): string[];
    private _supportsEnhancedMonitoring?;
    get supportsEnhancedMonitoring(): boolean | cdktf.IResolvable;
    set supportsEnhancedMonitoring(value: boolean | cdktf.IResolvable);
    resetSupportsEnhancedMonitoring(): void;
    get supportsEnhancedMonitoringInput(): boolean | cdktf.IResolvable;
    private _supportsGlobalDatabases?;
    get supportsGlobalDatabases(): boolean | cdktf.IResolvable;
    set supportsGlobalDatabases(value: boolean | cdktf.IResolvable);
    resetSupportsGlobalDatabases(): void;
    get supportsGlobalDatabasesInput(): boolean | cdktf.IResolvable;
    private _supportsIamDatabaseAuthentication?;
    get supportsIamDatabaseAuthentication(): boolean | cdktf.IResolvable;
    set supportsIamDatabaseAuthentication(value: boolean | cdktf.IResolvable);
    resetSupportsIamDatabaseAuthentication(): void;
    get supportsIamDatabaseAuthenticationInput(): boolean | cdktf.IResolvable;
    private _supportsIops?;
    get supportsIops(): boolean | cdktf.IResolvable;
    set supportsIops(value: boolean | cdktf.IResolvable);
    resetSupportsIops(): void;
    get supportsIopsInput(): boolean | cdktf.IResolvable;
    private _supportsKerberosAuthentication?;
    get supportsKerberosAuthentication(): boolean | cdktf.IResolvable;
    set supportsKerberosAuthentication(value: boolean | cdktf.IResolvable);
    resetSupportsKerberosAuthentication(): void;
    get supportsKerberosAuthenticationInput(): boolean | cdktf.IResolvable;
    private _supportsPerformanceInsights?;
    get supportsPerformanceInsights(): boolean | cdktf.IResolvable;
    set supportsPerformanceInsights(value: boolean | cdktf.IResolvable);
    resetSupportsPerformanceInsights(): void;
    get supportsPerformanceInsightsInput(): boolean | cdktf.IResolvable;
    private _supportsStorageAutoscaling?;
    get supportsStorageAutoscaling(): boolean | cdktf.IResolvable;
    set supportsStorageAutoscaling(value: boolean | cdktf.IResolvable);
    resetSupportsStorageAutoscaling(): void;
    get supportsStorageAutoscalingInput(): boolean | cdktf.IResolvable;
    private _supportsStorageEncryption?;
    get supportsStorageEncryption(): boolean | cdktf.IResolvable;
    set supportsStorageEncryption(value: boolean | cdktf.IResolvable);
    resetSupportsStorageEncryption(): void;
    get supportsStorageEncryptionInput(): boolean | cdktf.IResolvable;
    private _vpc?;
    get vpc(): boolean | cdktf.IResolvable;
    set vpc(value: boolean | cdktf.IResolvable);
    resetVpc(): void;
    get vpcInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-rds-orderable-db-instance.d.ts.map