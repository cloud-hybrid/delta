import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsNetworkAclsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#tags DataAwsNetworkAcls#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#vpc_id DataAwsNetworkAcls#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#filter DataAwsNetworkAcls#filter}
    */
    readonly filter?: DataAwsNetworkAclsFilter[];
}
export interface DataAwsNetworkAclsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#name DataAwsNetworkAcls#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html#values DataAwsNetworkAcls#values}
    */
    readonly values: string[];
}
export declare function dataAwsNetworkAclsFilterToTerraform(struct?: DataAwsNetworkAclsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls}
*/
export declare class DataAwsNetworkAcls extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/network_acls.html aws_network_acls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkAclsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNetworkAclsConfig);
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _filter?;
    get filter(): DataAwsNetworkAclsFilter[];
    set filter(value: DataAwsNetworkAclsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsNetworkAclsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-network-acls.d.ts.map