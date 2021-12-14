import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcIpamPoolCidrConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html#cidr VpcIpamPoolCidr#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html#ipam_pool_id VpcIpamPoolCidr#ipam_pool_id}
    */
    readonly ipamPoolId: string;
    /**
    * cidr_authorization_context block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html#cidr_authorization_context VpcIpamPoolCidr#cidr_authorization_context}
    */
    readonly cidrAuthorizationContext?: VpcIpamPoolCidrCidrAuthorizationContext;
}
export interface VpcIpamPoolCidrCidrAuthorizationContext {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html#message VpcIpamPoolCidr#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html#signature VpcIpamPoolCidr#signature}
    */
    readonly signature?: string;
}
export declare function vpcIpamPoolCidrCidrAuthorizationContextToTerraform(struct?: VpcIpamPoolCidrCidrAuthorizationContextOutputReference | VpcIpamPoolCidrCidrAuthorizationContext): any;
export declare class VpcIpamPoolCidrCidrAuthorizationContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcIpamPoolCidrCidrAuthorizationContext | undefined;
    set internalValue(value: VpcIpamPoolCidrCidrAuthorizationContext | undefined);
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string;
    private _signature?;
    get signature(): string;
    set signature(value: string);
    resetSignature(): void;
    get signatureInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html aws_vpc_ipam_pool_cidr}
*/
export declare class VpcIpamPoolCidr extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool_cidr.html aws_vpc_ipam_pool_cidr} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPoolCidrConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamPoolCidrConfig);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    resetCidr(): void;
    get cidrInput(): string;
    get id(): string;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    get ipamPoolIdInput(): string;
    private _cidrAuthorizationContext;
    get cidrAuthorizationContext(): VpcIpamPoolCidrCidrAuthorizationContextOutputReference;
    putCidrAuthorizationContext(value: VpcIpamPoolCidrCidrAuthorizationContext): void;
    resetCidrAuthorizationContext(): void;
    get cidrAuthorizationContextInput(): VpcIpamPoolCidrCidrAuthorizationContext;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-ipam-pool-cidr.d.ts.map