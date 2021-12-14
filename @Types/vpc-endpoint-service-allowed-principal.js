// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal}
*/
export class VpcEndpointServiceAllowedPrincipal extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_vpc_endpoint_service_allowed_principal";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service_allowed_principal.html aws_vpc_endpoint_service_allowed_principal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceAllowedPrincipalConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_endpoint_service_allowed_principal',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._principalArn = config.principalArn;
        this._vpcEndpointServiceId = config.vpcEndpointServiceId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // principal_arn - computed: false, optional: false, required: true
    _principalArn;
    get principalArn() {
        return this.getStringAttribute('principal_arn');
    }
    set principalArn(value) {
        this._principalArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get principalArnInput() {
        return this._principalArn;
    }
    // vpc_endpoint_service_id - computed: false, optional: false, required: true
    _vpcEndpointServiceId;
    get vpcEndpointServiceId() {
        return this.getStringAttribute('vpc_endpoint_service_id');
    }
    set vpcEndpointServiceId(value) {
        this._vpcEndpointServiceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcEndpointServiceIdInput() {
        return this._vpcEndpointServiceId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            principal_arn: cdktf.stringToTerraform(this._principalArn),
            vpc_endpoint_service_id: cdktf.stringToTerraform(this._vpcEndpointServiceId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLWVuZHBvaW50LXNlcnZpY2UtYWxsb3dlZC1wcmluY2lwYWwuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInZwYy1lbmRwb2ludC1zZXJ2aWNlLWFsbG93ZWQtcHJpbmNpcGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdCL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sa0NBQW1DLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUU3RSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsNENBQTRDLENBQUM7SUFFN0YsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBZ0Q7UUFDL0YsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw0Q0FBNEM7WUFDbkUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO0lBQzNELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELG1FQUFtRTtJQUMzRCxhQUFhLENBQVU7SUFDL0IsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxJQUFXLFlBQVksQ0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCw2RUFBNkU7SUFDckUscUJBQXFCLENBQVU7SUFDdkMsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFhO1FBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHlCQUF5QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxhQUFhLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDMUQsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUM3RSxDQUFDO0lBQ0osQ0FBQyJ9