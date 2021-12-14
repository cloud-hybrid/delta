import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Inspector
*/
export interface DataAwsInspectorRulesPackagesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/inspector_rules_packages.html aws_inspector_rules_packages}
*/
export declare class DataAwsInspectorRulesPackages extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/inspector_rules_packages.html aws_inspector_rules_packages} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInspectorRulesPackagesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInspectorRulesPackagesConfig);
    get arns(): string[];
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-inspector-rules-packages.d.ts.map