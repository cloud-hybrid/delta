import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF
*/
export interface WafIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#name WafIpset#name}
    */
    readonly name: string;
    /**
    * ip_set_descriptors block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#ip_set_descriptors WafIpset#ip_set_descriptors}
    */
    readonly ipSetDescriptors?: WafIpsetIpSetDescriptors[];
}
export interface WafIpsetIpSetDescriptors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#type WafIpset#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html#value WafIpset#value}
    */
    readonly value: string;
}
export declare function wafIpsetIpSetDescriptorsToTerraform(struct?: WafIpsetIpSetDescriptors): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html aws_waf_ipset}
*/
export declare class WafIpset extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_ipset.html aws_waf_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafIpsetConfig
    */
    constructor(scope: Construct, id: string, config: WafIpsetConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ipSetDescriptors?;
    get ipSetDescriptors(): WafIpsetIpSetDescriptors[];
    set ipSetDescriptors(value: WafIpsetIpSetDescriptors[]);
    resetIpSetDescriptors(): void;
    get ipSetDescriptorsInput(): WafIpsetIpSetDescriptors[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=waf-ipset.d.ts.map