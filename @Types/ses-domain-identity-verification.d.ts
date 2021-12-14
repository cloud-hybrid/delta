import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Email Service
*/
export interface SesDomainIdentityVerificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#domain SesDomainIdentityVerification#domain}
    */
    readonly domain: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#timeouts SesDomainIdentityVerification#timeouts}
    */
    readonly timeouts?: SesDomainIdentityVerificationTimeouts;
}
export interface SesDomainIdentityVerificationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#create SesDomainIdentityVerification#create}
    */
    readonly create?: string;
}
export declare function sesDomainIdentityVerificationTimeoutsToTerraform(struct?: SesDomainIdentityVerificationTimeoutsOutputReference | SesDomainIdentityVerificationTimeouts): any;
export declare class SesDomainIdentityVerificationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SesDomainIdentityVerificationTimeouts | undefined;
    set internalValue(value: SesDomainIdentityVerificationTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html aws_ses_domain_identity_verification}
*/
export declare class SesDomainIdentityVerification extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html aws_ses_domain_identity_verification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesDomainIdentityVerificationConfig
    */
    constructor(scope: Construct, id: string, config: SesDomainIdentityVerificationConfig);
    get arn(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get id(): string;
    private _timeouts;
    get timeouts(): SesDomainIdentityVerificationTimeoutsOutputReference;
    putTimeouts(value: SesDomainIdentityVerificationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): SesDomainIdentityVerificationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ses-domain-identity-verification.d.ts.map