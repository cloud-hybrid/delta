// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec}
*/
export class Route53HostedZoneDnssec extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_route53_hosted_zone_dnssec";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_hosted_zone_dnssec.html aws_route53_hosted_zone_dnssec} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HostedZoneDnssecConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route53_hosted_zone_dnssec',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._hostedZoneId = config.hostedZoneId;
        this._signingStatus = config.signingStatus;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // hosted_zone_id - computed: false, optional: false, required: true
    _hostedZoneId;
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    set hostedZoneId(value) {
        this._hostedZoneId = value;
    }
    // Temporarily expose input value. Use with caution.
    get hostedZoneIdInput() {
        return this._hostedZoneId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // signing_status - computed: false, optional: true, required: false
    _signingStatus;
    get signingStatus() {
        return this.getStringAttribute('signing_status');
    }
    set signingStatus(value) {
        this._signingStatus = value;
    }
    resetSigningStatus() {
        this._signingStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get signingStatusInput() {
        return this._signingStatus;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
            signing_status: cdktf.stringToTerraform(this._signingStatus),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1My1ob3N0ZWQtem9uZS1kbnNzZWMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInJvdXRlNTMtaG9zdGVkLXpvbmUtZG5zc2VjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdCL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUVsRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsZ0NBQWdDLENBQUM7SUFFakYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBcUM7UUFDcEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxnQ0FBZ0M7WUFDdkQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLG9FQUFvRTtJQUM1RCxhQUFhLENBQVU7SUFDL0IsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELElBQVcsWUFBWSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGlCQUFpQjtRQUMxQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0VBQW9FO0lBQzVELGNBQWMsQ0FBVTtJQUNoQyxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUMzRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDN0QsQ0FBQztJQUNKLENBQUMifQ==