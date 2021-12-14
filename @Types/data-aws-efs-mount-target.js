// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target}
*/
export class DataAwsEfsMountTarget extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_efs_mount_target";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsMountTargetConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_efs_mount_target',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accessPointId = config.accessPointId;
        this._fileSystemId = config.fileSystemId;
        this._mountTargetId = config.mountTargetId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_point_id - computed: false, optional: true, required: false
    _accessPointId;
    get accessPointId() {
        return this.getStringAttribute('access_point_id');
    }
    set accessPointId(value) {
        this._accessPointId = value;
    }
    resetAccessPointId() {
        this._accessPointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessPointIdInput() {
        return this._accessPointId;
    }
    // availability_zone_id - computed: true, optional: false, required: false
    get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    // availability_zone_name - computed: true, optional: false, required: false
    get availabilityZoneName() {
        return this.getStringAttribute('availability_zone_name');
    }
    // dns_name - computed: true, optional: false, required: false
    get dnsName() {
        return this.getStringAttribute('dns_name');
    }
    // file_system_arn - computed: true, optional: false, required: false
    get fileSystemArn() {
        return this.getStringAttribute('file_system_arn');
    }
    // file_system_id - computed: true, optional: true, required: false
    _fileSystemId;
    get fileSystemId() {
        return this.getStringAttribute('file_system_id');
    }
    set fileSystemId(value) {
        this._fileSystemId = value;
    }
    resetFileSystemId() {
        this._fileSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fileSystemIdInput() {
        return this._fileSystemId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    // mount_target_dns_name - computed: true, optional: false, required: false
    get mountTargetDnsName() {
        return this.getStringAttribute('mount_target_dns_name');
    }
    // mount_target_id - computed: true, optional: true, required: false
    _mountTargetId;
    get mountTargetId() {
        return this.getStringAttribute('mount_target_id');
    }
    set mountTargetId(value) {
        this._mountTargetId = value;
    }
    resetMountTargetId() {
        this._mountTargetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mountTargetIdInput() {
        return this._mountTargetId;
    }
    // network_interface_id - computed: true, optional: false, required: false
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    // owner_id - computed: true, optional: false, required: false
    get ownerId() {
        return this.getStringAttribute('owner_id');
    }
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // subnet_id - computed: true, optional: false, required: false
    get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_point_id: cdktf.stringToTerraform(this._accessPointId),
            file_system_id: cdktf.stringToTerraform(this._fileSystemId),
            mount_target_id: cdktf.stringToTerraform(this._mountTargetId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWZzLW1vdW50LXRhcmdldC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtZWZzLW1vdW50LXRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFvQi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLHFCQUFzQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFbEUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHNCQUFzQixDQUFDO0lBRXZFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQXNDLEVBQUU7UUFDdkYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxzQkFBc0I7WUFDN0MsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixxRUFBcUU7SUFDN0QsY0FBYyxDQUFVO0lBQ2hDLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0Is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