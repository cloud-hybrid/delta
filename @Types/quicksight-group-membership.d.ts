import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS QuickSight
*/
export interface QuicksightGroupMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#aws_account_id QuicksightGroupMembership#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#group_name QuicksightGroupMembership#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#member_name QuicksightGroupMembership#member_name}
    */
    readonly memberName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html#namespace QuicksightGroupMembership#namespace}
    */
    readonly namespace?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership}
*/
export declare class QuicksightGroupMembership extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/quicksight_group_membership.html aws_quicksight_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightGroupMembershipConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightGroupMembershipConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string;
    get id(): string;
    private _memberName?;
    get memberName(): string;
    set memberName(value: string);
    get memberNameInput(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=quicksight-group-membership.d.ts.map