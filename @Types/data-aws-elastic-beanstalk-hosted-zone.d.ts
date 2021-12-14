import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Beanstalk
*/
export interface DataAwsElasticBeanstalkHostedZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html#region DataAwsElasticBeanstalkHostedZone#region}
    */
    readonly region?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html aws_elastic_beanstalk_hosted_zone}
*/
export declare class DataAwsElasticBeanstalkHostedZone extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html aws_elastic_beanstalk_hosted_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkHostedZoneConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsElasticBeanstalkHostedZoneConfig);
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
//# sourceMappingURL=data-aws-elastic-beanstalk-hosted-zone.d.ts.map