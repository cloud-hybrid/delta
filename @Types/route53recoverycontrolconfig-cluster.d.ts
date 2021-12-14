import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoverycontrolconfigClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html#name Route53RecoverycontrolconfigCluster#name}
    */
    readonly name: string;
}
export declare class Route53RecoverycontrolconfigClusterClusterEndpoints extends cdktf.ComplexComputedList {
    get endpoint(): string;
    get region(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html aws_route53recoverycontrolconfig_cluster}
*/
export declare class Route53RecoverycontrolconfigCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoverycontrolconfig_cluster.html aws_route53recoverycontrolconfig_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigClusterConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigClusterConfig);
    get arn(): string;
    clusterEndpoints(index: string): Route53RecoverycontrolconfigClusterClusterEndpoints;
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
//# sourceMappingURL=route53recoverycontrolconfig-cluster.d.ts.map