import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Database Migration Service
*/
export interface DmsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_id DmsCertificate#certificate_id}
    */
    readonly certificateId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_pem DmsCertificate#certificate_pem}
    */
    readonly certificatePem?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#certificate_wallet DmsCertificate#certificate_wallet}
    */
    readonly certificateWallet?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags DmsCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html#tags_all DmsCertificate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate}
*/
export declare class DmsCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_certificate.html aws_dms_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DmsCertificateConfig);
    get certificateArn(): string;
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    get certificateIdInput(): string;
    private _certificatePem?;
    get certificatePem(): string;
    set certificatePem(value: string);
    resetCertificatePem(): void;
    get certificatePemInput(): string;
    private _certificateWallet?;
    get certificateWallet(): string;
    set certificateWallet(value: string);
    resetCertificateWallet(): void;
    get certificateWalletInput(): string;
    get id(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dms-certificate.d.ts.map