import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53ResolverRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#domain_name Route53ResolverRule#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#name Route53ResolverRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#resolver_endpoint_id Route53ResolverRule#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#rule_type Route53ResolverRule#rule_type}
    */
    readonly ruleType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags Route53ResolverRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#tags_all Route53ResolverRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * target_ip block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#target_ip Route53ResolverRule#target_ip}
    */
    readonly targetIp?: Route53ResolverRuleTargetIp[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#timeouts Route53ResolverRule#timeouts}
    */
    readonly timeouts?: Route53ResolverRuleTimeouts;
}
export interface Route53ResolverRuleTargetIp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#ip Route53ResolverRule#ip}
    */
    readonly ip: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#port Route53ResolverRule#port}
    */
    readonly port?: number;
}
export declare function route53ResolverRuleTargetIpToTerraform(struct?: Route53ResolverRuleTargetIp): any;
export interface Route53ResolverRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#create Route53ResolverRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#delete Route53ResolverRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html#update Route53ResolverRule#update}
    */
    readonly update?: string;
}
export declare function route53ResolverRuleTimeoutsToTerraform(struct?: Route53ResolverRuleTimeoutsOutputReference | Route53ResolverRuleTimeouts): any;
export declare class Route53ResolverRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53ResolverRuleTimeouts | undefined;
    set internalValue(value: Route53ResolverRuleTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule}
*/
export declare class Route53ResolverRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule.html aws_route53_resolver_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverRuleConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverRuleConfig);
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get ownerId(): string;
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string;
    private _ruleType?;
    get ruleType(): string;
    set ruleType(value: string);
    get ruleTypeInput(): string;
    get shareStatus(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _targetIp?;
    get targetIp(): Route53ResolverRuleTargetIp[];
    set targetIp(value: Route53ResolverRuleTargetIp[]);
    resetTargetIp(): void;
    get targetIpInput(): Route53ResolverRuleTargetIp[];
    private _timeouts;
    get timeouts(): Route53ResolverRuleTimeoutsOutputReference;
    putTimeouts(value: Route53ResolverRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Route53ResolverRuleTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-resolver-rule.d.ts.map