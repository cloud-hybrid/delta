import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcEndpointSubnetAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#subnet_id VpcEndpointSubnetAssociation#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#vpc_endpoint_id VpcEndpointSubnetAssociation#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#timeouts VpcEndpointSubnetAssociation#timeouts}
    */
    readonly timeouts?: VpcEndpointSubnetAssociationTimeouts;
}
export interface VpcEndpointSubnetAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#create VpcEndpointSubnetAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html#delete VpcEndpointSubnetAssociation#delete}
    */
    readonly delete?: string;
}
export declare function vpcEndpointSubnetAssociationTimeoutsToTerraform(struct?: VpcEndpointSubnetAssociationTimeoutsOutputReference | VpcEndpointSubnetAssociationTimeouts): any;
export declare class VpcEndpointSubnetAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): VpcEndpointSubnetAssociationTimeouts | undefined;
    set internalValue(value: VpcEndpointSubnetAssociationTimeouts | undefined);
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association}
*/
export declare class VpcEndpointSubnetAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_subnet_association.html aws_vpc_endpoint_subnet_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointSubnetAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointSubnetAssociationConfig);
    get id(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string;
    private _timeouts;
    get timeouts(): VpcEndpointSubnetAssociationTimeoutsOutputReference;
    putTimeouts(value: VpcEndpointSubnetAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): VpcEndpointSubnetAssociationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-endpoint-subnet-association.d.ts.map