import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Cost and Usage Report
*/
export interface DataAwsCurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html#report_name DataAwsCurReportDefinition#report_name}
    */
    readonly reportName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition}
*/
export declare class DataAwsCurReportDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cur_report_definition.html aws_cur_report_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCurReportDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCurReportDefinitionConfig);
    get additionalArtifacts(): string[];
    get additionalSchemaElements(): string[];
    get compression(): string;
    get format(): string;
    get id(): string;
    get refreshClosedReports(): any;
    private _reportName?;
    get reportName(): string;
    set reportName(value: string);
    get reportNameInput(): string;
    get reportVersioning(): string;
    get s3Bucket(): string;
    get s3Prefix(): string;
    get s3Region(): string;
    get timeUnit(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cur-report-definition.d.ts.map