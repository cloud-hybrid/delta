import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS OpsWorks
*/
export interface OpsworksStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#agent_version OpsworksStack#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#berkshelf_version OpsworksStack#berkshelf_version}
    */
    readonly berkshelfVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#color OpsworksStack#color}
    */
    readonly color?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_name OpsworksStack#configuration_manager_name}
    */
    readonly configurationManagerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_version OpsworksStack#configuration_manager_version}
    */
    readonly configurationManagerVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_json OpsworksStack#custom_json}
    */
    readonly customJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_availability_zone OpsworksStack#default_availability_zone}
    */
    readonly defaultAvailabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}
    */
    readonly defaultInstanceProfileArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_os OpsworksStack#default_os}
    */
    readonly defaultOs?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_root_device_type OpsworksStack#default_root_device_type}
    */
    readonly defaultRootDeviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_ssh_key_name OpsworksStack#default_ssh_key_name}
    */
    readonly defaultSshKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_subnet_id OpsworksStack#default_subnet_id}
    */
    readonly defaultSubnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#hostname_theme OpsworksStack#hostname_theme}
    */
    readonly hostnameTheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#manage_berkshelf OpsworksStack#manage_berkshelf}
    */
    readonly manageBerkshelf?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#name OpsworksStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#region OpsworksStack#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#service_role_arn OpsworksStack#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags OpsworksStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags_all OpsworksStack#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}
    */
    readonly useCustomCookbooks?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}
    */
    readonly useOpsworksSecurityGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#vpc_id OpsworksStack#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * custom_cookbooks_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}
    */
    readonly customCookbooksSource?: OpsworksStackCustomCookbooksSource[];
}
export interface OpsworksStackCustomCookbooksSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#password OpsworksStack#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#revision OpsworksStack#revision}
    */
    readonly revision?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#ssh_key OpsworksStack#ssh_key}
    */
    readonly sshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#type OpsworksStack#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#url OpsworksStack#url}
    */
    readonly url: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#username OpsworksStack#username}
    */
    readonly username?: string;
}
export declare function opsworksStackCustomCookbooksSourceToTerraform(struct?: OpsworksStackCustomCookbooksSource): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack}
*/
export declare class OpsworksStack extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksStackConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksStackConfig);
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string;
    get arn(): string;
    private _berkshelfVersion?;
    get berkshelfVersion(): string;
    set berkshelfVersion(value: string);
    resetBerkshelfVersion(): void;
    get berkshelfVersionInput(): string;
    private _color?;
    get color(): string;
    set color(value: string);
    resetColor(): void;
    get colorInput(): string;
    private _configurationManagerName?;
    get configurationManagerName(): string;
    set configurationManagerName(value: string);
    resetConfigurationManagerName(): void;
    get configurationManagerNameInput(): string;
    private _configurationManagerVersion?;
    get configurationManagerVersion(): string;
    set configurationManagerVersion(value: string);
    resetConfigurationManagerVersion(): void;
    get configurationManagerVersionInput(): string;
    private _customJson?;
    get customJson(): string;
    set customJson(value: string);
    resetCustomJson(): void;
    get customJsonInput(): string;
    private _defaultAvailabilityZone?;
    get defaultAvailabilityZone(): string;
    set defaultAvailabilityZone(value: string);
    resetDefaultAvailabilityZone(): void;
    get defaultAvailabilityZoneInput(): string;
    private _defaultInstanceProfileArn?;
    get defaultInstanceProfileArn(): string;
    set defaultInstanceProfileArn(value: string);
    get defaultInstanceProfileArnInput(): string;
    private _defaultOs?;
    get defaultOs(): string;
    set defaultOs(value: string);
    resetDefaultOs(): void;
    get defaultOsInput(): string;
    private _defaultRootDeviceType?;
    get defaultRootDeviceType(): string;
    set defaultRootDeviceType(value: string);
    resetDefaultRootDeviceType(): void;
    get defaultRootDeviceTypeInput(): string;
    private _defaultSshKeyName?;
    get defaultSshKeyName(): string;
    set defaultSshKeyName(value: string);
    resetDefaultSshKeyName(): void;
    get defaultSshKeyNameInput(): string;
    private _defaultSubnetId?;
    get defaultSubnetId(): string;
    set defaultSubnetId(value: string);
    resetDefaultSubnetId(): void;
    get defaultSubnetIdInput(): string;
    private _hostnameTheme?;
    get hostnameTheme(): string;
    set hostnameTheme(value: string);
    resetHostnameTheme(): void;
    get hostnameThemeInput(): string;
    get id(): string;
    private _manageBerkshelf?;
    get manageBerkshelf(): boolean | cdktf.IResolvable;
    set manageBerkshelf(value: boolean | cdktf.IResolvable);
    resetManageBerkshelf(): void;
    get manageBerkshelfInput(): boolean | cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    get serviceRoleArnInput(): string;
    get stackEndpoint(): string;
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
    private _useCustomCookbooks?;
    get useCustomCookbooks(): boolean | cdktf.IResolvable;
    set useCustomCookbooks(value: boolean | cdktf.IResolvable);
    resetUseCustomCookbooks(): void;
    get useCustomCookbooksInput(): boolean | cdktf.IResolvable;
    private _useOpsworksSecurityGroups?;
    get useOpsworksSecurityGroups(): boolean | cdktf.IResolvable;
    set useOpsworksSecurityGroups(value: boolean | cdktf.IResolvable);
    resetUseOpsworksSecurityGroups(): void;
    get useOpsworksSecurityGroupsInput(): boolean | cdktf.IResolvable;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _customCookbooksSource?;
    get customCookbooksSource(): OpsworksStackCustomCookbooksSource[];
    set customCookbooksSource(value: OpsworksStackCustomCookbooksSource[]);
    resetCustomCookbooksSource(): void;
    get customCookbooksSourceInput(): OpsworksStackCustomCookbooksSource[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=opsworks-stack.d.ts.map