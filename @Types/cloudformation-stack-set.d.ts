import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFormation
*/
export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#administration_role_arn CloudformationStackSet#administration_role_arn}
    */
    readonly administrationRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#capabilities CloudformationStackSet#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#description CloudformationStackSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#execution_role_name CloudformationStackSet#execution_role_name}
    */
    readonly executionRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#name CloudformationStackSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#parameters CloudformationStackSet#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#permission_model CloudformationStackSet#permission_model}
    */
    readonly permissionModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags CloudformationStackSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags_all CloudformationStackSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_body CloudformationStackSet#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_url CloudformationStackSet#template_url}
    */
    readonly templateUrl?: string;
    /**
    * auto_deployment block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#auto_deployment CloudformationStackSet#auto_deployment}
    */
    readonly autoDeployment?: CloudformationStackSetAutoDeployment;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#timeouts CloudformationStackSet#timeouts}
    */
    readonly timeouts?: CloudformationStackSetTimeouts;
}
export interface CloudformationStackSetAutoDeployment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#enabled CloudformationStackSet#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}
    */
    readonly retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable;
}
export declare function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeploymentOutputReference | CloudformationStackSetAutoDeployment): any;
export declare class CloudformationStackSetAutoDeploymentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudformationStackSetAutoDeployment | undefined;
    set internalValue(value: CloudformationStackSetAutoDeployment | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _retainStacksOnAccountRemoval?;
    get retainStacksOnAccountRemoval(): boolean | cdktf.IResolvable;
    set retainStacksOnAccountRemoval(value: boolean | cdktf.IResolvable);
    resetRetainStacksOnAccountRemoval(): void;
    get retainStacksOnAccountRemovalInput(): boolean | cdktf.IResolvable;
}
export interface CloudformationStackSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#update CloudformationStackSet#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackSetTimeoutsToTerraform(struct?: CloudformationStackSetTimeoutsOutputReference | CloudformationStackSetTimeouts): any;
export declare class CloudformationStackSetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudformationStackSetTimeouts | undefined;
    set internalValue(value: CloudformationStackSetTimeouts | undefined);
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set}
*/
export declare class CloudformationStackSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackSetConfig);
    private _administrationRoleArn?;
    get administrationRoleArn(): string;
    set administrationRoleArn(value: string);
    resetAdministrationRoleArn(): void;
    get administrationRoleArnInput(): string;
    get arn(): string;
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _executionRoleName?;
    get executionRoleName(): string;
    set executionRoleName(value: string);
    resetExecutionRoleName(): void;
    get executionRoleNameInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _permissionModel?;
    get permissionModel(): string;
    set permissionModel(value: string);
    resetPermissionModel(): void;
    get permissionModelInput(): string;
    get stackSetId(): string;
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
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string;
    private _autoDeployment;
    get autoDeployment(): CloudformationStackSetAutoDeploymentOutputReference;
    putAutoDeployment(value: CloudformationStackSetAutoDeployment): void;
    resetAutoDeployment(): void;
    get autoDeploymentInput(): CloudformationStackSetAutoDeployment;
    private _timeouts;
    get timeouts(): CloudformationStackSetTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackSetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): CloudformationStackSetTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudformation-stack-set.d.ts.map