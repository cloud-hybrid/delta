import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsNetworkInterfacesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#tags DataAwsNetworkInterfaces#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#filter DataAwsNetworkInterfaces#filter}
    */
    readonly filter?: DataAwsNetworkInterfacesFilter[];
}
export interface DataAwsNetworkInterfacesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#name DataAwsNetworkInterfaces#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html#values DataAwsNetworkInterfaces#values}
    */
    readonly values: string[];
}
export declare function dataAwsNetworkInterfacesFilterToTerraform(struct?: DataAwsNetworkInterfacesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces}
*/
export declare class DataAwsNetworkInterfaces extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_interfaces.html aws_network_interfaces} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkInterfacesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNetworkInterfacesConfig);
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
    get filter(): DataAwsNetworkInterfacesFilter[];
    set filter(value: DataAwsNetworkInterfacesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsNetworkInterfacesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-network-interfaces.d.ts.map