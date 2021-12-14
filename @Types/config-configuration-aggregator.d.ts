import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#name ConfigConfigurationAggregator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags ConfigConfigurationAggregator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags_all ConfigConfigurationAggregator#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * account_aggregation_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
    */
    readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource;
    /**
    * organization_aggregation_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
    */
    readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_ids ConfigConfigurationAggregator#account_ids}
    */
    readonly accountIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
}
export declare function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any;
export declare class ConfigConfigurationAggregatorAccountAggregationSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigConfigurationAggregatorAccountAggregationSource | undefined;
    set internalValue(value: ConfigConfigurationAggregatorAccountAggregationSource | undefined);
    private _accountIds?;
    get accountIds(): string[];
    set accountIds(value: string[]);
    get accountIdsInput(): string[];
    private _allRegions?;
    get allRegions(): boolean | cdktf.IResolvable;
    set allRegions(value: boolean | cdktf.IResolvable);
    resetAllRegions(): void;
    get allRegionsInput(): boolean | cdktf.IResolvable;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[];
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#role_arn ConfigConfigurationAggregator#role_arn}
    */
    readonly roleArn: string;
}
export declare function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any;
export declare class ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigConfigurationAggregatorOrganizationAggregationSource | undefined;
    set internalValue(value: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined);
    private _allRegions?;
    get allRegions(): boolean | cdktf.IResolvable;
    set allRegions(value: boolean | cdktf.IResolvable);
    resetAllRegions(): void;
    get allRegionsInput(): boolean | cdktf.IResolvable;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[];
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator}
*/
export declare class ConfigConfigurationAggregator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationAggregatorConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig);
    get arn(): string;
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
    private _accountAggregationSource;
    get accountAggregationSource(): ConfigConfigurationAggregatorAccountAggregationSourceOutputReference;
    putAccountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource): void;
    resetAccountAggregationSource(): void;
    get accountAggregationSourceInput(): ConfigConfigurationAggregatorAccountAggregationSource;
    private _organizationAggregationSource;
    get organizationAggregationSource(): ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference;
    putOrganizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource): void;
    resetOrganizationAggregationSource(): void;
    get organizationAggregationSourceInput(): ConfigConfigurationAggregatorOrganizationAggregationSource;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-configuration-aggregator.d.ts.map