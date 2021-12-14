import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#description SagemakerDeviceFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#device_fleet_name SagemakerDeviceFleet#device_fleet_name}
    */
    readonly deviceFleetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}
    */
    readonly enableIotRoleAlias?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#role_arn SagemakerDeviceFleet#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#tags SagemakerDeviceFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#tags_all SagemakerDeviceFleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * output_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#output_config SagemakerDeviceFleet#output_config}
    */
    readonly outputConfig: SagemakerDeviceFleetOutputConfig;
}
export interface SagemakerDeviceFleetOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#kms_key_id SagemakerDeviceFleet#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html#s3_output_location SagemakerDeviceFleet#s3_output_location}
    */
    readonly s3OutputLocation: string;
}
export declare function sagemakerDeviceFleetOutputConfigToTerraform(struct?: SagemakerDeviceFleetOutputConfigOutputReference | SagemakerDeviceFleetOutputConfig): any;
export declare class SagemakerDeviceFleetOutputConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerDeviceFleetOutputConfig | undefined;
    set internalValue(value: SagemakerDeviceFleetOutputConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _s3OutputLocation?;
    get s3OutputLocation(): string;
    set s3OutputLocation(value: string);
    get s3OutputLocationInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet}
*/
export declare class SagemakerDeviceFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_device_fleet.html aws_sagemaker_device_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDeviceFleetConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDeviceFleetConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _deviceFleetName?;
    get deviceFleetName(): string;
    set deviceFleetName(value: string);
    get deviceFleetNameInput(): string;
    private _enableIotRoleAlias?;
    get enableIotRoleAlias(): boolean | cdktf.IResolvable;
    set enableIotRoleAlias(value: boolean | cdktf.IResolvable);
    resetEnableIotRoleAlias(): void;
    get enableIotRoleAliasInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get iotRoleAlias(): string;
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
    private _outputConfig;
    get outputConfig(): SagemakerDeviceFleetOutputConfigOutputReference;
    putOutputConfig(value: SagemakerDeviceFleetOutputConfig): void;
    get outputConfigInput(): SagemakerDeviceFleetOutputConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-device-fleet.d.ts.map