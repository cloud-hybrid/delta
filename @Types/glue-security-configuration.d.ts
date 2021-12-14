import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#name GlueSecurityConfiguration#name}
    */
    readonly name: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#encryption_configuration GlueSecurityConfiguration#encryption_configuration}
    */
    readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}
    */
    readonly cloudwatchEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption | undefined);
    private _cloudwatchEncryptionMode?;
    get cloudwatchEncryptionMode(): string;
    set cloudwatchEncryptionMode(value: string);
    resetCloudwatchEncryptionMode(): void;
    get cloudwatchEncryptionModeInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
}
export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}
    */
    readonly jobBookmarksEncryptionMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption | undefined);
    private _jobBookmarksEncryptionMode?;
    get jobBookmarksEncryptionMode(): string;
    set jobBookmarksEncryptionMode(value: string);
    resetJobBookmarksEncryptionMode(): void;
    get jobBookmarksEncryptionModeInput(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
}
export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}
    */
    readonly s3EncryptionMode?: string;
}
export declare function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationS3Encryption): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueSecurityConfigurationEncryptionConfigurationS3Encryption | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
    private _s3EncryptionMode?;
    get s3EncryptionMode(): string;
    set s3EncryptionMode(value: string);
    resetS3EncryptionMode(): void;
    get s3EncryptionModeInput(): string;
}
export interface GlueSecurityConfigurationEncryptionConfiguration {
    /**
    * cloudwatch_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}
    */
    readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption;
    /**
    * job_bookmarks_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}
    */
    readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;
    /**
    * s3_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption GlueSecurityConfiguration#s3_encryption}
    */
    readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption;
}
export declare function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationOutputReference | GlueSecurityConfigurationEncryptionConfiguration): any;
export declare class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueSecurityConfigurationEncryptionConfiguration | undefined;
    set internalValue(value: GlueSecurityConfigurationEncryptionConfiguration | undefined);
    private _cloudwatchEncryption;
    get cloudwatchEncryption(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference;
    putCloudwatchEncryption(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): void;
    get cloudwatchEncryptionInput(): GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption;
    private _jobBookmarksEncryption;
    get jobBookmarksEncryption(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference;
    putJobBookmarksEncryption(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): void;
    get jobBookmarksEncryptionInput(): GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;
    private _s3Encryption;
    get s3Encryption(): GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference;
    putS3Encryption(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption): void;
    get s3EncryptionInput(): GlueSecurityConfigurationEncryptionConfigurationS3Encryption;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration}
*/
export declare class GlueSecurityConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSecurityConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): GlueSecurityConfigurationEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration): void;
    get encryptionConfigurationInput(): GlueSecurityConfigurationEncryptionConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-security-configuration.d.ts.map