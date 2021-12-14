// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html aws_dynamodb_tag}
*/
export class DynamodbTag extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_dynamodb_tag";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html aws_dynamodb_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTagConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_dynamodb_tag',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._key = config.key;
        this._resourceArn = config.resourceArn;
        this._value = config.value;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // resource_arn - computed: false, optional: false, required: true
    _resourceArn;
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    set resourceArn(value) {
        this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnInput() {
        return this._resourceArn;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getStringAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            key: cdktf.stringToTerraform(this._key),
            resource_arn: cdktf.stringToTerraform(this._resourceArn),
            value: cdktf.stringToTerraform(this._value),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1vZGItdGFnLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkeW5hbW9kYi10YWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBb0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxXQUFZLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUV0RCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsa0JBQWtCLENBQUM7SUFFbkUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBeUI7UUFDeEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxrQkFBa0I7WUFDekMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHlEQUF5RDtJQUNqRCxJQUFJLENBQVU7SUFDdEIsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELElBQVcsR0FBRyxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrRUFBa0U7SUFDMUQsWUFBWSxDQUFVO0lBQzlCLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsSUFBVyxXQUFXLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsMkRBQTJEO0lBQ25ELE1BQU0sQ0FBVTtJQUN4QixJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLFlBQVksRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN4RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUMifQ==