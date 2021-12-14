import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface DataAwsServicecatalogLaunchPathsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html#accept_language DataAwsServicecatalogLaunchPaths#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html#product_id DataAwsServicecatalogLaunchPaths#product_id}
    */
    readonly productId: string;
}
export declare class DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries extends cdktf.ComplexComputedList {
    get description(): string;
    get type(): string;
}
export declare class DataAwsServicecatalogLaunchPathsSummaries extends cdktf.ComplexComputedList {
    get constraintSummaries(): any;
    get name(): string;
    get pathId(): string;
    get tags(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths}
*/
export declare class DataAwsServicecatalogLaunchPaths extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths.html aws_servicecatalog_launch_paths} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogLaunchPathsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogLaunchPathsConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    get id(): string;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string;
    summaries(index: string): DataAwsServicecatalogLaunchPathsSummaries;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-servicecatalog-launch-paths.d.ts.map