import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoverycontrolconfigRoutingControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html#cluster_arn Route53RecoverycontrolconfigRoutingControl#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html#control_panel_arn Route53RecoverycontrolconfigRoutingControl#control_panel_arn}
    */
    readonly controlPanelArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html#name Route53RecoverycontrolconfigRoutingControl#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html aws_route53recoverycontrolconfig_routing_control}
*/
export declare class Route53RecoverycontrolconfigRoutingControl extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_routing_control.html aws_route53recoverycontrolconfig_routing_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigRoutingControlConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigRoutingControlConfig);
    get arn(): string;
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string;
    private _controlPanelArn?;
    get controlPanelArn(): string;
    set controlPanelArn(value: string);
    resetControlPanelArn(): void;
    get controlPanelArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53recoverycontrolconfig-routing-control.d.ts.map