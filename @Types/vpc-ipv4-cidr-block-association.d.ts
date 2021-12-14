import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcIpv4CidrBlockAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#cidr_block VpcIpv4CidrBlockAssociation#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#ipv4_ipam_pool_id VpcIpv4CidrBlockAssociation#ipv4_ipam_pool_id}
    */
    readonly ipv4IpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#ipv4_netmask_length VpcIpv4CidrBlockAssociation#ipv4_netmask_length}
    */
    readonly ipv4NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#vpc_id VpcIpv4CidrBlockAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#timeouts VpcIpv4CidrBlockAssociation#timeouts}
    */
    readonly timeouts?: VpcIpv4CidrBlockAssociationTimeouts;
}
export interface VpcIpv4CidrBlockAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#create VpcIpv4CidrBlockAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html#delete VpcIpv4CidrBlockAssociation#delete}
    */
    readonly delete?: string;
}
export declare function vpcIpv4CidrBlockAssociationTimeoutsToTerraform(struct?: VpcIpv4CidrBlockAssociationTimeoutsOutputReference | VpcIpv4CidrBlockAssociationTimeouts): any;
export declare class VpcIpv4CidrBlockAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcIpv4CidrBlockAssociationTimeouts | undefined;
    set internalValue(value: VpcIpv4CidrBlockAssociationTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association}
*/
export declare class VpcIpv4CidrBlockAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html aws_vpc_ipv4_cidr_block_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpv4CidrBlockAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpv4CidrBlockAssociationConfig);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string;
    get id(): string;
    private _ipv4IpamPoolId?;
    get ipv4IpamPoolId(): string;
    set ipv4IpamPoolId(value: string);
    resetIpv4IpamPoolId(): void;
    get ipv4IpamPoolIdInput(): string;
    private _ipv4NetmaskLength?;
    get ipv4NetmaskLength(): number;
    set ipv4NetmaskLength(value: number);
    resetIpv4NetmaskLength(): void;
    get ipv4NetmaskLengthInput(): number;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts;
    get timeouts(): VpcIpv4CidrBlockAssociationTimeoutsOutputReference;
    putTimeouts(value: VpcIpv4CidrBlockAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): VpcIpv4CidrBlockAssociationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-ipv4-cidr-block-association.d.ts.map