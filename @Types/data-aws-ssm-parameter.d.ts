import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface DataAwsSsmParameterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#name DataAwsSsmParameter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html#with_decryption DataAwsSsmParameter#with_decryption}
    */
    readonly withDecryption?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter}
*/
export declare class DataAwsSsmParameter extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmParameterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmParameterConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get type(): string;
    get value(): string;
    get version(): number;
    private _withDecryption?;
    get withDecryption(): boolean | cdktf.IResolvable;
    set withDecryption(value: boolean | cdktf.IResolvable);
    resetWithDecryption(): void;
    get withDecryptionInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ssm-parameter.d.ts.map