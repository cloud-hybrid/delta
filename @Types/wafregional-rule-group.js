// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function wafregionalRuleGroupActivatedRuleActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
    };
}
export class WafregionalRuleGroupActivatedRuleActionOutputReference extends cdktf.ComplexObject {
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
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._type = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._type = value.type;
        }
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
}
export function wafregionalRuleGroupActivatedRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        rule_id: cdktf.stringToTerraform(struct.ruleId),
        type: cdktf.stringToTerraform(struct.type),
        action: wafregionalRuleGroupActivatedRuleActionToTerraform(struct.action),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group}
*/
export class WafregionalRuleGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_wafregional_rule_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_wafregional_rule_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._metricName = config.metricName;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._activatedRule = config.activatedRule;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // metric_name - computed: false, optional: false, required: true
    _metricName;
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    set metricName(value) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    get metricNameInput() {
        return this._metricName;
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
    // activated_rule - computed: false, optional: true, required: false
    _activatedRule;
    get activatedRule() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('activated_rule');
    }
    set activatedRule(value) {
        this._activatedRule = value;
    }
    resetActivatedRule() {
        this._activatedRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get activatedRuleInput() {
        return this._activatedRule;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            metric_name: cdktf.stringToTerraform(this._metricName),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            activated_rule: cdktf.listMapper(wafregionalRuleGroupActivatedRuleToTerraform)(this._activatedRule),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FmcmVnaW9uYWwtcnVsZS1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsid2FmcmVnaW9uYWwtcnVsZS1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFvQy9CLE1BQU0sVUFBVSxrREFBa0QsQ0FBQyxNQUF5RztJQUMxSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztLQUM1QyxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxzREFBdUQsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUNyRixhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBMEQ7UUFDakYsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3hCO2FBQ0k7WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBc0JELE1BQU0sVUFBVSw0Q0FBNEMsQ0FBQyxNQUEwQztJQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztRQUNuRCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDaEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxrREFBa0QsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQzNFLENBQUE7QUFDSCxDQUFDO0FBR0Q7O0VBRUU7QUFDRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUUvRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsNEJBQTRCLENBQUM7SUFFN0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBa0M7UUFDakYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw0QkFBNEI7WUFDbkQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpRUFBaUU7SUFDekQsV0FBVyxDQUFVO0lBQzdCLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxLQUFLLENBQVU7SUFDdkIsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwwREFBMEQ7SUFDbEQsS0FBSyxDQUFpRDtJQUM5RCxJQUFXLElBQUk7UUFDYixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLEtBQW9EO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCw2REFBNkQ7SUFDckQsUUFBUSxDQUFpRDtJQUNqRSxJQUFXLE9BQU87UUFDaEIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBUSxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFXLE9BQU8sQ0FBQyxLQUFvRDtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCxjQUFjLENBQXVDO0lBQzdELElBQVcsYUFBYTtRQUN0QixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsZ0JBQWdCLENBQVEsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBMEM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEQsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9ELGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLDRDQUE0QyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUNwRyxDQUFDO0lBQ0osQ0FBQyJ9