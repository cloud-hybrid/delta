import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaProvisionedConcurrencyConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#function_name LambdaProvisionedConcurrencyConfig#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}
    */
    readonly provisionedConcurrentExecutions: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#qualifier LambdaProvisionedConcurrencyConfig#qualifier}
    */
    readonly qualifier: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#timeouts LambdaProvisionedConcurrencyConfig#timeouts}
    */
    readonly timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
}
export interface LambdaProvisionedConcurrencyConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#create LambdaProvisionedConcurrencyConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#update LambdaProvisionedConcurrencyConfig#update}
    */
    readonly update?: string;
}
export declare function lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(struct?: LambdaProvisionedConcurrencyConfigTimeoutsOutputReference | LambdaProvisionedConcurrencyConfigTimeouts): any;
export declare class LambdaProvisionedConcurrencyConfigTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaProvisionedConcurrencyConfigTimeouts | undefined;
    set internalValue(value: LambdaProvisionedConcurrencyConfigTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config}
*/
export declare class LambdaProvisionedConcurrencyConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaProvisionedConcurrencyConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig);
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get id(): string;
    private _provisionedConcurrentExecutions?;
    get provisionedConcurrentExecutions(): number;
    set provisionedConcurrentExecutions(value: number);
    get provisionedConcurrentExecutionsInput(): number;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    get qualifierInput(): string;
    private _timeouts;
    get timeouts(): LambdaProvisionedConcurrencyConfigTimeoutsOutputReference;
    putTimeouts(value: LambdaProvisionedConcurrencyConfigTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LambdaProvisionedConcurrencyConfigTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-provisioned-concurrency-config.d.ts.map