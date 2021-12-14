import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElasticSearch Service
*/
export interface ElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#access_policies ElasticsearchDomain#access_policies}
    */
    readonly accessPolicies?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_options ElasticsearchDomain#advanced_options}
    */
    readonly advancedOptions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_name ElasticsearchDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#elasticsearch_version ElasticsearchDomain#elasticsearch_version}
    */
    readonly elasticsearchVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags ElasticsearchDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags_all ElasticsearchDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * advanced_security_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_security_options ElasticsearchDomain#advanced_security_options}
    */
    readonly advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions;
    /**
    * auto_tune_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#auto_tune_options ElasticsearchDomain#auto_tune_options}
    */
    readonly autoTuneOptions?: ElasticsearchDomainAutoTuneOptions;
    /**
    * cluster_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cluster_config ElasticsearchDomain#cluster_config}
    */
    readonly clusterConfig?: ElasticsearchDomainClusterConfig;
    /**
    * cognito_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cognito_options ElasticsearchDomain#cognito_options}
    */
    readonly cognitoOptions?: ElasticsearchDomainCognitoOptions;
    /**
    * domain_endpoint_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}
    */
    readonly domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions;
    /**
    * ebs_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_options ElasticsearchDomain#ebs_options}
    */
    readonly ebsOptions?: ElasticsearchDomainEbsOptions;
    /**
    * encrypt_at_rest block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}
    */
    readonly encryptAtRest?: ElasticsearchDomainEncryptAtRest;
    /**
    * log_publishing_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_publishing_options ElasticsearchDomain#log_publishing_options}
    */
    readonly logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
    /**
    * node_to_node_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}
    */
    readonly nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption;
    /**
    * snapshot_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#snapshot_options ElasticsearchDomain#snapshot_options}
    */
    readonly snapshotOptions?: ElasticsearchDomainSnapshotOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#timeouts ElasticsearchDomain#timeouts}
    */
    readonly timeouts?: ElasticsearchDomainTimeouts;
    /**
    * vpc_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#vpc_options ElasticsearchDomain#vpc_options}
    */
    readonly vpcOptions?: ElasticsearchDomainVpcOptions;
}
export interface ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_arn ElasticsearchDomain#master_user_arn}
    */
    readonly masterUserArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_name ElasticsearchDomain#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_password ElasticsearchDomain#master_user_password}
    */
    readonly masterUserPassword?: string;
}
export declare function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): any;
export declare class ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined;
    set internalValue(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined);
    private _masterUserArn?;
    get masterUserArn(): string;
    set masterUserArn(value: string);
    resetMasterUserArn(): void;
    get masterUserArnInput(): string;
    private _masterUserName?;
    get masterUserName(): string;
    set masterUserName(value: string);
    resetMasterUserName(): void;
    get masterUserNameInput(): string;
    private _masterUserPassword?;
    get masterUserPassword(): string;
    set masterUserPassword(value: string);
    resetMasterUserPassword(): void;
    get masterUserPasswordInput(): string;
}
export interface ElasticsearchDomainAdvancedSecurityOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}
    */
    readonly internalUserDatabaseEnabled?: boolean | cdktf.IResolvable;
    /**
    * master_user_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_options ElasticsearchDomain#master_user_options}
    */
    readonly masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions;
}
export declare function elasticsearchDomainAdvancedSecurityOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptions): any;
export declare class ElasticsearchDomainAdvancedSecurityOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainAdvancedSecurityOptions | undefined;
    set internalValue(value: ElasticsearchDomainAdvancedSecurityOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    private _internalUserDatabaseEnabled?;
    get internalUserDatabaseEnabled(): boolean | cdktf.IResolvable;
    set internalUserDatabaseEnabled(value: boolean | cdktf.IResolvable);
    resetInternalUserDatabaseEnabled(): void;
    get internalUserDatabaseEnabledInput(): boolean | cdktf.IResolvable;
    private _masterUserOptions;
    get masterUserOptions(): ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference;
    putMasterUserOptions(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): void;
    resetMasterUserOptions(): void;
    get masterUserOptionsInput(): ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions;
}
export interface ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#unit ElasticsearchDomain#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#value ElasticsearchDomain#value}
    */
    readonly value: number;
}
export declare function elasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationToTerraform(struct?: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference | ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration): any;
export declare class ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined;
    set internalValue(value: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}
    */
    readonly cronExpressionForRecurrence: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#start_at ElasticsearchDomain#start_at}
    */
    readonly startAt: string;
    /**
    * duration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#duration ElasticsearchDomain#duration}
    */
    readonly duration: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
}
export declare function elasticsearchDomainAutoTuneOptionsMaintenanceScheduleToTerraform(struct?: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule): any;
export interface ElasticsearchDomainAutoTuneOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#desired_state ElasticsearchDomain#desired_state}
    */
    readonly desiredState: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#rollback_on_disable ElasticsearchDomain#rollback_on_disable}
    */
    readonly rollbackOnDisable?: string;
    /**
    * maintenance_schedule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#maintenance_schedule ElasticsearchDomain#maintenance_schedule}
    */
    readonly maintenanceSchedule?: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[];
}
export declare function elasticsearchDomainAutoTuneOptionsToTerraform(struct?: ElasticsearchDomainAutoTuneOptionsOutputReference | ElasticsearchDomainAutoTuneOptions): any;
export declare class ElasticsearchDomainAutoTuneOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainAutoTuneOptions | undefined;
    set internalValue(value: ElasticsearchDomainAutoTuneOptions | undefined);
    private _desiredState?;
    get desiredState(): string;
    set desiredState(value: string);
    get desiredStateInput(): string;
    private _rollbackOnDisable?;
    get rollbackOnDisable(): string;
    set rollbackOnDisable(value: string);
    resetRollbackOnDisable(): void;
    get rollbackOnDisableInput(): string;
    private _maintenanceSchedule?;
    get maintenanceSchedule(): ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[];
    set maintenanceSchedule(value: ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[]);
    resetMaintenanceSchedule(): void;
    get maintenanceScheduleInput(): ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule[];
}
export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#availability_zone_count ElasticsearchDomain#availability_zone_count}
    */
    readonly availabilityZoneCount?: number;
}
export declare function elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference | ElasticsearchDomainClusterConfigZoneAwarenessConfig): any;
export declare class ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined;
    set internalValue(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined);
    private _availabilityZoneCount?;
    get availabilityZoneCount(): number;
    set availabilityZoneCount(value: number);
    resetAvailabilityZoneCount(): void;
    get availabilityZoneCountInput(): number;
}
export interface ElasticsearchDomainClusterConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_count ElasticsearchDomain#dedicated_master_count}
    */
    readonly dedicatedMasterCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}
    */
    readonly dedicatedMasterEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_type ElasticsearchDomain#dedicated_master_type}
    */
    readonly dedicatedMasterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_count ElasticsearchDomain#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_type ElasticsearchDomain#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_count ElasticsearchDomain#warm_count}
    */
    readonly warmCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_enabled ElasticsearchDomain#warm_enabled}
    */
    readonly warmEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_type ElasticsearchDomain#warm_type}
    */
    readonly warmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}
    */
    readonly zoneAwarenessEnabled?: boolean | cdktf.IResolvable;
    /**
    * zone_awareness_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_config ElasticsearchDomain#zone_awareness_config}
    */
    readonly zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig;
}
export declare function elasticsearchDomainClusterConfigToTerraform(struct?: ElasticsearchDomainClusterConfigOutputReference | ElasticsearchDomainClusterConfig): any;
export declare class ElasticsearchDomainClusterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainClusterConfig | undefined;
    set internalValue(value: ElasticsearchDomainClusterConfig | undefined);
    private _dedicatedMasterCount?;
    get dedicatedMasterCount(): number;
    set dedicatedMasterCount(value: number);
    resetDedicatedMasterCount(): void;
    get dedicatedMasterCountInput(): number;
    private _dedicatedMasterEnabled?;
    get dedicatedMasterEnabled(): boolean | cdktf.IResolvable;
    set dedicatedMasterEnabled(value: boolean | cdktf.IResolvable);
    resetDedicatedMasterEnabled(): void;
    get dedicatedMasterEnabledInput(): boolean | cdktf.IResolvable;
    private _dedicatedMasterType?;
    get dedicatedMasterType(): string;
    set dedicatedMasterType(value: string);
    resetDedicatedMasterType(): void;
    get dedicatedMasterTypeInput(): string;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _warmCount?;
    get warmCount(): number;
    set warmCount(value: number);
    resetWarmCount(): void;
    get warmCountInput(): number;
    private _warmEnabled?;
    get warmEnabled(): boolean | cdktf.IResolvable;
    set warmEnabled(value: boolean | cdktf.IResolvable);
    resetWarmEnabled(): void;
    get warmEnabledInput(): boolean | cdktf.IResolvable;
    private _warmType?;
    get warmType(): string;
    set warmType(value: string);
    resetWarmType(): void;
    get warmTypeInput(): string;
    private _zoneAwarenessEnabled?;
    get zoneAwarenessEnabled(): boolean | cdktf.IResolvable;
    set zoneAwarenessEnabled(value: boolean | cdktf.IResolvable);
    resetZoneAwarenessEnabled(): void;
    get zoneAwarenessEnabledInput(): boolean | cdktf.IResolvable;
    private _zoneAwarenessConfig;
    get zoneAwarenessConfig(): ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference;
    putZoneAwarenessConfig(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig): void;
    resetZoneAwarenessConfig(): void;
    get zoneAwarenessConfigInput(): ElasticsearchDomainClusterConfigZoneAwarenessConfig;
}
export interface ElasticsearchDomainCognitoOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#identity_pool_id ElasticsearchDomain#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#role_arn ElasticsearchDomain#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#user_pool_id ElasticsearchDomain#user_pool_id}
    */
    readonly userPoolId: string;
}
export declare function elasticsearchDomainCognitoOptionsToTerraform(struct?: ElasticsearchDomainCognitoOptionsOutputReference | ElasticsearchDomainCognitoOptions): any;
export declare class ElasticsearchDomainCognitoOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainCognitoOptions | undefined;
    set internalValue(value: ElasticsearchDomainCognitoOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _identityPoolId?;
    get identityPoolId(): string;
    set identityPoolId(value: string);
    get identityPoolIdInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
}
export interface ElasticsearchDomainDomainEndpointOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint ElasticsearchDomain#custom_endpoint}
    */
    readonly customEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}
    */
    readonly customEndpointCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}
    */
    readonly customEndpointEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enforce_https ElasticsearchDomain#enforce_https}
    */
    readonly enforceHttps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tls_security_policy ElasticsearchDomain#tls_security_policy}
    */
    readonly tlsSecurityPolicy?: string;
}
export declare function elasticsearchDomainDomainEndpointOptionsToTerraform(struct?: ElasticsearchDomainDomainEndpointOptionsOutputReference | ElasticsearchDomainDomainEndpointOptions): any;
export declare class ElasticsearchDomainDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainDomainEndpointOptions | undefined;
    set internalValue(value: ElasticsearchDomainDomainEndpointOptions | undefined);
    private _customEndpoint?;
    get customEndpoint(): string;
    set customEndpoint(value: string);
    resetCustomEndpoint(): void;
    get customEndpointInput(): string;
    private _customEndpointCertificateArn?;
    get customEndpointCertificateArn(): string;
    set customEndpointCertificateArn(value: string);
    resetCustomEndpointCertificateArn(): void;
    get customEndpointCertificateArnInput(): string;
    private _customEndpointEnabled?;
    get customEndpointEnabled(): boolean | cdktf.IResolvable;
    set customEndpointEnabled(value: boolean | cdktf.IResolvable);
    resetCustomEndpointEnabled(): void;
    get customEndpointEnabledInput(): boolean | cdktf.IResolvable;
    private _enforceHttps?;
    get enforceHttps(): boolean | cdktf.IResolvable;
    set enforceHttps(value: boolean | cdktf.IResolvable);
    resetEnforceHttps(): void;
    get enforceHttpsInput(): boolean | cdktf.IResolvable;
    private _tlsSecurityPolicy?;
    get tlsSecurityPolicy(): string;
    set tlsSecurityPolicy(value: string);
    resetTlsSecurityPolicy(): void;
    get tlsSecurityPolicyInput(): string;
}
export interface ElasticsearchDomainEbsOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_enabled ElasticsearchDomain#ebs_enabled}
    */
    readonly ebsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#iops ElasticsearchDomain#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_size ElasticsearchDomain#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_type ElasticsearchDomain#volume_type}
    */
    readonly volumeType?: string;
}
export declare function elasticsearchDomainEbsOptionsToTerraform(struct?: ElasticsearchDomainEbsOptionsOutputReference | ElasticsearchDomainEbsOptions): any;
export declare class ElasticsearchDomainEbsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainEbsOptions | undefined;
    set internalValue(value: ElasticsearchDomainEbsOptions | undefined);
    private _ebsEnabled?;
    get ebsEnabled(): boolean | cdktf.IResolvable;
    set ebsEnabled(value: boolean | cdktf.IResolvable);
    get ebsEnabledInput(): boolean | cdktf.IResolvable;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string;
}
export interface ElasticsearchDomainEncryptAtRest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#kms_key_id ElasticsearchDomain#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function elasticsearchDomainEncryptAtRestToTerraform(struct?: ElasticsearchDomainEncryptAtRestOutputReference | ElasticsearchDomainEncryptAtRest): any;
export declare class ElasticsearchDomainEncryptAtRestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainEncryptAtRest | undefined;
    set internalValue(value: ElasticsearchDomainEncryptAtRest | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
}
export interface ElasticsearchDomainLogPublishingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_type ElasticsearchDomain#log_type}
    */
    readonly logType: string;
}
export declare function elasticsearchDomainLogPublishingOptionsToTerraform(struct?: ElasticsearchDomainLogPublishingOptions): any;
export interface ElasticsearchDomainNodeToNodeEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function elasticsearchDomainNodeToNodeEncryptionToTerraform(struct?: ElasticsearchDomainNodeToNodeEncryptionOutputReference | ElasticsearchDomainNodeToNodeEncryption): any;
export declare class ElasticsearchDomainNodeToNodeEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainNodeToNodeEncryption | undefined;
    set internalValue(value: ElasticsearchDomainNodeToNodeEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface ElasticsearchDomainSnapshotOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}
    */
    readonly automatedSnapshotStartHour: number;
}
export declare function elasticsearchDomainSnapshotOptionsToTerraform(struct?: ElasticsearchDomainSnapshotOptionsOutputReference | ElasticsearchDomainSnapshotOptions): any;
export declare class ElasticsearchDomainSnapshotOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainSnapshotOptions | undefined;
    set internalValue(value: ElasticsearchDomainSnapshotOptions | undefined);
    private _automatedSnapshotStartHour?;
    get automatedSnapshotStartHour(): number;
    set automatedSnapshotStartHour(value: number);
    get automatedSnapshotStartHourInput(): number;
}
export interface ElasticsearchDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#update ElasticsearchDomain#update}
    */
    readonly update?: string;
}
export declare function elasticsearchDomainTimeoutsToTerraform(struct?: ElasticsearchDomainTimeoutsOutputReference | ElasticsearchDomainTimeouts): any;
export declare class ElasticsearchDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainTimeouts | undefined;
    set internalValue(value: ElasticsearchDomainTimeouts | undefined);
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
export interface ElasticsearchDomainVpcOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#security_group_ids ElasticsearchDomain#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#subnet_ids ElasticsearchDomain#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export declare function elasticsearchDomainVpcOptionsToTerraform(struct?: ElasticsearchDomainVpcOptionsOutputReference | ElasticsearchDomainVpcOptions): any;
export declare class ElasticsearchDomainVpcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainVpcOptions | undefined;
    set internalValue(value: ElasticsearchDomainVpcOptions | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain}
