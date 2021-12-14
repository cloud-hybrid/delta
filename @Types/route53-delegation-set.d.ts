import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53DelegationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html#reference_name Route53DelegationSet#reference_name}
    */
    readonly referenceName?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html aws_route53_delegation_set}
*/
export declare class Route53DelegationSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html aws_route53_delegation_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53DelegationSetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Route53DelegationSetConfig);
    get arn(): string;
    get id(): string;
    get nameServers(): string[];
    private _referenceName?;
    get referenceName(): string;
    set referenceName(value: string);
    resetReferenceName(): void;
    get referenceNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-delegation-set.d.ts.map