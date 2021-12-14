import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Discovery
*/
export interface ServiceDiscoveryInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#attributes ServiceDiscoveryInstance#attributes}
    */
    readonly attributes: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#instance_id ServiceDiscoveryInstance#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#service_id ServiceDiscoveryInstance#service_id}
    */
    readonly serviceId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance}
*/
export declare class ServiceDiscoveryInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryInstanceConfig
    */
    constructor(scope: Construct, id: string, config: ServiceDiscoveryInstanceConfig);
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set attributes(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get attributesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string;
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    get serviceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=service-discovery-instance.d.ts.map