// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups}
*/
export class DataAwsCloudwatchLogGroups extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cloudwatch_log_groups";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchLogGroupsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cloudwatch_log_groups',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._logGroupNamePrefix = config.logGroupNamePrefix;
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
    // log_group_name_prefix - computed: false, optional: false, required: true
    _logGroupNamePrefix;
    get logGroupNamePrefix() {
        return this.getStringAttribute('log_group_name_prefix');
    }
    set logGroupNamePrefix(value) {
        this._logGroupNamePrefix = value;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNamePrefixInput() {
        return this._logGroupNamePrefix;
    }
    // log_group_names - computed: true, optional: false, required: false
    get logGroupNames() {
        return this.getListAttribute('log_group_names');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            log_group_name_prefix: cdktf.stringToTerraform(this._logGroupNamePrefix),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY2xvdWR3YXRjaC1sb2ctZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1jbG91ZHdhdGNoLWxvZy1ncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBWS9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLDBCQUEyQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLDJCQUEyQixDQUFDO0lBRTVFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXdDO1FBQ3ZGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsMkJBQTJCO1lBQ2xELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkVBQTJFO0lBQ25FLG1CQUFtQixDQUFVO0lBQ3JDLElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELElBQVcsa0JBQWtCLENBQUMsS0FBYTtRQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyx1QkFBdUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUVELHFFQUFxRTtJQUNyRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxxQkFBcUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ3pFLENBQUM7SUFDSixDQUFDIn0=