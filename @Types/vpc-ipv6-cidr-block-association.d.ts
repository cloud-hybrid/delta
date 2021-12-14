import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcIpv6CidrBlockAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html#timeouts VpcIpv6CidrBlockAssociation#timeouts}
    */
    readonly timeouts?: VpcIpv6CidrBlockAssociationTimeouts;
}
export interface VpcIpv6CidrBlockAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html#create VpcIpv6CidrBlockAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html#delete VpcIpv6CidrBlockAssociation#delete}
    */
    readonly delete?: string;
}
export declare function vpcIpv6CidrBlockAssociationTimeoutsToTerraform(struct?: VpcIpv6CidrBlockAssociationTimeoutsOutputReference | VpcIpv6CidrBlockAssociationTimeouts): any;
export declare class VpcIpv6CidrBlockAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcIpv6CidrBlockAssociationTimeouts | undefined;
    set internalValue(value: VpcIpv6CidrBlockAssociationTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html aws_vpc_ipv6_cidr_block_association}
*/
export declare class VpcIpv6CidrBlockAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv6_cidr_block_association.html aws_vpc_ipv6_cidr_block_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpv6CidrBlockAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpv6CidrBlockAssociationConfig);
    get id(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string;
    private _ipv6IpamPoolId?;
    get ipv6IpamPoolId(): string;
    set ipv6IpamPoolId(value: string);
    get ipv6IpamPoolIdInput(): string;
    private _ipv6NetmaskLength?;
    get ipv6NetmaskLength(): number;
    set ipv6NetmaskLength(value: number);
    resetIpv6NetmaskLength(): void;
    get ipv6NetmaskLengthInput(): number;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts;
    get timeouts(): VpcIpv6CidrBlockAssociationTimeoutsOutputReference;
    putTimeouts(value: VpcIpv6CidrBlockAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): VpcIpv6CidrBlockAssociationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-ipv6-cidr-block-association.d.ts.map