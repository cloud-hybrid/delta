import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DynamoDB
*/
export interface DynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#billing_mode DynamodbTable#billing_mode}
    */
    readonly billingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#hash_key DynamodbTable#hash_key}
    */
    readonly hashKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}
    */
    readonly rangeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#read_capacity DynamodbTable#read_capacity}
    */
    readonly readCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#stream_enabled DynamodbTable#stream_enabled}
    */
    readonly streamEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#stream_view_type DynamodbTable#stream_view_type}
    */
    readonly streamViewType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#table_class DynamodbTable#table_class}
    */
    readonly tableClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#tags DynamodbTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#tags_all DynamodbTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#write_capacity DynamodbTable#write_capacity}
    */
    readonly writeCapacity?: number;
    /**
    * attribute block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#attribute DynamodbTable#attribute}
    */
    readonly attribute: DynamodbTableAttribute[];
    /**
    * global_secondary_index block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#global_secondary_index DynamodbTable#global_secondary_index}
    */
    readonly globalSecondaryIndex?: DynamodbTableGlobalSecondaryIndex[];
    /**
    * local_secondary_index block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#local_secondary_index DynamodbTable#local_secondary_index}
    */
    readonly localSecondaryIndex?: DynamodbTableLocalSecondaryIndex[];
    /**
    * point_in_time_recovery block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#point_in_time_recovery DynamodbTable#point_in_time_recovery}
    */
    readonly pointInTimeRecovery?: DynamodbTablePointInTimeRecovery;
    /**
    * replica block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#replica DynamodbTable#replica}
    */
    readonly replica?: DynamodbTableReplica[];
    /**
    * server_side_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#server_side_encryption DynamodbTable#server_side_encryption}
    */
    readonly serverSideEncryption?: DynamodbTableServerSideEncryption;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#timeouts DynamodbTable#timeouts}
    */
    readonly timeouts?: DynamodbTableTimeouts;
    /**
    * ttl block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#ttl DynamodbTable#ttl}
    */
    readonly ttl?: DynamodbTableTtl;
}
export interface DynamodbTableAttribute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#type DynamodbTable#type}
    */
    readonly type: string;
}
export declare function dynamodbTableAttributeToTerraform(struct?: DynamodbTableAttribute): any;
export interface DynamodbTableGlobalSecondaryIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#hash_key DynamodbTable#hash_key}
    */
    readonly hashKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#non_key_attributes DynamodbTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#projection_type DynamodbTable#projection_type}
    */
    readonly projectionType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}
    */
    readonly rangeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#read_capacity DynamodbTable#read_capacity}
    */
    readonly readCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#write_capacity DynamodbTable#write_capacity}
    */
    readonly writeCapacity?: number;
}
export declare function dynamodbTableGlobalSecondaryIndexToTerraform(struct?: DynamodbTableGlobalSecondaryIndex): any;
export interface DynamodbTableLocalSecondaryIndex {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#name DynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#non_key_attributes DynamodbTable#non_key_attributes}
    */
    readonly nonKeyAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#projection_type DynamodbTable#projection_type}
    */
    readonly projectionType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#range_key DynamodbTable#range_key}
    */
    readonly rangeKey: string;
}
export declare function dynamodbTableLocalSecondaryIndexToTerraform(struct?: DynamodbTableLocalSecondaryIndex): any;
export interface DynamodbTablePointInTimeRecovery {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function dynamodbTablePointInTimeRecoveryToTerraform(struct?: DynamodbTablePointInTimeRecoveryOutputReference | DynamodbTablePointInTimeRecovery): any;
export declare class DynamodbTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DynamodbTablePointInTimeRecovery | undefined;
    set internalValue(value: DynamodbTablePointInTimeRecovery | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface DynamodbTableReplica {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#region_name DynamodbTable#region_name}
    */
    readonly regionName: string;
}
export declare function dynamodbTableReplicaToTerraform(struct?: DynamodbTableReplica): any;
export interface DynamodbTableServerSideEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function dynamodbTableServerSideEncryptionToTerraform(struct?: DynamodbTableServerSideEncryptionOutputReference | DynamodbTableServerSideEncryption): any;
export declare class DynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DynamodbTableServerSideEncryption | undefined;
    set internalValue(value: DynamodbTableServerSideEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
}
export interface DynamodbTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#create DynamodbTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#delete DynamodbTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#update DynamodbTable#update}
    */
    readonly update?: string;
}
export declare function dynamodbTableTimeoutsToTerraform(struct?: DynamodbTableTimeoutsOutputReference | DynamodbTableTimeouts): any;
export declare class DynamodbTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DynamodbTableTimeouts | undefined;
    set internalValue(value: DynamodbTableTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
export interface DynamodbTableTtl {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#attribute_name DynamodbTable#attribute_name}
    */
    readonly attributeName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#enabled DynamodbTable#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html#kms_key_arn DynamodbTable#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function dynamodbTableTtlToTerraform(struct?: DynamodbTableTtlOutputReference | DynamodbTableTtl): any;
export declare class DynamodbTableTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DynamodbTableTtl | undefined;
    set internalValue(value: DynamodbTableTtl | undefined);
    private _attributeName?;
    get attributeName(): string;
    set attributeName(value: string);
    get attributeNameInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table}
*/
export declare class DynamodbTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table.html aws_dynamodb_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbTableConfig);
    get arn(): string;
    private _billingMode?;
    get billingMode(): string;
    set billingMode(value: string);
    resetBillingMode(): void;
    get billingModeInput(): string;
    private _hashKey?;
    get hashKey(): string;
    set hashKey(value: string);
    get hashKeyInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _rangeKey?;
    get rangeKey(): string;
    set rangeKey(value: string);
    resetRangeKey(): void;
    get rangeKeyInput(): string;
    private _readCapacity?;
    get readCapacity(): number;
    set readCapacity(value: number);
    resetReadCapacity(): void;
    get readCapacityInput(): number;
    get streamArn(): string;
    private _streamEnabled?;
    get streamEnabled(): boolean | cdktf.IResolvable;
    set streamEnabled(value: boolean | cdktf.IResolvable);
    resetStreamEnabled(): void;
    get streamEnabledInput(): boolean | cdktf.IResolvable;
    get streamLabel(): string;
    private _streamViewType?;
    get streamViewType(): string;
    set streamViewType(value: string);
    resetStreamViewType(): void;
    get streamViewTypeInput(): string;
    private _tableClass?;
    get tableClass(): string;
    set tableClass(value: string);
    resetTableClass(): void;
    get tableClassInput(): string;
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
    private _writeCapacity?;
    get writeCapacity(): number;
    set writeCapacity(value: number);
    resetWriteCapacity(): void;
    get writeCapacityInput(): number;
    private _attribute?;
    get attribute(): DynamodbTableAttribute[];
    set attribute(value: DynamodbTableAttribute[]);
    get attributeInput(): DynamodbTableAttribute[];
    private _globalSecondaryIndex?;
    get globalSecondaryIndex(): DynamodbTableGlobalSecondaryIndex[];
    set globalSecondaryIndex(value: DynamodbTableGlobalSecondaryIndex[]);
    resetGlobalSecondaryIndex(): void;
    get globalSecondaryIndexInput(): DynamodbTableGlobalSecondaryIndex[];
    private _localSecondaryIndex?;
    get localSecondaryIndex(): DynamodbTableLocalSecondaryIndex[];
    set localSecondaryIndex(value: DynamodbTableLocalSecondaryIndex[]);
    resetLocalSecondaryIndex(): void;
    get localSecondaryIndexInput(): DynamodbTableLocalSecondaryIndex[];
    private _pointInTimeRecovery;
    get pointInTimeRecovery(): DynamodbTablePointInTimeRecoveryOutputReference;
    putPointInTimeRecovery(value: DynamodbTablePointInTimeRecovery): void;
    resetPointInTimeRecovery(): void;
    get pointInTimeRecoveryInput(): DynamodbTablePointInTimeRecovery;
    private _replica?;
    get replica(): DynamodbTableReplica[];
    set replica(value: DynamodbTableReplica[]);
    resetReplica(): void;
    get replicaInput(): DynamodbTableReplica[];
    private _serverSideEncryption;
    get serverSideEncryption(): DynamodbTableServerSideEncryptionOutputReference;
    putServerSideEncryption(value: DynamodbTableServerSideEncryption): void;
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): DynamodbTableServerSideEncryption;
    private _timeouts;
    get timeouts(): DynamodbTableTimeoutsOutputReference;
    putTimeouts(value: DynamodbTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DynamodbTableTimeouts;
    private _ttl;
    get ttl(): DynamodbTableTtlOutputReference;
    putTtl(value: DynamodbTableTtl): void;
    resetTtl(): void;
    get ttlInput(): DynamodbTableTtl;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dynamodb-table.d.ts.map