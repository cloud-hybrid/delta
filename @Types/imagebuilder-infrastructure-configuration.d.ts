import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface ImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#description ImagebuilderInfrastructureConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}
    */
    readonly instanceProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#instance_types ImagebuilderInfrastructureConfiguration#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#key_pair ImagebuilderInfrastructureConfiguration#key_pair}
    */
    readonly keyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#name ImagebuilderInfrastructureConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#tags ImagebuilderInfrastructureConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#tags_all ImagebuilderInfrastructureConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}
    */
    readonly terminateInstanceOnFailure?: boolean | cdktf.IResolvable;
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#logging ImagebuilderInfrastructureConfiguration#logging}
    */
    readonly logging?: ImagebuilderInfrastructureConfigurationLogging;
}
export interface ImagebuilderInfrastructureConfigurationLoggingS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference | ImagebuilderInfrastructureConfigurationLoggingS3Logs): any;
export declare class ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderInfrastructureConfigurationLoggingS3Logs | undefined;
    set internalValue(value: ImagebuilderInfrastructureConfigurationLoggingS3Logs | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string;
}
export interface ImagebuilderInfrastructureConfigurationLogging {
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}
    */
    readonly s3Logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs;
}
export declare function imagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingOutputReference | ImagebuilderInfrastructureConfigurationLogging): any;
export declare class ImagebuilderInfrastructureConfigurationLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderInfrastructureConfigurationLogging | undefined;
    set internalValue(value: ImagebuilderInfrastructureConfigurationLogging | undefined);
    private _s3Logs;
    get s3Logs(): ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference;
    putS3Logs(value: ImagebuilderInfrastructureConfigurationLoggingS3Logs): void;
    get s3LogsInput(): ImagebuilderInfrastructureConfigurationLoggingS3Logs;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}
*/
export declare class ImagebuilderInfrastructureConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderInfrastructureConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderInfrastructureConfigurationConfig);
    get arn(): string;
    get dateCreated(): string;
    get dateUpdated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _instanceProfileName?;
    get instanceProfileName(): string;
    set instanceProfileName(value: string);
    get instanceProfileNameInput(): string;
    private _instanceTypes?;
    get instanceTypes(): string[];
    set instanceTypes(value: string[]);
    resetInstanceTypes(): void;
    get instanceTypesInput(): string[];
    private _keyPair?;
    get keyPair(): string;
    set keyPair(value: string);
    resetKeyPair(): void;
    get keyPairInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set resourceTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetResourceTags(): void;
    get resourceTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
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
    private _terminateInstanceOnFailure?;
    get terminateInstanceOnFailure(): boolean | cdktf.IResolvable;
    set terminateInstanceOnFailure(value: boolean | cdktf.IResolvable);
    resetTerminateInstanceOnFailure(): void;
    get terminateInstanceOnFailureInput(): boolean | cdktf.IResolvable;
    private _logging;
    get logging(): ImagebuilderInfrastructureConfigurationLoggingOutputReference;
    putLogging(value: ImagebuilderInfrastructureConfigurationLogging): void;
    resetLogging(): void;
    get loggingInput(): ImagebuilderInfrastructureConfigurationLogging;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=imagebuilder-infrastructure-configuration.d.ts.map