import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Cognito
*/
export interface CognitoIdentityPoolRolesAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#roles CognitoIdentityPoolRolesAttachment#roles}
    */
    readonly roles: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * role_mapping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#role_mapping CognitoIdentityPoolRolesAttachment#role_mapping}
    */
    readonly roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[];
}
export interface CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#claim CognitoIdentityPoolRolesAttachment#claim}
    */
    readonly claim: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#match_type CognitoIdentityPoolRolesAttachment#match_type}
    */
    readonly matchType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#role_arn CognitoIdentityPoolRolesAttachment#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#value CognitoIdentityPoolRolesAttachment#value}
    */
    readonly value: string;
}
export declare function cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule): any;
export interface CognitoIdentityPoolRolesAttachmentRoleMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#ambiguous_role_resolution CognitoIdentityPoolRolesAttachment#ambiguous_role_resolution}
    */
    readonly ambiguousRoleResolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#identity_provider CognitoIdentityPoolRolesAttachment#identity_provider}
    */
    readonly identityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#type CognitoIdentityPoolRolesAttachment#type}
    */
    readonly type: string;
    /**
    * mapping_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html#mapping_rule CognitoIdentityPoolRolesAttachment#mapping_rule}
    */
    readonly mappingRule?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[];
}
export declare function cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMapping): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment}
*/
export declare class CognitoIdentityPoolRolesAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html aws_cognito_identity_pool_roles_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolRolesAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: CognitoIdentityPoolRolesAttachmentConfig);
    get id(): string;
    private _identityPoolId?;
    get identityPoolId(): string;
    set identityPoolId(value: string);
    get identityPoolIdInput(): string;
    private _roles?;
    get roles(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set roles(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get rolesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _roleMapping?;
    get roleMapping(): CognitoIdentityPoolRolesAttachmentRoleMapping[];
    set roleMapping(value: CognitoIdentityPoolRolesAttachmentRoleMapping[]);
    resetRoleMapping(): void;
    get roleMappingInput(): CognitoIdentityPoolRolesAttachmentRoleMapping[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cognito-identity-pool-roles-attachment.d.ts.map