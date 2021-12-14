import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface EipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#address Eip#address}
    */
    readonly address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#associate_with_private_ip Eip#associate_with_private_ip}
    */
    readonly associateWithPrivateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#customer_owned_ipv4_pool Eip#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#instance Eip#instance}
    */
    readonly instance?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#network_border_group Eip#network_border_group}
    */
    readonly networkBorderGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#network_interface Eip#network_interface}
    */
    readonly networkInterface?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#public_ipv4_pool Eip#public_ipv4_pool}
    */
    readonly publicIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#tags Eip#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#tags_all Eip#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#vpc Eip#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#timeouts Eip#timeouts}
    */
    readonly timeouts?: EipTimeouts;
}
export interface EipTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#delete Eip#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#read Eip#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eip.html#update Eip#update}
    */
    readonly update?: string;
}
export declare function eipTimeoutsToTerraform(struct?: EipTimeoutsOutputReference | EipTimeouts): any;
export declare class EipTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EipTimeouts | undefined;
    set internalValue(value: EipTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eip.html aws_eip}
*/
export declare class Eip extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eip.html aws_eip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EipConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EipConfig);
    private _address?;
    get address(): string;
    set address(value: string);
    resetAddress(): void;
    get addressInput(): string;
    get allocationId(): string;
    private _associateWithPrivateIp?;
    get associateWithPrivateIp(): string;
    set associateWithPrivateIp(value: string);
    resetAssociateWithPrivateIp(): void;
    get associateWithPrivateIpInput(): string;
    get associationId(): string;
    get carrierIp(): string;
    get customerOwnedIp(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string;
    get domain(): string;
    get id(): string;
    private _instance?;
    get instance(): string;
    set instance(value: string);
    resetInstance(): void;
    get instanceInput(): string;
    private _networkBorderGroup?;
    get networkBorderGroup(): string;
    set networkBorderGroup(value: string);
    resetNetworkBorderGroup(): void;
    get networkBorderGroupInput(): string;
    private _networkInterface?;
    get networkInterface(): string;
    set networkInterface(value: string);
    resetNetworkInterface(): void;
    get networkInterfaceInput(): string;
    get privateDns(): string;
    get privateIp(): string;
    get publicDns(): string;
    get publicIp(): string;
    private _publicIpv4Pool?;
    get publicIpv4Pool(): string;
    set publicIpv4Pool(value: string);
    resetPublicIpv4Pool(): void;
    get publicIpv4PoolInput(): string;
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
    private _vpc?;
    get vpc(): boolean | cdktf.IResolvable;
    set vpc(value: boolean | cdktf.IResolvable);
    resetVpc(): void;
    get vpcInput(): boolean | cdktf.IResolvable;
    private _timeouts;
    get timeouts(): EipTimeoutsOutputReference;
    putTimeouts(value: EipTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EipTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=eip.d.ts.map