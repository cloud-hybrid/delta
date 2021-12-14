import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Outposts
*/
export interface DataAwsOutpostsOutpostsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#availability_zone DataAwsOutpostsOutposts#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#owner_id DataAwsOutpostsOutposts#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#site_id DataAwsOutpostsOutposts#site_id}
    */
    readonly siteId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts}
*/
export declare class DataAwsOutpostsOutposts extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOutpostsOutpostsConfig);
    get arns(): string[];
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string;
    get id(): string;
    get ids(): string[];
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    resetSiteId(): void;
    get siteIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-outposts-outposts.d.ts.map