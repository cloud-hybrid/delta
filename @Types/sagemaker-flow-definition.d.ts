import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerFlowDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#flow_definition_name SagemakerFlowDefinition#flow_definition_name}
    */
    readonly flowDefinitionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#role_arn SagemakerFlowDefinition#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags SagemakerFlowDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags_all SagemakerFlowDefinition#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * human_loop_activation_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}
    */
    readonly humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig;
    /**
    * human_loop_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_config SagemakerFlowDefinition#human_loop_config}
    */
    readonly humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfig;
    /**
    * human_loop_request_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}
    */
    readonly humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource;
    /**
    * output_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#output_config SagemakerFlowDefinition#output_config}
    */
    readonly outputConfig: SagemakerFlowDefinitionOutputConfig;
}
export interface SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}
    */
    readonly humanLoopActivationConditions: string;
}
export declare function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig): any;
export declare class SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined;
    set internalValue(value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined);
    private _humanLoopActivationConditions?;
    get humanLoopActivationConditions(): string;
    set humanLoopActivationConditions(value: string);
    get humanLoopActivationConditionsInput(): string;
}
export interface SagemakerFlowDefinitionHumanLoopActivationConfig {
    /**
    * human_loop_activation_conditions_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}
    */
    readonly humanLoopActivationConditionsConfig?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
}
export declare function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfig): any;
export declare class SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFlowDefinitionHumanLoopActivationConfig | undefined;
    set internalValue(value: SagemakerFlowDefinitionHumanLoopActivationConfig | undefined);
    private _humanLoopActivationConditionsConfig;
    get humanLoopActivationConditionsConfig(): SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference;
    putHumanLoopActivationConditionsConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig): void;
    resetHumanLoopActivationConditionsConfig(): void;
    get humanLoopActivationConditionsConfigInput(): SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
}
export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#cents SagemakerFlowDefinition#cents}
    */
    readonly cents?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#dollars SagemakerFlowDefinition#dollars}
    */
    readonly dollars?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}
    */
    readonly tenthFractionsOfACent?: number;
}
export declare function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd): any;
export declare class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined;
    set internalValue(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined);
    private _cents?;
    get cents(): number;
    set cents(value: number);
    resetCents(): void;
    get centsInput(): number;
    private _dollars?;
    get dollars(): number;
    set dollars(value: number);
    resetDollars(): void;
    get dollarsInput(): number;
    private _tenthFractionsOfACent?;
    get tenthFractionsOfACent(): number;
    set tenthFractionsOfACent(value: number);
    resetTenthFractionsOfACent(): void;
    get tenthFractionsOfACentInput(): number;
}
export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
    /**
    * amount_in_usd block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#amount_in_usd SagemakerFlowDefinition#amount_in_usd}
    */
    readonly amountInUsd?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
}
export declare function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice): any;
export declare class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined;
    set internalValue(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined);
    private _amountInUsd;
    get amountInUsd(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference;
    putAmountInUsd(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd): void;
    resetAmountInUsd(): void;
    get amountInUsdInput(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
}
export interface SagemakerFlowDefinitionHumanLoopConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}
    */
    readonly humanTaskUiArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}
    */
    readonly taskAvailabilityLifetimeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_count SagemakerFlowDefinition#task_count}
    */
    readonly taskCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_description SagemakerFlowDefinition#task_description}
    */
    readonly taskDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_keywords SagemakerFlowDefinition#task_keywords}
    */
    readonly taskKeywords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}
    */
    readonly taskTimeLimitInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_title SagemakerFlowDefinition#task_title}
    */
    readonly taskTitle: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#workteam_arn SagemakerFlowDefinition#workteam_arn}
    */
    readonly workteamArn: string;
    /**
    * public_workforce_task_price block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}
    */
    readonly publicWorkforceTaskPrice?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
}
export declare function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigOutputReference | SagemakerFlowDefinitionHumanLoopConfig): any;
export declare class SagemakerFlowDefinitionHumanLoopConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFlowDefinitionHumanLoopConfig | undefined;
    set internalValue(value: SagemakerFlowDefinitionHumanLoopConfig | undefined);
    private _humanTaskUiArn?;
    get humanTaskUiArn(): string;
    set humanTaskUiArn(value: string);
    get humanTaskUiArnInput(): string;
    private _taskAvailabilityLifetimeInSeconds?;
    get taskAvailabilityLifetimeInSeconds(): number;
    set taskAvailabilityLifetimeInSeconds(value: number);
    resetTaskAvailabilityLifetimeInSeconds(): void;
    get taskAvailabilityLifetimeInSecondsInput(): number;
    private _taskCount?;
    get taskCount(): number;
    set taskCount(value: number);
    get taskCountInput(): number;
    private _taskDescription?;
    get taskDescription(): string;
    set taskDescription(value: string);
    get taskDescriptionInput(): string;
    private _taskKeywords?;
    get taskKeywords(): string[];
    set taskKeywords(value: string[]);
    resetTaskKeywords(): void;
    get taskKeywordsInput(): string[];
    private _taskTimeLimitInSeconds?;
    get taskTimeLimitInSeconds(): number;
    set taskTimeLimitInSeconds(value: number);
    resetTaskTimeLimitInSeconds(): void;
    get taskTimeLimitInSecondsInput(): number;
    private _taskTitle?;
    get taskTitle(): string;
    set taskTitle(value: string);
    get taskTitleInput(): string;
    private _workteamArn?;
    get workteamArn(): string;
    set workteamArn(value: string);
    get workteamArnInput(): string;
    private _publicWorkforceTaskPrice;
    get publicWorkforceTaskPrice(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference;
    putPublicWorkforceTaskPrice(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice): void;
    resetPublicWorkforceTaskPrice(): void;
    get publicWorkforceTaskPriceInput(): SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
}
export interface SagemakerFlowDefinitionHumanLoopRequestSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}
    */
    readonly awsManagedHumanLoopRequestSource: string;
}
export declare function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference | SagemakerFlowDefinitionHumanLoopRequestSource): any;
export declare class SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFlowDefinitionHumanLoopRequestSource | undefined;
    set internalValue(value: SagemakerFlowDefinitionHumanLoopRequestSource | undefined);
    private _awsManagedHumanLoopRequestSource?;
    get awsManagedHumanLoopRequestSource(): string;
    set awsManagedHumanLoopRequestSource(value: string);
    get awsManagedHumanLoopRequestSourceInput(): string;
}
export interface SagemakerFlowDefinitionOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#kms_key_id SagemakerFlowDefinition#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#s3_output_path SagemakerFlowDefinition#s3_output_path}
    */
    readonly s3OutputPath: string;
}
export declare function sagemakerFlowDefinitionOutputConfigToTerraform(struct?: SagemakerFlowDefinitionOutputConfigOutputReference | SagemakerFlowDefinitionOutputConfig): any;
export declare class SagemakerFlowDefinitionOutputConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerFlowDefinitionOutputConfig | undefined;
    set internalValue(value: SagemakerFlowDefinitionOutputConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    get s3OutputPathInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition}
