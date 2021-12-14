import { Wafv2WebAclCustomResponseBody, Wafv2WebAclDefaultAction, Wafv2WebAclRule, Wafv2WebAclVisibilityConfig } from './wafv2-web-acl-structs';
import { Wafv2WebAclDefaultActionOutputReference, Wafv2WebAclVisibilityConfigOutputReference } from './wafv2-web-acl-structs';
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WAF V2
*/
export interface Wafv2WebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#description Wafv2WebAcl#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#tags Wafv2WebAcl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#tags_all Wafv2WebAcl#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * custom_response_body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#custom_response_body Wafv2WebAcl#custom_response_body}
    */
    readonly customResponseBody?: Wafv2WebAclCustomResponseBody[];
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#default_action Wafv2WebAcl#default_action}
    */
    readonly defaultAction: Wafv2WebAclDefaultAction;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#rule Wafv2WebAcl#rule}
    */
    readonly rule?: Wafv2WebAclRule[];
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#visibility_config Wafv2WebAcl#visibility_config}
    */
    readonly visibilityConfig: Wafv2WebAclVisibilityConfig;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html aws_wafv2_web_acl}
*/
export declare class Wafv2WebAcl extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html aws_wafv2_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2WebAclConfig);
    get arn(): string;
    get capacity(): number;
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
    private _customResponseBody?;
    get customResponseBody(): Wafv2WebAclCustomResponseBody[];
    set customResponseBody(value: Wafv2WebAclCustomResponseBody[]);
    resetCustomResponseBody(): void;
    get customResponseBodyInput(): Wafv2WebAclCustomResponseBody[];
    private _defaultAction;
    get defaultAction(): Wafv2WebAclDefaultActionOutputReference;
    putDefaultAction(value: Wafv2WebAclDefaultAction): void;
    get defaultActionInput(): Wafv2WebAclDefaultAction;
    private _rule?;
    get rule(): Wafv2WebAclRule[];
    set rule(value: Wafv2WebAclRule[]);
    resetRule(): void;
    get ruleInput(): Wafv2WebAclRule[];
    private _visibilityConfig;
    get visibilityConfig(): Wafv2WebAclVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2WebAclVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2WebAclVisibilityConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=wafv2-web-acl.d.ts.map