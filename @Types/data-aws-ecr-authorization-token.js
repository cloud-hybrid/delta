// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token}
*/
export class DataAwsEcrAuthorizationToken extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ecr_authorization_token";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrAuthorizationTokenConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_ecr_authorization_token',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._registryId = config.registryId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // authorization_token - computed: true, optional: false, required: false
    get authorizationToken() {
        return this.getStringAttribute('authorization_token');
    }
    // expires_at - computed: true, optional: false, required: false
    get expiresAt() {
        return this.getStringAttribute('expires_at');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    // proxy_endpoint - computed: true, optional: false, required: false
    get proxyEndpoint() {
        return this.getStringAttribute('proxy_endpoint');
    }
    // registry_id - computed: false, optional: true, required: false
    _registryId;
    get registryId() {
        return this.getStringAttribute('registry_id');
    }
    set registryId(value) {
        this._registryId = value;
    }
    resetRegistryId() {
        this._registryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get registryIdInput() {
        return this._registryId;
    }
    // user_name - computed: true, optional: false, required: false
    get userName() {
        return this.getStringAttribute('user_name');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            registry_id: cdktf.stringToTerraform(this._registryId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWNyLWF1dGhvcml6YXRpb24tdG9rZW4uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWVjci1hdXRob3JpemF0aW9uLXRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQVkvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXpFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyw2QkFBNkIsQ0FBQztJQUU5RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUE2QyxFQUFFO1FBQzlGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNkJBQTZCO1lBQ3BELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlFQUF5RTtJQUN6RSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaUVBQWlFO0lBQ3pELFdBQVcsQ0FBVTtJQUM3QixJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWE7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQyJ9