// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsEksNodeGroupRemoteAccess extends cdktf.ComplexComputedList {
    // ec2_ssh_key - computed: true, optional: false, required: false
    get ec2SshKey() {
        return this.getStringAttribute('ec2_ssh_key');
    }
    // source_security_group_ids - computed: true, optional: false, required: false
    get sourceSecurityGroupIds() {
        return this.getListAttribute('source_security_group_ids');
    }
}
export class DataAwsEksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
}
export class DataAwsEksNodeGroupResources extends cdktf.ComplexComputedList {
    // autoscaling_groups - computed: true, optional: false, required: false
    get autoscalingGroups() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('autoscaling_groups');
    }
    // remote_access_security_group_id - computed: true, optional: false, required: false
    get remoteAccessSecurityGroupId() {
        return this.getStringAttribute('remote_access_security_group_id');
    }
}
export class DataAwsEksNodeGroupScalingConfig extends cdktf.ComplexComputedList {
    // desired_size - computed: true, optional: false, required: false
    get desiredSize() {
        return this.getNumberAttribute('desired_size');
    }
    // max_size - computed: true, optional: false, required: false
    get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    // min_size - computed: true, optional: false, required: false
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group}
*/
export class DataAwsEksNodeGroup extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_eks_node_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_eks_node_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clusterName = config.clusterName;
        this._nodeGroupName = config.nodeGroupName;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // ami_type - computed: true, optional: false, required: false
    get amiType() {
        return this.getStringAttribute('ami_type');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // cluster_name - computed: false, optional: false, required: true
    _clusterName;
    get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    set clusterName(value) {
        this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterNameInput() {
        return this._clusterName;
    }
    // disk_size - computed: true, optional: false, required: false
    get diskSize() {
        return this.getNumberAttribute('disk_size');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_types - computed: true, optional: false, required: false
    get instanceTypes() {
        return this.getListAttribute('instance_types');
    }
    // labels - computed: true, optional: false, required: false
    labels(key) {
        return new cdktf.StringMap(this, 'labels').lookup(key);
    }
    // node_group_name - computed: false, optional: false, required: true
    _nodeGroupName;
    get nodeGroupName() {
        return this.getStringAttribute('node_group_name');
    }
    set nodeGroupName(value) {
        this._nodeGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get nodeGroupNameInput() {
        return this._nodeGroupName;
    }
    // node_role_arn - computed: true, optional: false, required: false
    get nodeRoleArn() {
        return this.getStringAttribute('node_role_arn');
    }
    // release_version - computed: true, optional: false, required: false
    get releaseVersion() {
        return this.getStringAttribute('release_version');
    }
    // remote_access - computed: true, optional: false, required: false
    remoteAccess(index) {
        return new DataAwsEksNodeGroupRemoteAccess(this, 'remote_access', index);
    }
    // resources - computed: true, optional: false, required: false
    resources(index) {
        return new DataAwsEksNodeGroupResources(this, 'resources', index);
    }
    // scaling_config - computed: true, optional: false, required: false
    scalingConfig(index) {
        return new DataAwsEksNodeGroupScalingConfig(this, 'scaling_config', index);
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
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
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getStringAttribute('version');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cluster_name: cdktf.stringToTerraform(this._clusterName),
            node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWtzLW5vZGUtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWVrcy1ub2RlLWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW1CL0IsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFNUUsaUVBQWlFO0lBQ2pFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FLElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLDZDQUE4QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFMUYsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXpFLHdFQUF3RTtJQUN4RSxJQUFXLGlCQUFpQjtRQUMxQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsb0JBQW9CLENBQVEsQ0FBQztJQUNyRSxDQUFDO0lBRUQscUZBQXFGO0lBQ3JGLElBQVcsMkJBQTJCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0Usa0VBQWtFO0lBQ2xFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWhFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxvQkFBb0IsQ0FBQztJQUVyRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFpQztRQUNoRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG9CQUFvQjtZQUMzQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLDhEQUE4RDtJQUM5RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHlEQUF5RDtJQUN6RCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0VBQWtFO0lBQzFELFlBQVksQ0FBVTtJQUM5QixJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw0REFBNEQ7SUFDckQsTUFBTSxDQUFDLEdBQVc7UUFDdkIsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQscUVBQXFFO0lBQzdELGNBQWMsQ0FBVTtJQUNoQyxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsSUFBVyxhQUFhLENBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsa0JBQWtCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQscUVBQXFFO0lBQ3JFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxtRUFBbUU7SUFDNUQsWUFBWSxDQUFDLEtBQWE7UUFDL0IsT0FBTyxJQUFJLCtCQUErQixDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELCtEQUErRDtJQUN4RCxTQUFTLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksNEJBQTRCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsb0VBQW9FO0lBQzdELGFBQWEsQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sSUFBSSxnQ0FBZ0MsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQseURBQXlEO0lBQ2pELEtBQUssQ0FBaUQ7SUFDOUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsNkRBQTZEO0lBQzdELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDeEQsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzdELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDIn0=