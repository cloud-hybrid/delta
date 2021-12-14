import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3BucketReplicationConfigurationAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#bucket S3BucketReplicationConfigurationA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#role S3BucketReplicationConfigurationA#role}
    */
    readonly role: string;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#rule S3BucketReplicationConfigurationA#rule}
    */
    readonly rule: S3BucketReplicationConfigurationRule[];
}
export interface S3BucketReplicationConfigurationRuleDeleteMarkerReplication {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform(struct?: S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference | S3BucketReplicationConfigurationRuleDeleteMarkerReplication): any;
export declare class S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDeleteMarkerReplication | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDeleteMarkerReplication | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#owner S3BucketReplicationConfigurationA#owner}
    */
    readonly owner: string;
}
export declare function s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation): any;
export declare class S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation | undefined);
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string;
}
export interface S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}
    */
    readonly replicaKmsKeyId: string;
}
export declare function s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference | S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration): any;
export declare class S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration | undefined);
    private _replicaKmsKeyId?;
    get replicaKmsKeyId(): string;
    set replicaKmsKeyId(value: string);
    get replicaKmsKeyIdInput(): string;
}
export interface S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#minutes S3BucketReplicationConfigurationA#minutes}
    */
    readonly minutes: number;
}
export declare function s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference | S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold): any;
export declare class S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    get minutesInput(): number;
}
export interface S3BucketReplicationConfigurationRuleDestinationMetrics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
    /**
    * event_threshold block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#event_threshold S3BucketReplicationConfigurationA#event_threshold}
    */
    readonly eventThreshold?: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold;
}
export declare function s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference | S3BucketReplicationConfigurationRuleDestinationMetrics): any;
export declare class S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationMetrics | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationMetrics | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
    private _eventThreshold;
    get eventThreshold(): S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference;
    putEventThreshold(value: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold): void;
    resetEventThreshold(): void;
    get eventThresholdInput(): S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold;
}
export interface S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#minutes S3BucketReplicationConfigurationA#minutes}
    */
    readonly minutes: number;
}
export declare function s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime): any;
export declare class S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime | undefined);
    private _minutes?;
    get minutes(): number;
    set minutes(value: number);
    get minutesInput(): number;
}
export interface S3BucketReplicationConfigurationRuleDestinationReplicationTime {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
    /**
    * time block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#time S3BucketReplicationConfigurationA#time}
    */
    readonly time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime;
}
export declare function s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTime): any;
export declare class S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDestinationReplicationTime | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestinationReplicationTime | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
    private _time;
    get time(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference;
    putTime(value: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime): void;
    get timeInput(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime;
}
export interface S3BucketReplicationConfigurationRuleDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#account S3BucketReplicationConfigurationA#account}
    */
    readonly account?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#bucket S3BucketReplicationConfigurationA#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#storage_class S3BucketReplicationConfigurationA#storage_class}
    */
    readonly storageClass?: string;
    /**
    * access_control_translation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#access_control_translation S3BucketReplicationConfigurationA#access_control_translation}
    */
    readonly accessControlTranslation?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#encryption_configuration S3BucketReplicationConfigurationA#encryption_configuration}
    */
    readonly encryptionConfiguration?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration;
    /**
    * metrics block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#metrics S3BucketReplicationConfigurationA#metrics}
    */
    readonly metrics?: S3BucketReplicationConfigurationRuleDestinationMetrics;
    /**
    * replication_time block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#replication_time S3BucketReplicationConfigurationA#replication_time}
    */
    readonly replicationTime?: S3BucketReplicationConfigurationRuleDestinationReplicationTime;
}
export declare function s3BucketReplicationConfigurationRuleDestinationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationOutputReference | S3BucketReplicationConfigurationRuleDestination): any;
export declare class S3BucketReplicationConfigurationRuleDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleDestination | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleDestination | undefined);
    private _account?;
    get account(): string;
    set account(value: string);
    resetAccount(): void;
    get accountInput(): string;
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _storageClass?;
    get storageClass(): string;
    set storageClass(value: string);
    resetStorageClass(): void;
    get storageClassInput(): string;
    private _accessControlTranslation;
    get accessControlTranslation(): S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference;
    putAccessControlTranslation(value: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation): void;
    resetAccessControlTranslation(): void;
    get accessControlTranslationInput(): S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation;
    private _encryptionConfiguration;
    get encryptionConfiguration(): S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration;
    private _metrics;
    get metrics(): S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference;
    putMetrics(value: S3BucketReplicationConfigurationRuleDestinationMetrics): void;
    resetMetrics(): void;
    get metricsInput(): S3BucketReplicationConfigurationRuleDestinationMetrics;
    private _replicationTime;
    get replicationTime(): S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference;
    putReplicationTime(value: S3BucketReplicationConfigurationRuleDestinationReplicationTime): void;
    resetReplicationTime(): void;
    get replicationTimeInput(): S3BucketReplicationConfigurationRuleDestinationReplicationTime;
}
export interface S3BucketReplicationConfigurationRuleExistingObjectReplication {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform(struct?: S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference | S3BucketReplicationConfigurationRuleExistingObjectReplication): any;
export declare class S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleExistingObjectReplication | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleExistingObjectReplication | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface S3BucketReplicationConfigurationRuleFilterAnd {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#prefix S3BucketReplicationConfigurationA#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#tags S3BucketReplicationConfigurationA#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare function s3BucketReplicationConfigurationRuleFilterAndToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterAndOutputReference | S3BucketReplicationConfigurationRuleFilterAnd): any;
export declare class S3BucketReplicationConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleFilterAnd | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleFilterAnd | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
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
}
export interface S3BucketReplicationConfigurationRuleFilterTag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#key S3BucketReplicationConfigurationA#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#value S3BucketReplicationConfigurationA#value}
    */
    readonly value: string;
}
export declare function s3BucketReplicationConfigurationRuleFilterTagToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterTagOutputReference | S3BucketReplicationConfigurationRuleFilterTag): any;
export declare class S3BucketReplicationConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleFilterTag | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleFilterTag | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
export interface S3BucketReplicationConfigurationRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#prefix S3BucketReplicationConfigurationA#prefix}
    */
    readonly prefix?: string;
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#and S3BucketReplicationConfigurationA#and}
    */
    readonly and?: S3BucketReplicationConfigurationRuleFilterAnd;
    /**
    * tag block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#tag S3BucketReplicationConfigurationA#tag}
    */
    readonly tag?: S3BucketReplicationConfigurationRuleFilterTag;
}
export declare function s3BucketReplicationConfigurationRuleFilterToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterOutputReference | S3BucketReplicationConfigurationRuleFilter): any;
export declare class S3BucketReplicationConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleFilter | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleFilter | undefined);
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _and;
    get and(): S3BucketReplicationConfigurationRuleFilterAndOutputReference;
    putAnd(value: S3BucketReplicationConfigurationRuleFilterAnd): void;
    resetAnd(): void;
    get andInput(): S3BucketReplicationConfigurationRuleFilterAnd;
    private _tag;
    get tag(): S3BucketReplicationConfigurationRuleFilterTagOutputReference;
    putTag(value: S3BucketReplicationConfigurationRuleFilterTag): void;
    resetTag(): void;
    get tagInput(): S3BucketReplicationConfigurationRuleFilterTag;
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications): any;
export declare class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
}
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects): any;
export declare class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string;
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteria {
    /**
    * replica_modifications block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#replica_modifications S3BucketReplicationConfigurationA#replica_modifications}
    */
    readonly replicaModifications?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications;
    /**
    * sse_kms_encrypted_objects block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#sse_kms_encrypted_objects S3BucketReplicationConfigurationA#sse_kms_encrypted_objects}
    */
    readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export declare function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteria): any;
