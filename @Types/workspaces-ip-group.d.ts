import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WorkSpaces
*/
export interface WorkspacesIpGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#description WorkspacesIpGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#name WorkspacesIpGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#tags WorkspacesIpGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#tags_all WorkspacesIpGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * rules block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#rules WorkspacesIpGroup#rules}
    */
    readonly rules?: WorkspacesIpGroupRules[];
}
export interface WorkspacesIpGroupRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#description WorkspacesIpGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#source WorkspacesIpGroup#source}
    */
    readonly source: string;
}
export declare function workspacesIpGroupRulesToTerraform(struct?: WorkspacesIpGroupRules): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html aws_workspaces_ip_group}
*/
export declare class WorkspacesIpGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html aws_workspaces_ip_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesIpGroupConfig
    */
    constructor(scope: Construct, id: string, config: WorkspacesIpGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
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
    private _rules?;
    get rules(): WorkspacesIpGroupRules[];
    set rules(value: WorkspacesIpGroupRules[]);
    resetRules(): void;
    get rulesInput(): WorkspacesIpGroupRules[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=workspaces-ip-group.d.ts.map