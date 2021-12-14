import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface DataAwsSsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#default_baseline DataAwsSsmPatchBaseline#default_baseline}
    */
    readonly defaultBaseline?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#name_prefix DataAwsSsmPatchBaseline#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#operating_system DataAwsSsmPatchBaseline#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html#owner DataAwsSsmPatchBaseline#owner}
    */
    readonly owner: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html aws_ssm_patch_baseline}
*/
export declare class DataAwsSsmPatchBaseline extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_patch_baseline.html aws_ssm_patch_baseline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmPatchBaselineConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmPatchBaselineConfig);
    private _defaultBaseline?;
    get defaultBaseline(): boolean | cdktf.IResolvable;
    set defaultBaseline(value: boolean | cdktf.IResolvable);
    resetDefaultBaseline(): void;
    get defaultBaselineInput(): boolean | cdktf.IResolvable;
    get description(): string;
    get id(): string;
    get name(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    resetOperatingSystem(): void;
    get operatingSystemInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ssm-patch-baseline.d.ts.map