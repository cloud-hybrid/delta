import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Shield Protection
*/
export interface ShieldProtectionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#aggregation ShieldProtectionGroup#aggregation}
    */
    readonly aggregation: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#members ShieldProtectionGroup#members}
    */
    readonly members?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#pattern ShieldProtectionGroup#pattern}
    */
    readonly pattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#protection_group_id ShieldProtectionGroup#protection_group_id}
    */
    readonly protectionGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#resource_type ShieldProtectionGroup#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#tags ShieldProtectionGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html#tags_all ShieldProtectionGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html aws_shield_protection_group}
*/
export declare class ShieldProtectionGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html aws_shield_protection_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldProtectionGroupConfig
    */
    constructor(scope: Construct, id: string, config: ShieldProtectionGroupConfig);
    private _aggregation?;
    get aggregation(): string;
    set aggregation(value: string);
    get aggregationInput(): string;
    get id(): string;
    private _members?;
    get members(): string[];
    set members(value: string[]);
    resetMembers(): void;
    get membersInput(): string[];
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
    get protectionGroupArn(): string;
    private _protectionGroupId?;
    get protectionGroupId(): string;
    set protectionGroupId(value: string);
    get protectionGroupIdInput(): string;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=shield-protection-group.d.ts.map