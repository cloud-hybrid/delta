import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Resource Access Manager
*/
export interface RamResourceShareAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#share_arn RamResourceShareAccepter#share_arn}
    */
    readonly shareArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#timeouts RamResourceShareAccepter#timeouts}
    */
    readonly timeouts?: RamResourceShareAccepterTimeouts;
}
export interface RamResourceShareAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#create RamResourceShareAccepter#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html#delete RamResourceShareAccepter#delete}
    */
    readonly delete?: string;
}
export declare function ramResourceShareAccepterTimeoutsToTerraform(struct?: RamResourceShareAccepterTimeoutsOutputReference | RamResourceShareAccepterTimeouts): any;
export declare class RamResourceShareAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RamResourceShareAccepterTimeouts | undefined;
    set internalValue(value: RamResourceShareAccepterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter}
*/
export declare class RamResourceShareAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html aws_ram_resource_share_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareAccepterConfig
    */
    constructor(scope: Construct, id: string, config: RamResourceShareAccepterConfig);
    get id(): string;
    get invitationArn(): string;
    get receiverAccountId(): string;
    get resources(): string[];
    get senderAccountId(): string;
    private _shareArn?;
    get shareArn(): string;
    set shareArn(value: string);
    get shareArnInput(): string;
    get shareId(): string;
    get shareName(): string;
    get status(): string;
    private _timeouts;
    get timeouts(): RamResourceShareAccepterTimeoutsOutputReference;
    putTimeouts(value: RamResourceShareAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): RamResourceShareAccepterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ram-resource-share-accepter.d.ts.map