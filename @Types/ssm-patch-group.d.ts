import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface SsmPatchGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html#baseline_id SsmPatchGroup#baseline_id}
    */
    readonly baselineId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html#patch_group SsmPatchGroup#patch_group}
    */
    readonly patchGroup: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html aws_ssm_patch_group}
*/
export declare class SsmPatchGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_group.html aws_ssm_patch_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmPatchGroupConfig
    */
    constructor(scope: Construct, id: string, config: SsmPatchGroupConfig);
    private _baselineId?;
    get baselineId(): string;
    set baselineId(value: string);
    get baselineIdInput(): string;
    get id(): string;
    private _patchGroup?;
    get patchGroup(): string;
    set patchGroup(value: string);
    get patchGroupInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ssm-patch-group.d.ts.map