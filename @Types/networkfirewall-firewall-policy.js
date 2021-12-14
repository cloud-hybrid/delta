// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct.dimension),
    };
}
export class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._dimension) {
            hasAnyValues = true;
            internalValueResult.dimension = this._dimension;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dimension = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dimension = value.dimension;
        }
    }
    // dimension - computed: false, optional: false, required: true
    _dimension;
    get dimension() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('dimension');
    }
    set dimension(value) {
        this._dimension = value;
    }
    // Temporarily expose input value. Use with caution.
    get dimensionInput() {
        return this._dimension;
    }
}
export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        publish_metric_action: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct.publishMetricAction),
    };
}
export class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._publishMetricAction?.internalValue) {
            hasAnyValues = true;
            internalValueResult.publishMetricAction = this._publishMetricAction?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._publishMetricAction.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._publishMetricAction.internalValue = value.publishMetricAction;
        }
    }
    // publish_metric_action - computed: false, optional: false, required: true
    _publishMetricAction = new NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference(this, "publish_metric_action", true);
    get publishMetricAction() {
        return this._publishMetricAction;
    }
    putPublishMetricAction(value) {
        this._publishMetricAction.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get publishMetricActionInput() {
        return this._publishMetricAction.internalValue;
    }
}
export function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        action_name: cdktf.stringToTerraform(struct.actionName),
        action_definition: networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct.actionDefinition),
    };
}
export function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        resource_arn: cdktf.stringToTerraform(struct.resourceArn),
    };
}
export function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessDefaultActions),
        stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct.statelessFragmentDefaultActions),
        stateful_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform)(struct.statefulRuleGroupReference),
        stateless_custom_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform)(struct.statelessCustomAction),
        stateless_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform)(struct.statelessRuleGroupReference),
    };
}
export class NetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._statelessDefaultActions) {
            hasAnyValues = true;
            internalValueResult.statelessDefaultActions = this._statelessDefaultActions;
        }
        if (this._statelessFragmentDefaultActions) {
            hasAnyValues = true;
            internalValueResult.statelessFragmentDefaultActions = this._statelessFragmentDefaultActions;
        }
        if (this._statefulRuleGroupReference) {
            hasAnyValues = true;
            internalValueResult.statefulRuleGroupReference = this._statefulRuleGroupReference;
        }
        if (this._statelessCustomAction) {
            hasAnyValues = true;
            internalValueResult.statelessCustomAction = this._statelessCustomAction;
        }
        if (this._statelessRuleGroupReference) {
            hasAnyValues = true;
            internalValueResult.statelessRuleGroupReference = this._statelessRuleGroupReference;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statelessDefaultActions = undefined;
            this._statelessFragmentDefaultActions = undefined;
            this._statefulRuleGroupReference = undefined;
            this._statelessCustomAction = undefined;
            this._statelessRuleGroupReference = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statelessDefaultActions = value.statelessDefaultActions;
            this._statelessFragmentDefaultActions = value.statelessFragmentDefaultActions;
            this._statefulRuleGroupReference = value.statefulRuleGroupReference;
            this._statelessCustomAction = value.statelessCustomAction;
            this._statelessRuleGroupReference = value.statelessRuleGroupReference;
        }
    }
    // stateless_default_actions - computed: false, optional: false, required: true
    _statelessDefaultActions;
    get statelessDefaultActions() {
        return this.getListAttribute('stateless_default_actions');
    }
    set statelessDefaultActions(value) {
        this._statelessDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    get statelessDefaultActionsInput() {
        return this._statelessDefaultActions;
    }
    // stateless_fragment_default_actions - computed: false, optional: false, required: true
    _statelessFragmentDefaultActions;
    get statelessFragmentDefaultActions() {
        return this.getListAttribute('stateless_fragment_default_actions');
    }
    set statelessFragmentDefaultActions(value) {
        this._statelessFragmentDefaultActions = value;
    }
    // Temporarily expose input value. Use with caution.
    get statelessFragmentDefaultActionsInput() {
        return this._statelessFragmentDefaultActions;
    }
    // stateful_rule_group_reference - computed: false, optional: true, required: false
    _statefulRuleGroupReference;
    get statefulRuleGroupReference() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateful_rule_group_reference');
    }
    set statefulRuleGroupReference(value) {
        this._statefulRuleGroupReference = value;
    }
    resetStatefulRuleGroupReference() {
        this._statefulRuleGroupReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statefulRuleGroupReferenceInput() {
        return this._statefulRuleGroupReference;
    }
    // stateless_custom_action - computed: false, optional: true, required: false
    _statelessCustomAction;
    get statelessCustomAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateless_custom_action');
    }
    set statelessCustomAction(value) {
        this._statelessCustomAction = value;
    }
    resetStatelessCustomAction() {
        this._statelessCustomAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statelessCustomActionInput() {
        return this._statelessCustomAction;
    }
    // stateless_rule_group_reference - computed: false, optional: true, required: false
    _statelessRuleGroupReference;
    get statelessRuleGroupReference() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stateless_rule_group_reference');
    }
    set statelessRuleGroupReference(value) {
        this._statelessRuleGroupReference = value;
    }
    resetStatelessRuleGroupReference() {
        this._statelessRuleGroupReference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get statelessRuleGroupReferenceInput() {
        return this._statelessRuleGroupReference;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy}
*/
export class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_networkfirewall_firewall_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_networkfirewall_firewall_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._description = config.description;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._firewallPolicy.internalValue = config.firewallPolicy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // update_token - computed: true, optional: false, required: false
    get updateToken() {
        return this.getStringAttribute('update_token');
    }
    // firewall_policy - computed: false, optional: false, required: true
    _firewallPolicy = new NetworkfirewallFirewallPolicyFirewallPolicyOutputReference(this, "firewall_policy", true);
    get firewallPolicy() {
        return this._firewallPolicy;
    }
    putFirewallPolicy(value) {
        this._firewallPolicy.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get firewallPolicyInput() {
        return this._firewallPolicy.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            firewall_policy: networkfirewallFirewallPolicyFirewallPolicyToTerraform(this._firewallPolicy.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2ZpcmV3YWxsLWZpcmV3YWxsLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibmV0d29ya2ZpcmV3YWxsLWZpcmV3YWxsLXBvbGljeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFvQy9CLE1BQU0sVUFBVSxnRkFBZ0YsQ0FBQyxNQUE4RTtJQUM3SyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFdBQVcsQ0FBQztLQUMzRCxDQUFBO0FBQ0gsQ0FBQztBQVNELE1BQU0sVUFBVSx1SEFBdUgsQ0FBQyxNQUFxSDtJQUMzUCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztLQUM5QyxDQUFBO0FBQ0gsQ0FBQztBQVdELE1BQU0sVUFBVSw4R0FBOEcsQ0FBQyxNQUFpTztJQUM5VixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQs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