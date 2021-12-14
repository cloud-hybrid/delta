import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Athena
*/
export interface AthenaDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#bucket AthenaDatabase#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#force_destroy AthenaDatabase#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#name AthenaDatabase#name}
    */
    readonly name: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_configuration AthenaDatabase#encryption_configuration}
    */
    readonly encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration;
}
export interface AthenaDatabaseEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_option AthenaDatabase#encryption_option}
    */
    readonly encryptionOption: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#kms_key AthenaDatabase#kms_key}
    */
    readonly kmsKey?: string;
}
export declare function athenaDatabaseEncryptionConfigurationToTerraform(struct?: AthenaDatabaseEncryptionConfigurationOutputReference | AthenaDatabaseEncryptionConfiguration): any;
export declare class AthenaDatabaseEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AthenaDatabaseEncryptionConfiguration | undefined;
    set internalValue(value: AthenaDatabaseEncryptionConfiguration | undefined);
    private _encryptionOption?;
    get encryptionOption(): string;
    set encryptionOption(value: string);
    get encryptionOptionInput(): string;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database}
*/
export declare class AthenaDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: AthenaDatabaseConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): AthenaDatabaseEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: AthenaDatabaseEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): AthenaDatabaseEncryptionConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=athena-database.d.ts.map