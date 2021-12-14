import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoverycontrolconfigSafetyRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}
    */
    readonly assertedControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}
    */
    readonly controlPanelArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}
    */
    readonly gatingControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#name Route53RecoverycontrolconfigSafetyRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}
    */
    readonly targetControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}
    */
    readonly waitPeriodMs: number;
    /**
    * rule_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}
    */
    readonly ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfig;
}
export interface Route53RecoverycontrolconfigSafetyRuleRuleConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#inverted Route53RecoverycontrolconfigSafetyRule#inverted}
    */
    readonly inverted: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#threshold Route53RecoverycontrolconfigSafetyRule#threshold}
    */
    readonly threshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html#type Route53RecoverycontrolconfigSafetyRule#type}
    */
    readonly type: string;
}
export declare function route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(struct?: Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference | Route53RecoverycontrolconfigSafetyRuleRuleConfig): any;
export declare class Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoverycontrolconfigSafetyRuleRuleConfig | undefined;
    set internalValue(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig | undefined);
    private _inverted?;
    get inverted(): boolean | cdktf.IResolvable;
    set inverted(value: boolean | cdktf.IResolvable);
    get invertedInput(): boolean | cdktf.IResolvable;
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    get thresholdInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule}
*/
export declare class Route53RecoverycontrolconfigSafetyRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_safety_rule.html aws_route53recoverycontrolconfig_safety_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigSafetyRuleConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigSafetyRuleConfig);
    get arn(): string;
    private _assertedControls?;
    get assertedControls(): string[];
    set assertedControls(value: string[]);
    resetAssertedControls(): void;
    get assertedControlsInput(): string[];
    private _controlPanelArn?;
    get controlPanelArn(): string;
    set controlPanelArn(value: string);
    get controlPanelArnInput(): string;
    private _gatingControls?;
    get gatingControls(): string[];
    set gatingControls(value: string[]);
    resetGatingControls(): void;
    get gatingControlsInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get status(): string;
    private _targetControls?;
    get targetControls(): string[];
    set targetControls(value: string[]);
    resetTargetControls(): void;
    get targetControlsInput(): string[];
    private _waitPeriodMs?;
    get waitPeriodMs(): number;
    set waitPeriodMs(value: number);
    get waitPeriodMsInput(): number;
    private _ruleConfig;
    get ruleConfig(): Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference;
    putRuleConfig(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig): void;
    get ruleConfigInput(): Route53RecoverycontrolconfigSafetyRuleRuleConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53recoverycontrolconfig-safety-rule.d.ts.map