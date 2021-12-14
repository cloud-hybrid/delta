import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Neptune
*/
export interface DataAwsNeptuneOrderableDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#engine DataAwsNeptuneOrderableDbInstance#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#engine_version DataAwsNeptuneOrderableDbInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#instance_class DataAwsNeptuneOrderableDbInstance#instance_class}
    */
    readonly instanceClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#license_model DataAwsNeptuneOrderableDbInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#preferred_instance_classes DataAwsNeptuneOrderableDbInstance#preferred_instance_classes}
    */
    readonly preferredInstanceClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html#vpc DataAwsNeptuneOrderableDbInstance#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html aws_neptune_orderable_db_instance}
*/
export declare class DataAwsNeptuneOrderableDbInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html aws_neptune_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNeptuneOrderableDbInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNeptuneOrderableDbInstanceConfig);
    get availabilityZones(): string[];
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
    private _preferredInstanceClasses?;
    get preferredInstanceClasses(): string[];
    set preferredInstanceClasses(value: string[]);
    resetPreferredInstanceClasses(): void;
    get preferredInstanceClassesInput(): string[];
    get readReplicaCapable(): any;
    get storageType(): string;
    get supportsEnhancedMonitoring(): any;
    get supportsIamDatabaseAuthentication(): any;
    get supportsIops(): any;
    get supportsPerformanceInsights(): any;
    get supportsStorageEncryption(): any;
    private _vpc?;
    get vpc(): boolean | cdktf.IResolvable;
    set vpc(value: boolean | cdktf.IResolvable);
    resetVpc(): void;
    get vpcInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-neptune-orderable-db-instance.d.ts.map