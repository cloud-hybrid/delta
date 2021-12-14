import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#acceptance_required VpcEndpointService#acceptance_required}
    */
    readonly acceptanceRequired: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#allowed_principals VpcEndpointService#allowed_principals}
    */
    readonly allowedPrincipals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}
    */
    readonly gatewayLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}
    */
    readonly networkLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#private_dns_name VpcEndpointService#private_dns_name}
    */
    readonly privateDnsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#tags VpcEndpointService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#tags_all VpcEndpointService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class VpcEndpointServicePrivateDnsNameConfiguration extends cdktf.ComplexComputedList {
    get name(): string;
    get state(): string;
    get type(): string;
    get value(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service}
*/
export declare class VpcEndpointService extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointServiceConfig);
    private _acceptanceRequired?;
    get acceptanceRequired(): boolean | cdktf.IResolvable;
    set acceptanceRequired(value: boolean | cdktf.IResolvable);
    get acceptanceRequiredInput(): boolean | cdktf.IResolvable;
    private _allowedPrincipals?;
    get allowedPrincipals(): string[];
    set allowedPrincipals(value: string[]);
    resetAllowedPrincipals(): void;
    get allowedPrincipalsInput(): string[];
    get arn(): string;
    get availabilityZones(): string[];
    get baseEndpointDnsNames(): string[];
    private _gatewayLoadBalancerArns?;
    get gatewayLoadBalancerArns(): string[];
    set gatewayLoadBalancerArns(value: string[]);
    resetGatewayLoadBalancerArns(): void;
    get gatewayLoadBalancerArnsInput(): string[];
    get id(): string;
    get managesVpcEndpoints(): any;
    private _networkLoadBalancerArns?;
    get networkLoadBalancerArns(): string[];
    set networkLoadBalancerArns(value: string[]);
    resetNetworkLoadBalancerArns(): void;
    get networkLoadBalancerArnsInput(): string[];
    private _privateDnsName?;
    get privateDnsName(): string;
    set privateDnsName(value: string);
    resetPrivateDnsName(): void;
    get privateDnsNameInput(): string;
    privateDnsNameConfiguration(index: string): VpcEndpointServicePrivateDnsNameConfiguration;
    get serviceName(): string;
    get serviceType(): string;
    get state(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-endpoint-service.d.ts.map