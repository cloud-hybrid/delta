import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF Regional
*/
export interface WafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#metric_name WafregionalWebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#name WafregionalWebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags WafregionalWebAcl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags_all WafregionalWebAcl#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#default_action WafregionalWebAcl#default_action}
    */
    readonly defaultAction: WafregionalWebAclDefaultAction;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#logging_configuration WafregionalWebAcl#logging_configuration}
    */
    readonly loggingConfiguration?: WafregionalWebAclLoggingConfiguration;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule WafregionalWebAcl#rule}
    */
    readonly rule?: WafregionalWebAclRule[];
}
export interface WafregionalWebAclDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclDefaultActionToTerraform(struct?: WafregionalWebAclDefaultActionOutputReference | WafregionalWebAclDefaultAction): any;
export declare class WafregionalWebAclDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalWebAclDefaultAction | undefined;
    set internalValue(value: WafregionalWebAclDefaultAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#data WafregionalWebAcl#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch): any;
export interface WafregionalWebAclLoggingConfigurationRedactedFields {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#field_to_match WafregionalWebAcl#field_to_match}
    */
    readonly fieldToMatch: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}
export declare function wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference | WafregionalWebAclLoggingConfigurationRedactedFields): any;
export declare class WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalWebAclLoggingConfigurationRedactedFields | undefined;
    set internalValue(value: WafregionalWebAclLoggingConfigurationRedactedFields | undefined);
    private _fieldToMatch?;
    get fieldToMatch(): WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
    set fieldToMatch(value: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[]);
    get fieldToMatchInput(): WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
}
export interface WafregionalWebAclLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#log_destination WafregionalWebAcl#log_destination}
    */
    readonly logDestination: string;
    /**
    * redacted_fields block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#redacted_fields WafregionalWebAcl#redacted_fields}
    */
    readonly redactedFields?: WafregionalWebAclLoggingConfigurationRedactedFields;
}
export declare function wafregionalWebAclLoggingConfigurationToTerraform(struct?: WafregionalWebAclLoggingConfigurationOutputReference | WafregionalWebAclLoggingConfiguration): any;
export declare class WafregionalWebAclLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalWebAclLoggingConfiguration | undefined;
    set internalValue(value: WafregionalWebAclLoggingConfiguration | undefined);
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    get logDestinationInput(): string;
    private _redactedFields;
    get redactedFields(): WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference;
    putRedactedFields(value: WafregionalWebAclLoggingConfigurationRedactedFields): void;
    resetRedactedFields(): void;
    get redactedFieldsInput(): WafregionalWebAclLoggingConfigurationRedactedFields;
}
export interface WafregionalWebAclRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclRuleActionToTerraform(struct?: WafregionalWebAclRuleActionOutputReference | WafregionalWebAclRuleAction): any;
export declare class WafregionalWebAclRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalWebAclRuleAction | undefined;
    set internalValue(value: WafregionalWebAclRuleAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafregionalWebAclRuleOverrideAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
}
export declare function wafregionalWebAclRuleOverrideActionToTerraform(struct?: WafregionalWebAclRuleOverrideActionOutputReference | WafregionalWebAclRuleOverrideAction): any;
export declare class WafregionalWebAclRuleOverrideActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WafregionalWebAclRuleOverrideAction | undefined;
    set internalValue(value: WafregionalWebAclRuleOverrideAction | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WafregionalWebAclRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#priority WafregionalWebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule_id WafregionalWebAcl#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type?: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#action WafregionalWebAcl#action}
    */
    readonly action?: WafregionalWebAclRuleAction;
    /**
    * override_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#override_action WafregionalWebAcl#override_action}
    */
    readonly overrideAction?: WafregionalWebAclRuleOverrideAction;
}
export declare function wafregionalWebAclRuleToTerraform(struct?: WafregionalWebAclRule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl}
*/
export declare class WafregionalWebAcl extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalWebAclConfig
    */
    constructor(scope: Construct, id: string, config: WafregionalWebAclConfig);
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
    get defaultAction(): WafregionalWebAclDefaultActionOutputReference;
    putDefaultAction(value: WafregionalWebAclDefaultAction): void;
    get defaultActionInput(): WafregionalWebAclDefaultAction;
    private _loggingConfiguration;
    get loggingConfiguration(): WafregionalWebAclLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: WafregionalWebAclLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): WafregionalWebAclLoggingConfiguration;
    private _rule?;
    get rule(): WafregionalWebAclRule[];
    set rule(value: WafregionalWebAclRule[]);
    resetRule(): void;
    get ruleInput(): WafregionalWebAclRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafregional-web-acl.d.ts.map