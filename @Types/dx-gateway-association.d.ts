import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#allowed_prefixes DxGatewayAssociation#allowed_prefixes}
    */
    readonly allowedPrefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_id DxGatewayAssociation#associated_gateway_id}
    */
    readonly associatedGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}
    */
    readonly associatedGatewayOwnerAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#dx_gateway_id DxGatewayAssociation#dx_gateway_id}
    */
    readonly dxGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#proposal_id DxGatewayAssociation#proposal_id}
    */
    readonly proposalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}
    */
    readonly vpnGatewayId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#timeouts DxGatewayAssociation#timeouts}
    */
    readonly timeouts?: DxGatewayAssociationTimeouts;
}
export interface DxGatewayAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#create DxGatewayAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#delete DxGatewayAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#update DxGatewayAssociation#update}
    */
    readonly update?: string;
}
export declare function dxGatewayAssociationTimeoutsToTerraform(struct?: DxGatewayAssociationTimeoutsOutputReference | DxGatewayAssociationTimeouts): any;
export declare class DxGatewayAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DxGatewayAssociationTimeouts | undefined;
    set internalValue(value: DxGatewayAssociationTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association}
*/
export declare class DxGatewayAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DxGatewayAssociationConfig);
    private _allowedPrefixes?;
    get allowedPrefixes(): string[];
    set allowedPrefixes(value: string[]);
    resetAllowedPrefixes(): void;
    get allowedPrefixesInput(): string[];
    private _associatedGatewayId?;
    get associatedGatewayId(): string;
    set associatedGatewayId(value: string);
    resetAssociatedGatewayId(): void;
    get associatedGatewayIdInput(): string;
    private _associatedGatewayOwnerAccountId?;
    get associatedGatewayOwnerAccountId(): string;
    set associatedGatewayOwnerAccountId(value: string);
    resetAssociatedGatewayOwnerAccountId(): void;
    get associatedGatewayOwnerAccountIdInput(): string;
    get associatedGatewayType(): string;
    get dxGatewayAssociationId(): string;
    private _dxGatewayId?;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    get dxGatewayIdInput(): string;
    get dxGatewayOwnerAccountId(): string;
    get id(): string;
    private _proposalId?;
    get proposalId(): string;
    set proposalId(value: string);
    resetProposalId(): void;
    get proposalIdInput(): string;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string;
    private _timeouts;
    get timeouts(): DxGatewayAssociationTimeoutsOutputReference;
    putTimeouts(value: DxGatewayAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DxGatewayAssociationTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-gateway-association.d.ts.map