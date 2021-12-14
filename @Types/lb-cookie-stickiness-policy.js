// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy}
*/
export class LbCookieStickinessPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_lb_cookie_stickiness_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbCookieStickinessPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_lb_cookie_stickiness_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cookieExpirationPeriod = config.cookieExpirationPeriod;
        this._lbPort = config.lbPort;
        this._loadBalancer = config.loadBalancer;
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cookie_expiration_period - computed: false, optional: true, required: false
    _cookieExpirationPeriod;
    get cookieExpirationPeriod() {
        return this.getNumberAttribute('cookie_expiration_period');
    }
    set cookieExpirationPeriod(value) {
        this._cookieExpirationPeriod = value;
    }
    resetCookieExpirationPeriod() {
        this._cookieExpirationPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cookieExpirationPeriodInput() {
        return this._cookieExpirationPeriod;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // lb_port - computed: false, optional: false, required: true
    _lbPort;
    get lbPort() {
        return this.getNumberAttribute('lb_port');
    }
    set lbPort(value) {
        this._lbPort = value;
    }
    // Temporarily expose input value. Use with caution.
    get lbPortInput() {
        return this._lbPort;
    }
    // load_balancer - computed: false, optional: false, required: true
    _loadBalancer;
    get loadBalancer() {
        return this.getStringAttribute('load_balancer');
    }
    set loadBalancer(value) {
        this._loadBalancer = value;
    }
    // Temporarily expose input value. Use with caution.
    get loadBalancerInput() {
        return this._loadBalancer;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cookie_expiration_period: cdktf.numberToTerraform(this._cookieExpirationPeriod),
            lb_port: cdktf.numberToTerraform(this._lbPort),
            load_balancer: cdktf.stringToTerraform(this._loadBalancer),
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGItY29va2llLXN0aWNraW5lc3MtcG9saWN5LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsYi1jb29raWUtc3RpY2tpbmVzcy1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBd0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRW5FLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxpQ0FBaUMsQ0FBQztJQUVsRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFzQztRQUNyRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlDQUFpQztZQUN4RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIsOEVBQThFO0lBQ3RFLHVCQUF1QixDQUFVO0lBQ3pDLElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELElBQVcsc0JBQXNCLENBQUMsS0FBYTtRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSwyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDZEQUE2RDtJQUNyRCxPQUFPLENBQVU7SUFDekIsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtRUFBbUU7SUFDM0QsYUFBYSxDQUFVO0lBQy9CLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBYTtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBVTtJQUN2QixJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUMvRSxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDOUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzFELElBQUksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMxQyxDQUFDO0lBQ0osQ0FBQyJ9