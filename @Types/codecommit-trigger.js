// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function codecommitTriggerTriggerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        branches: cdktf.listMapper(cdktf.stringToTerraform)(struct.branches),
        custom_data: cdktf.stringToTerraform(struct.customData),
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
        events: cdktf.listMapper(cdktf.stringToTerraform)(struct.events),
        name: cdktf.stringToTerraform(struct.name),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger}
*/
export class CodecommitTrigger extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_codecommit_trigger";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html aws_codecommit_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitTriggerConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codecommit_trigger',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._repositoryName = config.repositoryName;
        this._trigger = config.trigger;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // configuration_id - computed: true, optional: false, required: false
    get configurationId() {
        return this.getStringAttribute('configuration_id');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // repository_name - computed: false, optional: false, required: true
    _repositoryName;
    get repositoryName() {
        return this.getStringAttribute('repository_name');
    }
    set repositoryName(value) {
        this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryNameInput() {
        return this._repositoryName;
    }
    // trigger - computed: false, optional: false, required: true
    _trigger;
    get trigger() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('trigger');
    }
    set trigger(value) {
        this._trigger = value;
    }
    // Temporarily expose input value. Use with caution.
    get triggerInput() {
        return this._trigger;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            repository_name: cdktf.stringToTerraform(this._repositoryName),
            trigger: cdktf.listMapper(codecommitTriggerTriggerToTerraform)(this._trigger),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWNvbW1pdC10cmlnZ2VyLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJjb2RlY29tbWl0LXRyaWdnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBd0MvQixNQUFNLFVBQVUsbUNBQW1DLENBQUMsTUFBaUM7SUFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3JFLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxjQUFjLENBQUM7UUFDaEUsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUM7QUFHRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTVELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQztJQUV6RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUErQjtRQUM5RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHdCQUF3QjtZQUMvQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsc0VBQXNFO0lBQ3RFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHFFQUFxRTtJQUM3RCxlQUFlLENBQVU7SUFDakMsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELDZEQUE2RDtJQUNyRCxRQUFRLENBQThCO0lBQzlDLElBQVcsT0FBTztRQUNoQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDMUQsQ0FBQztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWlDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDOUQsT0FBTyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQzlFLENBQUM7SUFDSixDQUFDIn0=