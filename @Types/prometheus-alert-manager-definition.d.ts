import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Prometheus
*/
export interface PrometheusAlertManagerDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html#definition PrometheusAlertManagerDefinition#definition}
    */
    readonly definition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html#workspace_id PrometheusAlertManagerDefinition#workspace_id}
    */
    readonly workspaceId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html aws_prometheus_alert_manager_definition}
*/
export declare class PrometheusAlertManagerDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition.html aws_prometheus_alert_manager_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusAlertManagerDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: PrometheusAlertManagerDefinitionConfig);
    private _definition?;
    get definition(): string;
    set definition(value: string);
    get definitionInput(): string;
    get id(): string;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=prometheus-alert-manager-definition.d.ts.map