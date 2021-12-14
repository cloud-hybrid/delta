// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class ApiGatewayAccountThrottleSettings extends cdktf.ComplexComputedList {
    // burst_limit - computed: true, optional: false, required: false
    get burstLimit() {
        return this.getNumberAttribute('burst_limit');
    }
    // rate_limit - computed: true, optional: false, required: false
    get rateLimit() {
        return this.getNumberAttribute('rate_limit');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account}
*/
export class ApiGatewayAccount extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_api_gateway_account";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayAccountConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_account',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cloudwatchRoleArn = config.cloudwatchRoleArn;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cloudwatch_role_arn - computed: false, optional: true, required: false
    _cloudwatchRoleArn;
    get cloudwatchRoleArn() {
        return this.getStringAttribute('cloudwatch_role_arn');
    }
    set cloudwatchRoleArn(value) {
        this._cloudwatchRoleArn = value;
    }
    resetCloudwatchRoleArn() {
        this._cloudwatchRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchRoleArnInput() {
        return this._cloudwatchRoleArn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // throttle_settings - computed: true, optional: false, required: false
    throttleSettings(index) {
        return new ApiGatewayAccountThrottleSettings(this, 'throttle_settings', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cloudwatch_role_arn: cdktf.stringToTerraform(this._cloudwatchRoleArn),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiYXBpLWdhdGV3YXktYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFXL0IsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUUsaUVBQWlFO0lBQ2pFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTVELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyx5QkFBeUIsQ0FBQztJQUUxRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUFrQyxFQUFFO1FBQ25GLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUseUJBQXlCO1lBQ2hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQ3JELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix5RUFBeUU7SUFDakUsa0JBQWtCLENBQVU7SUFDcEMsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUVBQXVFO0lBQ2hFLGdCQUFnQixDQUFDLEtBQWE7UUFDbkMsT0FBTyxJQUFJLGlDQUFpQyxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ3RFLENBQUM7SUFDSixDQUFDIn0=