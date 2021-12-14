import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudTrail
*/
export interface DataAwsCloudtrailServiceAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html#region DataAwsCloudtrailServiceAccount#region}
    */
    readonly region?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html aws_cloudtrail_service_account}
*/
export declare class DataAwsCloudtrailServiceAccount extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudtrail_service_account.html aws_cloudtrail_service_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudtrailServiceAccountConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudtrailServiceAccountConfig);
    get arn(): string;
    get id(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudtrail-service-account.d.ts.map