import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoverycontrolconfigControlPanelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html#cluster_arn Route53RecoverycontrolconfigControlPanel#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html#name Route53RecoverycontrolconfigControlPanel#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html aws_route53recoverycontrolconfig_control_panel}
*/
export declare class Route53RecoverycontrolconfigControlPanel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_control_panel.html aws_route53recoverycontrolconfig_control_panel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigControlPanelConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigControlPanelConfig);
    get arn(): string;
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string;
    get defaultControlPanel(): any;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get routingControlCount(): number;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53recoverycontrolconfig-control-panel.d.ts.map