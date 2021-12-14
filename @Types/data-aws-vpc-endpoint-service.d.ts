import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsVpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service DataAwsVpcEndpointService#service}
    */
    readonly service?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service_name DataAwsVpcEndpointService#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#service_type DataAwsVpcEndpointService#service_type}
    */
    readonly serviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#tags DataAwsVpcEndpointService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#filter DataAwsVpcEndpointService#filter}
    */
    readonly filter?: DataAwsVpcEndpointServiceFilter[];
}
export interface DataAwsVpcEndpointServiceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#name DataAwsVpcEndpointService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html#values DataAwsVpcEndpointService#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcEndpointServiceFilterToTerraform(struct?: DataAwsVpcEndpointServiceFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service}
*/
export declare class DataAwsVpcEndpointService extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_endpoint_service.html aws_vpc_endpoint_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointServiceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcEndpointServiceConfig);
    get acceptanceRequired(): any;
    get arn(): string;
    get availabilityZones(): string[];
    get baseEndpointDnsNames(): string[];
    get id(): string;
    get managesVpcEndpoints(): any;
    get owner(): string;
    get privateDnsName(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    resetService(): void;
    get serviceInput(): string;
    get serviceId(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string;
    private _serviceType?;
    get serviceType(): string;
    set serviceType(value: string);
    resetServiceType(): void;
    get serviceTypeInput(): string;
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
    get vpcEndpointPolicySupported(): any;
    private _filter?;
    get filter(): DataAwsVpcEndpointServiceFilter[];
    set filter(value: DataAwsVpcEndpointServiceFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcEndpointServiceFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-vpc-endpoint-service.d.ts.map