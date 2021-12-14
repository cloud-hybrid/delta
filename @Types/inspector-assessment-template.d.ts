import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Inspector
*/
export interface InspectorAssessmentTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#duration InspectorAssessmentTemplate#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#name InspectorAssessmentTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}
    */
    readonly rulesPackageArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#tags InspectorAssessmentTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#tags_all InspectorAssessmentTemplate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html#target_arn InspectorAssessmentTemplate#target_arn}
    */
    readonly targetArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template}
*/
export declare class InspectorAssessmentTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/inspector_assessment_template.html aws_inspector_assessment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options InspectorAssessmentTemplateConfig
    */
    constructor(scope: Construct, id: string, config: InspectorAssessmentTemplateConfig);
    get arn(): string;
    private _duration?;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rulesPackageArns?;
    get rulesPackageArns(): string[];
    set rulesPackageArns(value: string[]);
    get rulesPackageArnsInput(): string[];
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
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=inspector-assessment-template.d.ts.map