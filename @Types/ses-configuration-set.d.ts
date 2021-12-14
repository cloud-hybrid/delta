import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Email Service
*/
export interface SesConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#name SesConfigurationSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}
    */
    readonly reputationMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#sending_enabled SesConfigurationSet#sending_enabled}
    */
    readonly sendingEnabled?: boolean | cdktf.IResolvable;
    /**
    * delivery_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#delivery_options SesConfigurationSet#delivery_options}
    */
    readonly deliveryOptions?: SesConfigurationSetDeliveryOptions;
}
export interface SesConfigurationSetDeliveryOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html#tls_policy SesConfigurationSet#tls_policy}
    */
    readonly tlsPolicy?: string;
}
export declare function sesConfigurationSetDeliveryOptionsToTerraform(struct?: SesConfigurationSetDeliveryOptionsOutputReference | SesConfigurationSetDeliveryOptions): any;
export declare class SesConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SesConfigurationSetDeliveryOptions | undefined;
    set internalValue(value: SesConfigurationSetDeliveryOptions | undefined);
    private _tlsPolicy?;
    get tlsPolicy(): string;
    set tlsPolicy(value: string);
    resetTlsPolicy(): void;
    get tlsPolicyInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set}
*/
export declare class SesConfigurationSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_configuration_set.html aws_ses_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesConfigurationSetConfig
    */
    constructor(scope: Construct, id: string, config: SesConfigurationSetConfig);
    get arn(): string;
    get id(): string;
    get lastFreshStart(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _reputationMetricsEnabled?;
    get reputationMetricsEnabled(): boolean | cdktf.IResolvable;
    set reputationMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetReputationMetricsEnabled(): void;
    get reputationMetricsEnabledInput(): boolean | cdktf.IResolvable;
    private _sendingEnabled?;
    get sendingEnabled(): boolean | cdktf.IResolvable;
    set sendingEnabled(value: boolean | cdktf.IResolvable);
    resetSendingEnabled(): void;
    get sendingEnabledInput(): boolean | cdktf.IResolvable;
    private _deliveryOptions;
    get deliveryOptions(): SesConfigurationSetDeliveryOptionsOutputReference;
    putDeliveryOptions(value: SesConfigurationSetDeliveryOptions): void;
    resetDeliveryOptions(): void;
    get deliveryOptionsInput(): SesConfigurationSetDeliveryOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ses-configuration-set.d.ts.map