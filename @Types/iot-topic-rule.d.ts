import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS IoT
*/
export interface IotTopicRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#description IotTopicRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#enabled IotTopicRule#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#name IotTopicRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql IotTopicRule#sql}
    */
    readonly sql: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql_version IotTopicRule#sql_version}
    */
    readonly sqlVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags IotTopicRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags_all IotTopicRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * cloudwatch_alarm block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
    /**
    * cloudwatch_metric block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
    /**
    * dynamodb block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
    */
    readonly dynamodb?: IotTopicRuleDynamodb[];
    /**
    * dynamodbv2 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
    */
    readonly dynamodbv2?: IotTopicRuleDynamodbv2[];
    /**
    * elasticsearch block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
    */
    readonly elasticsearch?: IotTopicRuleElasticsearch[];
    /**
    * error_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#error_action IotTopicRule#error_action}
    */
    readonly errorAction?: IotTopicRuleErrorAction;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
    */
    readonly firehose?: IotTopicRuleFirehose[];
    /**
    * iot_analytics block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotTopicRuleIotAnalytics[];
    /**
    * iot_events block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
    */
    readonly iotEvents?: IotTopicRuleIotEvents[];
    /**
    * kinesis block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
    */
    readonly kinesis?: IotTopicRuleKinesis[];
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
    */
    readonly lambda?: IotTopicRuleLambda[];
    /**
    * republish block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
    */
    readonly republish?: IotTopicRuleRepublish[];
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
    */
    readonly s3?: IotTopicRuleS3[];
    /**
    * sns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
    */
    readonly sns?: IotTopicRuleSns[];
    /**
    * sqs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
    */
    readonly sqs?: IotTopicRuleSqs[];
    /**
    * step_functions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
    */
    readonly stepFunctions?: IotTopicRuleStepFunctions[];
}
export interface IotTopicRuleCloudwatchAlarm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
    */
    readonly stateReason: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
    */
    readonly stateValue: string;
}
export declare function iotTopicRuleCloudwatchAlarmToTerraform(struct?: IotTopicRuleCloudwatchAlarm): any;
export interface IotTopicRuleCloudwatchMetric {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
    */
    readonly metricNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
    */
    readonly metricUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
    */
    readonly metricValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleCloudwatchMetricToTerraform(struct?: IotTopicRuleCloudwatchMetric): any;
export interface IotTopicRuleDynamodb {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
    */
    readonly hashKeyField: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
    */
    readonly hashKeyValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}
    */
    readonly operation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleDynamodbToTerraform(struct?: IotTopicRuleDynamodb): any;
export interface IotTopicRuleDynamodbv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleDynamodbv2PutItemToTerraform(struct?: IotTopicRuleDynamodbv2PutItemOutputReference | IotTopicRuleDynamodbv2PutItem): any;
export declare class IotTopicRuleDynamodbv2PutItemOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleDynamodbv2PutItem | undefined;
    set internalValue(value: IotTopicRuleDynamodbv2PutItem | undefined);
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
}
export interface IotTopicRuleDynamodbv2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * put_item block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
    */
    readonly putItem?: IotTopicRuleDynamodbv2PutItem;
}
export declare function iotTopicRuleDynamodbv2ToTerraform(struct?: IotTopicRuleDynamodbv2): any;
export interface IotTopicRuleElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}
    */
    readonly index: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}
    */
    readonly type: string;
}
export declare function iotTopicRuleElasticsearchToTerraform(struct?: IotTopicRuleElasticsearch): any;
export interface IotTopicRuleErrorActionCloudwatchAlarm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
    */
    readonly stateReason: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
    */
    readonly stateValue: string;
}
export declare function iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarmOutputReference | IotTopicRuleErrorActionCloudwatchAlarm): any;
export declare class IotTopicRuleErrorActionCloudwatchAlarmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionCloudwatchAlarm | undefined;
    set internalValue(value: IotTopicRuleErrorActionCloudwatchAlarm | undefined);
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _stateReason?;
    get stateReason(): string;
    set stateReason(value: string);
    get stateReasonInput(): string;
    private _stateValue?;
    get stateValue(): string;
    set stateValue(value: string);
    get stateValueInput(): string;
}
export interface IotTopicRuleErrorActionCloudwatchMetric {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
    */
    readonly metricNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
    */
    readonly metricUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
    */
    readonly metricValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetricOutputReference | IotTopicRuleErrorActionCloudwatchMetric): any;
