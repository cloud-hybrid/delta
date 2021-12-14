// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership}
*/
export class QuicksightGroupMembership extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_quicksight_group_membership";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightGroupMembershipConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_quicksight_group_membership',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._awsAccountId = config.awsAccountId;
        this._groupName = config.groupName;
        this._memberName = config.memberName;
        this._namespace = config.namespace;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // aws_account_id - computed: true, optional: true, required: false
    _awsAccountId;
    get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    set awsAccountId(value) {
        this._awsAccountId = value;
    }
    resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsAccountIdInput() {
        return this._awsAccountId;
    }
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
    // member_name - computed: false, optional: false, required: true
    _memberName;
    get memberName() {
        return this.getStringAttribute('member_name');
    }
    set memberName(value) {
        this._memberName = value;
    }
    // Temporarily expose input value. Use with caution.
    get memberNameInput() {
        return this._memberName;
    }
    // namespace - computed: false, optional: true, required: false
    _namespace;
    get namespace() {
        return this.getStringAttribute('namespace');
    }
    set namespace(value) {
        this._namespace = value;
    }
    resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namespaceInput() {
        return this._namespace;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
            group_name: cdktf.stringToTerraform(this._groupName),
            member_name: cdktf.stringToTerraform(this._memberName),
            namespace: cdktf.stringToTerraform(this._namespace),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaWdodC1ncm91cC1tZW1iZXJzaGlwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJxdWlja3NpZ2h0LWdyb3VwLW1lbWJlcnNoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBd0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRXBFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxpQ0FBaUMsQ0FBQztJQUVsRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF1QztRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlDQUFpQztZQUN4RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix5REFBeUQ7SUFDekQsSUFBVyxHQUFH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