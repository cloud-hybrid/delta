import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Runner
*/
export interface ApprunnerCustomDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#domain_name ApprunnerCustomDomainAssociation#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}
    */
    readonly enableWwwSubdomain?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#service_arn ApprunnerCustomDomainAssociation#service_arn}
    */
    readonly serviceArn: string;
}
export declare class ApprunnerCustomDomainAssociationCertificateValidationRecords extends cdktf.ComplexComputedList {
    get name(): string;
    get status(): string;
    get type(): string;
    get value(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association}
*/
export declare class ApprunnerCustomDomainAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerCustomDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerCustomDomainAssociationConfig);
    certificateValidationRecords(index: string): ApprunnerCustomDomainAssociationCertificateValidationRecords;
    get dnsTarget(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _enableWwwSubdomain?;
    get enableWwwSubdomain(): boolean | cdktf.IResolvable;
    set enableWwwSubdomain(value: boolean | cdktf.IResolvable);
    resetEnableWwwSubdomain(): void;
    get enableWwwSubdomainInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _serviceArn?;
    get serviceArn(): string;
    set serviceArn(value: string);
    get serviceArnInput(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=apprunner-custom-domain-association.d.ts.map