// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response}
*/
export class Apigatewayv2IntegrationResponse extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_apigatewayv2_integration_response";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response.html aws_apigatewayv2_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationResponseConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apigatewayv2_integration_response',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._apiId = config.apiId;
        this._contentHandlingStrategy = config.contentHandlingStrategy;
        this._integrationId = config.integrationId;
        this._integrationResponseKey = config.integrationResponseKey;
        this._responseTemplates = config.responseTemplates;
        this._templateSelectionExpression = config.templateSelectionExpression;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // api_id - computed: false, optional: false, required: true
    _apiId;
    get apiId() {
        return this.getStringAttribute('api_id');
    }
    set apiId(value) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get apiIdInput() {
        return this._apiId;
    }
    // content_handling_strategy - computed: false, optional: true, required: false
    _contentHandlingStrategy;
    get contentHandlingStrategy() {
        return this.getStringAttribute('content_handling_strategy');
    }
    set contentHandlingStrategy(value) {
        this._contentHandlingStrategy = value;
    }
    resetContentHandlingStrategy() {
        this._contentHandlingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentHandlingStrategyInput() {
        return this._contentHandlingStrategy;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // integration_id - computed: false, optional: false, required: true
    _integrationId;
    get integrationId() {
        return this.getStringAttribute('integration_id');
    }
    set integrationId(value) {
        this._integrationId = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationIdInput() {
        return this._integrationId;
    }
    // integration_response_key - computed: false, optional: false, required: true
    _integrationResponseKey;
    get integrationResponseKey() {
        return this.getStringAttribute('integration_response_key');
    }
    set integrationResponseKey(value) {
        this._integrationResponseKey = value;
    }
    // Temporarily expose input value. Use with caution.
    get integrationResponseKeyInput() {
        return this._integrationResponseKey;
    }
    // response_templates - computed: false, optional: true, required: false
    _responseTemplates;
    get responseTemplates() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('response_templates');
    }
    set responseTemplates(value) {
        this._responseTemplates = value;
    }
    resetResponseTemplates() {
        this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get responseTemplatesInput() {
        return this._responseTemplates;
    }
    // template_selection_expression - computed: false, optional: true, required: false
    _templateSelectionExpression;
    get templateSelectionExpression() {
        return this.getStringAttribute('template_selection_expression');
    }
    set templateSelectionExpression(value) {
        this._templateSelectionExpression = value;
    }
    resetTemplateSelectionExpression() {
        this._templateSelectionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get templateSelectionExpressionInput() {
        return this._templateSelectionExpression;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            content_handling_strategy: cdktf.stringToTerraform(this._contentHandlingStrategy),
            integration_id: cdktf.stringToTerraform(this._integrationId),
            integration_response_key: cdktf.stringToTerraform(this._integrationResponseKey),
            response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
            template_selection_expression: cdktf.stringToTerraform(this._templateSelectionExpression),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheXYyLWludGVncmF0aW9uLXJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJhcGlnYXRld2F5djItaW50ZWdyYXRpb24tcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZ0MvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTFFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyx1Q0FBdUMsQ0FBQztJQUV4RixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE2QztRQUM1RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHVDQUF1QztZQUM5RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsdUJBQXVCLENBQUM7UUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FB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