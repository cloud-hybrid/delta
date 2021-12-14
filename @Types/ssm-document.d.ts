import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface SsmDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#content SsmDocument#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#document_format SsmDocument#document_format}
    */
    readonly documentFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#document_type SsmDocument#document_type}
    */
    readonly documentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#name SsmDocument#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#permissions SsmDocument#permissions}
    */
    readonly permissions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#tags SsmDocument#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#tags_all SsmDocument#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#target_type SsmDocument#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#version_name SsmDocument#version_name}
    */
    readonly versionName?: string;
    /**
    * attachments_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#attachments_source SsmDocument#attachments_source}
    */
    readonly attachmentsSource?: SsmDocumentAttachmentsSource[];
}
export declare class SsmDocumentParameter extends cdktf.ComplexComputedList {
    get defaultValue(): string;
    get description(): string;
    get name(): string;
    get type(): string;
}
export interface SsmDocumentAttachmentsSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#key SsmDocument#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#name SsmDocument#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html#values SsmDocument#values}
    */
    readonly values: string[];
}
export declare function ssmDocumentAttachmentsSourceToTerraform(struct?: SsmDocumentAttachmentsSource): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document}
*/
export declare class SsmDocument extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_document.html aws_ssm_document} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmDocumentConfig
    */
    constructor(scope: Construct, id: string, config: SsmDocumentConfig);
    get arn(): string;
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    get createdDate(): string;
    get defaultVersion(): string;
    get description(): string;
    private _documentFormat?;
    get documentFormat(): string;
    set documentFormat(value: string);
    resetDocumentFormat(): void;
    get documentFormatInput(): string;
    private _documentType?;
    get documentType(): string;
    set documentType(value: string);
    get documentTypeInput(): string;
    get documentVersion(): string;
    get hash(): string;
    get hashType(): string;
    get id(): string;
    get latestVersion(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get owner(): string;
    parameter(index: string): SsmDocumentParameter;
    private _permissions?;
    get permissions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set permissions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetPermissions(): void;
    get permissionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get platformTypes(): string[];
    get schemaVersion(): string;
    get status(): string;
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
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string;
    private _versionName?;
    get versionName(): string;
    set versionName(value: string);
    resetVersionName(): void;
    get versionNameInput(): string;
    private _attachmentsSource?;
    get attachmentsSource(): SsmDocumentAttachmentsSource[];
    set attachmentsSource(value: SsmDocumentAttachmentsSource[]);
    resetAttachmentsSource(): void;
    get attachmentsSourceInput(): SsmDocumentAttachmentsSource[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ssm-document.d.ts.map