// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool}
*/
export class VpcIpamPool extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_vpc_ipam_pool";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPoolConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpc_ipam_pool',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._addressFamily = config.addressFamily;
        this._allocationDefaultNetmaskLength = config.allocationDefaultNetmaskLength;
        this._allocationMaxNetmaskLength = config.allocationMaxNetmaskLength;
        this._allocationMinNetmaskLength = config.allocationMinNetmaskLength;
        this._allocationResourceTags = config.allocationResourceTags;
        this._autoImport = config.autoImport;
        this._awsService = config.awsService;
        this._description = config.description;
        this._ipamScopeId = config.ipamScopeId;
        this._locale = config.locale;
        this._publiclyAdvertisable = config.publiclyAdvertisable;
        this._sourceIpamPoolId = config.sourceIpamPoolId;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // address_family - computed: false, optional: false, required: true
    _addressFamily;
    get addressFamily() {
        return this.getStringAttribute('address_family');
    }
    set addressFamily(value) {
        this._addressFamily = value;
    }
    // Temporarily expose input value. Use with caution.
    get addressFamilyInput() {
        return this._addressFamily;
    }
    // allocation_default_netmask_length - computed: false, optional: true, required: false
    _allocationDefaultNetmaskLength;
    get allocationDefaultNetmaskLength() {
        return this.getNumberAttribute('allocation_default_netmask_length');
    }
    set allocationDefaultNetmaskLength(value) {
        this._allocationDefaultNetmaskLength = value;
    }
    resetAllocationDefaultNetmaskLength() {
        this._allocationDefaultNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocationDefaultNetmaskLengthInput() {
        return this._allocationDefaultNetmaskLength;
    }
    // allocation_max_netmask_length - computed: false, optional: true, required: false
    _allocationMaxNetmaskLength;
    get allocationMaxNetmaskLength() {
        return this.getNumberAttribute('allocation_max_netmask_length');
    }
    set allocationMaxNetmaskLength(value) {
        this._allocationMaxNetmaskLength = value;
    }
    resetAllocationMaxNetmaskLength() {
        this._allocationMaxNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocationMaxNetmaskLengthInput() {
        return this._allocationMaxNetmaskLength;
    }
    // allocation_min_netmask_length - computed: false, optional: true, required: false
    _allocationMinNetmaskLength;
    get allocationMinNetmaskLength() {
        return this.getNumberAttribute('allocation_min_netmask_length');
    }
    set allocationMinNetmaskLength(value) {
        this._allocationMinNetmaskLength = value;
    }
    resetAllocationMinNetmaskLength() {
        this._allocationMinNetmaskLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocationMinNetmaskLengthInput() {
        return this._allocationMinNetmaskLength;
    }
    // allocation_resource_tags - computed: false, optional: true, required: false
    _allocationResourceTags;
    get allocationResourceTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('allocation_resource_tags');
    }
    set allocationResourceTags(value) {
        this._allocationResourceTags = value;
    }
    resetAllocationResourceTags() {
        this._allocationResourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocationResourceTagsInput() {
        return this._allocationResourceTags;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // auto_import - computed: false, optional: true, required: false
    _autoImport;
    get autoImport() {
        return this.getBooleanAttribute('auto_import');
    }
    set autoImport(value) {
        this._autoImport = value;
    }
    resetAutoImport() {
        this._autoImport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoImportInput() {
        return this._autoImport;
    }
    // aws_service - computed: false, optional: true, required: false
    _awsService;
    get awsService() {
        return this.getStringAttribute('aws_service');
    }
    set awsService(value) {
        this._awsService = value;
    }
    resetAwsService() {
        this._awsService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsServiceInput() {
        return this._awsService;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ipam_scope_id - computed: false, optional: false, required: true
    _ipamScopeId;
    get ipamScopeId() {
        return this.getStringAttribute('ipam_scope_id');
    }
    set ipamScopeId(value) {
        this._ipamScopeId = value;
    }
    // Temporarily expose input value. Use with caution.
    get ipamScopeIdInput() {
        return this._ipamScopeId;
    }
    // ipam_scope_type - computed: true, optional: false, required: false
    get ipamScopeType() {
        return this.getStringAttribute('ipam_scope_type');
    }
    // locale - computed: false, optional: true, required: false
    _locale;
    get locale() {
        return this.getStringAttribute('locale');
    }
    set locale(value) {
        this._locale = value;
    }
    resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localeInput() {
        return this._locale;
    }
    // pool_depth - computed: true, optional: false, required: false
    get poolDepth() {
        return this.getNumberAttribute('pool_depth');
    }
    // publicly_advertisable - computed: false, optional: true, required: false
    _publiclyAdvertisable;
    get publiclyAdvertisable() {
        return this.getBooleanAttribute('publicly_advertisable');
    }
    set publiclyAdvertisable(value) {
        this._publiclyAdvertisable = value;
    }
    resetPubliclyAdvertisable() {
        this._publiclyAdvertisable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publiclyAdvertisableInput() {
        return this._publiclyAdvertisable;
    }
    // source_ipam_pool_id - computed: false, optional: true, required: false
    _sourceIpamPoolId;
    get sourceIpamPoolId() {
        return this.getStringAttribute('source_ipam_pool_id');
    }
    set sourceIpamPoolId(value) {
        this._sourceIpamPoolId = value;
    }
    resetSourceIpamPoolId() {
        this._sourceIpamPoolId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceIpamPoolIdInput() {
        return this._sourceIpamPoolId;
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            address_family: cdktf.stringToTerraform(this._addressFamily),
            allocation_default_netmask_length: cdktf.numberToTerraform(this._allocationDefaultNetmaskLength),
            allocation_max_netmask_length: cdktf.numberToTerraform(this._allocationMaxNetmaskLength),
            allocation_min_netmask_length: cdktf.numberToTerraform(this._allocationMinNetmaskLength),
            allocation_resource_tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._allocationResourceTags),
            auto_import: cdktf.booleanToTerraform(this._autoImport),
            aws_service: cdktf.stringToTerraform(this._awsService),
            description: cdktf.stringToTerraform(this._description),
            ipam_scope_id: cdktf.stringToTerraform(this._ipamScopeId),
            locale: cdktf.stringToTerraform(this._locale),
            publicly_advertisable: cdktf.booleanToTerraform(this._publiclyAdvertisable),
            source_ipam_pool_id: cdktf.stringToTerraform(this._sourceIpamPoolId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjLWlwYW0tcG9vbC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidnBjLWlwYW0tcG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnRS9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLFdBQVksU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRXRELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxtQkFBbUIsQ0FBQztJQUVwRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF5QjtRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG1CQUFtQjtZQUMxQywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQywrQkFBK0IsR0FBRyxNQUFNLENBQUMsOEJBQThCLENBQUM7UUFDN0UsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUNyRSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMs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