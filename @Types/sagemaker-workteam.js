// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        client_id: cdktf.stringToTerraform(struct.clientId),
        user_group: cdktf.stringToTerraform(struct.userGroup),
        user_pool: cdktf.stringToTerraform(struct.userPool),
    };
}
export class SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference extends cdktf.ComplexObject {
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
        if (this._clientId) {
            hasAnyValues = true;
            internalValueResult.clientId = this._clientId;
        }
        if (this._userGroup) {
            hasAnyValues = true;
            internalValueResult.userGroup = this._userGroup;
        }
        if (this._userPool) {
            hasAnyValues = true;
            internalValueResult.userPool = this._userPool;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clientId = undefined;
            this._userGroup = undefined;
            this._userPool = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clientId = value.clientId;
            this._userGroup = value.userGroup;
            this._userPool = value.userPool;
        }
    }
    // client_id - computed: false, optional: false, required: true
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // user_group - computed: false, optional: false, required: true
    _userGroup;
    get userGroup() {
        return this.getStringAttribute('user_group');
    }
    set userGroup(value) {
        this._userGroup = value;
    }
    // Temporarily expose input value. Use with caution.
    get userGroupInput() {
        return this._userGroup;
    }
    // user_pool - computed: false, optional: false, required: true
    _userPool;
    get userPool() {
        return this.getStringAttribute('user_pool');
    }
    set userPool(value) {
        this._userPool = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolInput() {
        return this._userPool;
    }
}
export function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.groups),
    };
}
export class SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference extends cdktf.ComplexObject {
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
        if (this._groups) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._groups = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._groups = value.groups;
        }
    }
    // groups - computed: false, optional: false, required: true
    _groups;
    get groups() {
        return this.getListAttribute('groups');
    }
    set groups(value) {
        this._groups = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupsInput() {
        return this._groups;
    }
}
export function sagemakerWorkteamMemberDefinitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cognito_member_definition: sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct.cognitoMemberDefinition),
        oidc_member_definition: sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct.oidcMemberDefinition),
    };
}
export function sagemakerWorkteamNotificationConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        notification_topic_arn: cdktf.stringToTerraform(struct.notificationTopicArn),
    };
}
export class SagemakerWorkteamNotificationConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._notificationTopicArn) {
            hasAnyValues = true;
            internalValueResult.notificationTopicArn = this._notificationTopicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._notificationTopicArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._notificationTopicArn = value.notificationTopicArn;
        }
    }
    // notification_topic_arn - computed: false, optional: true, required: false
    _notificationTopicArn;
    get notificationTopicArn() {
        return this.getStringAttribute('notification_topic_arn');
    }
    set notificationTopicArn(value) {
        this._notificationTopicArn = value;
    }
    resetNotificationTopicArn() {
        this._notificationTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationTopicArnInput() {
        return this._notificationTopicArn;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam}
*/
export class SagemakerWorkteam extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_sagemaker_workteam";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workteam.html aws_sagemaker_workteam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkteamConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_workteam',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._description = config.description;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._workforceName = config.workforceName;
        this._workteamName = config.workteamName;
        this._memberDefinition = config.memberDefinition;
        this._notificationConfiguration.internalValue = config.notificationConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // description - computed: false, optional: false, required: true
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // subdomain - computed: true, optional: false, required: false
    get subdomain() {
        return this.getStringAttribute('subdomain');
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
    // workforce_name - computed: false, optional: false, required: true
    _workforceName;
    get workforceName() {
        return this.getStringAttribute('workforce_name');
    }
    set workforceName(value) {
        this._workforceName = value;
    }
    // Temporarily expose input value. Use with caution.
    get workforceNameInput() {
        return this._workforceName;
    }
    // workteam_name - computed: false, optional: false, required: true
    _workteamName;
    get workteamName() {
        return this.getStringAttribute('workteam_name');
    }
    set workteamName(value) {
        this._workteamName = value;
    }
    // Temporarily expose input value. Use with caution.
    get workteamNameInput() {
        return this._workteamName;
    }
    // member_definition - computed: false, optional: false, required: true
    _memberDefinition;
    get memberDefinition() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('member_definition');
    }
    set memberDefinition(value) {
        this._memberDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    get memberDefinitionInput() {
        return this._memberDefinition;
    }
    // notification_configuration - computed: false, optional: true, required: false
    _notificationConfiguration = new SagemakerWorkteamNotificationConfigurationOutputReference(this, "notification_configuration", true);
    get notificationConfiguration() {
        return this._notificationConfiguration;
    }
    putNotificationConfiguration(value) {
        this._notificationConfiguration.internalValue = value;
    }
    resetNotificationConfiguration() {
        this._notificationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationConfigurationInput() {
        return this._notificationConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            description: cdktf.stringToTerraform(this._description),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            workforce_name: cdktf.stringToTerraform(this._workforceName),
            workteam_name: cdktf.stringToTerraform(this._workteamName),
            member_definition: cdktf.listMapper(sagemakerWorkteamMemberDefinitionToTerraform)(this._memberDefinition),
            notification_configuration: sagemakerWorkteamNotificationConfigurationToTerraform(this._notificationConfiguration.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLXdvcmt0ZWFtLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzYWdlbWFrZXItd29ya3RlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBc0QvQixNQUFNLFVBQVUsbUVBQW1FLENBQUMsTUFBMkk7SUFDN04sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDcEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELFNBQVMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFFBQVEsQ0FBQztLQUNyRCxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTyx1RUFBd0UsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUN0RyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixZQUFZ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