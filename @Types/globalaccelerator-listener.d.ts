import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Global Accelerator
*/
export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#accelerator_arn GlobalacceleratorListener#accelerator_arn}
    */
    readonly acceleratorArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#client_affinity GlobalacceleratorListener#client_affinity}
    */
    readonly clientAffinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#protocol GlobalacceleratorListener#protocol}
    */
    readonly protocol: string;
    /**
    * port_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#port_range GlobalacceleratorListener#port_range}
    */
    readonly portRange: GlobalacceleratorListenerPortRange[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#timeouts GlobalacceleratorListener#timeouts}
    */
    readonly timeouts?: GlobalacceleratorListenerTimeouts;
}
export interface GlobalacceleratorListenerPortRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#from_port GlobalacceleratorListener#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#to_port GlobalacceleratorListener#to_port}
    */
    readonly toPort?: number;
}
export declare function globalacceleratorListenerPortRangeToTerraform(struct?: GlobalacceleratorListenerPortRange): any;
export interface GlobalacceleratorListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#create GlobalacceleratorListener#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#delete GlobalacceleratorListener#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#update GlobalacceleratorListener#update}
    */
    readonly update?: string;
}
export declare function globalacceleratorListenerTimeoutsToTerraform(struct?: GlobalacceleratorListenerTimeoutsOutputReference | GlobalacceleratorListenerTimeouts): any;
export declare class GlobalacceleratorListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlobalacceleratorListenerTimeouts | undefined;
    set internalValue(value: GlobalacceleratorListenerTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener}
*/
export declare class GlobalacceleratorListener extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorListenerConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig);
    private _acceleratorArn?;
    get acceleratorArn(): string;
    set acceleratorArn(value: string);
    get acceleratorArnInput(): string;
    private _clientAffinity?;
    get clientAffinity(): string;
    set clientAffinity(value: string);
    resetClientAffinity(): void;
    get clientAffinityInput(): string;
    get id(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _portRange?;
    get portRange(): GlobalacceleratorListenerPortRange[];
    set portRange(value: GlobalacceleratorListenerPortRange[]);
    get portRangeInput(): GlobalacceleratorListenerPortRange[];
    private _timeouts;
    get timeouts(): GlobalacceleratorListenerTimeoutsOutputReference;
    putTimeouts(value: GlobalacceleratorListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): GlobalacceleratorListenerTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=globalaccelerator-listener.d.ts.map