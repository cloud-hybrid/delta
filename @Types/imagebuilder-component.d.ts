import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface ImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#change_description ImagebuilderComponent#change_description}
    */
    readonly changeDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#data ImagebuilderComponent#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#description ImagebuilderComponent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#kms_key_id ImagebuilderComponent#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#name ImagebuilderComponent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#platform ImagebuilderComponent#platform}
    */
    readonly platform: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#supported_os_versions ImagebuilderComponent#supported_os_versions}
    */
    readonly supportedOsVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#tags ImagebuilderComponent#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#tags_all ImagebuilderComponent#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#uri ImagebuilderComponent#uri}
    */
    readonly uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html#version ImagebuilderComponent#version}
    */
    readonly version: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html aws_imagebuilder_component}
*/
export declare class ImagebuilderComponent extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_component.html aws_imagebuilder_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderComponentConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderComponentConfig);
    get arn(): string;
    private _changeDescription?;
    get changeDescription(): string;
    set changeDescription(value: string);
    resetChangeDescription(): void;
    get changeDescriptionInput(): string;
    private _data?;
    get data(): string;
    set data(value: string);
    resetData(): void;
    get dataInput(): string;
    get dateCreated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get encrypted(): any;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get owner(): string;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    get platformInput(): string;
    private _supportedOsVersions?;
    get supportedOsVersions(): string[];
    set supportedOsVersions(value: string[]);
    resetSupportedOsVersions(): void;
    get supportedOsVersionsInput(): string[];
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
    get type(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=imagebuilder-component.d.ts.map