export declare class IotTopicRuleErrorActionCloudwatchMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionCloudwatchMetric | undefined;
    set internalValue(value: IotTopicRuleErrorActionCloudwatchMetric | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string;
    private _metricNamespace?;
    get metricNamespace(): string;
    set metricNamespace(value: string);
    get metricNamespaceInput(): string;
    private _metricTimestamp?;
    get metricTimestamp(): string;
    set metricTimestamp(value: string);
    resetMetricTimestamp(): void;
    get metricTimestampInput(): string;
    private _metricUnit?;
    get metricUnit(): string;
    set metricUnit(value: string);
    get metricUnitInput(): string;
    private _metricValue?;
    get metricValue(): string;
    set metricValue(value: string);
    get metricValueInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface IotTopicRuleErrorActionDynamodb {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
    */
    readonly hashKeyField: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
    */
    readonly hashKeyValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}
    */
    readonly operation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleErrorActionDynamodbToTerraform(struct?: IotTopicRuleErrorActionDynamodbOutputReference | IotTopicRuleErrorActionDynamodb): any;
export declare class IotTopicRuleErrorActionDynamodbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionDynamodb | undefined;
    set internalValue(value: IotTopicRuleErrorActionDynamodb | undefined);
    private _hashKeyField?;
    get hashKeyField(): string;
    set hashKeyField(value: string);
    get hashKeyFieldInput(): string;
    private _hashKeyType?;
    get hashKeyType(): string;
    set hashKeyType(value: string);
    resetHashKeyType(): void;
    get hashKeyTypeInput(): string;
    private _hashKeyValue?;
    get hashKeyValue(): string;
    set hashKeyValue(value: string);
    get hashKeyValueInput(): string;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    resetOperation(): void;
    get operationInput(): string;
    private _payloadField?;
    get payloadField(): string;
    set payloadField(value: string);
    resetPayloadField(): void;
    get payloadFieldInput(): string;
    private _rangeKeyField?;
    get rangeKeyField(): string;
    set rangeKeyField(value: string);
    resetRangeKeyField(): void;
    get rangeKeyFieldInput(): string;
    private _rangeKeyType?;
    get rangeKeyType(): string;
    set rangeKeyType(value: string);
    resetRangeKeyType(): void;
    get rangeKeyTypeInput(): string;
    private _rangeKeyValue?;
    get rangeKeyValue(): string;
    set rangeKeyValue(value: string);
    resetRangeKeyValue(): void;
    get rangeKeyValueInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
}
export interface IotTopicRuleErrorActionDynamodbv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItemOutputReference | IotTopicRuleErrorActionDynamodbv2PutItem): any;
export declare class IotTopicRuleErrorActionDynamodbv2PutItemOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionDynamodbv2PutItem | undefined;
    set internalValue(value: IotTopicRuleErrorActionDynamodbv2PutItem | undefined);
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string;
}
export interface IotTopicRuleErrorActionDynamodbv2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * put_item block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
    */
    readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem;
}
export declare function iotTopicRuleErrorActionDynamodbv2ToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2OutputReference | IotTopicRuleErrorActionDynamodbv2): any;
export declare class IotTopicRuleErrorActionDynamodbv2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionDynamodbv2 | undefined;
    set internalValue(value: IotTopicRuleErrorActionDynamodbv2 | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _putItem;
    get putItem(): IotTopicRuleErrorActionDynamodbv2PutItemOutputReference;
    putPutItem(value: IotTopicRuleErrorActionDynamodbv2PutItem): void;
    resetPutItem(): void;
    get putItemInput(): IotTopicRuleErrorActionDynamodbv2PutItem;
}
export interface IotTopicRuleErrorActionElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}
    */
    readonly index: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}
    */
    readonly type: string;
}
export declare function iotTopicRuleErrorActionElasticsearchToTerraform(struct?: IotTopicRuleErrorActionElasticsearchOutputReference | IotTopicRuleErrorActionElasticsearch): any;
export declare class IotTopicRuleErrorActionElasticsearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionElasticsearch | undefined;
    set internalValue(value: IotTopicRuleErrorActionElasticsearch | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _index?;
    get index(): string;
    set index(value: string);
    get indexInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface IotTopicRuleErrorActionFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}
    */
    readonly separator?: string;
}
export declare function iotTopicRuleErrorActionFirehoseToTerraform(struct?: IotTopicRuleErrorActionFirehoseOutputReference | IotTopicRuleErrorActionFirehose): any;
export declare class IotTopicRuleErrorActionFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionFirehose | undefined;
    set internalValue(value: IotTopicRuleErrorActionFirehose | undefined);
    private _deliveryStreamName?;
    get deliveryStreamName(): string;
    set deliveryStreamName(value: string);
    get deliveryStreamNameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _separator?;
    get separator(): string;
    set separator(value: string);
    resetSeparator(): void;
    get separatorInput(): string;
}
export interface IotTopicRuleErrorActionIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleErrorActionIotAnalyticsOutputReference | IotTopicRuleErrorActionIotAnalytics): any;
export declare class IotTopicRuleErrorActionIotAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionIotAnalytics | undefined;
    set internalValue(value: IotTopicRuleErrorActionIotAnalytics | undefined);
    private _channelName?;
    get channelName(): string;
    set channelName(value: string);
    get channelNameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface IotTopicRuleErrorActionIotEvents {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
    */
    readonly inputName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionIotEventsToTerraform(struct?: IotTopicRuleErrorActionIotEventsOutputReference | IotTopicRuleErrorActionIotEvents): any;
export declare class IotTopicRuleErrorActionIotEventsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionIotEvents | undefined;
    set internalValue(value: IotTopicRuleErrorActionIotEvents | undefined);
    private _inputName?;
    get inputName(): string;
    set inputName(value: string);
    get inputNameInput(): string;
    private _messageId?;
    get messageId(): string;
    set messageId(value: string);
    resetMessageId(): void;
    get messageIdInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface IotTopicRuleErrorActionKinesis {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
    */
    readonly streamName: string;
}
export declare function iotTopicRuleErrorActionKinesisToTerraform(struct?: IotTopicRuleErrorActionKinesisOutputReference | IotTopicRuleErrorActionKinesis): any;
export declare class IotTopicRuleErrorActionKinesisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionKinesis | undefined;
    set internalValue(value: IotTopicRuleErrorActionKinesis | undefined);
    private _partitionKey?;
    get partitionKey(): string;
    set partitionKey(value: string);
    resetPartitionKey(): void;
    get partitionKeyInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    get streamNameInput(): string;
}
export interface IotTopicRuleErrorActionLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn: string;
}
export declare function iotTopicRuleErrorActionLambdaToTerraform(struct?: IotTopicRuleErrorActionLambdaOutputReference | IotTopicRuleErrorActionLambda): any;
export declare class IotTopicRuleErrorActionLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionLambda | undefined;
    set internalValue(value: IotTopicRuleErrorActionLambda | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string;
}
export interface IotTopicRuleErrorActionRepublish {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}
    */
    readonly topic: string;
}
export declare function iotTopicRuleErrorActionRepublishToTerraform(struct?: IotTopicRuleErrorActionRepublishOutputReference | IotTopicRuleErrorActionRepublish): any;
export declare class IotTopicRuleErrorActionRepublishOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionRepublish | undefined;
    set internalValue(value: IotTopicRuleErrorActionRepublish | undefined);
    private _qos?;
    get qos(): number;
    set qos(value: number);
    resetQos(): void;
    get qosInput(): number;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _topic?;
    get topic(): string;
    set topic(value: string);
    get topicInput(): string;
}
export interface IotTopicRuleErrorActionS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionS3ToTerraform(struct?: IotTopicRuleErrorActionS3OutputReference | IotTopicRuleErrorActionS3): any;
export declare class IotTopicRuleErrorActionS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionS3 | undefined;
    set internalValue(value: IotTopicRuleErrorActionS3 | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
export interface IotTopicRuleErrorActionSns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
    */
    readonly targetArn: string;
}
export declare function iotTopicRuleErrorActionSnsToTerraform(struct?: IotTopicRuleErrorActionSnsOutputReference | IotTopicRuleErrorActionSns): any;
export declare class IotTopicRuleErrorActionSnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionSns | undefined;
    set internalValue(value: IotTopicRuleErrorActionSns | undefined);
    private _messageFormat?;
    get messageFormat(): string;
    set messageFormat(value: string);
    resetMessageFormat(): void;
    get messageFormatInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string;
}
export interface IotTopicRuleErrorActionSqs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
    */
    readonly queueUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}
    */
    readonly useBase64: boolean | cdktf.IResolvable;
}
export declare function iotTopicRuleErrorActionSqsToTerraform(struct?: IotTopicRuleErrorActionSqsOutputReference | IotTopicRuleErrorActionSqs): any;
export declare class IotTopicRuleErrorActionSqsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionSqs | undefined;
    set internalValue(value: IotTopicRuleErrorActionSqs | undefined);
    private _queueUrl?;
    get queueUrl(): string;
    set queueUrl(value: string);
    get queueUrlInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _useBase64?;
    get useBase64(): boolean | cdktf.IResolvable;
    set useBase64(value: boolean | cdktf.IResolvable);
    get useBase64Input(): boolean | cdktf.IResolvable;
}
export interface IotTopicRuleErrorActionStepFunctions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
    */
    readonly stateMachineName: string;
}
export declare function iotTopicRuleErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleErrorActionStepFunctionsOutputReference | IotTopicRuleErrorActionStepFunctions): any;
export declare class IotTopicRuleErrorActionStepFunctionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorActionStepFunctions | undefined;
    set internalValue(value: IotTopicRuleErrorActionStepFunctions | undefined);
    private _executionNamePrefix?;
    get executionNamePrefix(): string;
    set executionNamePrefix(value: string);
    resetExecutionNamePrefix(): void;
    get executionNamePrefixInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _stateMachineName?;
    get stateMachineName(): string;
    set stateMachineName(value: string);
    get stateMachineNameInput(): string;
}
export interface IotTopicRuleErrorAction {
    /**
    * cloudwatch_alarm block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm;
    /**
    * cloudwatch_metric block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric;
    /**
    * dynamodb block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
    */
    readonly dynamodb?: IotTopicRuleErrorActionDynamodb;
    /**
    * dynamodbv2 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
    */
    readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2;
    /**
    * elasticsearch block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
    */
    readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
    */
    readonly firehose?: IotTopicRuleErrorActionFirehose;
    /**
    * iot_analytics block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics;
    /**
    * iot_events block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
    */
    readonly iotEvents?: IotTopicRuleErrorActionIotEvents;
    /**
    * kinesis block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
    */
    readonly kinesis?: IotTopicRuleErrorActionKinesis;
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
    */
    readonly lambda?: IotTopicRuleErrorActionLambda;
    /**
    * republish block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
    */
    readonly republish?: IotTopicRuleErrorActionRepublish;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
    */
    readonly s3?: IotTopicRuleErrorActionS3;
    /**
    * sns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
    */
    readonly sns?: IotTopicRuleErrorActionSns;
    /**
    * sqs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
    */
    readonly sqs?: IotTopicRuleErrorActionSqs;
    /**
    * step_functions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
    */
    readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions;
}
export declare function iotTopicRuleErrorActionToTerraform(struct?: IotTopicRuleErrorActionOutputReference | IotTopicRuleErrorAction): any;
export declare class IotTopicRuleErrorActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): IotTopicRuleErrorAction | undefined;
    set internalValue(value: IotTopicRuleErrorAction | undefined);
    private _cloudwatchAlarm;
    get cloudwatchAlarm(): IotTopicRuleErrorActionCloudwatchAlarmOutputReference;
    putCloudwatchAlarm(value: IotTopicRuleErrorActionCloudwatchAlarm): void;
    resetCloudwatchAlarm(): void;
    get cloudwatchAlarmInput(): IotTopicRuleErrorActionCloudwatchAlarm;
    private _cloudwatchMetric;
    get cloudwatchMetric(): IotTopicRuleErrorActionCloudwatchMetricOutputReference;
    putCloudwatchMetric(value: IotTopicRuleErrorActionCloudwatchMetric): void;
    resetCloudwatchMetric(): void;
    get cloudwatchMetricInput(): IotTopicRuleErrorActionCloudwatchMetric;
    private _dynamodb;
    get dynamodb(): IotTopicRuleErrorActionDynamodbOutputReference;
    putDynamodb(value: IotTopicRuleErrorActionDynamodb): void;
    resetDynamodb(): void;
    get dynamodbInput(): IotTopicRuleErrorActionDynamodb;
    private _dynamodbv2;
    get dynamodbv2(): IotTopicRuleErrorActionDynamodbv2OutputReference;
    putDynamodbv2(value: IotTopicRuleErrorActionDynamodbv2): void;
    resetDynamodbv2(): void;
    get dynamodbv2Input(): IotTopicRuleErrorActionDynamodbv2;
    private _elasticsearch;
    get elasticsearch(): IotTopicRuleErrorActionElasticsearchOutputReference;
    putElasticsearch(value: IotTopicRuleErrorActionElasticsearch): void;
    resetElasticsearch(): void;
    get elasticsearchInput(): IotTopicRuleErrorActionElasticsearch;
    private _firehose;
    get firehose(): IotTopicRuleErrorActionFirehoseOutputReference;
    putFirehose(value: IotTopicRuleErrorActionFirehose): void;
    resetFirehose(): void;
    get firehoseInput(): IotTopicRuleErrorActionFirehose;
    private _iotAnalytics;
    get iotAnalytics(): IotTopicRuleErrorActionIotAnalyticsOutputReference;
    putIotAnalytics(value: IotTopicRuleErrorActionIotAnalytics): void;
    resetIotAnalytics(): void;
    get iotAnalyticsInput(): IotTopicRuleErrorActionIotAnalytics;
    private _iotEvents;
    get iotEvents(): IotTopicRuleErrorActionIotEventsOutputReference;
    putIotEvents(value: IotTopicRuleErrorActionIotEvents): void;
    resetIotEvents(): void;
    get iotEventsInput(): IotTopicRuleErrorActionIotEvents;
    private _kinesis;
    get kinesis(): IotTopicRuleErrorActionKinesisOutputReference;
    putKinesis(value: IotTopicRuleErrorActionKinesis): void;
    resetKinesis(): void;
    get kinesisInput(): IotTopicRuleErrorActionKinesis;
    private _lambda;
    get lambda(): IotTopicRuleErrorActionLambdaOutputReference;
    putLambda(value: IotTopicRuleErrorActionLambda): void;
    resetLambda(): void;
    get lambdaInput(): IotTopicRuleErrorActionLambda;
    private _republish;
    get republish(): IotTopicRuleErrorActionRepublishOutputReference;
    putRepublish(value: IotTopicRuleErrorActionRepublish): void;
    resetRepublish(): void;
    get republishInput(): IotTopicRuleErrorActionRepublish;
    private _s3;
    get s3(): IotTopicRuleErrorActionS3OutputReference;
    putS3(value: IotTopicRuleErrorActionS3): void;
    resetS3(): void;
    get s3Input(): IotTopicRuleErrorActionS3;
    private _sns;
    get sns(): IotTopicRuleErrorActionSnsOutputReference;
    putSns(value: IotTopicRuleErrorActionSns): void;
    resetSns(): void;
    get snsInput(): IotTopicRuleErrorActionSns;
    private _sqs;
    get sqs(): IotTopicRuleErrorActionSqsOutputReference;
    putSqs(value: IotTopicRuleErrorActionSqs): void;
    resetSqs(): void;
    get sqsInput(): IotTopicRuleErrorActionSqs;
    private _stepFunctions;
    get stepFunctions(): IotTopicRuleErrorActionStepFunctionsOutputReference;
    putStepFunctions(value: IotTopicRuleErrorActionStepFunctions): void;
    resetStepFunctions(): void;
    get stepFunctionsInput(): IotTopicRuleErrorActionStepFunctions;
}
export interface IotTopicRuleFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}
    */
    readonly separator?: string;
}
export declare function iotTopicRuleFirehoseToTerraform(struct?: IotTopicRuleFirehose): any;
export interface IotTopicRuleIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleIotAnalyticsToTerraform(struct?: IotTopicRuleIotAnalytics): any;
export interface IotTopicRuleIotEvents {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
    */
    readonly inputName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleIotEventsToTerraform(struct?: IotTopicRuleIotEvents): any;
export interface IotTopicRuleKinesis {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
    */
    readonly streamName: string;
}
export declare function iotTopicRuleKinesisToTerraform(struct?: IotTopicRuleKinesis): any;
export interface IotTopicRuleLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn: string;
}
export declare function iotTopicRuleLambdaToTerraform(struct?: IotTopicRuleLambda): any;
export interface IotTopicRuleRepublish {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}
    */
    readonly topic: string;
}
export declare function iotTopicRuleRepublishToTerraform(struct?: IotTopicRuleRepublish): any;
export interface IotTopicRuleS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleS3ToTerraform(struct?: IotTopicRuleS3): any;
export interface IotTopicRuleSns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
    */
    readonly targetArn: string;
}
export declare function iotTopicRuleSnsToTerraform(struct?: IotTopicRuleSns): any;
export interface IotTopicRuleSqs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
    */
    readonly queueUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}
    */
    readonly useBase64: boolean | cdktf.IResolvable;
}
export declare function iotTopicRuleSqsToTerraform(struct?: IotTopicRuleSqs): any;
export interface IotTopicRuleStepFunctions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
    */
    readonly stateMachineName: string;
}
export declare function iotTopicRuleStepFunctionsToTerraform(struct?: IotTopicRuleStepFunctions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule}
*/
export declare class IotTopicRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotTopicRuleConfig
    */
    constructor(scope: Construct, id: string, config: IotTopicRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _sql?;
    get sql(): string;
    set sql(value: string);
    get sqlInput(): string;
    private _sqlVersion?;
    get sqlVersion(): string;
    set sqlVersion(value: string);
    get sqlVersionInput(): string;
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
    private _cloudwatchAlarm?;
    get cloudwatchAlarm(): IotTopicRuleCloudwatchAlarm[];
    set cloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[]);
    resetCloudwatchAlarm(): void;
    get cloudwatchAlarmInput(): IotTopicRuleCloudwatchAlarm[];
    private _cloudwatchMetric?;
    get cloudwatchMetric(): IotTopicRuleCloudwatchMetric[];
    set cloudwatchMetric(value: IotTopicRuleCloudwatchMetric[]);
    resetCloudwatchMetric(): void;
    get cloudwatchMetricInput(): IotTopicRuleCloudwatchMetric[];
    private _dynamodb?;
    get dynamodb(): IotTopicRuleDynamodb[];
    set dynamodb(value: IotTopicRuleDynamodb[]);
    resetDynamodb(): void;
    get dynamodbInput(): IotTopicRuleDynamodb[];
    private _dynamodbv2?;
    get dynamodbv2(): IotTopicRuleDynamodbv2[];
    set dynamodbv2(value: IotTopicRuleDynamodbv2[]);
    resetDynamodbv2(): void;
    get dynamodbv2Input(): IotTopicRuleDynamodbv2[];
    private _elasticsearch?;
    get elasticsearch(): IotTopicRuleElasticsearch[];
    set elasticsearch(value: IotTopicRuleElasticsearch[]);
    resetElasticsearch(): void;
    get elasticsearchInput(): IotTopicRuleElasticsearch[];
    private _errorAction;
    get errorAction(): IotTopicRuleErrorActionOutputReference;
    putErrorAction(value: IotTopicRuleErrorAction): void;
    resetErrorAction(): void;
    get errorActionInput(): IotTopicRuleErrorAction;
    private _firehose?;
    get firehose(): IotTopicRuleFirehose[];
    set firehose(value: IotTopicRuleFirehose[]);
    resetFirehose(): void;
    get firehoseInput(): IotTopicRuleFirehose[];
    private _iotAnalytics?;
    get iotAnalytics(): IotTopicRuleIotAnalytics[];
    set iotAnalytics(value: IotTopicRuleIotAnalytics[]);
    resetIotAnalytics(): void;
    get iotAnalyticsInput(): IotTopicRuleIotAnalytics[];
    private _iotEvents?;
    get iotEvents(): IotTopicRuleIotEvents[];
    set iotEvents(value: IotTopicRuleIotEvents[]);
    resetIotEvents(): void;
    get iotEventsInput(): IotTopicRuleIotEvents[];
    private _kinesis?;
    get kinesis(): IotTopicRuleKinesis[];
    set kinesis(value: IotTopicRuleKinesis[]);
    resetKinesis(): void;
    get kinesisInput(): IotTopicRuleKinesis[];
    private _lambda?;
    get lambda(): IotTopicRuleLambda[];
    set lambda(value: IotTopicRuleLambda[]);
    resetLambda(): void;
    get lambdaInput(): IotTopicRuleLambda[];
    private _republish?;
    get republish(): IotTopicRuleRepublish[];
    set republish(value: IotTopicRuleRepublish[]);
    resetRepublish(): void;
    get republishInput(): IotTopicRuleRepublish[];
    private _s3?;
    get s3(): IotTopicRuleS3[];
    set s3(value: IotTopicRuleS3[]);
    resetS3(): void;
    get s3Input(): IotTopicRuleS3[];
    private _sns?;
    get sns(): IotTopicRuleSns[];
    set sns(value: IotTopicRuleSns[]);
    resetSns(): void;
    get snsInput(): IotTopicRuleSns[];
    private _sqs?;
    get sqs(): IotTopicRuleSqs[];
    set sqs(value: IotTopicRuleSqs[]);
    resetSqs(): void;
    get sqsInput(): IotTopicRuleSqs[];
    private _stepFunctions?;
    get stepFunctions(): IotTopicRuleStepFunctions[];
    set stepFunctions(value: IotTopicRuleStepFunctions[]);
    resetStepFunctions(): void;
    get stepFunctionsInput(): IotTopicRuleStepFunctions[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iot-topic-rule.d.ts.map