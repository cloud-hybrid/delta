// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // delegation_enabled_date - computed: true, optional: false, required: false
    get delegationEnabledDate() {
        return this.getStringAttribute('delegation_enabled_date');
    }
    // email - computed: true, optional: false, required: false
    get email() {
        return this.getStringAttribute('email');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // joined_method - computed: true, optional: false, required: false
    get joinedMethod() {
        return this.getStringAttribute('joined_method');
    }
    // joined_timestamp - computed: true, optional: false, required: false
    get joinedTimestamp() {
        return this.getStringAttribute('joined_timestamp');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators}
*/
export class DataAwsOrganizationsDelegatedAdministrators extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_organizations_delegated_administrators";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_administrators.html aws_organizations_delegated_administrators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedAdministratorsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_organizations_delegated_administrators',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._servicePrincipal = config.servicePrincipal;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // delegated_administrators - computed: true, optional: false, required: false
    delegatedAdministrators(index) {
        return new DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators(this, 'delegated_administrators', index);
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // service_principal - computed: false, optional: true, required: false
    _servicePrincipal;
    get servicePrincipal() {
        return this.getStringAttribute('service_principal');
    }
    set servicePrincipal(value) {
        this._servicePrincipal = value;
    }
    resetServicePrincipal() {
        this._servicePrincipal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get servicePrincipalInput() {
        return this._servicePrincipal;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            service_principal: cdktf.stringToTerraform(this._servicePrincipal),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtb3JnYW5pemF0aW9ucy1kZWxlZ2F0ZWQtYWRtaW5pc3RyYXRvcnMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLW9yZ2FuaXphdGlvbnMtZGVsZWdhdGVkLWFkbWluaXN0cmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQVcvQixNQUFNLE9BQU8sa0VBQW1FLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUvRyx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGLE1BQU0sT0FBTywyQ0FBNEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXhGLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyw0Q0FBNEMsQ0FBQztJQUU3RixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUE0RCxFQUFFO1FBQzdHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNENBQTRDO1lBQ25FLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiw4RUFBOEU7SUFDdkUsdUJBQXVCLENBQUMsS0FBYTtRQUMxQyxPQUFPLElBQUksa0VBQWtFLENBQUMsSUFBSSxFQUFFLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pILENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVFQUF1RTtJQUMvRCxpQkFBaUIsQ0FBVTtJQUNuQyxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWE7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ00scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQ25FLENBQUM7SUFDSixDQUFDIn0=