export declare class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): S3BucketReplicationConfigurationRuleSourceSelectionCriteria | undefined;
    set internalValue(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteria | undefined);
    private _replicaModifications;
    get replicaModifications(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference;
    putReplicaModifications(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications): void;
    resetReplicaModifications(): void;
    get replicaModificationsInput(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications;
    private _sseKmsEncryptedObjects;
    get sseKmsEncryptedObjects(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;
    putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects): void;
    resetSseKmsEncryptedObjects(): void;
    get sseKmsEncryptedObjectsInput(): S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
}
export interface S3BucketReplicationConfigurationRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#id S3BucketReplicationConfigurationA#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#prefix S3BucketReplicationConfigurationA#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#priority S3BucketReplicationConfigurationA#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
    */
    readonly status: string;
    /**
    * delete_marker_replication block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#delete_marker_replication S3BucketReplicationConfigurationA#delete_marker_replication}
    */
    readonly deleteMarkerReplication?: S3BucketReplicationConfigurationRuleDeleteMarkerReplication;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#destination S3BucketReplicationConfigurationA#destination}
    */
    readonly destination: S3BucketReplicationConfigurationRuleDestination;
    /**
    * existing_object_replication block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#existing_object_replication S3BucketReplicationConfigurationA#existing_object_replication}
    */
    readonly existingObjectReplication?: S3BucketReplicationConfigurationRuleExistingObjectReplication;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#filter S3BucketReplicationConfigurationA#filter}
    */
    readonly filter?: S3BucketReplicationConfigurationRuleFilter;
    /**
    * source_selection_criteria block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#source_selection_criteria S3BucketReplicationConfigurationA#source_selection_criteria}
    */
    readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRuleSourceSelectionCriteria;
}
export declare function s3BucketReplicationConfigurationRuleToTerraform(struct?: S3BucketReplicationConfigurationRule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html aws_s3_bucket_replication_configuration}
*/
export declare class S3BucketReplicationConfigurationA extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html aws_s3_bucket_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3BucketReplicationConfigurationAConfig
    */
    constructor(scope: Construct, id: string, config: S3BucketReplicationConfigurationAConfig);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    get id(): string;
    private _role?;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _rule?;
    get rule(): S3BucketReplicationConfigurationRule[];
    set rule(value: S3BucketReplicationConfigurationRule[]);
    get ruleInput(): S3BucketReplicationConfigurationRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-bucket-replication-configuration.d.ts.map