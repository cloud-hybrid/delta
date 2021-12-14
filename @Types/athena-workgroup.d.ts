import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Athena
*/
export interface AthenaWorkgroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#description AthenaWorkgroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#force_destroy AthenaWorkgroup#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#name AthenaWorkgroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#state AthenaWorkgroup#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags AthenaWorkgroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags_all AthenaWorkgroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#configuration AthenaWorkgroup#configuration}
    */
    readonly configuration?: AthenaWorkgroupConfiguration;
}
export interface AthenaWorkgroupConfigurationEngineVersion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#selected_engine_version AthenaWorkgroup#selected_engine_version}
    */
    readonly selectedEngineVersion?: string;
}
export declare function athenaWorkgroupConfigurationEngineVersionToTerraform(struct?: AthenaWorkgroupConfigurationEngineVersionOutputReference | AthenaWorkgroupConfigurationEngineVersion): any;
export declare class AthenaWorkgroupConfigurationEngineVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AthenaWorkgroupConfigurationEngineVersion | undefined;
    set internalValue(value: AthenaWorkgroupConfigurationEngineVersion | undefined);
    private _selectedEngineVersion?;
    get selectedEngineVersion(): string;
    set selectedEngineVersion(value: string);
    resetSelectedEngineVersion(): void;
    get selectedEngineVersionInput(): string;
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_option AthenaWorkgroup#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#kms_key_arn AthenaWorkgroup#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any;
export declare class AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined;
    set internalValue(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined);
    private _encryptionOption?;
    get encryptionOption(): string;
    set encryptionOption(value: string);
    resetEncryptionOption(): void;
    get encryptionOptionInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
}
export interface AthenaWorkgroupConfigurationResultConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#output_location AthenaWorkgroup#output_location}
    */
    readonly outputLocation?: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_configuration AthenaWorkgroup#encryption_configuration}
    */
    readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
}
export declare function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfiguration): any;
export declare class AthenaWorkgroupConfigurationResultConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AthenaWorkgroupConfigurationResultConfiguration | undefined;
    set internalValue(value: AthenaWorkgroupConfigurationResultConfiguration | undefined);
    private _outputLocation?;
    get outputLocation(): string;
    set outputLocation(value: string);
    resetOutputLocation(): void;
    get outputLocationInput(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
}
export interface AthenaWorkgroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}
    */
    readonly bytesScannedCutoffPerQuery?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}
    */
    readonly enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}
    */
    readonly publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}
    */
    readonly requesterPaysEnabled?: boolean | cdktf.IResolvable;
    /**
    * engine_version block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#engine_version AthenaWorkgroup#engine_version}
    */
    readonly engineVersion?: AthenaWorkgroupConfigurationEngineVersion;
    /**
    * result_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#result_configuration AthenaWorkgroup#result_configuration}
    */
    readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration;
}
export declare function athenaWorkgroupConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationOutputReference | AthenaWorkgroupConfiguration): any;
export declare class AthenaWorkgroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AthenaWorkgroupConfiguration | undefined;
    set internalValue(value: AthenaWorkgroupConfiguration | undefined);
    private _bytesScannedCutoffPerQuery?;
    get bytesScannedCutoffPerQuery(): number;
    set bytesScannedCutoffPerQuery(value: number);
    resetBytesScannedCutoffPerQuery(): void;
    get bytesScannedCutoffPerQueryInput(): number;
    private _enforceWorkgroupConfiguration?;
    get enforceWorkgroupConfiguration(): boolean | cdktf.IResolvable;
    set enforceWorkgroupConfiguration(value: boolean | cdktf.IResolvable);
    resetEnforceWorkgroupConfiguration(): void;
    get enforceWorkgroupConfigurationInput(): boolean | cdktf.IResolvable;
    private _publishCloudwatchMetricsEnabled?;
    get publishCloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set publishCloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetPublishCloudwatchMetricsEnabled(): void;
    get publishCloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable;
    private _requesterPaysEnabled?;
    get requesterPaysEnabled(): boolean | cdktf.IResolvable;
    set requesterPaysEnabled(value: boolean | cdktf.IResolvable);
    resetRequesterPaysEnabled(): void;
    get requesterPaysEnabledInput(): boolean | cdktf.IResolvable;
    private _engineVersion;
    get engineVersion(): AthenaWorkgroupConfigurationEngineVersionOutputReference;
    putEngineVersion(value: AthenaWorkgroupConfigurationEngineVersion): void;
    resetEngineVersion(): void;
    get engineVersionInput(): AthenaWorkgroupConfigurationEngineVersion;
    private _resultConfiguration;
    get resultConfiguration(): AthenaWorkgroupConfigurationResultConfigurationOutputReference;
    putResultConfiguration(value: AthenaWorkgroupConfigurationResultConfiguration): void;
    resetResultConfiguration(): void;
    get resultConfigurationInput(): AthenaWorkgroupConfigurationResultConfiguration;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup}
*/
export declare class AthenaWorkgroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaWorkgroupConfig
    */
    constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
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
    private _configuration;
    get configuration(): AthenaWorkgroupConfigurationOutputReference;
    putConfiguration(value: AthenaWorkgroupConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): AthenaWorkgroupConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=athena-workgroup.d.ts.map