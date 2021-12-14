// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group}
*/
export class DmsReplicationSubnetGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_dms_replication_subnet_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationSubnetGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_dms_replication_subnet_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._replicationSubnetGroupDescription = config.replicationSubnetGroupDescription;
        this._replicationSubnetGroupId = config.replicationSubnetGroupId;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // replication_subnet_group_arn - computed: true, optional: false, required: false
    get replicationSubnetGroupArn() {
        return this.getStringAttribute('replication_subnet_group_arn');
    }
    // replication_subnet_group_description - computed: false, optional: false, required: true
    _replicationSubnetGroupDescription;
    get replicationSubnetGroupDescription() {
        return this.getStringAttribute('replication_subnet_group_description');
    }
    set replicationSubnetGroupDescription(value) {
        this._replicationSubnetGroupDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    get replicationSubnetGroupDescriptionInput() {
        return this._replicationSubnetGroupDescription;
    }
    // replication_subnet_group_id - computed: false, optional: false, required: true
    _replicationSubnetGroupId;
    get replicationSubnetGroupId() {
        return this.getStringAttribute('replication_subnet_group_id');
    }
    set replicationSubnetGroupId(value) {
        this._replicationSubnetGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get replicationSubnetGroupIdInput() {
        return this._replicationSubnetGroupId;
    }
    // subnet_ids - computed: false, optional: false, required: true
    _subnetIds;
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
    }
    // tags - computed: false, optional: true, required: false
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
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            replication_subnet_group_description: cdktf.stringToTerraform(this._replicationSubnetGroupDescription),
            replication_subnet_group_id: cdktf.stringToTerraform(this._replicationSubnetGroupId),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG1zLXJlcGxpY2F0aW9uLXN1Ym5ldC1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZG1zLXJlcGxpY2F0aW9uLXN1Ym5ldC1ncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0Qi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFcEUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLGtDQUFrQyxDQUFDO0lBRW5GLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQXVDO1FBQ3RGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsa0NBQWtDO1lBQ3pELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0NBQWtDLEdBQUcsTUFBTSxDQUFDLGlDQUFpQyxDQUFDO1FBQ25GLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7UUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQztJ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