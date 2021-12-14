import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface NetworkInterfaceSgAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html#network_interface_id NetworkInterfaceSgAttachment#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html#security_group_id NetworkInterfaceSgAttachment#security_group_id}
    */
    readonly securityGroupId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment}
*/
export declare class NetworkInterfaceSgAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceSgAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: NetworkInterfaceSgAttachmentConfig);
    get id(): string;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string;
    private _securityGroupId?;
    get securityGroupId(): string;
    set securityGroupId(value: string);
    get securityGroupIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=network-interface-sg-attachment.d.ts.map