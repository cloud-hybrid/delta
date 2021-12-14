// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataAwsImagebuilderImageRecipesFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html aws_imagebuilder_image_recipes}
*/
export class DataAwsImagebuilderImageRecipes extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_imagebuilder_image_recipes";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html aws_imagebuilder_image_recipes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageRecipesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_imagebuilder_image_recipes',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._owner = config.owner;
        this._filter = config.filter;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arns - computed: true, optional: false, required: false
    get arns() {
        return this.getListAttribute('arns');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // names - computed: true, optional: false, required: false
    get names() {
        return this.getListAttribute('names');
    }
    // owner - computed: false, optional: true, required: false
    _owner;
    get owner() {
        return this.getStringAttribute('owner');
    }
    set owner(value) {
        this._owner = value;
    }
    resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ownerInput() {
        return this._owner;
    }
    // filter - computed: false, optional: true, required: false
    _filter;
    get filter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filter');
    }
    set filter(value) {
        this._filter = value;
    }
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            owner: cdktf.stringToTerraform(this._owner),
            filter: cdktf.listMapper(dataAwsImagebuilderImageRecipesFilterToTerraform)(this._filter),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtaW1hZ2VidWlsZGVyLWltYWdlLXJlY2lwZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWltYWdlYnVpbGRlci1pbWFnZS1yZWNpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQTRCL0IsTUFBTSxVQUFVLGdEQUFnRCxDQUFDLE1BQThDO0lBQzdHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDbEUsQ0FBQTtBQUNILENBQUM7QUFHRDs7RUFFRTtBQUNGLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxnQ0FBZ0MsQ0FBQztJQUVqRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUFnRCxFQUFFO1FBQ2pHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsZ0NBQWdDO1lBQ3ZELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyREFBMkQ7SUFDbkQsTUFBTSxDQUFVO0lBQ3hCLElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDTSxVQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0REFBNEQ7SUFDcEQsT0FBTyxDQUEyQztJQUMxRCxJQUFXLE1BQU07UUFDZixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFRLENBQUM7SUFDekQsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQThDO1FBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3pGLENBQUM7SUFDSixDQUFDIn0=