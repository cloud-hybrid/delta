// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries extends cdktf.ComplexComputedList {
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class DataAwsServicecatalogLaunchPathsSummaries extends cdktf.ComplexComputedList {
    // constraint_summaries - computed: true, optional: false, required: false
    get constraintSummaries() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('constraint_summaries');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // path_id - computed: true, optional: false, required: false
    get pathId() {
        return this.getStringAttribute('path_id');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths}
*/
export class DataAwsServicecatalogLaunchPaths extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_servicecatalog_launch_paths";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogLaunchPathsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_servicecatalog_launch_paths',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._acceptLanguage = config.acceptLanguage;
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
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // product_id - computed: false, optional: false, required: true
    _productId;
    get productId() {
        return this.getStringAttribute('product_id');
    }
    set productId(value) {
        this._productId = value;
    }
    // Temporarily expose input value. Use with caution.
    get productIdInput() {
        return this._productId;
    }
    // summaries - computed: true, optional: false, required: false
    summaries(index) {
        return new DataAwsServicecatalogLaunchPathsSummaries(this, 'summaries', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            accept_language: cdktf.stringToTerraform(this._acceptLanguage),
            product_id: cdktf.stringToTerraform(this._productId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3Mtc2VydmljZWNhdGFsb2ctbGF1bmNoLXBhdGhzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1zZXJ2aWNlY2F0YWxvZy1sYXVuY2gtcGF0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBZS9CLE1BQU0sT0FBTyw0REFBNkQsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXpHLGlFQUFpRTtJQUNqRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8seUNBQTBDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV0RiwwRUFBMEU7SUFDMUUsSUFBVyxtQkFBbUI7UUFDNUIsb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHNCQUFzQixDQUFRLENBQUM7SUFDdkUsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQUVEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLGlDQUFpQyxDQUFDO0lBRWxGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQThDO1FBQzdGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsaUNBQWlDO1lBQ3hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixxRUFBcUU7SUFDN0QsZUFBZSxDQUFVO0lBQ2pDLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ3hELFVBQVUsQ0FBVTtJQUM1QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrREFBK0Q7SUFDeEQsU0FBUyxDQUFDLEtBQWE7UUFDNUIsT0FBTyxJQUFJLHlDQUF5QyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlELFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNyRCxDQUFDO0lBQ0osQ0FBQyJ9