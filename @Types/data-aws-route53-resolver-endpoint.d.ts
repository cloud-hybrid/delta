import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface DataAwsRoute53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#filter DataAwsRoute53ResolverEndpoint#filter}
    */
    readonly filter?: DataAwsRoute53ResolverEndpointFilter[];
}
export interface DataAwsRoute53ResolverEndpointFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#name DataAwsRoute53ResolverEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html#values DataAwsRoute53ResolverEndpoint#values}
    */
    readonly values: string[];
}
export declare function dataAwsRoute53ResolverEndpointFilterToTerraform(struct?: DataAwsRoute53ResolverEndpointFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint}
*/
export declare class DataAwsRoute53ResolverEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint.html aws_route53_resolver_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverEndpointConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ResolverEndpointConfig);
    get arn(): string;
    get direction(): string;
    get id(): string;
    get ipAddresses(): string[];
    get name(): string;
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string;
    get status(): string;
    get vpcId(): string;
    private _filter?;
    get filter(): DataAwsRoute53ResolverEndpointFilter[];
    set filter(value: DataAwsRoute53ResolverEndpointFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRoute53ResolverEndpointFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-route53-resolver-endpoint.d.ts.map