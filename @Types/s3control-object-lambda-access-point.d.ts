import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3ControlObjectLambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#account_id S3ControlObjectLambdaAccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#name S3ControlObjectLambdaAccessPoint#name}
    */
    readonly name: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#configuration S3ControlObjectLambdaAccessPoint#configuration}
    */
    readonly configuration: S3ControlObjectLambdaAccessPointConfiguration;
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#function_arn S3ControlObjectLambdaAccessPoint#function_arn}
    */
    readonly functionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#function_payload S3ControlObjectLambdaAccessPoint#function_payload}
    */
    readonly functionPayload?: string;
}
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda): any;
export declare class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda | undefined;
    set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string;
    private _functionPayload?;
    get functionPayload(): string;
    set functionPayload(value: string);
    resetFunctionPayload(): void;
    get functionPayloadInput(): string;
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation {
    /**
    * aws_lambda block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#aws_lambda S3ControlObjectLambdaAccessPoint#aws_lambda}
    */
    readonly awsLambda: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda;
}
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation): any;
export declare class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation | undefined;
    set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation | undefined);
    private _awsLambda;
    get awsLambda(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference;
    putAwsLambda(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda): void;
    get awsLambdaInput(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda;
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#actions S3ControlObjectLambdaAccessPoint#actions}
    */
    readonly actions: string[];
    /**
    * content_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#content_transformation S3ControlObjectLambdaAccessPoint#content_transformation}
    */
    readonly contentTransformation: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation;
}
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration): any;
export interface S3ControlObjectLambdaAccessPointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#allowed_features S3ControlObjectLambdaAccessPoint#allowed_features}
    */
    readonly allowedFeatures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#cloud_watch_metrics_enabled S3ControlObjectLambdaAccessPoint#cloud_watch_metrics_enabled}
    */
    readonly cloudWatchMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#supporting_access_point S3ControlObjectLambdaAccessPoint#supporting_access_point}
    */
    readonly supportingAccessPoint: string;
    /**
    * transformation_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html#transformation_configuration S3ControlObjectLambdaAccessPoint#transformation_configuration}
    */
    readonly transformationConfiguration: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[];
}
export declare function s3ControlObjectLambdaAccessPointConfigurationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationOutputReference | S3ControlObjectLambdaAccessPointConfiguration): any;
export declare class S3ControlObjectLambdaAccessPointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3ControlObjectLambdaAccessPointConfiguration | undefined;
    set internalValue(value: S3ControlObjectLambdaAccessPointConfiguration | undefined);
    private _allowedFeatures?;
    get allowedFeatures(): string[];
    set allowedFeatures(value: string[]);
    resetAllowedFeatures(): void;
    get allowedFeaturesInput(): string[];
    private _cloudWatchMetricsEnabled?;
    get cloudWatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudWatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetCloudWatchMetricsEnabled(): void;
    get cloudWatchMetricsEnabledInput(): boolean | cdktf.IResolvable;
    private _supportingAccessPoint?;
    get supportingAccessPoint(): string;
    set supportingAccessPoint(value: string);
    get supportingAccessPointInput(): string;
    private _transformationConfiguration?;
    get transformationConfiguration(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[];
    set transformationConfiguration(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[]);
    get transformationConfigurationInput(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html aws_s3control_object_lambda_access_point}
*/
export declare class S3ControlObjectLambdaAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point.html aws_s3control_object_lambda_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlObjectLambdaAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlObjectLambdaAccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _configuration;
    get configuration(): S3ControlObjectLambdaAccessPointConfigurationOutputReference;
    putConfiguration(value: S3ControlObjectLambdaAccessPointConfiguration): void;
    get configurationInput(): S3ControlObjectLambdaAccessPointConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3control-object-lambda-access-point.d.ts.map