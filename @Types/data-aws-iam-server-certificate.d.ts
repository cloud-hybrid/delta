import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface DataAwsIamServerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#latest DataAwsIamServerCertificate#latest}
    */
    readonly latest?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#name DataAwsIamServerCertificate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#name_prefix DataAwsIamServerCertificate#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html#path_prefix DataAwsIamServerCertificate#path_prefix}
    */
    readonly pathPrefix?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html aws_iam_server_certificate}
*/
export declare class DataAwsIamServerCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_server_certificate.html aws_iam_server_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamServerCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsIamServerCertificateConfig);
    get arn(): string;
    get certificateBody(): string;
    get certificateChain(): string;
    get expirationDate(): string;
    get id(): string;
    private _latest?;
    get latest(): boolean | cdktf.IResolvable;
    set latest(value: boolean | cdktf.IResolvable);
    resetLatest(): void;
    get latestInput(): boolean | cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    get path(): string;
    private _pathPrefix?;
    get pathPrefix(): string;
    set pathPrefix(value: string);
    resetPathPrefix(): void;
    get pathPrefixInput(): string;
    get uploadDate(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iam-server-certificate.d.ts.map