// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsLaunchConfigurationEbsBlockDevice extends cdktf.ComplexComputedList {
    // delete_on_termination - computed: true, optional: false, required: false
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    // device_name - computed: true, optional: false, required: false
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    // encrypted - computed: true, optional: false, required: false
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    // iops - computed: true, optional: false, required: false
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // no_device - computed: true, optional: false, required: false
    get noDevice() {
        return this.getBooleanAttribute('no_device');
    }
    // snapshot_id - computed: true, optional: false, required: false
    get snapshotId() {
        return this.getStringAttribute('snapshot_id');
    }
    // throughput - computed: true, optional: false, required: false
    get throughput() {
        return this.getBooleanAttribute('throughput');
    }
    // volume_size - computed: true, optional: false, required: false
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
export class DataAwsLaunchConfigurationEphemeralBlockDevice extends cdktf.ComplexComputedList {
    // device_name - computed: true, optional: false, required: false
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    // virtual_name - computed: true, optional: false, required: false
    get virtualName() {
        return this.getStringAttribute('virtual_name');
    }
}
export class DataAwsLaunchConfigurationMetadataOptions extends cdktf.ComplexComputedList {
    // http_endpoint - computed: true, optional: false, required: false
    get httpEndpoint() {
        return this.getStringAttribute('http_endpoint');
    }
    // http_put_response_hop_limit - computed: true, optional: false, required: false
    get httpPutResponseHopLimit() {
        return this.getNumberAttribute('http_put_response_hop_limit');
    }
    // http_tokens - computed: true, optional: false, required: false
    get httpTokens() {
        return this.getStringAttribute('http_tokens');
    }
}
export class DataAwsLaunchConfigurationRootBlockDevice extends cdktf.ComplexComputedList {
    // delete_on_termination - computed: true, optional: false, required: false
    get deleteOnTermination() {
        return this.getBooleanAttribute('delete_on_termination');
    }
    // encrypted - computed: true, optional: false, required: false
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    // iops - computed: true, optional: false, required: false
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // throughput - computed: true, optional: false, required: false
    get throughput() {
        return this.getBooleanAttribute('throughput');
    }
    // volume_size - computed: true, optional: false, required: false
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration}
*/
export class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_launch_configuration";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchConfigurationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_launch_configuration',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // associate_public_ip_address - computed: true, optional: false, required: false
    get associatePublicIpAddress() {
        return this.getBooleanAttribute('associate_public_ip_address');
    }
    // ebs_block_device - computed: true, optional: false, required: false
    ebsBlockDevice(index) {
        return new DataAwsLaunchConfigurationEbsBlockDevice(this, 'ebs_block_device', index);
    }
    // ebs_optimized - computed: true, optional: false, required: false
    get ebsOptimized() {
        return this.getBooleanAttribute('ebs_optimized');
    }
    // enable_monitoring - computed: true, optional: false, required: false
    get enableMonitoring() {
        return this.getBooleanAttribute('enable_monitoring');
    }
    // ephemeral_block_device - computed: true, optional: false, required: false
    ephemeralBlockDevice(index) {
        return new DataAwsLaunchConfigurationEphemeralBlockDevice(this, 'ephemeral_block_device', index);
    }
    // iam_instance_profile - computed: true, optional: false, required: false
    get iamInstanceProfile() {
        return this.getStringAttribute('iam_instance_profile');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // image_id - computed: true, optional: false, required: false
    get imageId() {
        return this.getStringAttribute('image_id');
    }
    // instance_type - computed: true, optional: false, required: false
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // key_name - computed: true, optional: false, required: false
    get keyName() {
        return this.getStringAttribute('key_name');
    }
    // metadata_options - computed: true, optional: false, required: false
    metadataOptions(index) {
        return new DataAwsLaunchConfigurationMetadataOptions(this, 'metadata_options', index);
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // placement_tenancy - computed: true, optional: false, required: false
    get placementTenancy() {
        return this.getStringAttribute('placement_tenancy');
    }
    // root_block_device - computed: true, optional: false, required: false
    rootBlockDevice(index) {
        return new DataAwsLaunchConfigurationRootBlockDevice(this, 'root_block_device', index);
    }
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // spot_price - computed: true, optional: false, required: false
    get spotPrice() {
        return this.getStringAttribute('spot_price');
    }
    // user_data - computed: true, optional: false, required: false
    get userData() {
        return this.getStringAttribute('user_data');
    }
    // vpc_classic_link_id - computed: true, optional: false, required: false
    get vpcClassicLinkId() {
        return this.getStringAttribute('vpc_classic_link_id');
    }
    // vpc_classic_link_security_groups - computed: true, optional: false, required: false
    get vpcClassicLinkSecurityGroups() {
        return this.getListAttribute('vpc_classic_link_security_groups');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGF1bmNoLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWxhdW5jaC1jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQVcvQixNQUFNLE9BQU8sd0NBQXlDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVyRiwyRUFBMkU7SUFDM0UsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLENBQVEsQ0FBQztJQUNsRSxDQUFDO0lBRUQsaUVBQWlFO0lBQ2pFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQVEsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBUSxDQUFDO0lBQ3RELENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxpRUFBaUU7SUFDakUsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtC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