// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class EksClusterCertificateAuthority extends cdktf.ComplexComputedList {
    // data - computed: true, optional: false, required: false
    get data() {
        return this.getStringAttribute('data');
    }
}
export class EksClusterIdentityOidc extends cdktf.ComplexComputedList {
    // issuer - computed: true, optional: false, required: false
    get issuer() {
        return this.getStringAttribute('issuer');
    }
}
export class EksClusterIdentity extends cdktf.ComplexComputedList {
    // oidc - computed: true, optional: false, required: false
    get oidc() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('oidc');
    }
}
export function eksClusterEncryptionConfigProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key_arn: cdktf.stringToTerraform(struct.keyArn),
    };
}
export class EksClusterEncryptionConfigProviderOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._keyArn) {
            hasAnyValues = true;
            internalValueResult.keyArn = this._keyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._keyArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._keyArn = value.keyArn;
        }
    }
    // key_arn - computed: false, optional: false, required: true
    _keyArn;
    get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    set keyArn(value) {
        this._keyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyArnInput() {
        return this._keyArn;
    }
}
export function eksClusterEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        resources: cdktf.listMapper(cdktf.stringToTerraform)(struct.resources),
        provider: eksClusterEncryptionConfigProviderToTerraform(struct.provider),
    };
}
export class EksClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._resources) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        if (this._provider?.internalValue) {
            hasAnyValues = true;
            internalValueResult.provider = this._provider?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._resources = undefined;
            this._provider.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._resources = value.resources;
            this._provider.internalValue = value.provider;
        }
    }
    // resources - computed: false, optional: false, required: true
    _resources;
    get resources() {
        return this.getListAttribute('resources');
    }
    set resources(value) {
        this._resources = value;
    }
    // Temporarily expose input value. Use with caution.
    get resourcesInput() {
        return this._resources;
    }
    // provider - computed: false, optional: false, required: true
    _provider = new EksClusterEncryptionConfigProviderOutputReference(this, "provider", true);
    get provider() {
        return this._provider;
    }
    putProvider(value) {
        this._provider.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get providerInput() {
        return this._provider.internalValue;
    }
}
export function eksClusterKubernetesNetworkConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        service_ipv4_cidr: cdktf.stringToTerraform(struct.serviceIpv4Cidr),
    };
}
export class EksClusterKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._serviceIpv4Cidr) {
            hasAnyValues = true;
            internalValueResult.serviceIpv4Cidr = this._serviceIpv4Cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._serviceIpv4Cidr = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._serviceIpv4Cidr = value.serviceIpv4Cidr;
        }
    }
    // service_ipv4_cidr - computed: true, optional: true, required: false
    _serviceIpv4Cidr;
    get serviceIpv4Cidr() {
        return this.getStringAttribute('service_ipv4_cidr');
    }
    set serviceIpv4Cidr(value) {
        this._serviceIpv4Cidr = value;
    }
    resetServiceIpv4Cidr() {
        this._serviceIpv4Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serviceIpv4CidrInput() {
        return this._serviceIpv4Cidr;
    }
}
export function eksClusterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
export class EksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._create) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    // create - computed: false, optional: true, required: false
    _create;
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    // delete - computed: false, optional: true, required: false
    _delete;
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    // update - computed: false, optional: true, required: false
    _update;
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
export function eksClusterVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        endpoint_private_access: cdktf.booleanToTerraform(struct.endpointPrivateAccess),
        endpoint_public_access: cdktf.booleanToTerraform(struct.endpointPublicAccess),
        public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.publicAccessCidrs),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
