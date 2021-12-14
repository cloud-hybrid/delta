import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface LbTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#availability_zone LbTargetGroupAttachment#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#port LbTargetGroupAttachment#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#target_group_arn LbTargetGroupAttachment#target_group_arn}
    */
    readonly targetGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#target_id LbTargetGroupAttachment#target_id}
    */
    readonly targetId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html aws_lb_target_group_attachment}
*/
export declare class LbTargetGroupAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html aws_lb_target_group_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTargetGroupAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: LbTargetGroupAttachmentConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    get id(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _targetGroupArn?;
    get targetGroupArn(): string;
    set targetGroupArn(value: string);
    get targetGroupArnInput(): string;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lb-target-group-attachment.d.ts.map