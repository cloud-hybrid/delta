import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Budgets
*/
export interface BudgetsBudgetActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#account_id BudgetsBudgetAction#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_type BudgetsBudgetAction#action_type}
    */
    readonly actionType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#approval_model BudgetsBudgetAction#approval_model}
    */
    readonly approvalModel: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#budget_name BudgetsBudgetAction#budget_name}
    */
    readonly budgetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#execution_role_arn BudgetsBudgetAction#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#notification_type BudgetsBudgetAction#notification_type}
    */
    readonly notificationType: string;
    /**
    * action_threshold block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold BudgetsBudgetAction#action_threshold}
    */
    readonly actionThreshold: BudgetsBudgetActionActionThreshold;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#definition BudgetsBudgetAction#definition}
    */
    readonly definition: BudgetsBudgetActionDefinition;
    /**
    * subscriber block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#subscriber BudgetsBudgetAction#subscriber}
    */
    readonly subscriber: BudgetsBudgetActionSubscriber[];
}
export interface BudgetsBudgetActionActionThreshold {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold_type BudgetsBudgetAction#action_threshold_type}
    */
    readonly actionThresholdType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold_value BudgetsBudgetAction#action_threshold_value}
    */
    readonly actionThresholdValue: number;
}
export declare function budgetsBudgetActionActionThresholdToTerraform(struct?: BudgetsBudgetActionActionThresholdOutputReference | BudgetsBudgetActionActionThreshold): any;
export declare class BudgetsBudgetActionActionThresholdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BudgetsBudgetActionActionThreshold | undefined;
    set internalValue(value: BudgetsBudgetActionActionThreshold | undefined);
    private _actionThresholdType?;
    get actionThresholdType(): string;
    set actionThresholdType(value: string);
    get actionThresholdTypeInput(): string;
    private _actionThresholdValue?;
    get actionThresholdValue(): number;
    set actionThresholdValue(value: number);
    get actionThresholdValueInput(): number;
}
export interface BudgetsBudgetActionDefinitionIamActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#groups BudgetsBudgetAction#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#policy_arn BudgetsBudgetAction#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#roles BudgetsBudgetAction#roles}
    */
    readonly roles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#users BudgetsBudgetAction#users}
    */
    readonly users?: string[];
}
export declare function budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference | BudgetsBudgetActionDefinitionIamActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BudgetsBudgetActionDefinitionIamActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinitionIamActionDefinition | undefined);
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    resetGroups(): void;
    get groupsInput(): string[];
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string;
    private _roles?;
    get roles(): string[];
    set roles(value: string[]);
    resetRoles(): void;
    get rolesInput(): string[];
    private _users?;
    get users(): string[];
    set users(value: string[]);
    resetUsers(): void;
    get usersInput(): string[];
}
export interface BudgetsBudgetActionDefinitionScpActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#policy_id BudgetsBudgetAction#policy_id}
    */
    readonly policyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#target_ids BudgetsBudgetAction#target_ids}
    */
    readonly targetIds: string[];
}
export declare function budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference | BudgetsBudgetActionDefinitionScpActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BudgetsBudgetActionDefinitionScpActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinitionScpActionDefinition | undefined);
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string;
    private _targetIds?;
    get targetIds(): string[];
    set targetIds(value: string[]);
    get targetIdsInput(): string[];
}
export interface BudgetsBudgetActionDefinitionSsmActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_sub_type BudgetsBudgetAction#action_sub_type}
    */
    readonly actionSubType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#instance_ids BudgetsBudgetAction#instance_ids}
    */
    readonly instanceIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#region BudgetsBudgetAction#region}
    */
    readonly region: string;
}
export declare function budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference | BudgetsBudgetActionDefinitionSsmActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BudgetsBudgetActionDefinitionSsmActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinitionSsmActionDefinition | undefined);
    private _actionSubType?;
    get actionSubType(): string;
    set actionSubType(value: string);
    get actionSubTypeInput(): string;
    private _instanceIds?;
    get instanceIds(): string[];
    set instanceIds(value: string[]);
    get instanceIdsInput(): string[];
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
}
export interface BudgetsBudgetActionDefinition {
    /**
    * iam_action_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#iam_action_definition BudgetsBudgetAction#iam_action_definition}
    */
    readonly iamActionDefinition?: BudgetsBudgetActionDefinitionIamActionDefinition;
    /**
    * scp_action_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#scp_action_definition BudgetsBudgetAction#scp_action_definition}
    */
    readonly scpActionDefinition?: BudgetsBudgetActionDefinitionScpActionDefinition;
    /**
    * ssm_action_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}
    */
    readonly ssmActionDefinition?: BudgetsBudgetActionDefinitionSsmActionDefinition;
}
export declare function budgetsBudgetActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionOutputReference | BudgetsBudgetActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BudgetsBudgetActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinition | undefined);
    private _iamActionDefinition;
    get iamActionDefinition(): BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference;
    putIamActionDefinition(value: BudgetsBudgetActionDefinitionIamActionDefinition): void;
    resetIamActionDefinition(): void;
    get iamActionDefinitionInput(): BudgetsBudgetActionDefinitionIamActionDefinition;
    private _scpActionDefinition;
    get scpActionDefinition(): BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference;
    putScpActionDefinition(value: BudgetsBudgetActionDefinitionScpActionDefinition): void;
    resetScpActionDefinition(): void;
    get scpActionDefinitionInput(): BudgetsBudgetActionDefinitionScpActionDefinition;
    private _ssmActionDefinition;
    get ssmActionDefinition(): BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference;
    putSsmActionDefinition(value: BudgetsBudgetActionDefinitionSsmActionDefinition): void;
    resetSsmActionDefinition(): void;
    get ssmActionDefinitionInput(): BudgetsBudgetActionDefinitionSsmActionDefinition;
}
export interface BudgetsBudgetActionSubscriber {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#address BudgetsBudgetAction#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#subscription_type BudgetsBudgetAction#subscription_type}
    */
    readonly subscriptionType: string;
}
export declare function budgetsBudgetActionSubscriberToTerraform(struct?: BudgetsBudgetActionSubscriber): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action}
*/
export declare class BudgetsBudgetAction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetActionConfig
    */
    constructor(scope: Construct, id: string, config: BudgetsBudgetActionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get actionId(): string;
    private _actionType?;
    get actionType(): string;
    set actionType(value: string);
    get actionTypeInput(): string;
    private _approvalModel?;
    get approvalModel(): string;
    set approvalModel(value: string);
    get approvalModelInput(): string;
    get arn(): string;
    private _budgetName?;
    get budgetName(): string;
    set budgetName(value: string);
    get budgetNameInput(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
    private _notificationType?;
    get notificationType(): string;
    set notificationType(value: string);
    get notificationTypeInput(): string;
    get status(): string;
    private _actionThreshold;
    get actionThreshold(): BudgetsBudgetActionActionThresholdOutputReference;
    putActionThreshold(value: BudgetsBudgetActionActionThreshold): void;
    get actionThresholdInput(): BudgetsBudgetActionActionThreshold;
    private _definition;
    get definition(): BudgetsBudgetActionDefinitionOutputReference;
    putDefinition(value: BudgetsBudgetActionDefinition): void;
    get definitionInput(): BudgetsBudgetActionDefinition;
    private _subscriber?;
    get subscriber(): BudgetsBudgetActionSubscriber[];
    set subscriber(value: BudgetsBudgetActionSubscriber[]);
    get subscriberInput(): BudgetsBudgetActionSubscriber[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=budgets-budget-action.d.ts.map