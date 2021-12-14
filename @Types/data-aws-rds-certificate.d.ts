import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsRdsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html#latest_valid_till DataAwsRdsCertificate#latest_valid_till}
    */
    readonly latestValidTill?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate}
*/
export declare class DataAwsRdsCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRdsCertificateConfig);
    get arn(): string;
    get certificateType(): string;
    get customerOverride(): any;
    get customerOverrideValidTill(): string;
    get id(): string;
    private _latestValidTill?;
    get latestValidTill(): boolean | cdktf.IResolvable;
    set latestValidTill(value: boolean | cdktf.IResolvable);
    resetLatestValidTill(): void;
    get latestValidTillInput(): boolean | cdktf.IResolvable;
    get thumbprint(): string;
    get validFrom(): string;
    get validTill(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-rds-certificate.d.ts.map