import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFormation
*/
export interface CloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#execution_role_arn CloudformationType#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#schema_handler_package CloudformationType#schema_handler_package}
    */
    readonly schemaHandlerPackage: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type CloudformationType#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type_name CloudformationType#type_name}
    */
    readonly typeName: string;
    /**
    * logging_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#logging_config CloudformationType#logging_config}
    */
    readonly loggingConfig?: CloudformationTypeLoggingConfig;
}
export interface CloudformationTypeLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_group_name CloudformationType#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_role_arn CloudformationType#log_role_arn}
    */
    readonly logRoleArn: string;
}
export declare function cloudformationTypeLoggingConfigToTerraform(struct?: CloudformationTypeLoggingConfigOutputReference | CloudformationTypeLoggingConfig): any;
export declare class CloudformationTypeLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudformationTypeLoggingConfig | undefined;
    set internalValue(value: CloudformationTypeLoggingConfig | undefined);
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string;
    private _logRoleArn?;
    get logRoleArn(): string;
    set logRoleArn(value: string);
    get logRoleArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type}
*/
export declare class CloudformationType extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationTypeConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationTypeConfig);
    get arn(): string;
    get defaultVersionId(): string;
    get deprecatedStatus(): string;
    get description(): string;
    get documentationUrl(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string;
    get id(): string;
    get isDefaultVersion(): any;
    get provisioningType(): string;
    get schema(): string;
    private _schemaHandlerPackage?;
    get schemaHandlerPackage(): string;
    set schemaHandlerPackage(value: string);
    get schemaHandlerPackageInput(): string;
    get sourceUrl(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    get typeArn(): string;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    get typeNameInput(): string;
    get versionId(): string;
    get visibility(): string;
    private _loggingConfig;
    get loggingConfig(): CloudformationTypeLoggingConfigOutputReference;
    putLoggingConfig(value: CloudformationTypeLoggingConfig): void;
    resetLoggingConfig(): void;
    get loggingConfigInput(): CloudformationTypeLoggingConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudformation-type.d.ts.map