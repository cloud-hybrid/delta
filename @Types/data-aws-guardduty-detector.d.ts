import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GuardDuty
*/
export interface DataAwsGuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector}
*/
export declare class DataAwsGuarddutyDetector extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/guardduty_detector.html aws_guardduty_detector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGuarddutyDetectorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsGuarddutyDetectorConfig);
    get findingPublishingFrequency(): string;
    get id(): string;
    get serviceRoleArn(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-guardduty-detector.d.ts.map