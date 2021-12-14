// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function transferUserHomeDirectoryMappingsToTerraform(struct) {
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
export function transferUserPosixProfileToTerraform(struct) {
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
export class TransferUserPosixProfileOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user}
*/
export class TransferUser extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_transfer_user";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transfer_user.html aws_transfer_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferUserConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_transfer_user',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._homeDirectory = config.homeDirectory;
        this._homeDirectoryType = config.homeDirectoryType;
        this._policy = config.policy;
        this._role = config.role;
        this._serverId = config.serverId;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._userName = config.userName;
        this._homeDirectoryMappings = config.homeDirectoryMappings;
        this._posixProfile.internalValue = config.posixProfile;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
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
    // role - computed: false, optional: false, required: true
    _role;
    get role() {
        return this.getStringAttribute('role');
    }
    set role(value) {
        this._role = value;
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
    // user_name - computed: false, optional: false, required: true
    _userName;
    get userName() {
        return this.getStringAttribute('user_name');
    }
    set userName(value) {
        this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    get userNameInput() {
        return this._userName;
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
    _posixProfile = new TransferUserPosixProfileOutputReference(this, "posix_profile", true);
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
            home_directory: cdktf.stringToTerraform(this._homeDirectory),
            home_directory_type: cdktf.stringToTerraform(this._homeDirectoryType),
            policy: cdktf.stringToTerraform(this._policy),
            role: cdktf.stringToTerraform(this._role),
            server_id: cdktf.stringToTerraform(this._serverId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_name: cdktf.stringToTerraform(this._userName),
            home_directory_mappings: cdktf.listMapper(transferUserHomeDirectoryMappingsToTerraform)(this._homeDirectoryMappings),
            posix_profile: transferUserPosixProfileToTerraform(this._posixProfile.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItdXNlci5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidHJhbnNmZXItdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE4RC9CLE1BQU0sVUFBVSw0Q0FBNEMsQ0FBQyxNQUEwQztJQUNyRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUM3QyxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7S0FDaEQsQ0FBQTtBQUNILENBQUM7QUFpQkQsTUFBTSxVQUFVLG1DQUFtQyxDQUFDLE1BQTJFO0lBQzdILElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pDLGNBQWMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7UUFDaEYsR0FBRyxFQUFFLEtBQUssQ0FBQyxpQkFB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