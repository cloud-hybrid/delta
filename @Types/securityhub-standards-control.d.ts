import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Security Hub
*/
export interface SecurityhubStandardsControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html#control_status SecurityhubStandardsControl#control_status}
    */
    readonly controlStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html#disabled_reason SecurityhubStandardsControl#disabled_reason}
    */
    readonly disabledReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html#standards_control_arn SecurityhubStandardsControl#standards_control_arn}
    */
    readonly standardsControlArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html aws_securityhub_standards_control}
*/
export declare class SecurityhubStandardsControl extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control.html aws_securityhub_standards_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubStandardsControlConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubStandardsControlConfig);
    get controlId(): string;
    private _controlStatus?;
    get controlStatus(): string;
    set controlStatus(value: string);
    get controlStatusInput(): string;
    get controlStatusUpdatedAt(): string;
    get description(): string;
    private _disabledReason?;
    get disabledReason(): string;
    set disabledReason(value: string);
    resetDisabledReason(): void;
    get disabledReasonInput(): string;
    get id(): string;
    get relatedRequirements(): string[];
    get remediationUrl(): string;
    get severityRating(): string;
    private _standardsControlArn?;
    get standardsControlArn(): string;
    set standardsControlArn(value: string);
    get standardsControlArnInput(): string;
    get title(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=securityhub-standards-control.d.ts.map