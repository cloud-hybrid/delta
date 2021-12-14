import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface DataAwsSsmParametersByPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html#path DataAwsSsmParametersByPath#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html#with_decryption DataAwsSsmParametersByPath#with_decryption}
    */
    readonly withDecryption?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html aws_ssm_parameters_by_path}
*/
export declare class DataAwsSsmParametersByPath extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html aws_ssm_parameters_by_path} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmParametersByPathConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmParametersByPathConfig);
    get arns(): string[];
    get id(): string;
    get names(): string[];
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string;
    get types(): string[];
    get values(): string[];
    private _withDecryption?;
    get withDecryption(): boolean | cdktf.IResolvable;
    set withDecryption(value: boolean | cdktf.IResolvable);
    resetWithDecryption(): void;
    get withDecryptionInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ssm-parameters-by-path.d.ts.map