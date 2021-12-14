import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcIpamPoolCidrAllocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation.html#cidr VpcIpamPoolCidrAllocation#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation.html#description VpcIpamPoolCidrAllocation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation.html#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}
    */
    readonly ipamPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation.html#netmask_length VpcIpamPoolCidrAllocation#netmask_length}
    */
    readonly netmaskLength?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation.html aws_vpc_ipam_pool_cidr_allocation}
*/
export declare class VpcIpamPoolCidrAllocation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr_allocation.html aws_vpc_ipam_pool_cidr_allocation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPoolCidrAllocationConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamPoolCidrAllocationConfig);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    resetCidr(): void;
    get cidrInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get ipamPoolAllocationId(): string;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    get ipamPoolIdInput(): string;
    private _netmaskLength?;
    get netmaskLength(): number;
    set netmaskLength(value: number);
    resetNetmaskLength(): void;
    get netmaskLengthInput(): number;
    get resourceId(): string;
    get resourceOwner(): string;
    get resourceType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-ipam-pool-cidr-allocation.d.ts.map