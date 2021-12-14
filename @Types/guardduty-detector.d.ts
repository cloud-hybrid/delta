import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GuardDuty
*/
export interface GuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#enable GuarddutyDetector#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags GuarddutyDetector#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags_all GuarddutyDetector#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * datasources block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#datasources GuarddutyDetector#datasources}
    */
    readonly datasources?: GuarddutyDetectorDatasources;
}
export interface GuarddutyDetectorDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#enable GuarddutyDetector#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
}
export declare function guarddutyDetectorDatasourcesS3LogsToTerraform(struct?: GuarddutyDetectorDatasourcesS3LogsOutputReference | GuarddutyDetectorDatasourcesS3Logs): any;
export declare class GuarddutyDetectorDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GuarddutyDetectorDatasourcesS3Logs | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesS3Logs | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable;
}
export interface GuarddutyDetectorDatasources {
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#s3_logs GuarddutyDetector#s3_logs}
    */
    readonly s3Logs?: GuarddutyDetectorDatasourcesS3Logs;
}
export declare function guarddutyDetectorDatasourcesToTerraform(struct?: GuarddutyDetectorDatasourcesOutputReference | GuarddutyDetectorDatasources): any;
export declare class GuarddutyDetectorDatasourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GuarddutyDetectorDatasources | undefined;
    set internalValue(value: GuarddutyDetectorDatasources | undefined);
    private _s3Logs;
    get s3Logs(): GuarddutyDetectorDatasourcesS3LogsOutputReference;
    putS3Logs(value: GuarddutyDetectorDatasourcesS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): GuarddutyDetectorDatasourcesS3Logs;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector}
*/
export declare class GuarddutyDetector extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyDetectorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: GuarddutyDetectorConfig);
    get accountId(): string;
    get arn(): string;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable;
    private _findingPublishingFrequency?;
    get findingPublishingFrequency(): string;
    set findingPublishingFrequency(value: string);
    resetFindingPublishingFrequency(): void;
    get findingPublishingFrequencyInput(): string;
    get id(): string;
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
    private _datasources;
    get datasources(): GuarddutyDetectorDatasourcesOutputReference;
    putDatasources(value: GuarddutyDetectorDatasources): void;
    resetDatasources(): void;
    get datasourcesInput(): GuarddutyDetectorDatasources;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=guardduty-detector.d.ts.map