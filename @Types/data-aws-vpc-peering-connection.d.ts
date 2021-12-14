import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#cidr_block DataAwsVpcPeeringConnection#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#owner_id DataAwsVpcPeeringConnection#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}
    */
    readonly peerCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}
    */
    readonly peerOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_region DataAwsVpcPeeringConnection#peer_region}
    */
    readonly peerRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}
    */
    readonly peerVpcId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#region DataAwsVpcPeeringConnection#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#status DataAwsVpcPeeringConnection#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#tags DataAwsVpcPeeringConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#vpc_id DataAwsVpcPeeringConnection#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#filter DataAwsVpcPeeringConnection#filter}
    */
    readonly filter?: DataAwsVpcPeeringConnectionFilter[];
}
export declare class DataAwsVpcPeeringConnectionCidrBlockSet extends cdktf.ComplexComputedList {
    get cidrBlock(): string;
}
export declare class DataAwsVpcPeeringConnectionPeerCidrBlockSet extends cdktf.ComplexComputedList {
    get cidrBlock(): string;
}
export interface DataAwsVpcPeeringConnectionFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#name DataAwsVpcPeeringConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html#values DataAwsVpcPeeringConnection#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcPeeringConnectionFilterToTerraform(struct?: DataAwsVpcPeeringConnectionFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection}
*/
export declare class DataAwsVpcPeeringConnection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connection.html aws_vpc_peering_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcPeeringConnectionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcPeeringConnectionConfig);
    accepter(key: string): boolean;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string;
    cidrBlockSet(index: string): DataAwsVpcPeeringConnectionCidrBlockSet;
    get id(): string;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string;
    private _peerCidrBlock?;
    get peerCidrBlock(): string;
    set peerCidrBlock(value: string);
    resetPeerCidrBlock(): void;
    get peerCidrBlockInput(): string;
    peerCidrBlockSet(index: string): DataAwsVpcPeeringConnectionPeerCidrBlockSet;
    private _peerOwnerId?;
    get peerOwnerId(): string;
    set peerOwnerId(value: string);
    resetPeerOwnerId(): void;
    get peerOwnerIdInput(): string;
    private _peerRegion?;
    get peerRegion(): string;
    set peerRegion(value: string);
    resetPeerRegion(): void;
    get peerRegionInput(): string;
    private _peerVpcId?;
    get peerVpcId(): string;
    set peerVpcId(value: string);
    resetPeerVpcId(): void;
    get peerVpcIdInput(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    requester(key: string): boolean;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
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
    private _filter?;
    get filter(): DataAwsVpcPeeringConnectionFilter[];
    set filter(value: DataAwsVpcPeeringConnectionFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcPeeringConnectionFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-vpc-peering-connection.d.ts.map