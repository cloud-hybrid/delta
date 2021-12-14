import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFormation
*/
export interface CloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#capabilities CloudformationStack#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#disable_rollback CloudformationStack#disable_rollback}
    */
    readonly disableRollback?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#iam_role_arn CloudformationStack#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#name CloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#notification_arns CloudformationStack#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#on_failure CloudformationStack#on_failure}
    */
    readonly onFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#parameters CloudformationStack#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_body CloudformationStack#policy_body}
    */
    readonly policyBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_url CloudformationStack#policy_url}
    */
    readonly policyUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags CloudformationStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags_all CloudformationStack#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_body CloudformationStack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_url CloudformationStack#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeout_in_minutes CloudformationStack#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeouts CloudformationStack#timeouts}
    */
    readonly timeouts?: CloudformationStackTimeouts;
}
export interface CloudformationStackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#create CloudformationStack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#delete CloudformationStack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#update CloudformationStack#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackTimeoutsToTerraform(struct?: CloudformationStackTimeoutsOutputReference | CloudformationStackTimeouts): any;
export declare class CloudformationStackTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudformationStackTimeouts | undefined;
    set internalValue(value: CloudformationStackTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack}
*/
export declare class CloudformationStack extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackConfig);
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[];
    private _disableRollback?;
    get disableRollback(): boolean | cdktf.IResolvable;
    set disableRollback(value: boolean | cdktf.IResolvable);
    resetDisableRollback(): void;
    get disableRollbackInput(): boolean | cdktf.IResolvable;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _notificationArns?;
    get notificationArns(): string[];
    set notificationArns(value: string[]);
    resetNotificationArns(): void;
    get notificationArnsInput(): string[];
    private _onFailure?;
    get onFailure(): string;
    set onFailure(value: string);
    resetOnFailure(): void;
    get onFailureInput(): string;
    outputs(key: string): string;
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
    private _policyBody?;
    get policyBody(): string;
    set policyBody(value: string);
    resetPolicyBody(): void;
    get policyBodyInput(): string;
    private _policyUrl?;
    get policyUrl(): string;
    set policyUrl(value: string);
    resetPolicyUrl(): void;
    get policyUrlInput(): string;
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
    private _timeoutInMinutes?;
    get timeoutInMinutes(): number;
    set timeoutInMinutes(value: number);
    resetTimeoutInMinutes(): void;
    get timeoutInMinutesInput(): number;
    private _timeouts;
    get timeouts(): CloudformationStackTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): CloudformationStackTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudformation-stack.d.ts.map