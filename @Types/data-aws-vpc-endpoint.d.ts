import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsVpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#service_name DataAwsVpcEndpoint#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#state DataAwsVpcEndpoint#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#tags DataAwsVpcEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#vpc_id DataAwsVpcEndpoint#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#filter DataAwsVpcEndpoint#filter}
    */
    readonly filter?: DataAwsVpcEndpointFilter[];
}
export declare class DataAwsVpcEndpointDnsEntry extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get hostedZoneId(): string;
}
export interface DataAwsVpcEndpointFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#name DataAwsVpcEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html#values DataAwsVpcEndpoint#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcEndpointFilterToTerraform(struct?: DataAwsVpcEndpointFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint}
*/
export declare class DataAwsVpcEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint.html aws_vpc_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcEndpointConfig);
    get arn(): string;
    get cidrBlocks(): string[];
    dnsEntry(index: string): DataAwsVpcEndpointDnsEntry;
    get id(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    get policy(): string;
    get prefixListId(): string;
    get privateDnsEnabled(): any;
    get requesterManaged(): any;
    get routeTableIds(): string[];
    get securityGroupIds(): string[];
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    get subnetIds(): string[];
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
    get vpcEndpointType(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _filter?;
    get filter(): DataAwsVpcEndpointFilter[];
    set filter(value: DataAwsVpcEndpointFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcEndpointFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-vpc-endpoint.d.ts.map