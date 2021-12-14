import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Network Firewall
*/
export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#capacity NetworkfirewallRuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#description NetworkfirewallRuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#name NetworkfirewallRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules NetworkfirewallRuleGroup#rules}
    */
    readonly rules?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags NetworkfirewallRuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags_all NetworkfirewallRuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#type NetworkfirewallRuleGroup#type}
    */
    readonly type: string;
    /**
    * rule_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_group NetworkfirewallRuleGroup#rule_group}
    */
    readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup;
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined);
    private _definition?;
    get definition(): string[];
    set definition(value: string[]);
    get definitionInput(): string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * ip_set block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_set NetworkfirewallRuleGroup#ip_set}
    */
    readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet;
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any;
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined);
    private _definition?;
    get definition(): string[];
    set definition(value: string[]);
    get definitionInput(): string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * port_set block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_set NetworkfirewallRuleGroup#port_set}
    */
    readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet;
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any;
export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
    /**
    * ip_sets block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_sets NetworkfirewallRuleGroup#ip_sets}
    */
    readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
    /**
    * port_sets block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_sets NetworkfirewallRuleGroup#port_sets}
    */
    readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariables): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined);
    private _ipSets?;
    get ipSets(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
    set ipSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[]);
    resetIpSets(): void;
    get ipSetsInput(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
    private _portSets?;
    get portSets(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
    set portSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[]);
    resetPortSets(): void;
    get portSetsInput(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}
    */
    readonly generatedRulesType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#target_types NetworkfirewallRuleGroup#target_types}
    */
    readonly targetTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#targets NetworkfirewallRuleGroup#targets}
    */
    readonly targets: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList | undefined);
    private _generatedRulesType?;
    get generatedRulesType(): string;
    set generatedRulesType(value: string);
    get generatedRulesTypeInput(): string;
    private _targetTypes?;
    get targetTypes(): string[];
    set targetTypes(value: string[]);
    get targetTypesInput(): string[];
    private _targets?;
    get targets(): string[];
    set targets(value: string[]);
    get targetsInput(): string[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#direction NetworkfirewallRuleGroup#direction}
    */
    readonly direction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocol NetworkfirewallRuleGroup#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string;
    private _destinationPort?;
    get destinationPort(): string;
    set destinationPort(value: string);
    get destinationPortInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    get directionInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string;
    private _sourcePort?;
    get sourcePort(): string;
    set sourcePort(value: string);
    get sourcePortInput(): string;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#keyword NetworkfirewallRuleGroup#keyword}
    */
    readonly keyword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#settings NetworkfirewallRuleGroup#settings}
    */
    readonly settings?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action NetworkfirewallRuleGroup#action}
    */
    readonly action: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#header NetworkfirewallRuleGroup#header}
    */
    readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader;
    /**
    * rule_option block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_option NetworkfirewallRuleGroup#rule_option}
    */
    readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#value NetworkfirewallRuleGroup#value}
    */
    readonly value: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#dimension NetworkfirewallRuleGroup#dimension}
    */
    readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined);
    private _dimension?;
    get dimension(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
    set dimension(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[]);
    get dimensionInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
    /**
    * publish_metric_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
    */
    readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined);
    private _publishMetricAction;
    get publishMetricAction(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference;
    putPublishMetricAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): void;
    get publishMetricActionInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_name NetworkfirewallRuleGroup#action_name}
    */
    readonly actionName: string;
    /**
    * action_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_definition NetworkfirewallRuleGroup#action_definition}
    */
    readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#flags NetworkfirewallRuleGroup#flags}
    */
    readonly flags: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#masks NetworkfirewallRuleGroup#masks}
    */
    readonly masks?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocols NetworkfirewallRuleGroup#protocols}
    */
    readonly protocols?: number[];
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
    /**
    * destination_port block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
    */
    readonly source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
    /**
    * source_port block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
    /**
    * tcp_flag block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tcp_flag NetworkfirewallRuleGroup#tcp_flag}
    */
    readonly tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined);
    private _protocols?;
    get protocols(): number[];
    set protocols(value: number[]);
    resetProtocols(): void;
    get protocolsInput(): number[];
    private _destination?;
    get destination(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
    set destination(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[]);
    resetDestination(): void;
    get destinationInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
    private _destinationPort?;
    get destinationPort(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
    set destinationPort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[]);
    resetDestinationPort(): void;
    get destinationPortInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
    private _source?;
    get source(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
    set source(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[]);
    resetSource(): void;
    get sourceInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
    private _sourcePort?;
    get sourcePort(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
    set sourcePort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[]);
    resetSourcePort(): void;
    get sourcePortInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
    private _tcpFlag?;
    get tcpFlag(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
    set tcpFlag(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[]);
    resetTcpFlag(): void;
    get tcpFlagInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#actions NetworkfirewallRuleGroup#actions}
    */
    readonly actions: string[];
    /**
    * match_attributes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#match_attributes NetworkfirewallRuleGroup#match_attributes}
    */
    readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[];
    private _matchAttributes;
    get matchAttributes(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference;
    putMatchAttributes(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): void;
    get matchAttributesInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#priority NetworkfirewallRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * rule_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_definition NetworkfirewallRuleGroup#rule_definition}
    */
    readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule): any;
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    /**
    * custom_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#custom_action NetworkfirewallRuleGroup#custom_action}
    */
    readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
    /**
    * stateless_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rule NetworkfirewallRuleGroup#stateless_rule}
    */
    readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined);
    private _customAction?;
    get customAction(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
    set customAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[]);
    resetCustomAction(): void;
    get customActionInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
    private _statelessRule?;
    get statelessRule(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
    set statelessRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[]);
    get statelessRuleInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_string NetworkfirewallRuleGroup#rules_string}
    */
    readonly rulesString?: string;
    /**
    * rules_source_list block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
    */
    readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList;
    /**
    * stateful_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateful_rule NetworkfirewallRuleGroup#stateful_rule}
    */
    readonly statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[];
    /**
    * stateless_rules_and_custom_actions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
    */
    readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSource): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSource | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSource | undefined);
    private _rulesString?;
    get rulesString(): string;
    set rulesString(value: string);
    resetRulesString(): void;
    get rulesStringInput(): string;
    private _rulesSourceList;
    get rulesSourceList(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListOutputReference;
    putRulesSourceList(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): void;
    resetRulesSourceList(): void;
    get rulesSourceListInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList;
    private _statefulRule?;
    get statefulRule(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[];
    set statefulRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[]);
    resetStatefulRule(): void;
    get statefulRuleInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[];
    private _statelessRulesAndCustomActions;
    get statelessRulesAndCustomActions(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference;
    putStatelessRulesAndCustomActions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): void;
    resetStatelessRulesAndCustomActions(): void;
    get statelessRulesAndCustomActionsInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
}
export interface NetworkfirewallRuleGroupRuleGroup {
    /**
    * rule_variables block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_variables NetworkfirewallRuleGroup#rule_variables}
    */
    readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables;
    /**
    * rules_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source NetworkfirewallRuleGroup#rules_source}
    */
    readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource;
}
export declare function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupOutputReference | NetworkfirewallRuleGroupRuleGroup): any;
export declare class NetworkfirewallRuleGroupRuleGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroup | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroup | undefined);
    private _ruleVariables;
    get ruleVariables(): NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference;
    putRuleVariables(value: NetworkfirewallRuleGroupRuleGroupRuleVariables): void;
    resetRuleVariables(): void;
    get ruleVariablesInput(): NetworkfirewallRuleGroupRuleGroupRuleVariables;
    private _rulesSource;
    get rulesSource(): NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference;
    putRulesSource(value: NetworkfirewallRuleGroupRuleGroupRulesSource): void;
    get rulesSourceInput(): NetworkfirewallRuleGroupRuleGroupRulesSource;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group}
*/
export declare class NetworkfirewallRuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig);
    get arn(): string;
    private _capacity?;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rules?;
    get rules(): string;
    set rules(value: string);
    resetRules(): void;
    get rulesInput(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    get updateToken(): string;
    private _ruleGroup;
    get ruleGroup(): NetworkfirewallRuleGroupRuleGroupOutputReference;
    putRuleGroup(value: NetworkfirewallRuleGroupRuleGroup): void;
    resetRuleGroup(): void;
    get ruleGroupInput(): NetworkfirewallRuleGroupRuleGroup;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=networkfirewall-rule-group.d.ts.map