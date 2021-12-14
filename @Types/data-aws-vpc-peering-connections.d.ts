import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsVpcPeeringConnectionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#tags DataAwsVpcPeeringConnections#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#filter DataAwsVpcPeeringConnections#filter}
    */
    readonly filter?: DataAwsVpcPeeringConnectionsFilter[];
}
export interface DataAwsVpcPeeringConnectionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#name DataAwsVpcPeeringConnections#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#values DataAwsVpcPeeringConnections#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcPeeringConnectionsFilterToTerraform(struct?: DataAwsVpcPeeringConnectionsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections}
*/
export declare class DataAwsVpcPeeringConnections extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcPeeringConnectionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcPeeringConnectionsConfig);
    get id(): string;
    get ids(): string[];
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
    private _filter?;
    get filter(): DataAwsVpcPeeringConnectionsFilter[];
    set filter(value: DataAwsVpcPeeringConnectionsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcPeeringConnectionsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-vpc-peering-connections.d.ts.map