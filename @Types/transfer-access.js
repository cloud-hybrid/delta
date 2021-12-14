// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function transferAccessHomeDirectoryMappingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        entry: cdktf.stringToTerraform(struct.entry),
        target: cdktf.stringToTerraform(struct.target),
    };
}
export function transferAccessPosixProfileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        gid: cdktf.numberToTerraform(struct.gid),
        secondary_gids: cdktf.listMapper(cdktf.numberToTerraform)(struct.secondaryGids),
        uid: cdktf.numberToTerraform(struct.uid),
    };
}
export class TransferAccessPosixProfileOutputReference extends cdktf.ComplexObject {
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
        if (this._gid) {
            hasAnyValues = true;
            internalValueResult.gid = this._gid;
        }
        if (this._secondaryGids) {
            hasAnyValues = true;
            internalValueResult.secondaryGids = this._secondaryGids;
        }
        if (this._uid) {
            hasAnyValues = true;
            internalValueResult.uid = this._uid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._gid = undefined;
            this._secondaryGids = undefined;
            this._uid = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._gid = value.gid;
            this._secondaryGids = value.secondaryGids;
            this._uid = value.uid;
        }
    }
    // gid - computed: false, optional: false, required: true
    _gid;
    get gid() {
        return this.getNumberAttribute('gid');
    }
    set gid(value) {
        this._gid = value;
    }
    // Temporarily expose input value. Use with caution.
    get gidInput() {
        return this._gid;
    }
    // secondary_gids - computed: false, optional: true, required: false
    _secondaryGids;
    get secondaryGids() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('secondary_gids');
    }
    set secondaryGids(value) {
        this._secondaryGids = value;
    }
    resetSecondaryGids() {
        this._secondaryGids = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secondaryGidsInput() {
        return this._secondaryGids;
    }
    // uid - computed: false, optional: false, required: true
    _uid;
    get uid() {
        return this.getNumberAttribute('uid');
    }
    set uid(value) {
        this._uid = value;
    }
    // Temporarily expose input value. Use with caution.
    get uidInput() {
        return this._uid;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access}
*/
export class TransferAccess extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_transfer_access";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_access.html aws_transfer_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferAccessConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_transfer_access',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._externalId = config.externalId;
        this._homeDirectory = config.homeDirectory;
        this._homeDirectoryType = config.homeDirectoryType;
        this._policy = config.policy;
        this._role = config.role;
        this._serverId = config.serverId;
        this._homeDirectoryMappings = config.homeDirectoryMappings;
        this._posixProfile.internalValue = config.posixProfile;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // external_id - computed: false, optional: false, required: true
    _externalId;
    get externalId() {
        return this.getStringAttribute('external_id');
    }
    set externalId(value) {
        this._externalId = value;
    }
    // Temporarily expose input value. Use with caution.
    get externalIdInput() {
        return this._externalId;
    }
    // home_directory - computed: false, optional: true, required: false
    _homeDirectory;
    get homeDirectory() {
        return this.getStringAttribute('home_directory');
    }
    set homeDirectory(value) {
        this._homeDirectory = value;
    }
    resetHomeDirectory() {
        this._homeDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get homeDirectoryInput() {
        return this._homeDirectory;
    }
    // home_directory_type - computed: false, optional: true, required: false
    _homeDirectoryType;
    get homeDirectoryType() {
        return this.getStringAttribute('home_directory_type');
    }
    set homeDirectoryType(value) {
        this._homeDirectoryType = value;
    }
    resetHomeDirectoryType() {
        this._homeDirectoryType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get homeDirectoryTypeInput() {
        return this._homeDirectoryType;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // policy - computed: false, optional: true, required: false
    _policy;
    get policy() {
        return this.getStringAttribute('policy');
    }
    set policy(value) {
        this._policy = value;
    }
    resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyInput() {
        return this._policy;
    }
    // role - computed: false, optional: true, required: false
    _role;
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
    }
    resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleInput() {
        return this._role;
    }
    // server_id - computed: false, optional: false, required: true
    _serverId;
    get serverId() {
        return this.getStringAttribute('server_id');
    }
    set serverId(value) {
        this._serverId = value;
    }
    // Temporarily expose input value. Use with caution.
    get serverIdInput() {
        return this._serverId;
    }
    // home_directory_mappings - computed: false, optional: true, required: false
    _homeDirectoryMappings;
    get homeDirectoryMappings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('home_directory_mappings');
    }
    set homeDirectoryMappings(value) {
        this._homeDirectoryMappings = value;
    }
    resetHomeDirectoryMappings() {
        this._homeDirectoryMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get homeDirectoryMappingsInput() {
        return this._homeDirectoryMappings;
    }
    // posix_profile - computed: false, optional: true, required: false
    _posixProfile = new TransferAccessPosixProfileOutputReference(this, "posix_profile", true);
    get posixProfile() {
        return this._posixProfile;
    }
    putPosixProfile(value) {
        this._posixProfile.internalValue = value;
    }
    resetPosixProfile() {
        this._posixProfile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get posixProfileInput() {
        return this._posixProfile.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            external_id: cdktf.stringToTerraform(this._externalId),
            home_directory: cdktf.stringToTerraform(this._homeDirectory),
            home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
            policy: cdktf.stringToTerraform(this._policy),
            role: cdktf.stringToTerraform(this._role),
            server_id: cdktf.stringToTerraform(this._serverId),
            home_directory_mappings: cdktf.listMapper(transferAccessHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
            posix_profile: transferAccessPosixProfileToTerraform(this._posixProfile.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItYWNjZXNzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJ0cmFuc2Zlci1hY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBc0QvQixNQUFNLFVBQVUsOENBQThDLENBQUMsTUFBNEM7SUFDekcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2hELENBQUE7QUFDSCxDQUFDO0FBaUJELE1BQU0sVUFBVSxxQ0FBcUMsQ0FBQyxNQUErRTtJQUNuSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEdBQUcsQ0FBQztRQUN6QyxjQUFjLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFPLENBQUMsYUFBYSxDQUFDO1FBQ2hGLEdBQUcsRUFBRSxLQUFLLENBQUMs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