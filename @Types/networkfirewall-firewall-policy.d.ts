import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Network Firewall
*/
export interface NetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#description NetworkfirewallFirewallPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#name NetworkfirewallFirewallPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags NetworkfirewallFirewallPolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags_all NetworkfirewallFirewallPolicy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * firewall_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}
    */
    readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any;
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#value NetworkfirewallFirewallPolicy#value}
    */
    readonly value: string;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any;
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#dimension NetworkfirewallFirewallPolicy#dimension}
    */
    readonly dimension: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined);
    private _dimension?;
    get dimension(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
    set dimension(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[]);
    get dimensionInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
    /**
    * publish_metric_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
    */
    readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined);
    private _publishMetricAction;
    get publishMetricAction(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference;
    putPublishMetricAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): void;
    get publishMetricActionInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_name NetworkfirewallFirewallPolicy#action_name}
    */
    readonly actionName: string;
    /**
    * action_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_definition NetworkfirewallFirewallPolicy#action_definition}
    */
    readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction): any;
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#priority NetworkfirewallFirewallPolicy#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference): any;
export interface NetworkfirewallFirewallPolicyFirewallPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}
    */
    readonly statelessDefaultActions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}
    */
    readonly statelessFragmentDefaultActions: string[];
    /**
    * stateful_rule_group_reference block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateful_rule_group_reference NetworkfirewallFirewallPolicy#stateful_rule_group_reference}
    */
    readonly statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[];
    /**
    * stateless_custom_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_custom_action NetworkfirewallFirewallPolicy#stateless_custom_action}
    */
    readonly statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[];
    /**
    * stateless_rule_group_reference block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_rule_group_reference NetworkfirewallFirewallPolicy#stateless_rule_group_reference}
    */
    readonly statelessRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[];
}
export declare function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyOutputReference | NetworkfirewallFirewallPolicyFirewallPolicy): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicy | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicy | undefined);
    private _statelessDefaultActions?;
    get statelessDefaultActions(): string[];
    set statelessDefaultActions(value: string[]);
    get statelessDefaultActionsInput(): string[];
    private _statelessFragmentDefaultActions?;
    get statelessFragmentDefaultActions(): string[];
    set statelessFragmentDefaultActions(value: string[]);
    get statelessFragmentDefaultActionsInput(): string[];
    private _statefulRuleGroupReference?;
    get statefulRuleGroupReference(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[];
    set statefulRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[]);
    resetStatefulRuleGroupReference(): void;
    get statefulRuleGroupReferenceInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[];
    private _statelessCustomAction?;
    get statelessCustomAction(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[];
    set statelessCustomAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[]);
    resetStatelessCustomAction(): void;
    get statelessCustomActionInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[];
    private _statelessRuleGroupReference?;
    get statelessRuleGroupReference(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[];
    set statelessRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[]);
    resetStatelessRuleGroupReference(): void;
    get statelessRuleGroupReferenceInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy}
*/
export declare class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallFirewallPolicyConfig);
    get arn(): string;
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
    get updateToken(): string;
    private _firewallPolicy;
    get firewallPolicy(): NetworkfirewallFirewallPolicyFirewallPolicyOutputReference;
    putFirewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy): void;
    get firewallPolicyInput(): NetworkfirewallFirewallPolicyFirewallPolicy;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=networkfirewall-firewall-policy.d.ts.map