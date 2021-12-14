import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerWorkteamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#description SagemakerWorkteam#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#tags SagemakerWorkteam#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#tags_all SagemakerWorkteam#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#workforce_name SagemakerWorkteam#workforce_name}
    */
    readonly workforceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#workteam_name SagemakerWorkteam#workteam_name}
    */
    readonly workteamName: string;
    /**
    * member_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#member_definition SagemakerWorkteam#member_definition}
    */
    readonly memberDefinition: SagemakerWorkteamMemberDefinition[];
    /**
    * notification_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#notification_configuration SagemakerWorkteam#notification_configuration}
    */
    readonly notificationConfiguration?: SagemakerWorkteamNotificationConfiguration;
}
export interface SagemakerWorkteamMemberDefinitionCognitoMemberDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#client_id SagemakerWorkteam#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#user_group SagemakerWorkteam#user_group}
    */
    readonly userGroup: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#user_pool SagemakerWorkteam#user_pool}
    */
    readonly userPool: string;
}
export declare function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): any;
export declare class SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerWorkteamMemberDefinitionCognitoMemberDefinition | undefined;
    set internalValue(value: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _userGroup?;
    get userGroup(): string;
    set userGroup(value: string);
    get userGroupInput(): string;
    private _userPool?;
    get userPool(): string;
    set userPool(value: string);
    get userPoolInput(): string;
}
export interface SagemakerWorkteamMemberDefinitionOidcMemberDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#groups SagemakerWorkteam#groups}
    */
    readonly groups: string[];
}
export declare function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionOidcMemberDefinition): any;
export declare class SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerWorkteamMemberDefinitionOidcMemberDefinition | undefined;
    set internalValue(value: SagemakerWorkteamMemberDefinitionOidcMemberDefinition | undefined);
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    get groupsInput(): string[];
}
export interface SagemakerWorkteamMemberDefinition {
    /**
    * cognito_member_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#cognito_member_definition SagemakerWorkteam#cognito_member_definition}
    */
    readonly cognitoMemberDefinition?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
    /**
    * oidc_member_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#oidc_member_definition SagemakerWorkteam#oidc_member_definition}
    */
    readonly oidcMemberDefinition?: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
}
export declare function sagemakerWorkteamMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinition): any;
export interface SagemakerWorkteamNotificationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html#notification_topic_arn SagemakerWorkteam#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
}
export declare function sagemakerWorkteamNotificationConfigurationToTerraform(struct?: SagemakerWorkteamNotificationConfigurationOutputReference | SagemakerWorkteamNotificationConfiguration): any;
export declare class SagemakerWorkteamNotificationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerWorkteamNotificationConfiguration | undefined;
    set internalValue(value: SagemakerWorkteamNotificationConfiguration | undefined);
    private _notificationTopicArn?;
    get notificationTopicArn(): string;
    set notificationTopicArn(value: string);
    resetNotificationTopicArn(): void;
    get notificationTopicArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam}
*/
export declare class SagemakerWorkteam extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkteamConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerWorkteamConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    get id(): string;
    get subdomain(): string;
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
    private _workforceName?;
    get workforceName(): string;
    set workforceName(value: string);
    get workforceNameInput(): string;
    private _workteamName?;
    get workteamName(): string;
    set workteamName(value: string);
    get workteamNameInput(): string;
    private _memberDefinition?;
    get memberDefinition(): SagemakerWorkteamMemberDefinition[];
    set memberDefinition(value: SagemakerWorkteamMemberDefinition[]);
    get memberDefinitionInput(): SagemakerWorkteamMemberDefinition[];
    private _notificationConfiguration;
    get notificationConfiguration(): SagemakerWorkteamNotificationConfigurationOutputReference;
    putNotificationConfiguration(value: SagemakerWorkteamNotificationConfiguration): void;
    resetNotificationConfiguration(): void;
    get notificationConfigurationInput(): SagemakerWorkteamNotificationConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-workteam.d.ts.map