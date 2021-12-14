// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsOrganizationsDelegatedServicesDelegatedServices extends cdktf.ComplexComputedList {
    // delegation_enabled_date - computed: true, optional: false, required: false
    get delegationEnabledDate() {
        return this.getStringAttribute('delegation_enabled_date');
    }
    // service_principal - computed: true, optional: false, required: false
    get servicePrincipal() {
        return this.getStringAttribute('service_principal');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services}
*/
export class DataAwsOrganizationsDelegatedServices extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_organizations_delegated_services";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_delegated_services.html aws_organizations_delegated_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedServicesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_organizations_delegated_services',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accountId = config.accountId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: false, required: true
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // delegated_services - computed: true, optional: false, required: false
    delegatedServices(index) {
        return new DataAwsOrganizationsDelegatedServicesDelegatedServices(this, 'delegated_services', index);
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtb3JnYW5pemF0aW9ucy1kZWxlZ2F0ZWQtc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLW9yZ2FuaXphdGlvbnMtZGVsZWdhdGVkLXNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQVcvQixNQUFNLE9BQU8sc0RBQXVELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVuRyw2RUFBNkU7SUFDN0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGO0FBRUQ7O0VBRUU7QUFDRixNQUFNLE9BQU8scUNBQXNDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsc0NBQXNDLENBQUM7SUFFdkYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBbUQ7UUFDbEcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxzQ0FBc0M7WUFDN0QsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsZ0VBQWdFO0lBQ3hELFVBQVUsQ0FBVTtJQUM1QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3RUFBd0U7SUFDakUsaUJBQWlCLENBQUMsS0FBYTtRQUNwQyxPQUFPLElBQUksc0RBQXNELENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3JELENBQUM7SUFDSixDQUFDIn0=