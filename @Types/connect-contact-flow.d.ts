import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Connect
*/
export interface ConnectContactFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#content ConnectContactFlow#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#content_hash ConnectContactFlow#content_hash}
    */
    readonly contentHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#description ConnectContactFlow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#filename ConnectContactFlow#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#instance_id ConnectContactFlow#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#name ConnectContactFlow#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#tags ConnectContactFlow#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#tags_all ConnectContactFlow#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#type ConnectContactFlow#type}
    */
    readonly type?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#timeouts ConnectContactFlow#timeouts}
    */
    readonly timeouts?: ConnectContactFlowTimeouts;
}
export interface ConnectContactFlowTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#create ConnectContactFlow#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html#update ConnectContactFlow#update}
    */
    readonly update?: string;
}
export declare function connectContactFlowTimeoutsToTerraform(struct?: ConnectContactFlowTimeoutsOutputReference | ConnectContactFlowTimeouts): any;
export declare class ConnectContactFlowTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConnectContactFlowTimeouts | undefined;
    set internalValue(value: ConnectContactFlowTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html aws_connect_contact_flow}
*/
export declare class ConnectContactFlow extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_contact_flow.html aws_connect_contact_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectContactFlowConfig
    */
    constructor(scope: Construct, id: string, config: ConnectContactFlowConfig);
    get arn(): string;
    get contactFlowId(): string;
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
    private _contentHash?;
    get contentHash(): string;
    set contentHash(value: string);
    resetContentHash(): void;
    get contentHashInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _filename?;
    get filename(): string;
    set filename(value: string);
    resetFilename(): void;
    get filenameInput(): string;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _timeouts;
    get timeouts(): ConnectContactFlowTimeoutsOutputReference;
    putTimeouts(value: ConnectContactFlowTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ConnectContactFlowTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=connect-contact-flow.d.ts.map