// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsServicecatalogPortfolioConstraintsDetails extends cdktf.ComplexComputedList {
    // constraint_id - computed: true, optional: false, required: false
    get constraintId() {
        return this.getStringAttribute('constraint_id');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // owner - computed: true, optional: false, required: false
    get owner() {
        return this.getStringAttribute('owner');
    }
    // portfolio_id - computed: true, optional: false, required: false
    get portfolioId() {
        return this.getStringAttribute('portfolio_id');
    }
    // product_id - computed: true, optional: false, required: false
    get productId() {
        return this.getStringAttribute('product_id');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints}
*/
export class DataAwsServicecatalogPortfolioConstraints extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_servicecatalog_portfolio_constraints";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints.html aws_servicecatalog_portfolio_constraints} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConstraintsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_servicecatalog_portfolio_constraints',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._acceptLanguage = config.acceptLanguage;
        this._portfolioId = config.portfolioId;
        this._productId = config.productId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accept_language - computed: false, optional: true, required: false
    _acceptLanguage;
    get acceptLanguage() {
        return this.getStringAttribute('accept_language');
    }
    set acceptLanguage(value) {
        this._acceptLanguage = value;
    }
    resetAcceptLanguage() {
        this._acceptLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get acceptLanguageInput() {
        return this._acceptLanguage;
    }
    // details - computed: true, optional: false, required: false
    details(index) {
        return new DataAwsServicecatalogPortfolioConstraintsDetails(this, 'details', index);
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // portfolio_id - computed: false, optional: false, required: true
    _portfolioId;
    get portfolioId() {
        return this.getStringAttribute('portfolio_id');
    }
    set portfolioId(value) {
        this._portfolioId = value;
    }
    // Temporarily expose input value. Use with caution.
    get portfolioIdInput() {
        return this._portfolioId;
    }
    // product_id - computed: false, optional: true, required: false
    _productId;
    get productId() {
        return this.getStringAttribute('product_id');
    }
    set productId(value) {
        this._productId = value;
    }
    resetProductId() {
        this._productId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productIdInput() {
        return this._productId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            portfolio_id: cdktf.stringToTerraform(this._portfolioId),
            product_id: cdktf.stringToTerraform(this._productId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtc2VydmljZWNhdGFsb2ctcG9ydGZvbGlvLWNvbnN0cmFpbnRzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1zZXJ2aWNlY2F0YWxvZy1wb3J0Zm9saW8tY29uc3RyYWludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBbUIvQixNQUFNLE9BQU8sZ0RBQWlELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU3RixtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyx5Q0FBMEMsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRGLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxD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