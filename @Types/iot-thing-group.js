// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class IotThingGroupMetadataRootToParentGroups extends cdktf.ComplexComputedList {
    // group_arn - computed: true, optional: false, required: false
    get groupArn() {
        return this.getStringAttribute('group_arn');
    }
    // group_name - computed: true, optional: false, required: false
    get groupName() {
        return this.getStringAttribute('group_name');
    }
}
export class IotThingGroupMetadata extends cdktf.ComplexComputedList {
    // creation_date - computed: true, optional: false, required: false
    get creationDate() {
        return this.getStringAttribute('creation_date');
    }
    // parent_group_name - computed: true, optional: false, required: false
    get parentGroupName() {
        return this.getStringAttribute('parent_group_name');
    }
    // root_to_parent_groups - computed: true, optional: false, required: false
    get rootToParentGroups() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('root_to_parent_groups');
    }
}
export function iotThingGroupPropertiesAttributePayloadToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct.attributes),
    };
}
export class IotThingGroupPropertiesAttributePayloadOutputReference extends cdktf.ComplexObject {
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
        if (this._attributes) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._attributes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._attributes = value.attributes;
        }
    }
    // attributes - computed: false, optional: true, required: false
    _attributes;
    get attributes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('attributes');
    }
    set attributes(value) {
        this._attributes = value;
    }
    resetAttributes() {
        this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attributesInput() {
        return this._attributes;
    }
}
export function iotThingGroupPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        attribute_payload: iotThingGroupPropertiesAttributePayloadToTerraform(struct.attributePayload),
    };
}
export class IotThingGroupPropertiesOutputReference extends cdktf.ComplexObject {
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
        if (this._description) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._attributePayload?.internalValue) {
            hasAnyValues = true;
            internalValueResult.attributePayload = this._attributePayload?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._description = undefined;
            this._attributePayload.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._description = value.description;
            this._attributePayload.internalValue = value.attributePayload;
        }
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
    // attribute_payload - computed: false, optional: true, required: false
    _attributePayload = new IotThingGroupPropertiesAttributePayloadOutputReference(this, "attribute_payload", true);
    get attributePayload() {
        return this._attributePayload;
    }
    putAttributePayload(value) {
        this._attributePayload.internalValue = value;
    }
    resetAttributePayload() {
        this._attributePayload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get attributePayloadInput() {
        return this._attributePayload.internalValue;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html aws_iot_thing_group}
*/
export class IotThingGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_iot_thing_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html aws_iot_thing_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_iot_thing_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._name = config.name;
        this._parentGroupName = config.parentGroupName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._properties.internalValue = config.properties;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // metadata - computed: true, optional: false, required: false
    metadata(index) {
        return new IotThingGroupMetadata(this, 'metadata', index);
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
    // parent_group_name - computed: false, optional: true, required: false
    _parentGroupName;
    get parentGroupName() {
        return this.getStringAttribute('parent_group_name');
    }
    set parentGroupName(value) {
        this._parentGroupName = value;
    }
    resetParentGroupName() {
        this._parentGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parentGroupNameInput() {
        return this._parentGroupName;
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
    // version - computed: true, optional: false, required: false
    get version() {
        return this.getNumberAttribute('version');
    }
    // properties - computed: false, optional: true, required: false
    _properties = new IotThingGroupPropertiesOutputReference(this, "properties", true);
    get properties() {
        return this._properties;
    }
    putProperties(value) {
        this._properties.internalValue = value;
    }
    resetProperties() {
        this._properties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get propertiesInput() {
        return this._properties.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            name: cdktf.stringToTerraform(this._name),
            parent_group_name: cdktf.stringToTerraform(this._parentGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            properties: iotThingGroupPropertiesToTerraform(this._properties.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW90LXRoaW5nLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJpb3QtdGhpbmctZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBNkIvQixNQUFNLE9BQU8sdUNBQXdDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVwRiwrREFBK0Q7SUFDL0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxFLG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSxJQUFXLGVBQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMkVBQTJFO0lBQzNFLElBQVcsa0JBQWtCO1FBQzNCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBUSxDQUFDO0lBQ3hFLENBQUM7Q0FDRjtBQVFELE1BQU0sVUFBVSxrREFBa0QsQ0FBQyxNQUF5RztJQUMxSyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FB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