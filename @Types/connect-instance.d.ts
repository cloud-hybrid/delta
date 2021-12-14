import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Connect
*/
export interface ConnectInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#auto_resolve_best_voices_enabled ConnectInstance#auto_resolve_best_voices_enabled}
    */
    readonly autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#contact_flow_logs_enabled ConnectInstance#contact_flow_logs_enabled}
    */
    readonly contactFlowLogsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#contact_lens_enabled ConnectInstance#contact_lens_enabled}
    */
    readonly contactLensEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#directory_id ConnectInstance#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#early_media_enabled ConnectInstance#early_media_enabled}
    */
    readonly earlyMediaEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#identity_management_type ConnectInstance#identity_management_type}
    */
    readonly identityManagementType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#inbound_calls_enabled ConnectInstance#inbound_calls_enabled}
    */
    readonly inboundCallsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#instance_alias ConnectInstance#instance_alias}
    */
    readonly instanceAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#outbound_calls_enabled ConnectInstance#outbound_calls_enabled}
    */
    readonly outboundCallsEnabled: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#timeouts ConnectInstance#timeouts}
    */
    readonly timeouts?: ConnectInstanceTimeouts;
}
export interface ConnectInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#create ConnectInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#delete ConnectInstance#delete}
    */
    readonly delete?: string;
}
export declare function connectInstanceTimeoutsToTerraform(struct?: ConnectInstanceTimeoutsOutputReference | ConnectInstanceTimeouts): any;
export declare class ConnectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConnectInstanceTimeouts | undefined;
    set internalValue(value: ConnectInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance}
*/
export declare class ConnectInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectInstanceConfig
    */
    constructor(scope: Construct, id: string, config: ConnectInstanceConfig);
    get arn(): string;
    private _autoResolveBestVoicesEnabled?;
    get autoResolveBestVoicesEnabled(): boolean | cdktf.IResolvable;
    set autoResolveBestVoicesEnabled(value: boolean | cdktf.IResolvable);
    resetAutoResolveBestVoicesEnabled(): void;
    get autoResolveBestVoicesEnabledInput(): boolean | cdktf.IResolvable;
    private _contactFlowLogsEnabled?;
    get contactFlowLogsEnabled(): boolean | cdktf.IResolvable;
    set contactFlowLogsEnabled(value: boolean | cdktf.IResolvable);
    resetContactFlowLogsEnabled(): void;
    get contactFlowLogsEnabledInput(): boolean | cdktf.IResolvable;
    private _contactLensEnabled?;
    get contactLensEnabled(): boolean | cdktf.IResolvable;
    set contactLensEnabled(value: boolean | cdktf.IResolvable);
    resetContactLensEnabled(): void;
    get contactLensEnabledInput(): boolean | cdktf.IResolvable;
    get createdTime(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string;
    private _earlyMediaEnabled?;
    get earlyMediaEnabled(): boolean | cdktf.IResolvable;
    set earlyMediaEnabled(value: boolean | cdktf.IResolvable);
    resetEarlyMediaEnabled(): void;
    get earlyMediaEnabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _identityManagementType?;
    get identityManagementType(): string;
    set identityManagementType(value: string);
    get identityManagementTypeInput(): string;
    private _inboundCallsEnabled?;
    get inboundCallsEnabled(): boolean | cdktf.IResolvable;
    set inboundCallsEnabled(value: boolean | cdktf.IResolvable);
    get inboundCallsEnabledInput(): boolean | cdktf.IResolvable;
    private _instanceAlias?;
    get instanceAlias(): string;
    set instanceAlias(value: string);
    resetInstanceAlias(): void;
    get instanceAliasInput(): string;
    private _outboundCallsEnabled?;
    get outboundCallsEnabled(): boolean | cdktf.IResolvable;
    set outboundCallsEnabled(value: boolean | cdktf.IResolvable);
    get outboundCallsEnabledInput(): boolean | cdktf.IResolvable;
    get serviceRole(): string;
    get status(): string;
    private _timeouts;
    get timeouts(): ConnectInstanceTimeoutsOutputReference;
    putTimeouts(value: ConnectInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ConnectInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=connect-instance.d.ts.map