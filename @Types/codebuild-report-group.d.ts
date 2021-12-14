import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeBuild
*/
export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#delete_reports CodebuildReportGroup#delete_reports}
    */
    readonly deleteReports?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#name CodebuildReportGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags CodebuildReportGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags_all CodebuildReportGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * export_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#export_config CodebuildReportGroup#export_config}
    */
    readonly exportConfig: CodebuildReportGroupExportConfig;
}
export interface CodebuildReportGroupExportConfigS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#bucket CodebuildReportGroup#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_disabled CodebuildReportGroup#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_key CodebuildReportGroup#encryption_key}
    */
    readonly encryptionKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#packaging CodebuildReportGroup#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#path CodebuildReportGroup#path}
    */
    readonly path?: string;
}
export declare function codebuildReportGroupExportConfigS3DestinationToTerraform(struct?: CodebuildReportGroupExportConfigS3DestinationOutputReference | CodebuildReportGroupExportConfigS3Destination): any;
export declare class CodebuildReportGroupExportConfigS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildReportGroupExportConfigS3Destination | undefined;
    set internalValue(value: CodebuildReportGroupExportConfigS3Destination | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _encryptionDisabled?;
    get encryptionDisabled(): boolean | cdktf.IResolvable;
    set encryptionDisabled(value: boolean | cdktf.IResolvable);
    resetEncryptionDisabled(): void;
    get encryptionDisabledInput(): boolean | cdktf.IResolvable;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    get encryptionKeyInput(): string;
    private _packaging?;
    get packaging(): string;
    set packaging(value: string);
    resetPackaging(): void;
    get packagingInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
}
export interface CodebuildReportGroupExportConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#s3_destination CodebuildReportGroup#s3_destination}
    */
    readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination;
}
export declare function codebuildReportGroupExportConfigToTerraform(struct?: CodebuildReportGroupExportConfigOutputReference | CodebuildReportGroupExportConfig): any;
export declare class CodebuildReportGroupExportConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodebuildReportGroupExportConfig | undefined;
    set internalValue(value: CodebuildReportGroupExportConfig | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _s3Destination;
    get s3Destination(): CodebuildReportGroupExportConfigS3DestinationOutputReference;
    putS3Destination(value: CodebuildReportGroupExportConfigS3Destination): void;
    resetS3Destination(): void;
    get s3DestinationInput(): CodebuildReportGroupExportConfigS3Destination;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group}
*/
export declare class CodebuildReportGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildReportGroupConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildReportGroupConfig);
    get arn(): string;
    get created(): string;
    private _deleteReports?;
    get deleteReports(): boolean | cdktf.IResolvable;
    set deleteReports(value: boolean | cdktf.IResolvable);
    resetDeleteReports(): void;
    get deleteReportsInput(): boolean | cdktf.IResolvable;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _exportConfig;
    get exportConfig(): CodebuildReportGroupExportConfigOutputReference;
    putExportConfig(value: CodebuildReportGroupExportConfig): void;
    get exportConfigInput(): CodebuildReportGroupExportConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codebuild-report-group.d.ts.map