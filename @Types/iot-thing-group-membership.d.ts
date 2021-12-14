import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS IoT
*/
export interface IotThingGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership.html#override_dynamic_group IotThingGroupMembership#override_dynamic_group}
    */
    readonly overrideDynamicGroup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership.html#thing_group_name IotThingGroupMembership#thing_group_name}
    */
    readonly thingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership.html#thing_name IotThingGroupMembership#thing_name}
    */
    readonly thingName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership.html aws_iot_thing_group_membership}
*/
export declare class IotThingGroupMembership extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_group_membership.html aws_iot_thing_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingGroupMembershipConfig
    */
    constructor(scope: Construct, id: string, config: IotThingGroupMembershipConfig);
    get id(): string;
    private _overrideDynamicGroup?;
    get overrideDynamicGroup(): boolean | cdktf.IResolvable;
    set overrideDynamicGroup(value: boolean | cdktf.IResolvable);
    resetOverrideDynamicGroup(): void;
    get overrideDynamicGroupInput(): boolean | cdktf.IResolvable;
    private _thingGroupName?;
    get thingGroupName(): string;
    set thingGroupName(value: string);
    get thingGroupNameInput(): string;
    private _thingName?;
    get thingName(): string;
    set thingName(value: string);
    get thingNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iot-thing-group-membership.d.ts.map