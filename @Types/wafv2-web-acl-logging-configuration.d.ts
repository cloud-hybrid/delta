import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF V2
*/
export interface Wafv2WebAclLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * AWS Kinesis Firehose Delivery Stream ARNs
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#log_destination_configs Wafv2WebAclLoggingConfiguration#log_destination_configs}
    */
    readonly logDestinationConfigs: string[];
    /**
    * AWS WebACL ARN
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#resource_arn Wafv2WebAclLoggingConfiguration#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * logging_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#logging_filter Wafv2WebAclLoggingConfiguration#logging_filter}
    */
    readonly loggingFilter?: Wafv2WebAclLoggingConfigurationLoggingFilter;
    /**
    * redacted_fields block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#redacted_fields Wafv2WebAclLoggingConfiguration#redacted_fields}
    */
    readonly redactedFields?: Wafv2WebAclLoggingConfigurationRedactedFields[];
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#action Wafv2WebAclLoggingConfiguration#action}
    */
    readonly action: string;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#label_name Wafv2WebAclLoggingConfiguration#label_name}
    */
    readonly labelName: string;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition | undefined);
    private _labelName?;
    get labelName(): string;
    set labelName(value: string);
    get labelNameInput(): string;
}
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition {
    /**
    * action_condition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#action_condition Wafv2WebAclLoggingConfiguration#action_condition}
    */
    readonly actionCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionActionCondition;
    /**
    * label_name_condition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#label_name_condition Wafv2WebAclLoggingConfiguration#label_name_condition}
    */
    readonly labelNameCondition?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionLabelNameCondition;
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterConditionToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition): any;
export interface Wafv2WebAclLoggingConfigurationLoggingFilterFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#behavior Wafv2WebAclLoggingConfiguration#behavior}
    */
    readonly behavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#requirement Wafv2WebAclLoggingConfiguration#requirement}
    */
    readonly requirement: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#condition Wafv2WebAclLoggingConfiguration#condition}
    */
    readonly condition: Wafv2WebAclLoggingConfigurationLoggingFilterFilterCondition[];
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterFilter): any;
export interface Wafv2WebAclLoggingConfigurationLoggingFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#default_behavior Wafv2WebAclLoggingConfiguration#default_behavior}
    */
    readonly defaultBehavior: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#filter Wafv2WebAclLoggingConfiguration#filter}
    */
    readonly filter: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[];
}
export declare function wafv2WebAclLoggingConfigurationLoggingFilterToTerraform(struct?: Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference | Wafv2WebAclLoggingConfigurationLoggingFilter): any;
export declare class Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationLoggingFilter | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationLoggingFilter | undefined);
    private _defaultBehavior?;
    get defaultBehavior(): string;
    set defaultBehavior(value: string);
    get defaultBehaviorInput(): string;
    private _filter?;
    get filter(): Wafv2WebAclLoggingConfigurationLoggingFilterFilter[];
    set filter(value: Wafv2WebAclLoggingConfigurationLoggingFilterFilter[]);
    get filterInput(): Wafv2WebAclLoggingConfigurationLoggingFilterFilter[];
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsBody {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsBodyToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsBody): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsBody | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsBody | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsMethod {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsMethodToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsMethod): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsMethod | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#name Wafv2WebAclLoggingConfiguration#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#name Wafv2WebAclLoggingConfiguration#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath {
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsUriPathToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference | Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath): any;
export declare class Wafv2WebAclLoggingConfigurationRedactedFieldsUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath | undefined;
    set internalValue(value: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath | undefined);
}
export interface Wafv2WebAclLoggingConfigurationRedactedFields {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#all_query_arguments Wafv2WebAclLoggingConfiguration#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclLoggingConfigurationRedactedFieldsAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#body Wafv2WebAclLoggingConfiguration#body}
    */
    readonly body?: Wafv2WebAclLoggingConfigurationRedactedFieldsBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#method Wafv2WebAclLoggingConfiguration#method}
    */
    readonly method?: Wafv2WebAclLoggingConfigurationRedactedFieldsMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#query_string Wafv2WebAclLoggingConfiguration#query_string}
    */
    readonly queryString?: Wafv2WebAclLoggingConfigurationRedactedFieldsQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#single_header Wafv2WebAclLoggingConfiguration#single_header}
    */
    readonly singleHeader?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#single_query_argument Wafv2WebAclLoggingConfiguration#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclLoggingConfigurationRedactedFieldsSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html#uri_path Wafv2WebAclLoggingConfiguration#uri_path}
    */
    readonly uriPath?: Wafv2WebAclLoggingConfigurationRedactedFieldsUriPath;
}
export declare function wafv2WebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: Wafv2WebAclLoggingConfigurationRedactedFields): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration}
*/
export declare class Wafv2WebAclLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl_logging_configuration.html aws_wafv2_web_acl_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclLoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2WebAclLoggingConfigurationConfig);
    get id(): string;
    private _logDestinationConfigs?;
    get logDestinationConfigs(): string[];
    set logDestinationConfigs(value: string[]);
    get logDestinationConfigsInput(): string[];
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _loggingFilter;
    get loggingFilter(): Wafv2WebAclLoggingConfigurationLoggingFilterOutputReference;
    putLoggingFilter(value: Wafv2WebAclLoggingConfigurationLoggingFilter): void;
    resetLoggingFilter(): void;
    get loggingFilterInput(): Wafv2WebAclLoggingConfigurationLoggingFilter;
    private _redactedFields?;
    get redactedFields(): Wafv2WebAclLoggingConfigurationRedactedFields[];
    set redactedFields(value: Wafv2WebAclLoggingConfigurationRedactedFields[]);
    resetRedactedFields(): void;
    get redactedFieldsInput(): Wafv2WebAclLoggingConfigurationRedactedFields[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafv2-web-acl-logging-configuration.d.ts.map