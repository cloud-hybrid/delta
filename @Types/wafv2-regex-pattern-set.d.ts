import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF V2
*/
export interface Wafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#description Wafv2RegexPatternSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#name Wafv2RegexPatternSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#scope Wafv2RegexPatternSet#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#tags Wafv2RegexPatternSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#tags_all Wafv2RegexPatternSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * regular_expression block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#regular_expression Wafv2RegexPatternSet#regular_expression}
    */
    readonly regularExpression?: Wafv2RegexPatternSetRegularExpression[];
}
export interface Wafv2RegexPatternSetRegularExpression {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html#regex_string Wafv2RegexPatternSet#regex_string}
    */
    readonly regexString: string;
}
export declare function wafv2RegexPatternSetRegularExpressionToTerraform(struct?: Wafv2RegexPatternSetRegularExpression): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set}
*/
export declare class Wafv2RegexPatternSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set.html aws_wafv2_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RegexPatternSetConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lockToken(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
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
    private _regularExpression?;
    get regularExpression(): Wafv2RegexPatternSetRegularExpression[];
    set regularExpression(value: Wafv2RegexPatternSetRegularExpression[]);
    resetRegularExpression(): void;
    get regularExpressionInput(): Wafv2RegexPatternSetRegularExpression[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafv2-regex-pattern-set.d.ts.map