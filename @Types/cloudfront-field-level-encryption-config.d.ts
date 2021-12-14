import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontFieldLevelEncryptionConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#comment CloudfrontFieldLevelEncryptionConfig#comment}
    */
    readonly comment?: string;
    /**
    * content_type_profile_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#content_type_profile_config CloudfrontFieldLevelEncryptionConfig#content_type_profile_config}
    */
    readonly contentTypeProfileConfig: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig;
    /**
    * query_arg_profile_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#query_arg_profile_config CloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}
    */
    readonly queryArgProfileConfig: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig;
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#content_type CloudfrontFieldLevelEncryptionConfig#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#format CloudfrontFieldLevelEncryptionConfig#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
    */
    readonly profileId?: string;
}
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems): any;
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#items CloudfrontFieldLevelEncryptionConfig#items}
    */
    readonly items: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[];
}
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): any;
export declare class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles | undefined);
    private _items?;
    get items(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[];
    set items(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[]);
    get itemsInput(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[];
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}
    */
    readonly forwardWhenContentTypeIsUnknown: boolean | cdktf.IResolvable;
    /**
    * content_type_profiles block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#content_type_profiles CloudfrontFieldLevelEncryptionConfig#content_type_profiles}
    */
    readonly contentTypeProfiles: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;
}
export declare function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): any;
export declare class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig | undefined);
    private _forwardWhenContentTypeIsUnknown?;
    get forwardWhenContentTypeIsUnknown(): boolean | cdktf.IResolvable;
    set forwardWhenContentTypeIsUnknown(value: boolean | cdktf.IResolvable);
    get forwardWhenContentTypeIsUnknownInput(): boolean | cdktf.IResolvable;
    private _contentTypeProfiles;
    get contentTypeProfiles(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference;
    putContentTypeProfiles(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): void;
    get contentTypeProfilesInput(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
    */
    readonly profileId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}
    */
    readonly queryArg: string;
}
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems): any;
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#items CloudfrontFieldLevelEncryptionConfig#items}
    */
    readonly items?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[];
}
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): any;
export declare class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined);
    private _items?;
    get items(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[];
    set items(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[]);
    resetItems(): void;
    get itemsInput(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[];
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}
    */
    readonly forwardWhenQueryArgProfileIsUnknown: boolean | cdktf.IResolvable;
    /**
    * query_arg_profiles block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#query_arg_profiles CloudfrontFieldLevelEncryptionConfig#query_arg_profiles}
    */
    readonly queryArgProfiles?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;
}
export declare function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): any;
export declare class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig | undefined);
    private _forwardWhenQueryArgProfileIsUnknown?;
    get forwardWhenQueryArgProfileIsUnknown(): boolean | cdktf.IResolvable;
    set forwardWhenQueryArgProfileIsUnknown(value: boolean | cdktf.IResolvable);
    get forwardWhenQueryArgProfileIsUnknownInput(): boolean | cdktf.IResolvable;
    private _queryArgProfiles;
    get queryArgProfiles(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference;
    putQueryArgProfiles(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): void;
    resetQueryArgProfiles(): void;
    get queryArgProfilesInput(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config}
*/
export declare class CloudfrontFieldLevelEncryptionConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFieldLevelEncryptionConfigConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionConfigConfig);
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    get etag(): string;
    get id(): string;
    private _contentTypeProfileConfig;
    get contentTypeProfileConfig(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference;
    putContentTypeProfileConfig(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): void;
    get contentTypeProfileConfigInput(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig;
    private _queryArgProfileConfig;
    get queryArgProfileConfig(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference;
    putQueryArgProfileConfig(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): void;
    get queryArgProfileConfigInput(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-field-level-encryption-config.d.ts.map