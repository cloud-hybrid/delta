import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Amplify
*/
export interface AmplifyDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#app_id AmplifyDomainAssociation#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#domain_name AmplifyDomainAssociation#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#wait_for_verification AmplifyDomainAssociation#wait_for_verification}
    */
    readonly waitForVerification?: boolean | cdktf.IResolvable;
    /**
    * sub_domain block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#sub_domain AmplifyDomainAssociation#sub_domain}
    */
    readonly subDomain: AmplifyDomainAssociationSubDomain[];
}
export interface AmplifyDomainAssociationSubDomain {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#branch_name AmplifyDomainAssociation#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#prefix AmplifyDomainAssociation#prefix}
    */
    readonly prefix: string;
}
export declare function amplifyDomainAssociationSubDomainToTerraform(struct?: AmplifyDomainAssociationSubDomain): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association}
*/
export declare class AmplifyDomainAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyDomainAssociationConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get arn(): string;
    get certificateVerificationDnsRecord(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _waitForVerification?;
    get waitForVerification(): boolean | cdktf.IResolvable;
    set waitForVerification(value: boolean | cdktf.IResolvable);
    resetWaitForVerification(): void;
    get waitForVerificationInput(): boolean | cdktf.IResolvable;
    private _subDomain?;
    get subDomain(): AmplifyDomainAssociationSubDomain[];
    set subDomain(value: AmplifyDomainAssociationSubDomain[]);
    get subDomainInput(): AmplifyDomainAssociationSubDomain[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=amplify-domain-association.d.ts.map