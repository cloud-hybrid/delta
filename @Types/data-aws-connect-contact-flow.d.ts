import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Connect
*/
export interface DataAwsConnectContactFlowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#contact_flow_id DataAwsConnectContactFlow#contact_flow_id}
    */
    readonly contactFlowId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#instance_id DataAwsConnectContactFlow#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#name DataAwsConnectContactFlow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#tags DataAwsConnectContactFlow#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html#type DataAwsConnectContactFlow#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html aws_connect_contact_flow}
*/
export declare class DataAwsConnectContactFlow extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow.html aws_connect_contact_flow} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectContactFlowConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectContactFlowConfig);
    get arn(): string;
    private _contactFlowId?;
    get contactFlowId(): string;
    set contactFlowId(value: string);
    resetContactFlowId(): void;
    get contactFlowIdInput(): string;
    get content(): string;
    get description(): string;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-connect-contact-flow.d.ts.map