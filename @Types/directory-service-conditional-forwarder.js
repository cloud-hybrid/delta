// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder}
*/
export class DirectoryServiceConditionalForwarder extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_directory_service_conditional_forwarder";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceConditionalForwarderConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_directory_service_conditional_forwarder',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._directoryId = config.directoryId;
        this._dnsIps = config.dnsIps;
        this._remoteDomainName = config.remoteDomainName;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // directory_id - computed: false, optional: false, required: true
    _directoryId;
    get directoryId() {
        return this.getStringAttribute('directory_id');
    }
    set directoryId(value) {
        this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    get directoryIdInput() {
        return this._directoryId;
    }
    // dns_ips - computed: false, optional: false, required: true
    _dnsIps;
    get dnsIps() {
        return this.getListAttribute('dns_ips');
    }
    set dnsIps(value) {
        this._dnsIps = value;
    }
    // Temporarily expose input value. Use with caution.
    get dnsIpsInput() {
        return this._dnsIps;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // remote_domain_name - computed: false, optional: false, required: true
    _remoteDomainName;
    get remoteDomainName() {
        return this.getStringAttribute('remote_domain_name');
    }
    set remoteDomainName(value) {
        this._remoteDomainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get remoteDomainNameInput() {
        return this._remoteDomainName;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsIps),
            remote_domain_name: cdktf.stringToTerraform(this._remoteDomainName),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0b3J5LXNlcnZpY2UtY29uZGl0aW9uYWwtZm9yd2FyZGVyLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkaXJlY3Rvcnktc2VydmljZS1jb25kaXRpb25hbC1mb3J3YXJkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBb0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxvQ0FBcUMsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRS9FLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyw2Q0FBNkMsQ0FBQztJQUU5RixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFrRDtRQUNqRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDZDQUE2QztZQUNwRSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixrRUFBa0U7SUFDMUQsWUFBWSxDQUFVO0lBQzlCLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsNkRBQTZEO0lBQ3JELE9BQU8sQ0FBWTtJQUMzQixJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0VBQXdFO0lBQ2hFLGlCQUFpQixDQUFVO0lBQ25DLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELElBQVcsZ0JBQWdCLENBQUMsS0FBYTtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELE9BQU8sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUNwRSxDQUFDO0lBQ0osQ0FBQyJ9