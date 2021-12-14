import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface DataAwsRoute53ZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#name DataAwsRoute53Zone#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#private_zone DataAwsRoute53Zone#private_zone}
    */
    readonly privateZone?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#resource_record_set_count DataAwsRoute53Zone#resource_record_set_count}
    */
    readonly resourceRecordSetCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#tags DataAwsRoute53Zone#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#vpc_id DataAwsRoute53Zone#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html#zone_id DataAwsRoute53Zone#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone}
*/
export declare class DataAwsRoute53Zone extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_zone.html aws_route53_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ZoneConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ZoneConfig);
    get arn(): string;
    get callerReference(): string;
    get comment(): string;
    get id(): string;
    get linkedServiceDescription(): string;
    get linkedServicePrincipal(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get nameServers(): string[];
    private _privateZone?;
    get privateZone(): boolean | cdktf.IResolvable;
    set privateZone(value: boolean | cdktf.IResolvable);
    resetPrivateZone(): void;
    get privateZoneInput(): boolean | cdktf.IResolvable;
    private _resourceRecordSetCount?;
    get resourceRecordSetCount(): number;
    set resourceRecordSetCount(value: number);
    resetResourceRecordSetCount(): void;
    get resourceRecordSetCountInput(): number;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-route53-zone.d.ts.map