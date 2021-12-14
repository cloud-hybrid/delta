import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcIpamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#description VpcIpam#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#tags VpcIpam#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#tags_all VpcIpam#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * operating_regions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#operating_regions VpcIpam#operating_regions}
    */
    readonly operatingRegions: VpcIpamOperatingRegions[];
}
export interface VpcIpamOperatingRegions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html#region_name VpcIpam#region_name}
    */
    readonly regionName: string;
}
export declare function vpcIpamOperatingRegionsToTerraform(struct?: VpcIpamOperatingRegions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html aws_vpc_ipam}
*/
export declare class VpcIpam extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam.html aws_vpc_ipam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get privateDefaultScopeId(): string;
    get publicDefaultScopeId(): string;
    get scopeCount(): number;
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
    private _operatingRegions?;
    get operatingRegions(): VpcIpamOperatingRegions[];
    set operatingRegions(value: VpcIpamOperatingRegions[]);
    get operatingRegionsInput(): VpcIpamOperatingRegions[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-ipam.d.ts.map