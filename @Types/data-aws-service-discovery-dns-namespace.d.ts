import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Discovery
*/
export interface DataAwsServiceDiscoveryDnsNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html#name DataAwsServiceDiscoveryDnsNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html#type DataAwsServiceDiscoveryDnsNamespace#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html aws_service_discovery_dns_namespace}
*/
export declare class DataAwsServiceDiscoveryDnsNamespace extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html aws_service_discovery_dns_namespace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServiceDiscoveryDnsNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServiceDiscoveryDnsNamespaceConfig);
    get arn(): string;
    get description(): string;
    get hostedZone(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-service-discovery-dns-namespace.d.ts.map