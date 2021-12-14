import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#amazon_side_asn DxGateway#amazon_side_asn}
    */
    readonly amazonSideAsn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#name DxGateway#name}
    */
    readonly name: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#timeouts DxGateway#timeouts}
    */
    readonly timeouts?: DxGatewayTimeouts;
}
export interface DxGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#create DxGateway#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html#delete DxGateway#delete}
    */
    readonly delete?: string;
}
export declare function dxGatewayTimeoutsToTerraform(struct?: DxGatewayTimeoutsOutputReference | DxGatewayTimeouts): any;
export declare class DxGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DxGatewayTimeouts | undefined;
    set internalValue(value: DxGatewayTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway}
*/
export declare class DxGateway extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway.html aws_dx_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxGatewayConfig
    */
    constructor(scope: Construct, id: string, config: DxGatewayConfig);
    private _amazonSideAsn?;
    get amazonSideAsn(): string;
    set amazonSideAsn(value: string);
    get amazonSideAsnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerAccountId(): string;
    private _timeouts;
    get timeouts(): DxGatewayTimeoutsOutputReference;
    putTimeouts(value: DxGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DxGatewayTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-gateway.d.ts.map