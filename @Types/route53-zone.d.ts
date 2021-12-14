import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53ZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#comment Route53Zone#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#delegation_set_id Route53Zone#delegation_set_id}
    */
    readonly delegationSetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#force_destroy Route53Zone#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#name Route53Zone#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#tags Route53Zone#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#tags_all Route53Zone#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * vpc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc Route53Zone#vpc}
    */
    readonly vpc?: Route53ZoneVpc[];
}
export interface Route53ZoneVpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc_id Route53Zone#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc_region Route53Zone#vpc_region}
    */
    readonly vpcRegion?: string;
}
export declare function route53ZoneVpcToTerraform(struct?: Route53ZoneVpc): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone}
*/
export declare class Route53Zone extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ZoneConfig
    */
    constructor(scope: Construct, id: string, config: Route53ZoneConfig);
    get arn(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    private _delegationSetId?;
    get delegationSetId(): string;
    set delegationSetId(value: string);
    resetDelegationSetId(): void;
    get delegationSetIdInput(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nameServers(): string[];
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
    get zoneId(): string;
    private _vpc?;
    get vpc(): Route53ZoneVpc[];
    set vpc(value: Route53ZoneVpc[]);
    resetVpc(): void;
    get vpcInput(): Route53ZoneVpc[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-zone.d.ts.map