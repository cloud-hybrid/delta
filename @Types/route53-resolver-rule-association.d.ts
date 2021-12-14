import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53ResolverRuleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#name Route53ResolverRuleAssociation#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#resolver_rule_id Route53ResolverRuleAssociation#resolver_rule_id}
    */
    readonly resolverRuleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#vpc_id Route53ResolverRuleAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#timeouts Route53ResolverRuleAssociation#timeouts}
    */
    readonly timeouts?: Route53ResolverRuleAssociationTimeouts;
}
export interface Route53ResolverRuleAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#create Route53ResolverRuleAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html#delete Route53ResolverRuleAssociation#delete}
    */
    readonly delete?: string;
}
export declare function route53ResolverRuleAssociationTimeoutsToTerraform(struct?: Route53ResolverRuleAssociationTimeoutsOutputReference | Route53ResolverRuleAssociationTimeouts): any;
export declare class Route53ResolverRuleAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53ResolverRuleAssociationTimeouts | undefined;
    set internalValue(value: Route53ResolverRuleAssociationTimeouts | undefined);
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association}
*/
export declare class Route53ResolverRuleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_rule_association.html aws_route53_resolver_rule_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverRuleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverRuleAssociationConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _resolverRuleId?;
    get resolverRuleId(): string;
    set resolverRuleId(value: string);
    get resolverRuleIdInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts;
    get timeouts(): Route53ResolverRuleAssociationTimeoutsOutputReference;
    putTimeouts(value: Route53ResolverRuleAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Route53ResolverRuleAssociationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-resolver-rule-association.d.ts.map