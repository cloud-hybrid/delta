import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags ImagebuilderDistributionConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags_all ImagebuilderDistributionConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * distribution block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#distribution ImagebuilderDistributionConfiguration#distribution}
    */
    readonly distribution: ImagebuilderDistributionConfigurationDistribution[];
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_groups ImagebuilderDistributionConfiguration#user_groups}
    */
    readonly userGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_ids ImagebuilderDistributionConfiguration#user_ids}
    */
    readonly userIds?: string[];
}
export declare function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any;
export declare class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined;
    set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined);
    private _userGroups?;
    get userGroups(): string[];
    set userGroups(value: string[]);
    resetUserGroups(): void;
    get userGroupsInput(): string[];
    private _userIds?;
    get userIds(): string[];
    set userIds(value: string[]);
    resetUserIds(): void;
    get userIdsInput(): string[];
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
    */
    readonly amiTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}
    */
    readonly targetAccountIds?: string[];
    /**
    * launch_permission block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#launch_permission ImagebuilderDistributionConfiguration#launch_permission}
    */
    readonly launchPermission?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
}
export declare function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any;
export declare class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined;
    set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined);
    private _amiTags?;
    get amiTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set amiTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAmiTags(): void;
    get amiTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _targetAccountIds?;
    get targetAccountIds(): string[];
    set targetAccountIds(value: string[]);
    resetTargetAccountIds(): void;
    get targetAccountIdsInput(): string[];
    private _launchPermission;
    get launchPermission(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference;
    putLaunchPermission(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): void;
    resetLaunchPermission(): void;
    get launchPermissionInput(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
}
export interface ImagebuilderDistributionConfigurationDistribution {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}
    */
    readonly licenseConfigurationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#region ImagebuilderDistributionConfiguration#region}
    */
    readonly region: string;
    /**
    * ami_distribution_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}
    */
    readonly amiDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
}
export declare function imagebuilderDistributionConfigurationDistributionToTerraform(struct?: ImagebuilderDistributionConfigurationDistribution): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
*/
export declare class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderDistributionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig);
    get arn(): string;
    get dateCreated(): string;
    get dateUpdated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _distribution?;
    get distribution(): ImagebuilderDistributionConfigurationDistribution[];
    set distribution(value: ImagebuilderDistributionConfigurationDistribution[]);
    get distributionInput(): ImagebuilderDistributionConfigurationDistribution[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=imagebuilder-distribution-configuration.d.ts.map