export class EksClusterVpcConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._endpointPrivateAccess) {
            hasAnyValues = true;
            internalValueResult.endpointPrivateAccess = this._endpointPrivateAccess;
        }
        if (this._endpointPublicAccess) {
            hasAnyValues = true;
            internalValueResult.endpointPublicAccess = this._endpointPublicAccess;
        }
        if (this._publicAccessCidrs) {
            hasAnyValues = true;
            internalValueResult.publicAccessCidrs = this._publicAccessCidrs;
        }
        if (this._securityGroupIds) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._endpointPrivateAccess = undefined;
            this._endpointPublicAccess = undefined;
            this._publicAccessCidrs = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._endpointPrivateAccess = value.endpointPrivateAccess;
            this._endpointPublicAccess = value.endpointPublicAccess;
            this._publicAccessCidrs = value.publicAccessCidrs;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }
    // endpoint_private_access - computed: false, optional: true, required: false
    _endpointPrivateAccess;
    get endpointPrivateAccess() {
        return this.getBooleanAttribute('endpoint_private_access');
    }
    set endpointPrivateAccess(value) {
        this._endpointPrivateAccess = value;
    }
    resetEndpointPrivateAccess() {
        this._endpointPrivateAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointPrivateAccessInput() {
        return this._endpointPrivateAccess;
    }
    // endpoint_public_access - computed: false, optional: true, required: false
    _endpointPublicAccess;
    get endpointPublicAccess() {
        return this.getBooleanAttribute('endpoint_public_access');
    }
    set endpointPublicAccess(value) {
        this._endpointPublicAccess = value;
    }
    resetEndpointPublicAccess() {
        this._endpointPublicAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endpointPublicAccessInput() {
        return this._endpointPublicAccess;
    }
    // public_access_cidrs - computed: true, optional: true, required: false
    _publicAccessCidrs;
    get publicAccessCidrs() {
        return this.getListAttribute('public_access_cidrs');
    }
    set publicAccessCidrs(value) {
        this._publicAccessCidrs = value;
    }
    resetPublicAccessCidrs() {
        this._publicAccessCidrs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publicAccessCidrsInput() {
        return this._publicAccessCidrs;
    }
    // security_group_ids - computed: false, optional: true, required: false
    _securityGroupIds;
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupIdsInput() {
        return this._securityGroupIds;
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster}
*/
export class EksCluster extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_eks_cluster";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksClusterConfig
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
        this._enabledClusterLogTypes = config.enabledClusterLogTypes;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._version = config.version;
        this._encryptionConfig.internalValue = config.encryptionConfig;
        this._kubernetesNetworkConfig.internalValue = config.kubernetesNetworkConfig;
        this._timeouts.internalValue = config.timeouts;
        this._vpcConfig.internalValue = config.vpcConfig;
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
        return new EksClusterCertificateAuthority(this, 'certificate_authority', index);
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // enabled_cluster_log_types - computed: false, optional: true, required: false
    _enabledClusterLogTypes;
    get enabledClusterLogTypes() {
        return this.getListAttribute('enabled_cluster_log_types');
    }
    set enabledClusterLogTypes(value) {
        this._enabledClusterLogTypes = value;
    }
    resetEnabledClusterLogTypes() {
        this._enabledClusterLogTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledClusterLogTypesInput() {
        return this._enabledClusterLogTypes;
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
        return new EksClusterIdentity(this, 'identity', index);
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
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    // version - computed: true, optional: true, required: false
    _version;
    get version() {
        return this.getStringAttribute('version');
    }
    set version(value) {
        this._version = value;
    }
    resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionInput() {
        return this._version;
    }
    // encryption_config - computed: false, optional: true, required: false
    _encryptionConfig = new EksClusterEncryptionConfigOutputReference(this, "encryption_config", true);
    get encryptionConfig() {
        return this._encryptionConfig;
    }
    putEncryptionConfig(value) {
        this._encryptionConfig.internalValue = value;
    }
    resetEncryptionConfig() {
        this._encryptionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get encryptionConfigInput() {
        return this._encryptionConfig.internalValue;
    }
    // kubernetes_network_config - computed: false, optional: true, required: false
    _kubernetesNetworkConfig = new EksClusterKubernetesNetworkConfigOutputReference(this, "kubernetes_network_config", true);
    get kubernetesNetworkConfig() {
        return this._kubernetesNetworkConfig;
    }
    putKubernetesNetworkConfig(value) {
        this._kubernetesNetworkConfig.internalValue = value;
    }
    resetKubernetesNetworkConfig() {
        this._kubernetesNetworkConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kubernetesNetworkConfigInput() {
        return this._kubernetesNetworkConfig.internalValue;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new EksClusterTimeoutsOutputReference(this, "timeouts", true);
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // vpc_config - computed: false, optional: false, required: true
    _vpcConfig = new EksClusterVpcConfigOutputReference(this, "vpc_config", true);
    get vpcConfig() {
        return this._vpcConfig;
    }
    putVpcConfig(value) {
        this._vpcConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            enabled_cluster_log_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledClusterLogTypes),
            name: cdktf.stringToTerraform(this._name),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version: cdktf.stringToTerraform(this._version),
            encryption_config: eksClusterEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
            kubernetes_network_config: eksClusterKubernetesNetworkConfigToTerraform(this._kubernetesNetworkConfig.internalValue),
            timeouts: eksClusterTimeoutsToTerraform(this._timeouts.internalValue),
            vpc_config: eksClusterVpcConfigToTerraform(this._vpcConfig.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtzLWNsdXN0ZXIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImVrcy1jbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXVEL0IsTUFBTSxPQUFPLDhCQUErQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0UsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRW5FLDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUUvRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQVFELE1BQU0sVUFBVSw2Q0FBNkMsQ0FBQyxNQUErRjtJQUMzSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNqRCxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxpREFBa0QsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUNoRixhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUVELElBQVcsYUFBYSxDQUFDLEtBQXFEO1FBQzVFLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztTQUMxQjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELDZEQUE2RDtJQUNyRCxPQUFPLENBQVU7SUFDekIsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQWNELE1BQU0sVUFBVSxxQ0FBcUMsQ0FBQyxNQUErRTtJQUNuSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdkUsUUFBUSxFQUFFLDZDQUE2QyxDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7S0FDMUUsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8seUNBQTBDLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDeEUsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUU7WUFDakMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUM7U0FDOUQ7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBNkM7UUFDcEUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztTQUMxQzthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsK0RBQStEO0lBQ3ZELFVBQVUsQ0FBWTtJQUM5QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWU7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4REFBOEQ7SUFDdEQsU0FBUyxHQUFHLElBQUksaURBQWlELENBQUMsSUFBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RyxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBeUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBUUQsTUFBTSxVQUFVLDRDQUE0QyxDQUFDLE1BQTZGO0lBQ3hKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxlQUFlLENBQUM7S0FDcEUsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sZ0RBQWlELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDL0UsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDN0Q7UUFDRCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsS0FBb0Q7UUFDM0UsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7U0FDbkM7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELHNFQUFzRTtJQUM5RCxnQkFBZ0IsQ0FBVTtJQUNsQyxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBVyxlQUFlLENBQUMsS0FBYTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDTSxvQkFBb0I7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQWdCRCxNQUFNLFVBQVUsNkJBQTZCLENBQUMsTUFBK0Q7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDL0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9DLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUNoRSxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUMzQztRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFxQztRQUM1RCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FDMUI7YUFDSTtZQUNILElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELDREQUE0RDtJQUNwRCxPQUFPLENBQVU7SUFDekIsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQVcsTUFBTSxDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUNNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0REFBNEQ7SUFDcEQsT0FBTyxDQUFVO0lBQ3pCLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsNERBQTREO0lBQ3BELE9BQU8sQ0FBVTtJQUN6QixJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsSUFBVyxNQUFNLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsV0FBVztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBd0JELE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxNQUFpRTtJQUM5RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMscUJBQXFCLENBQUM7UUFDaEYsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU8sQ0FBQyxvQkFBb0IsQ0FBQztRQUM5RSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RixrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO0tBQ3pFLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQ2pFLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7U0FDekU7UUFDRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUN2RTtRQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0Q7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNqRDtRQUNELE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFXLGFBQWEsQ0FBQyxLQUFzQztRQUM3RCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztZQUN4QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjthQUNJO1lBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztZQUMxRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDO1lBQ3hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsNkVBQTZFO0lBQ3JFLHNCQUFzQixDQUErQjtJQUM3RCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBUSxDQUFDO0lBQ3BFLENBQUM7SUFDRCxJQUFXLHFCQUFxQixDQUFDLEtBQWtDO1FBQ2pFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUNNLDBCQUEwQjtRQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUVELDRFQUE0RTtJQUNwRSxxQkFBcUIsQ0FBK0I7SUFDNUQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsd0JBQXdCLENBQVEsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsSUFBVyxvQkFBb0IsQ0FBQyxLQUFrQztRQUNoRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFDTSx5QkFBeUI7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFFRCx3RUFBd0U7SUFDaEUsa0JBQWtCLENBQVk7SUFDdEMsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFlO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELHdFQUF3RTtJQUNoRSxpQkFBaUIsQ0FBWTtJQUNyQyxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFXLGdCQUFnQixDQUFDLEtBQWU7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBQ00scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0VBQWdFO0lBQ3hELFVBQVUsQ0FBWTtJQUM5QixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELElBQVcsU0FBUyxDQUFDLEtBQWU7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjtBQUVEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFVBQVcsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRXJELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxpQkFBaUIsQ0FBQztJQUVsRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF3QjtRQUN2RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlCQUFpQjtZQUN4QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQy9ELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyRUFBMkU7SUFDcEUsb0JBQW9CLENBQUMsS0FBYTtRQUN2QyxPQUFPLElBQUksOEJBQThCLENBQUMsSUFBSSxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCwrRUFBK0U7SUFDdkUsdUJBQXVCLENBQVk7SUFDM0MsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0QsSUFBVyxzQkFBc0IsQ0FBQyxLQUFlO1FBQy9DLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUNNLDJCQUEyQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsOERBQThEO0lBQ3ZELFFBQVEsQ0FBQyxLQUFhO1FBQzNCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwwREFBMEQ7SUFDbEQsS0FBSyxDQUFVO0lBQ3ZCLElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw4REFBOEQ7SUFDdEQsUUFBUSxDQUFVO0lBQzFCLElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMERBQTBEO0lBQ2xELEtBQUssQ0FBaUQ7SUFDOUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxJQUFXLElBQUksQ0FBQyxLQUFvRDtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsNkRBQTZEO0lBQ3JELFFBQVEsQ0FBaUQ7SUFDakUsSUFBVyxPQUFPO1FBQ2hCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQVEsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBb0Q7UUFDckUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUNNLFlBQVk7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7SUFDNUIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw0REFBNEQ7SUFDcEQsUUFBUSxDQUFVO0lBQzFCLElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsSUFBVyxPQUFPLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ00sWUFBWTtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsWUFBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELHVFQUF1RTtJQUMvRCxpQkFBaUIsR0FBRyxJQUFJLHlDQUF5QyxDQUFDLElBQVcsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsSCxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBQ00sbUJBQW1CLENBQUMsS0FBaUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUNNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcscUJBQXFCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0VBQStFO0lBQ3ZFLHdCQUF3QixHQUFHLElBQUksZ0RBQWdELENBQUMsSUFBVyxFQUFFLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hJLElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7SUFDTSwwQkFBMEIsQ0FBQyxLQUF3QztRQUN4RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDO0lBQ00sNEJBQTRCO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyw0QkFBNEI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0lBQ3JELENBQUM7SUFFRCw4REFBOEQ7SUFDdEQsU0FBUyxHQUFHLElBQUksaUNBQWlDLENBQUMsSUFBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RixJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDTSxXQUFXLENBQUMsS0FBeUI7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnRUFBZ0U7SUFDeEQsVUFBVSxHQUFHLElBQUksa0NBQWtDLENBQUMsSUFBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxZQUFZLENBQUMsS0FBMEI7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wseUJBQXlCLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7WUFDbEcsSUFBSSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pDLFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxJQUFJLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4RCxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxPQUFPLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsaUJBQWlCLEVBQUUscUNBQXFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztZQUM5Rix5QkFBeUIsRUFBRSw0Q0FBNEMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO1lBQ3BILFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUNyRSxVQUFVLEVBQUUsOEJBQThCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7U0FDMUUsQ0FBQztJQUNKLENBQUMifQ==