*/
export declare class SagemakerFlowDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerFlowDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerFlowDefinitionConfig);
    get arn(): string;
    private _flowDefinitionName?;
    get flowDefinitionName(): string;
    set flowDefinitionName(value: string);
    get flowDefinitionNameInput(): string;
    get id(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
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
    private _humanLoopActivationConfig;
    get humanLoopActivationConfig(): SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference;
    putHumanLoopActivationConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfig): void;
    resetHumanLoopActivationConfig(): void;
    get humanLoopActivationConfigInput(): SagemakerFlowDefinitionHumanLoopActivationConfig;
    private _humanLoopConfig;
    get humanLoopConfig(): SagemakerFlowDefinitionHumanLoopConfigOutputReference;
    putHumanLoopConfig(value: SagemakerFlowDefinitionHumanLoopConfig): void;
    get humanLoopConfigInput(): SagemakerFlowDefinitionHumanLoopConfig;
    private _humanLoopRequestSource;
    get humanLoopRequestSource(): SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference;
    putHumanLoopRequestSource(value: SagemakerFlowDefinitionHumanLoopRequestSource): void;
    resetHumanLoopRequestSource(): void;
    get humanLoopRequestSourceInput(): SagemakerFlowDefinitionHumanLoopRequestSource;
    private _outputConfig;
    get outputConfig(): SagemakerFlowDefinitionOutputConfigOutputReference;
    putOutputConfig(value: SagemakerFlowDefinitionOutputConfig): void;
    get outputConfigInput(): SagemakerFlowDefinitionOutputConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-flow-definition.d.ts.map