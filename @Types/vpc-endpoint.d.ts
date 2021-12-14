import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#auto_accept VpcEndpoint#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#policy VpcEndpoint#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#private_dns_enabled VpcEndpoint#private_dns_enabled}
    */
    readonly privateDnsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#route_table_ids VpcEndpoint#route_table_ids}
    */
    readonly routeTableIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#security_group_ids VpcEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#service_name VpcEndpoint#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#subnet_ids VpcEndpoint#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags VpcEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags_all VpcEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}
    */
    readonly vpcEndpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_id VpcEndpoint#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#timeouts VpcEndpoint#timeouts}
    */
    readonly timeouts?: VpcEndpointTimeouts;
}
export declare class VpcEndpointDnsEntry extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get hostedZoneId(): string;
}
export interface VpcEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#create VpcEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#delete VpcEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#update VpcEndpoint#update}
    */
    readonly update?: string;
}
export declare function vpcEndpointTimeoutsToTerraform(struct?: VpcEndpointTimeoutsOutputReference | VpcEndpointTimeouts): any;
export declare class VpcEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcEndpointTimeouts | undefined;
    set internalValue(value: VpcEndpointTimeouts | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint}
*/
export declare class VpcEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointConfig);
    get arn(): string;
    private _autoAccept?;
    get autoAccept(): boolean | cdktf.IResolvable;
    set autoAccept(value: boolean | cdktf.IResolvable);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | cdktf.IResolvable;
    get cidrBlocks(): string[];
    dnsEntry(index: string): VpcEndpointDnsEntry;
    get id(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    get prefixListId(): string;
    private _privateDnsEnabled?;
    get privateDnsEnabled(): boolean | cdktf.IResolvable;
    set privateDnsEnabled(value: boolean | cdktf.IResolvable);
    resetPrivateDnsEnabled(): void;
    get privateDnsEnabledInput(): boolean | cdktf.IResolvable;
    get requesterManaged(): any;
    private _routeTableIds?;
    get routeTableIds(): string[];
    set routeTableIds(value: string[]);
    resetRouteTableIds(): void;
    get routeTableIdsInput(): string[];
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
    get state(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[];
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
    private _vpcEndpointType?;
    get vpcEndpointType(): string;
    set vpcEndpointType(value: string);
    resetVpcEndpointType(): void;
    get vpcEndpointTypeInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts;
    get timeouts(): VpcEndpointTimeoutsOutputReference;
    putTimeouts(value: VpcEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): VpcEndpointTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-endpoint.d.ts.map