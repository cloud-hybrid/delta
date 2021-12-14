// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota}
*/
export class DataAwsServicequotasServiceQuota extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_servicequotas_service_quota";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicequotasServiceQuotaConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_servicequotas_service_quota',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._quotaCode = config.quotaCode;
        this._quotaName = config.quotaName;
        this._serviceCode = config.serviceCode;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // adjustable - computed: true, optional: false, required: false
    get adjustable() {
        return this.getBooleanAttribute('adjustable');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // default_value - computed: true, optional: false, required: false
    get defaultValue() {
        return this.getNumberAttribute('default_value');
    }
    // global_quota - computed: true, optional: false, required: false
    get globalQuota() {
        return this.getBooleanAttribute('global_quota');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // quota_code - computed: true, optional: true, required: false
    _quotaCode;
    get quotaCode() {
        return this.getStringAttribute('quota_code');
    }
    set quotaCode(value) {
        this._quotaCode = value;
    }
    resetQuotaCode() {
        this._quotaCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get quotaCodeInput() {
        return this._quotaCode;
    }
    // quota_name - computed: true, optional: true, required: false
    _quotaName;
    get quotaName() {
        return this.getStringAttribute('quota_name');
    }
    set quotaName(value) {
        this._quotaName = value;
    }
    resetQuotaName() {
        this._quotaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get quotaNameInput() {
        return this._quotaName;
    }
    // service_code - computed: false, optional: false, required: true
    _serviceCode;
    get serviceCode() {
        return this.getStringAttribute('service_code');
    }
    set serviceCode(value) {
        this._serviceCode = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceCodeInput() {
        return this._serviceCode;
    }
    // service_name - computed: true, optional: false, required: false
    get serviceName() {
        return this.getStringAttribute('service_name');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getNumberAttribute('value');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            quota_code: cdktf.stringToTerraform(this._quotaCode),
            quota_name: cdktf.stringToTerraform(this._quotaName),
            service_code: cdktf.stringToTerraform(this._serviceCode),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtc2VydmljZXF1b3Rhcy1zZXJ2aWNlLXF1b3RhLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1zZXJ2aWNlcXVvdGFzLXNlcnZpY2UtcXVvdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBb0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTdFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxpQ0FBaUMsQ0FBQztJQUVsRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE4QztRQUM3RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlDQUFpQztZQUN4RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLGdFQUFnRTtJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1C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