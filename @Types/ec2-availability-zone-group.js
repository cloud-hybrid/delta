// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group}
*/
export class Ec2AvailabilityZoneGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ec2_availability_zone_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_availability_zone_group.html aws_ec2_availability_zone_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2AvailabilityZoneGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ec2_availability_zone_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._groupName = config.groupName;
        this._optInStatus = config.optInStatus;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // group_name - computed: false, optional: false, required: true
    _groupName;
    get groupName() {
        return this.getStringAttribute('group_name');
    }
    set groupName(value) {
        this._groupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupNameInput() {
        return this._groupName;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // opt_in_status - computed: false, optional: false, required: true
    _optInStatus;
    get optInStatus() {
        return this.getStringAttribute('opt_in_status');
    }
    set optInStatus(value) {
        this._optInStatus = value;
    }
    // Temporarily expose input value. Use with caution.
    get optInStatusInput() {
        return this._optInStatus;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            group_name: cdktf.stringToTerraform(this._groupName),
            opt_in_status: cdktf.stringToTerraform(this._optInStatus),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLWF2YWlsYWJpbGl0eS16b25lLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJlYzItYXZhaWxhYmlsaXR5LXpvbmUtZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZ0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRW5FLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxpQ0FBaUMsQ0FBQztJQUVsRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFzQztRQUNyRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlDQUFpQztZQUN4RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsZ0VBQWdFO0lBQ3hELFVBQVUsQ0FBVTtJQUM1QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELG1FQUFtRTtJQUMzRCxZQUFZLENBQVU7SUFDOUIsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNwRCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUQsQ0FBQztJQUNKLENBQUMifQ==