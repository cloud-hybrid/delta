import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS IoT
*/
export interface IotThingTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#deprecated IotThingType#deprecated}
    */
    readonly deprecated?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#name IotThingType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#tags IotThingType#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#tags_all IotThingType#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#properties IotThingType#properties}
    */
    readonly properties?: IotThingTypeProperties;
}
export interface IotThingTypeProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#description IotThingType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#searchable_attributes IotThingType#searchable_attributes}
    */
    readonly searchableAttributes?: string[];
}
export declare function iotThingTypePropertiesToTerraform(struct?: IotThingTypePropertiesOutputReference | IotThingTypeProperties): any;
export declare class IotThingTypePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotThingTypeProperties | undefined;
    set internalValue(value: IotThingTypeProperties | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _searchableAttributes?;
    get searchableAttributes(): string[];
    set searchableAttributes(value: string[]);
    resetSearchableAttributes(): void;
    get searchableAttributesInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type}
*/
export declare class IotThingType extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingTypeConfig
    */
    constructor(scope: Construct, id: string, config: IotThingTypeConfig);
    get arn(): string;
    private _deprecated?;
    get deprecated(): boolean | cdktf.IResolvable;
    set deprecated(value: boolean | cdktf.IResolvable);
    resetDeprecated(): void;
    get deprecatedInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _properties;
    get properties(): IotThingTypePropertiesOutputReference;
    putProperties(value: IotThingTypeProperties): void;
    resetProperties(): void;
    get propertiesInput(): IotThingTypeProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iot-thing-type.d.ts.map