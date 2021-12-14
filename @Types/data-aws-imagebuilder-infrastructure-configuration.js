// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsImagebuilderInfrastructureConfigurationLoggingS3Logs extends cdktf.ComplexComputedList {
    // s3_bucket_name - computed: true, optional: false, required: false
    get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    // s3_key_prefix - computed: true, optional: false, required: false
    get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
}
export class DataAwsImagebuilderInfrastructureConfigurationLogging extends cdktf.ComplexComputedList {
    // s3_logs - computed: true, optional: false, required: false
    get s3Logs() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('s3_logs');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration}
*/
export class DataAwsImagebuilderInfrastructureConfiguration extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_imagebuilder_infrastructure_configuration";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_infrastructure_configuration.html aws_imagebuilder_infrastructure_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderInfrastructureConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_imagebuilder_infrastructure_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._arn = config.arn;
        this._resourceTags = config.resourceTags;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // date_created - computed: true, optional: false, required: false
    get dateCreated() {
        return this.getStringAttribute('date_created');
    }
    // date_updated - computed: true, optional: false, required: false
    get dateUpdated() {
        return this.getStringAttribute('date_updated');
    }
    // description - computed: true, optional: false, required: false
    get description() {
        return this.getStringAttribute('description');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_profile_name - computed: true, optional: false, required: false
    get instanceProfileName() {
        return this.getStringAttribute('instance_profile_name');
    }
    // instance_types - computed: true, optional: false, required: false
    get instanceTypes() {
        return this.getListAttribute('instance_types');
    }
    // key_pair - computed: true, optional: false, required: false
    get keyPair() {
        return this.getStringAttribute('key_pair');
    }
    // logging - computed: true, optional: false, required: false
    logging(index) {
        return new DataAwsImagebuilderInfrastructureConfigurationLogging(this, 'logging', index);
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // resource_tags - computed: true, optional: true, required: false
    _resourceTags;
    get resourceTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_tags');
    }
    set resourceTags(value) {
        this._resourceTags = value;
    }
    resetResourceTags() {
        this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTagsInput() {
        return this._resourceTags;
    }
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // sns_topic_arn - computed: true, optional: false, required: false
    get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    // subnet_id - computed: true, optional: false, required: false
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    // tags - computed: true, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // terminate_instance_on_failure - computed: true, optional: false, required: false
    get terminateInstanceOnFailure() {
        return this.getBooleanAttribute('terminate_instance_on_failure');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceTags),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtaW1hZ2VidWlsZGVyLWluZnJhc3RydWN0dXJlLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWltYWdlYnVpbGRlci1pbmZyYXN0cnVjdHVyZS1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW1CL0IsTUFBTSxPQUFPLDJEQUE0RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFeEcsb0VBQW9FO0lBQ3BFLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxxREFBc0QsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxHLDZEQUE2RDtJQUM3RCxJQUFXLE1BQU07UUFDZixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFRLENBQUM7SUFDMUQsQ0FBQztDQUNGO0FBRUQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sOENBQStDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUzRixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsK0NBQStDLENBQUM7SUFFaEcsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBNEQ7UUFDM0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwrQ0FBK0M7WUFDdEUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix5REFBeUQ7SUFDakQsSUFBSSxDQUFVO0lBQ3RCLElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFXLEdBQUcsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyRUFBMkU7SUFDM0UsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw2REFBNkQ7SUFDdEQsT0FBTyxDQUFDLEtBQWE7UUFDMUIsT0FBTyxJQUFJLHFEQUFxRCxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsa0VBQWtFO0lBQzFELGFBQWEsQ0FBaUQ7SUFDdEUsSUFBVyxZQUFZO1FBQ3JCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQVEsQ0FBQztJQUNoRSxDQUFDO0lBQ0QsSUFBVyxZQUFZLENBQUMsS0FBb0Q7UUFDMUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNNLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHlEQUF5RDtJQUNqRCxLQUFLLENBQWlEO0lBQzlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELG1GQUFtRjtJQUNuRixJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBUSxDQUFDO0lBQzFFLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QyxhQUFhLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN6RSxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN6RCxDQUFDO0lBQ0osQ0FBQyJ9