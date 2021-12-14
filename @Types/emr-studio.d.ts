import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic MapReduce
*/
export interface EmrStudioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#auth_mode EmrStudio#auth_mode}
    */
    readonly authMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#default_s3_location EmrStudio#default_s3_location}
    */
    readonly defaultS3Location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#description EmrStudio#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#engine_security_group_id EmrStudio#engine_security_group_id}
    */
    readonly engineSecurityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#idp_auth_url EmrStudio#idp_auth_url}
    */
    readonly idpAuthUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}
    */
    readonly idpRelayStateParameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#name EmrStudio#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#service_role EmrStudio#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#subnet_ids EmrStudio#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#tags EmrStudio#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#tags_all EmrStudio#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#user_role EmrStudio#user_role}
    */
    readonly userRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#vpc_id EmrStudio#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html#workspace_security_group_id EmrStudio#workspace_security_group_id}
    */
    readonly workspaceSecurityGroupId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html aws_emr_studio}
*/
export declare class EmrStudio extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_studio.html aws_emr_studio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrStudioConfig
    */
    constructor(scope: Construct, id: string, config: EmrStudioConfig);
    get arn(): string;
    private _authMode?;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string;
    private _defaultS3Location?;
    get defaultS3Location(): string;
    set defaultS3Location(value: string);
    get defaultS3LocationInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _engineSecurityGroupId?;
    get engineSecurityGroupId(): string;
    set engineSecurityGroupId(value: string);
    get engineSecurityGroupIdInput(): string;
    get id(): string;
    private _idpAuthUrl?;
    get idpAuthUrl(): string;
    set idpAuthUrl(value: string);
    resetIdpAuthUrl(): void;
    get idpAuthUrlInput(): string;
    private _idpRelayStateParameterName?;
    get idpRelayStateParameterName(): string;
    set idpRelayStateParameterName(value: string);
    resetIdpRelayStateParameterName(): void;
    get idpRelayStateParameterNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
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
    get url(): string;
    private _userRole?;
    get userRole(): string;
    set userRole(value: string);
    resetUserRole(): void;
    get userRoleInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _workspaceSecurityGroupId?;
    get workspaceSecurityGroupId(): string;
    set workspaceSecurityGroupId(value: string);
    get workspaceSecurityGroupIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=emr-studio.d.ts.map