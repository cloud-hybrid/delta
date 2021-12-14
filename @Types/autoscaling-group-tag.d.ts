import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Auto Scaling
*/
export interface AutoscalingGroupTagAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * tag block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#tag AutoscalingGroupTagA#tag}
    */
    readonly tag: AutoscalingGroupTagTag;
}
export interface AutoscalingGroupTagTag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#key AutoscalingGroupTagA#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}
    */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#value AutoscalingGroupTagA#value}
    */
    readonly value: string;
}
export declare function autoscalingGroupTagTagToTerraform(struct?: AutoscalingGroupTagTagOutputReference | AutoscalingGroupTagTag): any;
export declare class AutoscalingGroupTagTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AutoscalingGroupTagTag | undefined;
    set internalValue(value: AutoscalingGroupTagTag | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _propagateAtLaunch?;
    get propagateAtLaunch(): boolean | cdktf.IResolvable;
    set propagateAtLaunch(value: boolean | cdktf.IResolvable);
    get propagateAtLaunchInput(): boolean | cdktf.IResolvable;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag}
*/
export declare class AutoscalingGroupTagA extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupTagAConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingGroupTagAConfig);
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string;
    get id(): string;
    private _tag;
    get tag(): AutoscalingGroupTagTagOutputReference;
    putTag(value: AutoscalingGroupTagTag): void;
    get tagInput(): AutoscalingGroupTagTag;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=autoscaling-group-tag.d.ts.map