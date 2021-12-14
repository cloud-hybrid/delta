import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EventBridge Schemas
*/
export interface SchemasSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html#content SchemasSchema#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html#description SchemasSchema#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html#name SchemasSchema#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html#registry_name SchemasSchema#registry_name}
    */
    readonly registryName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html#tags SchemasSchema#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html#tags_all SchemasSchema#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html#type SchemasSchema#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html aws_schemas_schema}
*/
export declare class SchemasSchema extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/schemas_schema.html aws_schemas_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SchemasSchemaConfig
    */
    constructor(scope: Construct, id: string, config: SchemasSchemaConfig);
    get arn(): string;
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lastModified(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _registryName?;
    get registryName(): string;
    set registryName(value: string);
    get registryNameInput(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    get version(): string;
    get versionCreatedDate(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=schemas-schema.d.ts.map