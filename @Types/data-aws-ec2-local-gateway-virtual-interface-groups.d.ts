import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#tags DataAwsEc2LocalGatewayVirtualInterfaceGroups#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#filter DataAwsEc2LocalGatewayVirtualInterfaceGroups#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[];
}
export interface DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#name DataAwsEc2LocalGatewayVirtualInterfaceGroups#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html#values DataAwsEc2LocalGatewayVirtualInterfaceGroups#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2LocalGatewayVirtualInterfaceGroupsFilterToTerraform(struct?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html aws_ec2_local_gateway_virtual_interface_groups}
*/
export declare class DataAwsEc2LocalGatewayVirtualInterfaceGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_local_gateway_virtual_interface_groups.html aws_ec2_local_gateway_virtual_interface_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayVirtualInterfaceGroupsConfig);
    get id(): string;
    get ids(): string[];
    get localGatewayVirtualInterfaceIds(): string[];
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
    get filter(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[];
    set filter(value: DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2LocalGatewayVirtualInterfaceGroupsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-local-gateway-virtual-interface-groups.d.ts.map