import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Security Hub
*/
export interface SecurityhubFindingAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator.html#linking_mode SecurityhubFindingAggregator#linking_mode}
    */
    readonly linkingMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator.html#specified_regions SecurityhubFindingAggregator#specified_regions}
    */
    readonly specifiedRegions?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator.html aws_securityhub_finding_aggregator}
*/
export declare class SecurityhubFindingAggregator extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_finding_aggregator.html aws_securityhub_finding_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubFindingAggregatorConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubFindingAggregatorConfig);
    get id(): string;
    private _linkingMode?;
    get linkingMode(): string;
    set linkingMode(value: string);
    get linkingModeInput(): string;
    private _specifiedRegions?;
    get specifiedRegions(): string[];
    set specifiedRegions(value: string[]);
    resetSpecifiedRegions(): void;
    get specifiedRegionsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=securityhub-finding-aggregator.d.ts.map