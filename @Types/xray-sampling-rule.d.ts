import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS X-Ray
*/
export interface XraySamplingRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#attributes XraySamplingRule#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#fixed_rate XraySamplingRule#fixed_rate}
    */
    readonly fixedRate: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#host XraySamplingRule#host}
    */
    readonly host: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#http_method XraySamplingRule#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#priority XraySamplingRule#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#reservoir_size XraySamplingRule#reservoir_size}
    */
    readonly reservoirSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#resource_arn XraySamplingRule#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#rule_name XraySamplingRule#rule_name}
    */
    readonly ruleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#service_name XraySamplingRule#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#service_type XraySamplingRule#service_type}
    */
    readonly serviceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#tags XraySamplingRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#tags_all XraySamplingRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#url_path XraySamplingRule#url_path}
    */
    readonly urlPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html#version XraySamplingRule#version}
    */
    readonly version: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html aws_xray_sampling_rule}
*/
export declare class XraySamplingRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule.html aws_xray_sampling_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XraySamplingRuleConfig
    */
    constructor(scope: Construct, id: string, config: XraySamplingRuleConfig);
    get arn(): string;
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set attributes(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAttributes(): void;
    get attributesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _fixedRate?;
    get fixedRate(): number;
    set fixedRate(value: number);
    get fixedRateInput(): number;
    private _host?;
    get host(): string;
    set host(value: string);
    get hostInput(): string;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
    private _reservoirSize?;
    get reservoirSize(): number;
    set reservoirSize(value: number);
    get reservoirSizeInput(): number;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    resetRuleName(): void;
    get ruleNameInput(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
    private _serviceType?;
    get serviceType(): string;
    set serviceType(value: string);
    get serviceTypeInput(): string;
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
    private _urlPath?;
    get urlPath(): string;
    set urlPath(value: string);
    get urlPathInput(): string;
    private _version?;
    get version(): number;
    set version(value: number);
    get versionInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=xray-sampling-rule.d.ts.map