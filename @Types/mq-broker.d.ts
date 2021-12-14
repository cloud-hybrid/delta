import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Message Queue
*/
export interface MqBrokerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#apply_immediately MqBroker#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#authentication_strategy MqBroker#authentication_strategy}
    */
    readonly authenticationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#broker_name MqBroker#broker_name}
    */
    readonly brokerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#deployment_mode MqBroker#deployment_mode}
    */
    readonly deploymentMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#engine_type MqBroker#engine_type}
    */
    readonly engineType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#engine_version MqBroker#engine_version}
    */
    readonly engineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#host_instance_type MqBroker#host_instance_type}
    */
    readonly hostInstanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#publicly_accessible MqBroker#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#security_groups MqBroker#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#storage_type MqBroker#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#subnet_ids MqBroker#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#tags MqBroker#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#tags_all MqBroker#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#configuration MqBroker#configuration}
    */
    readonly configuration?: MqBrokerConfiguration;
    /**
    * encryption_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#encryption_options MqBroker#encryption_options}
    */
    readonly encryptionOptions?: MqBrokerEncryptionOptions;
    /**
    * ldap_server_metadata block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#ldap_server_metadata MqBroker#ldap_server_metadata}
    */
    readonly ldapServerMetadata?: MqBrokerLdapServerMetadata;
    /**
    * logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#logs MqBroker#logs}
    */
    readonly logs?: MqBrokerLogs;
    /**
    * maintenance_window_start_time block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#maintenance_window_start_time MqBroker#maintenance_window_start_time}
    */
    readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime;
    /**
    * user block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user MqBroker#user}
    */
    readonly user: MqBrokerUser[];
}
export declare class MqBrokerInstances extends cdktf.ComplexComputedList {
    get consoleUrl(): string;
    get endpoints(): string[];
    get ipAddress(): string;
}
export interface MqBrokerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#id MqBroker#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#revision MqBroker#revision}
    */
    readonly revision?: number;
}
export declare function mqBrokerConfigurationToTerraform(struct?: MqBrokerConfigurationOutputReference | MqBrokerConfiguration): any;
export declare class MqBrokerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MqBrokerConfiguration | undefined;
    set internalValue(value: MqBrokerConfiguration | undefined);
    get id(): string;
    private _revision?;
    get revision(): number;
    set revision(value: number);
    resetRevision(): void;
    get revisionInput(): number;
}
export interface MqBrokerEncryptionOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#kms_key_id MqBroker#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#use_aws_owned_key MqBroker#use_aws_owned_key}
    */
    readonly useAwsOwnedKey?: boolean | cdktf.IResolvable;
}
export declare function mqBrokerEncryptionOptionsToTerraform(struct?: MqBrokerEncryptionOptionsOutputReference | MqBrokerEncryptionOptions): any;
export declare class MqBrokerEncryptionOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MqBrokerEncryptionOptions | undefined;
    set internalValue(value: MqBrokerEncryptionOptions | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _useAwsOwnedKey?;
    get useAwsOwnedKey(): boolean | cdktf.IResolvable;
    set useAwsOwnedKey(value: boolean | cdktf.IResolvable);
    resetUseAwsOwnedKey(): void;
    get useAwsOwnedKeyInput(): boolean | cdktf.IResolvable;
}
export interface MqBrokerLdapServerMetadata {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#hosts MqBroker#hosts}
    */
    readonly hosts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_base MqBroker#role_base}
    */
    readonly roleBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_name MqBroker#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_search_matching MqBroker#role_search_matching}
    */
    readonly roleSearchMatching?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_search_subtree MqBroker#role_search_subtree}
    */
    readonly roleSearchSubtree?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#service_account_password MqBroker#service_account_password}
    */
    readonly serviceAccountPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#service_account_username MqBroker#service_account_username}
    */
    readonly serviceAccountUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_base MqBroker#user_base}
    */
    readonly userBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_role_name MqBroker#user_role_name}
    */
    readonly userRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_search_matching MqBroker#user_search_matching}
    */
    readonly userSearchMatching?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_search_subtree MqBroker#user_search_subtree}
    */
    readonly userSearchSubtree?: boolean | cdktf.IResolvable;
}
export declare function mqBrokerLdapServerMetadataToTerraform(struct?: MqBrokerLdapServerMetadataOutputReference | MqBrokerLdapServerMetadata): any;
export declare class MqBrokerLdapServerMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MqBrokerLdapServerMetadata | undefined;
    set internalValue(value: MqBrokerLdapServerMetadata | undefined);
    private _hosts?;
    get hosts(): string[];
    set hosts(value: string[]);
    resetHosts(): void;
    get hostsInput(): string[];
    private _roleBase?;
    get roleBase(): string;
    set roleBase(value: string);
    resetRoleBase(): void;
    get roleBaseInput(): string;
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    resetRoleName(): void;
    get roleNameInput(): string;
    private _roleSearchMatching?;
    get roleSearchMatching(): string;
    set roleSearchMatching(value: string);
    resetRoleSearchMatching(): void;
    get roleSearchMatchingInput(): string;
    private _roleSearchSubtree?;
    get roleSearchSubtree(): boolean | cdktf.IResolvable;
    set roleSearchSubtree(value: boolean | cdktf.IResolvable);
    resetRoleSearchSubtree(): void;
    get roleSearchSubtreeInput(): boolean | cdktf.IResolvable;
    private _serviceAccountPassword?;
    get serviceAccountPassword(): string;
    set serviceAccountPassword(value: string);
    resetServiceAccountPassword(): void;
    get serviceAccountPasswordInput(): string;
    private _serviceAccountUsername?;
    get serviceAccountUsername(): string;
    set serviceAccountUsername(value: string);
    resetServiceAccountUsername(): void;
    get serviceAccountUsernameInput(): string;
    private _userBase?;
    get userBase(): string;
    set userBase(value: string);
    resetUserBase(): void;
    get userBaseInput(): string;
    private _userRoleName?;
    get userRoleName(): string;
    set userRoleName(value: string);
    resetUserRoleName(): void;
    get userRoleNameInput(): string;
    private _userSearchMatching?;
    get userSearchMatching(): string;
    set userSearchMatching(value: string);
    resetUserSearchMatching(): void;
    get userSearchMatchingInput(): string;
    private _userSearchSubtree?;
    get userSearchSubtree(): boolean | cdktf.IResolvable;
    set userSearchSubtree(value: boolean | cdktf.IResolvable);
    resetUserSearchSubtree(): void;
    get userSearchSubtreeInput(): boolean | cdktf.IResolvable;
}
export interface MqBrokerLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#audit MqBroker#audit}
    */
    readonly audit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#general MqBroker#general}
    */
    readonly general?: boolean | cdktf.IResolvable;
}
export declare function mqBrokerLogsToTerraform(struct?: MqBrokerLogsOutputReference | MqBrokerLogs): any;
export declare class MqBrokerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MqBrokerLogs | undefined;
    set internalValue(value: MqBrokerLogs | undefined);
    private _audit?;
    get audit(): string;
    set audit(value: string);
    resetAudit(): void;
    get auditInput(): string;
    private _general?;
    get general(): boolean | cdktf.IResolvable;
    set general(value: boolean | cdktf.IResolvable);
    resetGeneral(): void;
    get generalInput(): boolean | cdktf.IResolvable;
}
export interface MqBrokerMaintenanceWindowStartTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#day_of_week MqBroker#day_of_week}
    */
    readonly dayOfWeek: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#time_of_day MqBroker#time_of_day}
    */
    readonly timeOfDay: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#time_zone MqBroker#time_zone}
    */
    readonly timeZone: string;
}
export declare function mqBrokerMaintenanceWindowStartTimeToTerraform(struct?: MqBrokerMaintenanceWindowStartTimeOutputReference | MqBrokerMaintenanceWindowStartTime): any;
export declare class MqBrokerMaintenanceWindowStartTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MqBrokerMaintenanceWindowStartTime | undefined;
    set internalValue(value: MqBrokerMaintenanceWindowStartTime | undefined);
    private _dayOfWeek?;
    get dayOfWeek(): string;
    set dayOfWeek(value: string);
    get dayOfWeekInput(): string;
    private _timeOfDay?;
    get timeOfDay(): string;
    set timeOfDay(value: string);
    get timeOfDayInput(): string;
    private _timeZone?;
    get timeZone(): string;
    set timeZone(value: string);
    get timeZoneInput(): string;
}
export interface MqBrokerUser {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#console_access MqBroker#console_access}
    */
    readonly consoleAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#groups MqBroker#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#password MqBroker#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#username MqBroker#username}
    */
    readonly username: string;
}
export declare function mqBrokerUserToTerraform(struct?: MqBrokerUser): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker}
*/
export declare class MqBroker extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MqBrokerConfig
    */
    constructor(scope: Construct, id: string, config: MqBrokerConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean | cdktf.IResolvable;
    set applyImmediately(value: boolean | cdktf.IResolvable);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    private _authenticationStrategy?;
    get authenticationStrategy(): string;
    set authenticationStrategy(value: string);
    resetAuthenticationStrategy(): void;
    get authenticationStrategyInput(): string;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean | cdktf.IResolvable;
    set autoMinorVersionUpgrade(value: boolean | cdktf.IResolvable);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | cdktf.IResolvable;
    private _brokerName?;
    get brokerName(): string;
    set brokerName(value: string);
    get brokerNameInput(): string;
    private _deploymentMode?;
    get deploymentMode(): string;
    set deploymentMode(value: string);
    resetDeploymentMode(): void;
    get deploymentModeInput(): string;
    private _engineType?;
    get engineType(): string;
    set engineType(value: string);
    get engineTypeInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    get engineVersionInput(): string;
    private _hostInstanceType?;
    get hostInstanceType(): string;
    set hostInstanceType(value: string);
    get hostInstanceTypeInput(): string;
    get id(): string;
    instances(index: string): MqBrokerInstances;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean | cdktf.IResolvable;
    set publiclyAccessible(value: boolean | cdktf.IResolvable);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | cdktf.IResolvable;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[];
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
    get configuration(): MqBrokerConfigurationOutputReference;
    putConfiguration(value: MqBrokerConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): MqBrokerConfiguration;
    private _encryptionOptions;
    get encryptionOptions(): MqBrokerEncryptionOptionsOutputReference;
    putEncryptionOptions(value: MqBrokerEncryptionOptions): void;
    resetEncryptionOptions(): void;
    get encryptionOptionsInput(): MqBrokerEncryptionOptions;
    private _ldapServerMetadata;
    get ldapServerMetadata(): MqBrokerLdapServerMetadataOutputReference;
    putLdapServerMetadata(value: MqBrokerLdapServerMetadata): void;
    resetLdapServerMetadata(): void;
    get ldapServerMetadataInput(): MqBrokerLdapServerMetadata;
    private _logs;
    get logs(): MqBrokerLogsOutputReference;
    putLogs(value: MqBrokerLogs): void;
    resetLogs(): void;
    get logsInput(): MqBrokerLogs;
    private _maintenanceWindowStartTime;
    get maintenanceWindowStartTime(): MqBrokerMaintenanceWindowStartTimeOutputReference;
    putMaintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime): void;
    resetMaintenanceWindowStartTime(): void;
    get maintenanceWindowStartTimeInput(): MqBrokerMaintenanceWindowStartTime;
    private _user?;
    get user(): MqBrokerUser[];
    set user(value: MqBrokerUser[]);
    get userInput(): MqBrokerUser[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=mq-broker.d.ts.map