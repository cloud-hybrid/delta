import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Prometheus
*/
export interface PrometheusRuleGroupNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html#data PrometheusRuleGroupNamespace#data}
    */
    readonly data: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html#name PrometheusRuleGroupNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html#workspace_id PrometheusRuleGroupNamespace#workspace_id}
    */
    readonly workspaceId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html aws_prometheus_rule_group_namespace}
*/
export declare class PrometheusRuleGroupNamespace extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace.html aws_prometheus_rule_group_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusRuleGroupNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: PrometheusRuleGroupNamespaceConfig);
    private _data?;
    get data(): string;
    set data(value: string);
    get dataInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=prometheus-rule-group-namespace.d.ts.map