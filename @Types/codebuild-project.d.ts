import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeBuild
*/
export interface CodebuildProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#badge_enabled CodebuildProject#badge_enabled}
    */
    readonly badgeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_timeout CodebuildProject#build_timeout}
    */
    readonly buildTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#concurrent_build_limit CodebuildProject#concurrent_build_limit}
    */
    readonly concurrentBuildLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#description CodebuildProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_key CodebuildProject#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#queued_timeout CodebuildProject#queued_timeout}
    */
    readonly queuedTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_version CodebuildProject#source_version}
    */
    readonly sourceVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags CodebuildProject#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags_all CodebuildProject#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * artifacts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifacts CodebuildProject#artifacts}
    */
    readonly artifacts: CodebuildProjectArtifacts;
    /**
    * build_batch_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_batch_config CodebuildProject#build_batch_config}
    */
    readonly buildBatchConfig?: CodebuildProjectBuildBatchConfig;
    /**
    * cache block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cache CodebuildProject#cache}
    */
    readonly cache?: CodebuildProjectCache;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment CodebuildProject#environment}
    */
    readonly environment: CodebuildProjectEnvironment;
    /**
    * file_system_locations block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#file_system_locations CodebuildProject#file_system_locations}
    */
    readonly fileSystemLocations?: CodebuildProjectFileSystemLocations[];
    /**
    * logs_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#logs_config CodebuildProject#logs_config}
    */
    readonly logsConfig?: CodebuildProjectLogsConfig;
    /**
    * secondary_artifacts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_artifacts CodebuildProject#secondary_artifacts}
    */
    readonly secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
    /**
    * secondary_sources block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_sources CodebuildProject#secondary_sources}
    */
    readonly secondarySources?: CodebuildProjectSecondarySources[];
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source CodebuildProject#source}
    */
    readonly source: CodebuildProjectSource;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_config CodebuildProject#vpc_config}
    */
    readonly vpcConfig?: CodebuildProjectVpcConfig;
}
export interface CodebuildProjectArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
}
export declare function codebuildProjectArtifactsToTerraform(struct?: CodebuildProjectArtifactsOutputReference | CodebuildProjectArtifacts): any;
export declare class CodebuildProjectArtifactsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectArtifacts | undefined;
    set internalValue(value: CodebuildProjectArtifacts | undefined);
    private _artifactIdentifier?;
    get artifactIdentifier(): string;
    set artifactIdentifier(value: string);
    resetArtifactIdentifier(): void;
    get artifactIdentifierInput(): string;
    private _encryptionDisabled?;
    get encryptionDisabled(): boolean | cdktf.IResolvable;
    set encryptionDisabled(value: boolean | cdktf.IResolvable);
    resetEncryptionDisabled(): void;
    get encryptionDisabledInput(): boolean | cdktf.IResolvable;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namespaceType?;
    get namespaceType(): string;
    set namespaceType(value: string);
    resetNamespaceType(): void;
    get namespaceTypeInput(): string;
    private _overrideArtifactName?;
    get overrideArtifactName(): boolean | cdktf.IResolvable;
    set overrideArtifactName(value: boolean | cdktf.IResolvable);
    resetOverrideArtifactName(): void;
    get overrideArtifactNameInput(): boolean | cdktf.IResolvable;
    private _packaging?;
    get packaging(): string;
    set packaging(value: string);
    resetPackaging(): void;
    get packagingInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface CodebuildProjectBuildBatchConfigRestrictions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_types_allowed CodebuildProject#compute_types_allowed}
    */
    readonly computeTypesAllowed?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}
    */
    readonly maximumBuildsAllowed?: number;
}
export declare function codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct?: CodebuildProjectBuildBatchConfigRestrictionsOutputReference | CodebuildProjectBuildBatchConfigRestrictions): any;
export declare class CodebuildProjectBuildBatchConfigRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectBuildBatchConfigRestrictions | undefined;
    set internalValue(value: CodebuildProjectBuildBatchConfigRestrictions | undefined);
    private _computeTypesAllowed?;
    get computeTypesAllowed(): string[];
    set computeTypesAllowed(value: string[]);
    resetComputeTypesAllowed(): void;
    get computeTypesAllowedInput(): string[];
    private _maximumBuildsAllowed?;
    get maximumBuildsAllowed(): number;
    set maximumBuildsAllowed(value: number);
    resetMaximumBuildsAllowed(): void;
    get maximumBuildsAllowedInput(): number;
}
export interface CodebuildProjectBuildBatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#combine_artifacts CodebuildProject#combine_artifacts}
    */
    readonly combineArtifacts?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#timeout_in_mins CodebuildProject#timeout_in_mins}
    */
    readonly timeoutInMins?: number;
    /**
    * restrictions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#restrictions CodebuildProject#restrictions}
    */
    readonly restrictions?: CodebuildProjectBuildBatchConfigRestrictions;
}
export declare function codebuildProjectBuildBatchConfigToTerraform(struct?: CodebuildProjectBuildBatchConfigOutputReference | CodebuildProjectBuildBatchConfig): any;
export declare class CodebuildProjectBuildBatchConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectBuildBatchConfig | undefined;
    set internalValue(value: CodebuildProjectBuildBatchConfig | undefined);
    private _combineArtifacts?;
    get combineArtifacts(): boolean | cdktf.IResolvable;
    set combineArtifacts(value: boolean | cdktf.IResolvable);
    resetCombineArtifacts(): void;
    get combineArtifactsInput(): boolean | cdktf.IResolvable;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
    private _timeoutInMins?;
    get timeoutInMins(): number;
    set timeoutInMins(value: number);
    resetTimeoutInMins(): void;
    get timeoutInMinsInput(): number;
    private _restrictions;
    get restrictions(): CodebuildProjectBuildBatchConfigRestrictionsOutputReference;
    putRestrictions(value: CodebuildProjectBuildBatchConfigRestrictions): void;
    resetRestrictions(): void;
    get restrictionsInput(): CodebuildProjectBuildBatchConfigRestrictions;
}
export interface CodebuildProjectCache {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#modes CodebuildProject#modes}
    */
    readonly modes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
}
export declare function codebuildProjectCacheToTerraform(struct?: CodebuildProjectCacheOutputReference | CodebuildProjectCache): any;
export declare class CodebuildProjectCacheOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectCache | undefined;
    set internalValue(value: CodebuildProjectCache | undefined);
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _modes?;
    get modes(): string[];
    set modes(value: string[]);
    resetModes(): void;
    get modesInput(): string[];
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface CodebuildProjectEnvironmentEnvironmentVariable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#value CodebuildProject#value}
    */
    readonly value: string;
}
export declare function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable): any;
export interface CodebuildProjectEnvironmentRegistryCredential {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential CodebuildProject#credential}
    */
    readonly credential: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential_provider CodebuildProject#credential_provider}
    */
    readonly credentialProvider: string;
}
export declare function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct?: CodebuildProjectEnvironmentRegistryCredentialOutputReference | CodebuildProjectEnvironmentRegistryCredential): any;
export declare class CodebuildProjectEnvironmentRegistryCredentialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectEnvironmentRegistryCredential | undefined;
    set internalValue(value: CodebuildProjectEnvironmentRegistryCredential | undefined);
    private _credential?;
    get credential(): string;
    set credential(value: string);
    get credentialInput(): string;
    private _credentialProvider?;
    get credentialProvider(): string;
    set credentialProvider(value: string);
    get credentialProviderInput(): string;
}
export interface CodebuildProjectEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#certificate CodebuildProject#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_type CodebuildProject#compute_type}
    */
    readonly computeType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image CodebuildProject#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}
    */
    readonly imagePullCredentialsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#privileged_mode CodebuildProject#privileged_mode}
    */
    readonly privilegedMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * environment_variable block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment_variable CodebuildProject#environment_variable}
    */
    readonly environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[];
    /**
    * registry_credential block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#registry_credential CodebuildProject#registry_credential}
    */
    readonly registryCredential?: CodebuildProjectEnvironmentRegistryCredential;
}
export declare function codebuildProjectEnvironmentToTerraform(struct?: CodebuildProjectEnvironmentOutputReference | CodebuildProjectEnvironment): any;
export declare class CodebuildProjectEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectEnvironment | undefined;
    set internalValue(value: CodebuildProjectEnvironment | undefined);
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string;
    private _computeType?;
    get computeType(): string;
    set computeType(value: string);
    get computeTypeInput(): string;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string;
    private _imagePullCredentialsType?;
    get imagePullCredentialsType(): string;
    set imagePullCredentialsType(value: string);
    resetImagePullCredentialsType(): void;
    get imagePullCredentialsTypeInput(): string;
    private _privilegedMode?;
    get privilegedMode(): boolean | cdktf.IResolvable;
    set privilegedMode(value: boolean | cdktf.IResolvable);
    resetPrivilegedMode(): void;
    get privilegedModeInput(): boolean | cdktf.IResolvable;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _environmentVariable?;
    get environmentVariable(): CodebuildProjectEnvironmentEnvironmentVariable[];
    set environmentVariable(value: CodebuildProjectEnvironmentEnvironmentVariable[]);
    resetEnvironmentVariable(): void;
    get environmentVariableInput(): CodebuildProjectEnvironmentEnvironmentVariable[];
    private _registryCredential;
    get registryCredential(): CodebuildProjectEnvironmentRegistryCredentialOutputReference;
    putRegistryCredential(value: CodebuildProjectEnvironmentRegistryCredential): void;
    resetRegistryCredential(): void;
    get registryCredentialInput(): CodebuildProjectEnvironmentRegistryCredential;
}
export interface CodebuildProjectFileSystemLocations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#identifier CodebuildProject#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_options CodebuildProject#mount_options}
    */
    readonly mountOptions?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_point CodebuildProject#mount_point}
    */
    readonly mountPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
}
export declare function codebuildProjectFileSystemLocationsToTerraform(struct?: CodebuildProjectFileSystemLocations): any;
export interface CodebuildProjectLogsConfigCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#group_name CodebuildProject#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#stream_name CodebuildProject#stream_name}
    */
    readonly streamName?: string;
}
export declare function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogsOutputReference | CodebuildProjectLogsConfigCloudwatchLogs): any;
export declare class CodebuildProjectLogsConfigCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectLogsConfigCloudwatchLogs | undefined;
    set internalValue(value: CodebuildProjectLogsConfigCloudwatchLogs | undefined);
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    resetGroupName(): void;
    get groupNameInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    resetStreamName(): void;
    get streamNameInput(): string;
}
export interface CodebuildProjectLogsConfigS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}
    */
    readonly status?: string;
}
export declare function codebuildProjectLogsConfigS3LogsToTerraform(struct?: CodebuildProjectLogsConfigS3LogsOutputReference | CodebuildProjectLogsConfigS3Logs): any;
export declare class CodebuildProjectLogsConfigS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectLogsConfigS3Logs | undefined;
    set internalValue(value: CodebuildProjectLogsConfigS3Logs | undefined);
    private _encryptionDisabled?;
    get encryptionDisabled(): boolean | cdktf.IResolvable;
    set encryptionDisabled(value: boolean | cdktf.IResolvable);
    resetEncryptionDisabled(): void;
    get encryptionDisabledInput(): boolean | cdktf.IResolvable;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
}
export interface CodebuildProjectLogsConfig {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cloudwatch_logs CodebuildProject#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs;
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#s3_logs CodebuildProject#s3_logs}
    */
    readonly s3Logs?: CodebuildProjectLogsConfigS3Logs;
}
export declare function codebuildProjectLogsConfigToTerraform(struct?: CodebuildProjectLogsConfigOutputReference | CodebuildProjectLogsConfig): any;
export declare class CodebuildProjectLogsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectLogsConfig | undefined;
    set internalValue(value: CodebuildProjectLogsConfig | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): CodebuildProjectLogsConfigCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: CodebuildProjectLogsConfigCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): CodebuildProjectLogsConfigCloudwatchLogs;
    private _s3Logs;
    get s3Logs(): CodebuildProjectLogsConfigS3LogsOutputReference;
    putS3Logs(value: CodebuildProjectLogsConfigS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): CodebuildProjectLogsConfigS3Logs;
}
export interface CodebuildProjectSecondaryArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
}
export declare function codebuildProjectSecondaryArtifactsToTerraform(struct?: CodebuildProjectSecondaryArtifacts): any;
export interface CodebuildProjectSecondarySourcesAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
}
export declare function codebuildProjectSecondarySourcesAuthToTerraform(struct?: CodebuildProjectSecondarySourcesAuthOutputReference | CodebuildProjectSecondarySourcesAuth): any;
export declare class CodebuildProjectSecondarySourcesAuthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectSecondarySourcesAuth | undefined;
    set internalValue(value: CodebuildProjectSecondarySourcesAuth | undefined);
    private _resource?;
    get resource(): string;
    set resource(value: string);
    resetResource(): void;
    get resourceInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface CodebuildProjectSecondarySourcesBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
}
export declare function codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct?: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference | CodebuildProjectSecondarySourcesBuildStatusConfig): any;
export declare class CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectSecondarySourcesBuildStatusConfig | undefined;
    set internalValue(value: CodebuildProjectSecondarySourcesBuildStatusConfig | undefined);
    private _context?;
    get context(): string;
    set context(value: string);
    resetContext(): void;
    get contextInput(): string;
    private _targetUrl?;
    get targetUrl(): string;
    set targetUrl(value: string);
    resetTargetUrl(): void;
    get targetUrlInput(): string;
}
export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
}
export declare function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference | CodebuildProjectSecondarySourcesGitSubmodulesConfig): any;
export declare class CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectSecondarySourcesGitSubmodulesConfig | undefined;
    set internalValue(value: CodebuildProjectSecondarySourcesGitSubmodulesConfig | undefined);
    private _fetchSubmodules?;
    get fetchSubmodules(): boolean | cdktf.IResolvable;
    set fetchSubmodules(value: boolean | cdktf.IResolvable);
    get fetchSubmodulesInput(): boolean | cdktf.IResolvable;
}
export interface CodebuildProjectSecondarySources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_identifier CodebuildProject#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * auth block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
    */
    readonly auth?: CodebuildProjectSecondarySourcesAuth;
    /**
    * build_status_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSecondarySourcesBuildStatusConfig;
    /**
    * git_submodules_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSecondarySourcesGitSubmodulesConfig;
}
export declare function codebuildProjectSecondarySourcesToTerraform(struct?: CodebuildProjectSecondarySources): any;
export interface CodebuildProjectSourceAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
}
export declare function codebuildProjectSourceAuthToTerraform(struct?: CodebuildProjectSourceAuthOutputReference | CodebuildProjectSourceAuth): any;
export declare class CodebuildProjectSourceAuthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectSourceAuth | undefined;
    set internalValue(value: CodebuildProjectSourceAuth | undefined);
    private _resource?;
    get resource(): string;
    set resource(value: string);
    resetResource(): void;
    get resourceInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface CodebuildProjectSourceBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
}
export declare function codebuildProjectSourceBuildStatusConfigToTerraform(struct?: CodebuildProjectSourceBuildStatusConfigOutputReference | CodebuildProjectSourceBuildStatusConfig): any;
export declare class CodebuildProjectSourceBuildStatusConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectSourceBuildStatusConfig | undefined;
    set internalValue(value: CodebuildProjectSourceBuildStatusConfig | undefined);
    private _context?;
    get context(): string;
    set context(value: string);
    resetContext(): void;
    get contextInput(): string;
    private _targetUrl?;
    get targetUrl(): string;
    set targetUrl(value: string);
    resetTargetUrl(): void;
    get targetUrlInput(): string;
}
export interface CodebuildProjectSourceGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
}
export declare function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfigOutputReference | CodebuildProjectSourceGitSubmodulesConfig): any;
export declare class CodebuildProjectSourceGitSubmodulesConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectSourceGitSubmodulesConfig | undefined;
    set internalValue(value: CodebuildProjectSourceGitSubmodulesConfig | undefined);
    private _fetchSubmodules?;
    get fetchSubmodules(): boolean | cdktf.IResolvable;
    set fetchSubmodules(value: boolean | cdktf.IResolvable);
    get fetchSubmodulesInput(): boolean | cdktf.IResolvable;
}
export interface CodebuildProjectSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * auth block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
    */
    readonly auth?: CodebuildProjectSourceAuth;
    /**
    * build_status_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSourceBuildStatusConfig;
    /**
    * git_submodules_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig;
}
export declare function codebuildProjectSourceToTerraform(struct?: CodebuildProjectSourceOutputReference | CodebuildProjectSource): any;
export declare class CodebuildProjectSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectSource | undefined;
    set internalValue(value: CodebuildProjectSource | undefined);
    private _buildspec?;
    get buildspec(): string;
    set buildspec(value: string);
    resetBuildspec(): void;
    get buildspecInput(): string;
    private _gitCloneDepth?;
    get gitCloneDepth(): number;
    set gitCloneDepth(value: number);
    resetGitCloneDepth(): void;
    get gitCloneDepthInput(): number;
    private _insecureSsl?;
    get insecureSsl(): boolean | cdktf.IResolvable;
    set insecureSsl(value: boolean | cdktf.IResolvable);
    resetInsecureSsl(): void;
    get insecureSslInput(): boolean | cdktf.IResolvable;
    private _location?;
    get location(): string;
    set location(value: string);
    resetLocation(): void;
    get locationInput(): string;
    private _reportBuildStatus?;
    get reportBuildStatus(): boolean | cdktf.IResolvable;
    set reportBuildStatus(value: boolean | cdktf.IResolvable);
    resetReportBuildStatus(): void;
    get reportBuildStatusInput(): boolean | cdktf.IResolvable;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _auth;
    get auth(): CodebuildProjectSourceAuthOutputReference;
    putAuth(value: CodebuildProjectSourceAuth): void;
    resetAuth(): void;
    get authInput(): CodebuildProjectSourceAuth;
    private _buildStatusConfig;
    get buildStatusConfig(): CodebuildProjectSourceBuildStatusConfigOutputReference;
    putBuildStatusConfig(value: CodebuildProjectSourceBuildStatusConfig): void;
    resetBuildStatusConfig(): void;
    get buildStatusConfigInput(): CodebuildProjectSourceBuildStatusConfig;
    private _gitSubmodulesConfig;
    get gitSubmodulesConfig(): CodebuildProjectSourceGitSubmodulesConfigOutputReference;
    putGitSubmodulesConfig(value: CodebuildProjectSourceGitSubmodulesConfig): void;
    resetGitSubmodulesConfig(): void;
    get gitSubmodulesConfigInput(): CodebuildProjectSourceGitSubmodulesConfig;
}
export interface CodebuildProjectVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#security_group_ids CodebuildProject#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#subnets CodebuildProject#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_id CodebuildProject#vpc_id}
    */
    readonly vpcId: string;
}
export declare function codebuildProjectVpcConfigToTerraform(struct?: CodebuildProjectVpcConfigOutputReference | CodebuildProjectVpcConfig): any;
export declare class CodebuildProjectVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildProjectVpcConfig | undefined;
    set internalValue(value: CodebuildProjectVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[];
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project}
*/
export declare class CodebuildProject extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildProjectConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildProjectConfig);
    get arn(): string;
    private _badgeEnabled?;
    get badgeEnabled(): boolean | cdktf.IResolvable;
    set badgeEnabled(value: boolean | cdktf.IResolvable);
    resetBadgeEnabled(): void;
    get badgeEnabledInput(): boolean | cdktf.IResolvable;
    get badgeUrl(): string;
    private _buildTimeout?;
    get buildTimeout(): number;
    set buildTimeout(value: number);
    resetBuildTimeout(): void;
    get buildTimeoutInput(): number;
    private _concurrentBuildLimit?;
    get concurrentBuildLimit(): number;
    set concurrentBuildLimit(value: number);
    resetConcurrentBuildLimit(): void;
    get concurrentBuildLimitInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    resetEncryptionKey(): void;
    get encryptionKeyInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _queuedTimeout?;
    get queuedTimeout(): number;
    set queuedTimeout(value: number);
    resetQueuedTimeout(): void;
    get queuedTimeoutInput(): number;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    resetSourceVersion(): void;
    get sourceVersionInput(): string;
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
    private _artifacts;
    get artifacts(): CodebuildProjectArtifactsOutputReference;
    putArtifacts(value: CodebuildProjectArtifacts): void;
    get artifactsInput(): CodebuildProjectArtifacts;
    private _buildBatchConfig;
    get buildBatchConfig(): CodebuildProjectBuildBatchConfigOutputReference;
    putBuildBatchConfig(value: CodebuildProjectBuildBatchConfig): void;
    resetBuildBatchConfig(): void;
    get buildBatchConfigInput(): CodebuildProjectBuildBatchConfig;
    private _cache;
    get cache(): CodebuildProjectCacheOutputReference;
    putCache(value: CodebuildProjectCache): void;
    resetCache(): void;
    get cacheInput(): CodebuildProjectCache;
    private _environment;
    get environment(): CodebuildProjectEnvironmentOutputReference;
    putEnvironment(value: CodebuildProjectEnvironment): void;
    get environmentInput(): CodebuildProjectEnvironment;
    private _fileSystemLocations?;
    get fileSystemLocations(): CodebuildProjectFileSystemLocations[];
    set fileSystemLocations(value: CodebuildProjectFileSystemLocations[]);
    resetFileSystemLocations(): void;
    get fileSystemLocationsInput(): CodebuildProjectFileSystemLocations[];
    private _logsConfig;
    get logsConfig(): CodebuildProjectLogsConfigOutputReference;
    putLogsConfig(value: CodebuildProjectLogsConfig): void;
    resetLogsConfig(): void;
    get logsConfigInput(): CodebuildProjectLogsConfig;
    private _secondaryArtifacts?;
    get secondaryArtifacts(): CodebuildProjectSecondaryArtifacts[];
    set secondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[]);
    resetSecondaryArtifacts(): void;
    get secondaryArtifactsInput(): CodebuildProjectSecondaryArtifacts[];
    private _secondarySources?;
    get secondarySources(): CodebuildProjectSecondarySources[];
    set secondarySources(value: CodebuildProjectSecondarySources[]);
    resetSecondarySources(): void;
    get secondarySourcesInput(): CodebuildProjectSecondarySources[];
    private _source;
    get source(): CodebuildProjectSourceOutputReference;
    putSource(value: CodebuildProjectSource): void;
    get sourceInput(): CodebuildProjectSource;
    private _vpcConfig;
    get vpcConfig(): CodebuildProjectVpcConfigOutputReference;
    putVpcConfig(value: CodebuildProjectVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): CodebuildProjectVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codebuild-project.d.ts.map