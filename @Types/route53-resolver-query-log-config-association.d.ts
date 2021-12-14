import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53ResolverQueryLogConfigAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html#resolver_query_log_config_id Route53ResolverQueryLogConfigAssociation#resolver_query_log_config_id}
    */
    readonly resolverQueryLogConfigId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html#resource_id Route53ResolverQueryLogConfigAssociation#resource_id}
    */
    readonly resourceId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html aws_route53_resolver_query_log_config_association}
*/
export declare class Route53ResolverQueryLogConfigAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config_association.html aws_route53_resolver_query_log_config_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverQueryLogConfigAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverQueryLogConfigAssociationConfig);
    get id(): string;
    private _resolverQueryLogConfigId?;
    get resolverQueryLogConfigId(): string;
    set resolverQueryLogConfigId(value: string);
    get resolverQueryLogConfigIdInput(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-resolver-query-log-config-association.d.ts.map