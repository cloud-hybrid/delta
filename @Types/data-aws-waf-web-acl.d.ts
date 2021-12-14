import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface DataAwsWafWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/waf_web_acl.html#name DataAwsWafWebAcl#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/waf_web_acl.html aws_waf_web_acl}
*/
export declare class DataAwsWafWebAcl extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/waf_web_acl.html aws_waf_web_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafWebAclConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsWafWebAclConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-waf-web-acl.d.ts.map