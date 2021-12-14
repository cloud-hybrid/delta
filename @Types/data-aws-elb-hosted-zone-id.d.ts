import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsElbHostedZoneIdConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html#region DataAwsElbHostedZoneId#region}
    */
    readonly region?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html aws_elb_hosted_zone_id}
*/
export declare class DataAwsElbHostedZoneId extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html aws_elb_hosted_zone_id} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbHostedZoneIdConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsElbHostedZoneIdConfig);
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
//# sourceMappingURL=data-aws-elb-hosted-zone-id.d.ts.map