*/
export declare class ElasticsearchDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainConfig
    */
    constructor(scope: Construct, id: string, config: ElasticsearchDomainConfig);
    private _accessPolicies?;
    get accessPolicies(): string;
    set accessPolicies(value: string);
    resetAccessPolicies(): void;
    get accessPoliciesInput(): string;
    private _advancedOptions?;
    get advancedOptions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set advancedOptions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAdvancedOptions(): void;
    get advancedOptionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get arn(): string;
    get domainId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _elasticsearchVersion?;
    get elasticsearchVersion(): string;
    set elasticsearchVersion(value: string);
    resetElasticsearchVersion(): void;
    get elasticsearchVersionInput(): string;
    get endpoint(): string;
    get id(): string;
    get kibanaEndpoint(): string;
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
    private _advancedSecurityOptions;
    get advancedSecurityOptions(): ElasticsearchDomainAdvancedSecurityOptionsOutputReference;
    putAdvancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions): void;
    resetAdvancedSecurityOptions(): void;
    get advancedSecurityOptionsInput(): ElasticsearchDomainAdvancedSecurityOptions;
    private _autoTuneOptions;
    get autoTuneOptions(): ElasticsearchDomainAutoTuneOptionsOutputReference;
    putAutoTuneOptions(value: ElasticsearchDomainAutoTuneOptions): void;
    resetAutoTuneOptions(): void;
    get autoTuneOptionsInput(): ElasticsearchDomainAutoTuneOptions;
    private _clusterConfig;
    get clusterConfig(): ElasticsearchDomainClusterConfigOutputReference;
    putClusterConfig(value: ElasticsearchDomainClusterConfig): void;
    resetClusterConfig(): void;
    get clusterConfigInput(): ElasticsearchDomainClusterConfig;
    private _cognitoOptions;
    get cognitoOptions(): ElasticsearchDomainCognitoOptionsOutputReference;
    putCognitoOptions(value: ElasticsearchDomainCognitoOptions): void;
    resetCognitoOptions(): void;
    get cognitoOptionsInput(): ElasticsearchDomainCognitoOptions;
    private _domainEndpointOptions;
    get domainEndpointOptions(): ElasticsearchDomainDomainEndpointOptionsOutputReference;
    putDomainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions): void;
    resetDomainEndpointOptions(): void;
    get domainEndpointOptionsInput(): ElasticsearchDomainDomainEndpointOptions;
    private _ebsOptions;
    get ebsOptions(): ElasticsearchDomainEbsOptionsOutputReference;
    putEbsOptions(value: ElasticsearchDomainEbsOptions): void;
    resetEbsOptions(): void;
    get ebsOptionsInput(): ElasticsearchDomainEbsOptions;
    private _encryptAtRest;
    get encryptAtRest(): ElasticsearchDomainEncryptAtRestOutputReference;
    putEncryptAtRest(value: ElasticsearchDomainEncryptAtRest): void;
    resetEncryptAtRest(): void;
    get encryptAtRestInput(): ElasticsearchDomainEncryptAtRest;
    private _logPublishingOptions?;
    get logPublishingOptions(): ElasticsearchDomainLogPublishingOptions[];
    set logPublishingOptions(value: ElasticsearchDomainLogPublishingOptions[]);
    resetLogPublishingOptions(): void;
    get logPublishingOptionsInput(): ElasticsearchDomainLogPublishingOptions[];
    private _nodeToNodeEncryption;
    get nodeToNodeEncryption(): ElasticsearchDomainNodeToNodeEncryptionOutputReference;
    putNodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption): void;
    resetNodeToNodeEncryption(): void;
    get nodeToNodeEncryptionInput(): ElasticsearchDomainNodeToNodeEncryption;
    private _snapshotOptions;
    get snapshotOptions(): ElasticsearchDomainSnapshotOptionsOutputReference;
    putSnapshotOptions(value: ElasticsearchDomainSnapshotOptions): void;
    resetSnapshotOptions(): void;
    get snapshotOptionsInput(): ElasticsearchDomainSnapshotOptions;
    private _timeouts;
    get timeouts(): ElasticsearchDomainTimeoutsOutputReference;
    putTimeouts(value: ElasticsearchDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ElasticsearchDomainTimeouts;
    private _vpcOptions;
    get vpcOptions(): ElasticsearchDomainVpcOptionsOutputReference;
    putVpcOptions(value: ElasticsearchDomainVpcOptions): void;
    resetVpcOptions(): void;
    get vpcOptionsInput(): ElasticsearchDomainVpcOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elasticsearch-domain.d.ts.map