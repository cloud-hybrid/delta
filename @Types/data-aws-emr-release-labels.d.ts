import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic MapReduce
*/
export interface DataAwsEmrReleaseLabelsConfig extends cdktf.TerraformMetaArguments {
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html#filters DataAwsEmrReleaseLabels#filters}
    */
    readonly filters?: DataAwsEmrReleaseLabelsFilters;
}
export interface DataAwsEmrReleaseLabelsFilters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html#application DataAwsEmrReleaseLabels#application}
    */
    readonly application?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html#prefix DataAwsEmrReleaseLabels#prefix}
    */
    readonly prefix?: string;
}
export declare function dataAwsEmrReleaseLabelsFiltersToTerraform(struct?: DataAwsEmrReleaseLabelsFiltersOutputReference | DataAwsEmrReleaseLabelsFilters): any;
export declare class DataAwsEmrReleaseLabelsFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DataAwsEmrReleaseLabelsFilters | undefined;
    set internalValue(value: DataAwsEmrReleaseLabelsFilters | undefined);
    private _application?;
    get application(): string;
    set application(value: string);
    resetApplication(): void;
    get applicationInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html aws_emr_release_labels}
*/
export declare class DataAwsEmrReleaseLabels extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html aws_emr_release_labels} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEmrReleaseLabelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEmrReleaseLabelsConfig);
    get id(): string;
    get releaseLabels(): string[];
    private _filters;
    get filters(): DataAwsEmrReleaseLabelsFiltersOutputReference;
    putFilters(value: DataAwsEmrReleaseLabelsFilters): void;
    resetFilters(): void;
    get filtersInput(): DataAwsEmrReleaseLabelsFilters;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-emr-release-labels.d.ts.map