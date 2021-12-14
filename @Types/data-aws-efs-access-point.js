// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsEfsAccessPointPosixUser extends cdktf.ComplexComputedList {
    // gid - computed: true, optional: false, required: false
    get gid() {
        return this.getNumberAttribute('gid');
    }
    // secondary_gids - computed: true, optional: false, required: false
    get secondaryGids() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('secondary_gids');
    }
    // uid - computed: true, optional: false, required: false
    get uid() {
        return this.getNumberAttribute('uid');
    }
}
export class DataAwsEfsAccessPointRootDirectoryCreationInfo extends cdktf.ComplexComputedList {
    // owner_gid - computed: true, optional: false, required: false
    get ownerGid() {
        return this.getNumberAttribute('owner_gid');
    }
    // owner_uid - computed: true, optional: false, required: false
    get ownerUid() {
        return this.getNumberAttribute('owner_uid');
    }
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getStringAttribute('permissions');
    }
}
export class DataAwsEfsAccessPointRootDirectory extends cdktf.ComplexComputedList {
    // creation_info - computed: true, optional: false, required: false
    get creationInfo() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('creation_info');
    }
    // path - computed: true, optional: false, required: false
    get path() {
        return this.getStringAttribute('path');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point}
*/
export class DataAwsEfsAccessPoint extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_efs_access_point";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsAccessPointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_efs_access_point',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accessPointId = config.accessPointId;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_point_id - computed: false, optional: false, required: true
    _accessPointId;
    get accessPointId() {
        return this.getStringAttribute('access_point_id');
    }
    set accessPointId(value) {
        this._accessPointId = value;
    }
    // Temporarily expose input value. Use with caution.
    get accessPointIdInput() {
        return this._accessPointId;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // file_system_arn - computed: true, optional: false, required: false
    get fileSystemArn() {
        return this.getStringAttribute('file_system_arn');
    }
    // file_system_id - computed: true, optional: false, required: false
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // posix_user - computed: true, optional: false, required: false
    posixUser(index) {
        return new DataAwsEfsAccessPointPosixUser(this, 'posix_user', index);
    }
    // root_directory - computed: true, optional: false, required: false
    rootDirectory(index) {
        return new DataAwsEfsAccessPointRootDirectory(this, 'root_directory', index);
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_point_id: cdktf.stringToTerraform(this._accessPointId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWZzLWFjY2Vzcy1wb2ludC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtZWZzLWFjY2Vzcy1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFlL0IsTUFBTSxPQUFPLDhCQUErQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0UseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsSUFBVyxhQUFhO1FBQ3RCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBUSxDQUFDO0lBQ2pFLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLDhDQUErQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0YsK0RBQStEO0lBQy9ELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUvRSxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxlQUFlLENBQVEsQ0FBQztJQUNoRSxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQUVEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLHFCQUFzQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFbEUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHNCQUFzQixDQUFDO0lBRXZFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQW1DO1FBQ2xGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsc0JBQXNCO1lBQzdDLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixxRUFBcUU7SUFDN0QsY0FBYyxDQUFVO0lBQ2hDLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxJQUFXLGFBQWEsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCx5REFBeUQ7SUFDekQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHFFQUFxRTtJQUNyRSxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGdFQUFnRTtJQUN6RCxTQUFTLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksOEJBQThCLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsb0VBQW9FO0lBQzdELGFBQWEsQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sSUFBSSxrQ0FBa0MsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxLQUFLLENBQWlEO0lBQzlELElBQVcsSUFBSTtRQUNiLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLENBQVEsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsSUFBVyxJQUFJLENBQUMsS0FBb0Q7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzdELElBQUksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pELENBQUM7SUFDSixDQUFDIn0=