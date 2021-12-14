// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsEksClusterCertificateAuthority extends cdktf.ComplexComputedList {
    // data - computed: true, optional: false, required: false
    get data() {
        return this.getStringAttribute('data');
    }
}
export class DataAwsEksClusterIdentityOidc extends cdktf.ComplexComputedList {
    // issuer - computed: true, optional: false, required: false
    get issuer() {
        return this.getStringAttribute('issuer');
    }
}
export class DataAwsEksClusterIdentity extends cdktf.ComplexComputedList {
    // oidc - computed: true, optional: false, required: false
    get oidc() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('oidc');
    }
}
export class DataAwsEksClusterKubernetesNetworkConfig extends cdktf.ComplexComputedList {
    // service_ipv4_cidr - computed: true, optional: false, required: false
    get serviceIpv4Cidr() {
        return this.getStringAttribute('service_ipv4_cidr');
    }
}
export class DataAwsEksClusterVpcConfig extends cdktf.ComplexComputedList {
    // cluster_security_group_id - computed: true, optional: false, required: false
    get clusterSecurityGroupId() {
        return this.getStringAttribute('cluster_security_group_id');
    }
    // endpoint_private_access - computed: true, optional: false, required: false
    get endpointPrivateAccess() {
        return this.getBooleanAttribute('endpoint_private_access');
    }
    // endpoint_public_access - computed: true, optional: false, required: false
    get endpointPublicAccess() {
        return this.getBooleanAttribute('endpoint_public_access');
    }
    // public_access_cidrs - computed: true, optional: false, required: false
    get publicAccessCidrs() {
        return this.getListAttribute('public_access_cidrs');
    }
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster}
*/
export class DataAwsEksCluster extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_eks_cluster";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_eks_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // certificate_authority - computed: true, optional: false, required: false
    certificateAuthority(index) {
        return new DataAwsEksClusterCertificateAuthority(this, 'certificate_authority', index);
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // enabled_cluster_log_types - computed: true, optional: false, required: false
    get enabledClusterLogTypes() {
        return this.getListAttribute('enabled_cluster_log_types');
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // identity - computed: true, optional: false, required: false
    identity(index) {
        return new DataAwsEksClusterIdentity(this, 'identity', index);
    }
    // kubernetes_network_config - computed: true, optional: false, required: false
    kubernetesNetworkConfig(index) {
        return new DataAwsEksClusterKubernetesNetworkConfig(this, 'kubernetes_network_config', index);
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
    // platform_version - computed: true, optional: false, required: false
    get platformVersion() {
        return this.getStringAttribute('platform_version');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    // vpc_config - computed: true, optional: false, required: false
    vpcConfig(index) {
        return new DataAwsEksClusterVpcConfig(this, 'vpc_config', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWtzLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWVrcy1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWUvQixNQUFNLE9BQU8scUNBQXNDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRiwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLDZCQUE4QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFMUUsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRFLDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFRLENBQUM7SUFDdkQsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckYsdUVBQXVFO0lBQ3ZFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXZFLCtFQUErRTtJQUMvRSxJQUFXLHNCQUFzQjtRQUMvQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsSUFBVyxxQkFBcUI7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