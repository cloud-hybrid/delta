import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Email Service
*/
export interface SesDomainIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html#domain SesDomainIdentity#domain}
    */
    readonly domain: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html aws_ses_domain_identity}
*/
export declare class SesDomainIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html aws_ses_domain_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainIdentityConfig
    */
    constructor(scope: Construct, id: string, config: SesDomainIdentityConfig);
    get arn(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get id(): string;
    get verificationToken(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ses-domain-identity.d.ts.map