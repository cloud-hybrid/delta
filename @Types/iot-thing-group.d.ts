import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS IoT
*/
export interface IotThingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#name IotThingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#parent_group_name IotThingGroup#parent_group_name}
    */
    readonly parentGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#tags IotThingGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#tags_all IotThingGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#properties IotThingGroup#properties}
    */
    readonly properties?: IotThingGroupProperties;
}
export declare class IotThingGroupMetadataRootToParentGroups extends cdktf.ComplexComputedList {
    get groupArn(): string;
    get groupName(): string;
}
export declare class IotThingGroupMetadata extends cdktf.ComplexComputedList {
    get creationDate(): string;
    get parentGroupName(): string;
    get rootToParentGroups(): any;
}
export interface IotThingGroupPropertiesAttributePayload {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#attributes IotThingGroup#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function iotThingGroupPropertiesAttributePayloadToTerraform(struct?: IotThingGroupPropertiesAttributePayloadOutputReference | IotThingGroupPropertiesAttributePayload): any;
export declare class IotThingGroupPropertiesAttributePayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotThingGroupPropertiesAttributePayload | undefined;
    set internalValue(value: IotThingGroupPropertiesAttributePayload | undefined);
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set attributes(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAttributes(): void;
    get attributesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
}
export interface IotThingGroupProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#description IotThingGroup#description}
    */
    readonly description?: string;
    /**
    * attribute_payload block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html#attribute_payload IotThingGroup#attribute_payload}
    */
    readonly attributePayload?: IotThingGroupPropertiesAttributePayload;
}
export declare function iotThingGroupPropertiesToTerraform(struct?: IotThingGroupPropertiesOutputReference | IotThingGroupProperties): any;
export declare class IotThingGroupPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotThingGroupProperties | undefined;
    set internalValue(value: IotThingGroupProperties | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _attributePayload;
    get attributePayload(): IotThingGroupPropertiesAttributePayloadOutputReference;
    putAttributePayload(value: IotThingGroupPropertiesAttributePayload): void;
    resetAttributePayload(): void;
    get attributePayloadInput(): IotThingGroupPropertiesAttributePayload;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html aws_iot_thing_group}
*/
export declare class IotThingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group.html aws_iot_thing_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingGroupConfig
    */
    constructor(scope: Construct, id: string, config: IotThingGroupConfig);
    get arn(): string;
    get id(): string;
    metadata(index: string): IotThingGroupMetadata;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentGroupName?;
    get parentGroupName(): string;
    set parentGroupName(value: string);
    resetParentGroupName(): void;
    get parentGroupNameInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get version(): number;
    private _properties;
    get properties(): IotThingGroupPropertiesOutputReference;
    putProperties(value: IotThingGroupProperties): void;
    resetProperties(): void;
    get propertiesInput(): IotThingGroupProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iot-thing-group.d.ts.map