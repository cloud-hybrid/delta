import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppStream
*/
export interface AppstreamDirectoryConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html#directory_name AppstreamDirectoryConfig#directory_name}
    */
    readonly directoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}
    */
    readonly organizationalUnitDistinguishedNames: string[];
    /**
    * service_account_credentials block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}
    */
    readonly serviceAccountCredentials: AppstreamDirectoryConfigServiceAccountCredentials;
}
export interface AppstreamDirectoryConfigServiceAccountCredentials {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html#account_name AppstreamDirectoryConfig#account_name}
    */
    readonly accountName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html#account_password AppstreamDirectoryConfig#account_password}
    */
    readonly accountPassword: string;
}
export declare function appstreamDirectoryConfigServiceAccountCredentialsToTerraform(struct?: AppstreamDirectoryConfigServiceAccountCredentialsOutputReference | AppstreamDirectoryConfigServiceAccountCredentials): any;
export declare class AppstreamDirectoryConfigServiceAccountCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppstreamDirectoryConfigServiceAccountCredentials | undefined;
    set internalValue(value: AppstreamDirectoryConfigServiceAccountCredentials | undefined);
    private _accountName?;
    get accountName(): string;
    set accountName(value: string);
    get accountNameInput(): string;
    private _accountPassword?;
    get accountPassword(): string;
    set accountPassword(value: string);
    get accountPasswordInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html aws_appstream_directory_config}
*/
export declare class AppstreamDirectoryConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config.html aws_appstream_directory_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamDirectoryConfigConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamDirectoryConfigConfig);
    get createdTime(): string;
    private _directoryName?;
    get directoryName(): string;
    set directoryName(value: string);
    get directoryNameInput(): string;
    get id(): string;
    private _organizationalUnitDistinguishedNames?;
    get organizationalUnitDistinguishedNames(): string[];
    set organizationalUnitDistinguishedNames(value: string[]);
    get organizationalUnitDistinguishedNamesInput(): string[];
    private _serviceAccountCredentials;
    get serviceAccountCredentials(): AppstreamDirectoryConfigServiceAccountCredentialsOutputReference;
    putServiceAccountCredentials(value: AppstreamDirectoryConfigServiceAccountCredentials): void;
    get serviceAccountCredentialsInput(): AppstreamDirectoryConfigServiceAccountCredentials;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appstream-directory-config.d.ts.map