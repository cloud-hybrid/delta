import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS License Manager
*/
export interface LicensemanagerLicenseConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#description LicensemanagerLicenseConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_count LicensemanagerLicenseConfiguration#license_count}
    */
    readonly licenseCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}
    */
    readonly licenseCountHardLimit?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}
    */
    readonly licenseCountingType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#license_rules LicensemanagerLicenseConfiguration#license_rules}
    */
    readonly licenseRules?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#name LicensemanagerLicenseConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#tags LicensemanagerLicenseConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html#tags_all LicensemanagerLicenseConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration}
*/
export declare class LicensemanagerLicenseConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration.html aws_licensemanager_license_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerLicenseConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: LicensemanagerLicenseConfigurationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _licenseCount?;
    get licenseCount(): number;
    set licenseCount(value: number);
    resetLicenseCount(): void;
    get licenseCountInput(): number;
    private _licenseCountHardLimit?;
    get licenseCountHardLimit(): boolean | cdktf.IResolvable;
    set licenseCountHardLimit(value: boolean | cdktf.IResolvable);
    resetLicenseCountHardLimit(): void;
    get licenseCountHardLimitInput(): boolean | cdktf.IResolvable;
    private _licenseCountingType?;
    get licenseCountingType(): string;
    set licenseCountingType(value: string);
    get licenseCountingTypeInput(): string;
    private _licenseRules?;
    get licenseRules(): string[];
    set licenseRules(value: string[]);
    resetLicenseRules(): void;
    get licenseRulesInput(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerAccountId(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=licensemanager-license-configuration.d.ts.map