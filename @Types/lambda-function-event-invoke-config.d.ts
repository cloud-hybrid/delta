import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaFunctionEventInvokeConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#function_name LambdaFunctionEventInvokeConfig#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#qualifier LambdaFunctionEventInvokeConfig#qualifier}
    */
    readonly qualifier?: string;
    /**
    * destination_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination_config LambdaFunctionEventInvokeConfig#destination_config}
    */
    readonly destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}
    */
    readonly destination: string;
}
export declare function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any;
export declare class LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined;
    set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}
    */
    readonly destination: string;
}
export declare function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any;
export declare class LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined;
    set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfig {
    /**
    * on_failure block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_failure LambdaFunctionEventInvokeConfig#on_failure}
    */
    readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
    /**
    * on_success block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_success LambdaFunctionEventInvokeConfig#on_success}
    */
    readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
}
export declare function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference | LambdaFunctionEventInvokeConfigDestinationConfig): any;
export declare class LambdaFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfig | undefined;
    set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfig | undefined);
    private _onFailure;
    get onFailure(): LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference;
    putOnFailure(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): void;
    resetOnFailure(): void;
    get onFailureInput(): LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
    private _onSuccess;
    get onSuccess(): LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference;
    putOnSuccess(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): void;
    resetOnSuccess(): void;
    get onSuccessInput(): LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config}
*/
export declare class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionEventInvokeConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaFunctionEventInvokeConfigConfig);
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get id(): string;
    private _maximumEventAgeInSeconds?;
    get maximumEventAgeInSeconds(): number;
    set maximumEventAgeInSeconds(value: number);
    resetMaximumEventAgeInSeconds(): void;
    get maximumEventAgeInSecondsInput(): number;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string;
    private _destinationConfig;
    get destinationConfig(): LambdaFunctionEventInvokeConfigDestinationConfigOutputReference;
    putDestinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig): void;
    resetDestinationConfig(): void;
    get destinationConfigInput(): LambdaFunctionEventInvokeConfigDestinationConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-function-event-invoke-config.d.ts.map