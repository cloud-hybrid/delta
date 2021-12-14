// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source}
*/
export class DataAwsCloudwatchEventSource extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudwatch_event_source";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventSourceConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudwatch_event_source',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._namePrefix = config.namePrefix;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_by - computed: true, optional: false, required: false
    get createdBy() {
        return this.getStringAttribute('created_by');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // name_prefix - computed: false, optional: true, required: false
    _namePrefix;
    get namePrefix() {
        return this.getStringAttribute('name_prefix');
    }
    set namePrefix(value) {
        this._namePrefix = value;
    }
    resetNamePrefix() {
        this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get namePrefixInput() {
        return this._namePrefix;
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWR3YXRjaC1ldmVudC1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWNsb3Vkd2F0Y2gtZXZlbnQtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQVkvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXpFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyw2QkFBNkIsQ0FBQztJQUU5RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUE2QyxFQUFFO1FBQzlGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNkJBQTZCO1lBQ3BELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlFQUFpRTtJQUN6RCxXQUFXLENBQVU7SUFDN0IsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFXLFVBQVUsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQyJ9