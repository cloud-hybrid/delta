import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface ElbAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html#elb ElbAttachment#elb}
    */
    readonly elb: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html#instance ElbAttachment#instance}
    */
    readonly instance: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment}
*/
export declare class ElbAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb_attachment.html aws_elb_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElbAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: ElbAttachmentConfig);
    private _elb?;
    get elb(): string;
    set elb(value: string);
    get elbInput(): string;
    get id(): string;
    private _instance?;
    get instance(): string;
    set instance(value: string);
    get instanceInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elb-attachment.d.ts.map