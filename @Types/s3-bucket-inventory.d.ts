import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3BucketInventoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#enabled S3BucketInventory#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#included_object_versions S3BucketInventory#included_object_versions}
    */
    readonly includedObjectVersions: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#name S3BucketInventory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#optional_fields S3BucketInventory#optional_fields}
    */
    readonly optionalFields?: string[];
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#destination S3BucketInventory#destination}
    */
    readonly destination: S3BucketInventoryDestination;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#filter S3BucketInventory#filter}
    */
    readonly filter?: S3BucketInventoryFilter;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#schedule S3BucketInventory#schedule}
    */
    readonly schedule: S3BucketInventorySchedule;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#key_id S3BucketInventory#key_id}
    */
    readonly keyId: string;
}
export declare function s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference | S3BucketInventoryDestinationBucketEncryptionSseKms): any;
export declare class S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketInventoryDestinationBucketEncryptionSseKms | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucketEncryptionSseKms | undefined);
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
}
export declare function s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference | S3BucketInventoryDestinationBucketEncryptionSseS3): any;
export declare class S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined);
}
export interface S3BucketInventoryDestinationBucketEncryption {
    /**
    * sse_kms block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_kms S3BucketInventory#sse_kms}
    */
    readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms;
    /**
    * sse_s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_s3 S3BucketInventory#sse_s3}
    */
    readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3;
}
export declare function s3BucketInventoryDestinationBucketEncryptionToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionOutputReference | S3BucketInventoryDestinationBucketEncryption): any;
export declare class S3BucketInventoryDestinationBucketEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketInventoryDestinationBucketEncryption | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucketEncryption | undefined);
    private _sseKms;
    get sseKms(): S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference;
    putSseKms(value: S3BucketInventoryDestinationBucketEncryptionSseKms): void;
    resetSseKms(): void;
    get sseKmsInput(): S3BucketInventoryDestinationBucketEncryptionSseKms;
    private _sseS3;
    get sseS3(): S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference;
    putSseS3(value: S3BucketInventoryDestinationBucketEncryptionSseS3): void;
    resetSseS3(): void;
    get sseS3Input(): S3BucketInventoryDestinationBucketEncryptionSseS3;
}
export interface S3BucketInventoryDestinationBucket {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#account_id S3BucketInventory#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket_arn S3BucketInventory#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#format S3BucketInventory#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
    */
    readonly prefix?: string;
    /**
    * encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#encryption S3BucketInventory#encryption}
    */
    readonly encryption?: S3BucketInventoryDestinationBucketEncryption;
}
export declare function s3BucketInventoryDestinationBucketToTerraform(struct?: S3BucketInventoryDestinationBucketOutputReference | S3BucketInventoryDestinationBucket): any;
export declare class S3BucketInventoryDestinationBucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketInventoryDestinationBucket | undefined;
    set internalValue(value: S3BucketInventoryDestinationBucket | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _encryption;
    get encryption(): S3BucketInventoryDestinationBucketEncryptionOutputReference;
    putEncryption(value: S3BucketInventoryDestinationBucketEncryption): void;
    resetEncryption(): void;
    get encryptionInput(): S3BucketInventoryDestinationBucketEncryption;
}
export interface S3BucketInventoryDestination {
    /**
    * bucket block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
    */
    readonly bucket: S3BucketInventoryDestinationBucket;
}
export declare function s3BucketInventoryDestinationToTerraform(struct?: S3BucketInventoryDestinationOutputReference | S3BucketInventoryDestination): any;
export declare class S3BucketInventoryDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketInventoryDestination | undefined;
    set internalValue(value: S3BucketInventoryDestination | undefined);
    private _bucket;
    get bucket(): S3BucketInventoryDestinationBucketOutputReference;
    putBucket(value: S3BucketInventoryDestinationBucket): void;
    get bucketInput(): S3BucketInventoryDestinationBucket;
}
export interface S3BucketInventoryFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
    */
    readonly prefix?: string;
}
export declare function s3BucketInventoryFilterToTerraform(struct?: S3BucketInventoryFilterOutputReference | S3BucketInventoryFilter): any;
export declare class S3BucketInventoryFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketInventoryFilter | undefined;
    set internalValue(value: S3BucketInventoryFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
export interface S3BucketInventorySchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#frequency S3BucketInventory#frequency}
    */
    readonly frequency: string;
}
export declare function s3BucketInventoryScheduleToTerraform(struct?: S3BucketInventoryScheduleOutputReference | S3BucketInventorySchedule): any;
export declare class S3BucketInventoryScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketInventorySchedule | undefined;
    set internalValue(value: S3BucketInventorySchedule | undefined);
    private _frequency?;
    get frequency(): string;
    set frequency(value: string);
    get frequencyInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory}
*/
export declare class S3BucketInventory extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketInventoryConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketInventoryConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _includedObjectVersions?;
    get includedObjectVersions(): string;
    set includedObjectVersions(value: string);
    get includedObjectVersionsInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _optionalFields?;
    get optionalFields(): string[];
    set optionalFields(value: string[]);
    resetOptionalFields(): void;
    get optionalFieldsInput(): string[];
    private _destination;
    get destination(): S3BucketInventoryDestinationOutputReference;
    putDestination(value: S3BucketInventoryDestination): void;
    get destinationInput(): S3BucketInventoryDestination;
    private _filter;
    get filter(): S3BucketInventoryFilterOutputReference;
    putFilter(value: S3BucketInventoryFilter): void;
    resetFilter(): void;
    get filterInput(): S3BucketInventoryFilter;
    private _schedule;
    get schedule(): S3BucketInventoryScheduleOutputReference;
    putSchedule(value: S3BucketInventorySchedule): void;
    get scheduleInput(): S3BucketInventorySchedule;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-bucket-inventory.d.ts.map