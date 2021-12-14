import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lake Formation
*/
export interface LakeformationResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html#arn LakeformationResource#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html#role_arn LakeformationResource#role_arn}
    */
    readonly roleArn?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html aws_lakeformation_resource}
*/
export declare class LakeformationResource extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html aws_lakeformation_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationResourceConfig
    */
    constructor(scope: Construct, id: string, config: LakeformationResourceConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    get lastModified(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lakeformation-resource.d.ts.map