import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#metric_name WafWebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#name WafWebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags WafWebAcl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#tags_all WafWebAcl#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#default_action WafWebAcl#default_action}
    */
    readonly defaultAction: WafWebAclDefaultAction;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#logging_configuration WafWebAcl#logging_configuration}
    */
    readonly loggingConfiguration?: WafWebAclLoggingConfiguration;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rules WafWebAcl#rules}
    */
    readonly rules?: WafWebAclRules[];
}
export interface WafWebAclDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclDefaultActionToTerraform(struct?: WafWebAclDefaultActionOutputReference | WafWebAclDefaultAction): any;
export declare class WafWebAclDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafWebAclDefaultAction | undefined;
    set internalValue(value: WafWebAclDefaultAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#data WafWebAcl#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch): any;
export interface WafWebAclLoggingConfigurationRedactedFields {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#field_to_match WafWebAcl#field_to_match}
    */
    readonly fieldToMatch: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}
export declare function wafWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafWebAclLoggingConfigurationRedactedFieldsOutputReference | WafWebAclLoggingConfigurationRedactedFields): any;
export declare class WafWebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafWebAclLoggingConfigurationRedactedFields | undefined;
    set internalValue(value: WafWebAclLoggingConfigurationRedactedFields | undefined);
    private _fieldToMatch?;
    get fieldToMatch(): WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
    set fieldToMatch(value: WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]);
    get fieldToMatchInput(): WafWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}
export interface WafWebAclLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#log_destination WafWebAcl#log_destination}
    */
    readonly logDestination: string;
    /**
    * redacted_fields block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#redacted_fields WafWebAcl#redacted_fields}
    */
    readonly redactedFields?: WafWebAclLoggingConfigurationRedactedFields;
}
export declare function wafWebAclLoggingConfigurationToTerraform(struct?: WafWebAclLoggingConfigurationOutputReference | WafWebAclLoggingConfiguration): any;
export declare class WafWebAclLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafWebAclLoggingConfiguration | undefined;
    set internalValue(value: WafWebAclLoggingConfiguration | undefined);
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    get logDestinationInput(): string;
    private _redactedFields;
    get redactedFields(): WafWebAclLoggingConfigurationRedactedFieldsOutputReference;
    putRedactedFields(value: WafWebAclLoggingConfigurationRedactedFields): void;
    resetRedactedFields(): void;
    get redactedFieldsInput(): WafWebAclLoggingConfigurationRedactedFields;
}
export interface WafWebAclRulesAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclRulesActionToTerraform(struct?: WafWebAclRulesActionOutputReference | WafWebAclRulesAction): any;
export declare class WafWebAclRulesActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafWebAclRulesAction | undefined;
    set internalValue(value: WafWebAclRulesAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafWebAclRulesOverrideAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type: string;
}
export declare function wafWebAclRulesOverrideActionToTerraform(struct?: WafWebAclRulesOverrideActionOutputReference | WafWebAclRulesOverrideAction): any;
export declare class WafWebAclRulesOverrideActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafWebAclRulesOverrideAction | undefined;
    set internalValue(value: WafWebAclRulesOverrideAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafWebAclRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#priority WafWebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#rule_id WafWebAcl#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#type WafWebAcl#type}
    */
    readonly type?: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#action WafWebAcl#action}
    */
    readonly action?: WafWebAclRulesAction;
    /**
    * override_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html#override_action WafWebAcl#override_action}
    */
    readonly overrideAction?: WafWebAclRulesOverrideAction;
}
export declare function wafWebAclRulesToTerraform(struct?: WafWebAclRules): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl}
*/
export declare class WafWebAcl extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html aws_waf_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafWebAclConfig
    */
    constructor(scope: Construct, id: string, config: WafWebAclConfig);
    get arn(): string;
    get id(): string;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string;
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
    private _defaultAction;
    get defaultAction(): WafWebAclDefaultActionOutputReference;
    putDefaultAction(value: WafWebAclDefaultAction): void;
    get defaultActionInput(): WafWebAclDefaultAction;
    private _loggingConfiguration;
    get loggingConfiguration(): WafWebAclLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: WafWebAclLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): WafWebAclLoggingConfiguration;
    private _rules?;
    get rules(): WafWebAclRules[];
    set rules(value: WafWebAclRules[]);
    resetRules(): void;
    get rulesInput(): WafWebAclRules[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-web-acl.d.ts.map