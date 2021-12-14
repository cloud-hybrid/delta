import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigConfigRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#description ConfigConfigRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#input_parameters ConfigConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#name ConfigConfigRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags ConfigConfigRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags_all ConfigConfigRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#scope ConfigConfigRule#scope}
    */
    readonly scope?: ConfigConfigRuleScope;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source ConfigConfigRule#source}
    */
    readonly source: ConfigConfigRuleSource;
}
export interface ConfigConfigRuleScope {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_id ConfigConfigRule#compliance_resource_id}
    */
    readonly complianceResourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_types ConfigConfigRule#compliance_resource_types}
    */
    readonly complianceResourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_key ConfigConfigRule#tag_key}
    */
    readonly tagKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_value ConfigConfigRule#tag_value}
    */
    readonly tagValue?: string;
}
export declare function configConfigRuleScopeToTerraform(struct?: ConfigConfigRuleScopeOutputReference | ConfigConfigRuleScope): any;
export declare class ConfigConfigRuleScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigConfigRuleScope | undefined;
    set internalValue(value: ConfigConfigRuleScope | undefined);
    private _complianceResourceId?;
    get complianceResourceId(): string;
    set complianceResourceId(value: string);
    resetComplianceResourceId(): void;
    get complianceResourceIdInput(): string;
    private _complianceResourceTypes?;
    get complianceResourceTypes(): string[];
    set complianceResourceTypes(value: string[]);
    resetComplianceResourceTypes(): void;
    get complianceResourceTypesInput(): string[];
    private _tagKey?;
    get tagKey(): string;
    set tagKey(value: string);
    resetTagKey(): void;
    get tagKeyInput(): string;
    private _tagValue?;
    get tagValue(): string;
    set tagValue(value: string);
    resetTagValue(): void;
    get tagValueInput(): string;
}
export interface ConfigConfigRuleSourceSourceDetail {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#event_source ConfigConfigRule#event_source}
    */
    readonly eventSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#message_type ConfigConfigRule#message_type}
    */
    readonly messageType?: string;
}
export declare function configConfigRuleSourceSourceDetailToTerraform(struct?: ConfigConfigRuleSourceSourceDetail): any;
export interface ConfigConfigRuleSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#owner ConfigConfigRule#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_identifier ConfigConfigRule#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * source_detail block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_detail ConfigConfigRule#source_detail}
    */
    readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[];
}
export declare function configConfigRuleSourceToTerraform(struct?: ConfigConfigRuleSourceOutputReference | ConfigConfigRuleSource): any;
export declare class ConfigConfigRuleSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigConfigRuleSource | undefined;
    set internalValue(value: ConfigConfigRuleSource | undefined);
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    private _sourceIdentifier?;
    get sourceIdentifier(): string;
    set sourceIdentifier(value: string);
    get sourceIdentifierInput(): string;
    private _sourceDetail?;
    get sourceDetail(): ConfigConfigRuleSourceSourceDetail[];
    set sourceDetail(value: ConfigConfigRuleSourceSourceDetail[]);
    resetSourceDetail(): void;
    get sourceDetailInput(): ConfigConfigRuleSourceSourceDetail[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule}
*/
export declare class ConfigConfigRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigRuleConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _inputParameters?;
    get inputParameters(): string;
    set inputParameters(value: string);
    resetInputParameters(): void;
    get inputParametersInput(): string;
    private _maximumExecutionFrequency?;
    get maximumExecutionFrequency(): string;
    set maximumExecutionFrequency(value: string);
    resetMaximumExecutionFrequency(): void;
    get maximumExecutionFrequencyInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ruleId(): string;
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
    private _scope;
    get scope(): ConfigConfigRuleScopeOutputReference;
    putScope(value: ConfigConfigRuleScope): void;
    resetScope(): void;
    get scopeInput(): ConfigConfigRuleScope;
    private _source;
    get source(): ConfigConfigRuleSourceOutputReference;
    putSource(value: ConfigConfigRuleSource): void;
    get sourceInput(): ConfigConfigRuleSource;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-config-rule.d.ts.map