import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#name ConfigDeliveryChannel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}
    */
    readonly s3KmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * snapshot_delivery_properties block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}
    */
    readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties;
}
export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#delivery_frequency ConfigDeliveryChannel#delivery_frequency}
    */
    readonly deliveryFrequency?: string;
}
export declare function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference | ConfigDeliveryChannelSnapshotDeliveryProperties): any;
export declare class ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigDeliveryChannelSnapshotDeliveryProperties | undefined;
    set internalValue(value: ConfigDeliveryChannelSnapshotDeliveryProperties | undefined);
    private _deliveryFrequency?;
    get deliveryFrequency(): string;
    set deliveryFrequency(value: string);
    resetDeliveryFrequency(): void;
    get deliveryFrequencyInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel}
*/
export declare class ConfigDeliveryChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigDeliveryChannelConfig
    */
    constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string;
    private _s3KmsKeyArn?;
    get s3KmsKeyArn(): string;
    set s3KmsKeyArn(value: string);
    resetS3KmsKeyArn(): void;
    get s3KmsKeyArnInput(): string;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string;
    private _snapshotDeliveryProperties;
    get snapshotDeliveryProperties(): ConfigDeliveryChannelSnapshotDeliveryPropertiesOutputReference;
    putSnapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties): void;
    resetSnapshotDeliveryProperties(): void;
    get snapshotDeliveryPropertiesInput(): ConfigDeliveryChannelSnapshotDeliveryProperties;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-delivery-channel.d.ts.map