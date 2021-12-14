import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Streaming for Kafka
*/
export interface MskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cluster_name MskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enhanced_monitoring MskCluster#enhanced_monitoring}
    */
    readonly enhancedMonitoring?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#kafka_version MskCluster#kafka_version}
    */
    readonly kafkaVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#number_of_broker_nodes MskCluster#number_of_broker_nodes}
    */
    readonly numberOfBrokerNodes: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags MskCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags_all MskCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * broker_node_group_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_node_group_info MskCluster#broker_node_group_info}
    */
    readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo;
    /**
    * client_authentication block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_authentication MskCluster#client_authentication}
    */
    readonly clientAuthentication?: MskClusterClientAuthentication;
    /**
    * configuration_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#configuration_info MskCluster#configuration_info}
    */
    readonly configurationInfo?: MskClusterConfigurationInfo;
    /**
    * encryption_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_info MskCluster#encryption_info}
    */
    readonly encryptionInfo?: MskClusterEncryptionInfo;
    /**
    * logging_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#logging_info MskCluster#logging_info}
    */
    readonly loggingInfo?: MskClusterLoggingInfo;
    /**
    * open_monitoring block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#open_monitoring MskCluster#open_monitoring}
    */
    readonly openMonitoring?: MskClusterOpenMonitoring;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#timeouts MskCluster#timeouts}
    */
    readonly timeouts?: MskClusterTimeouts;
}
export interface MskClusterBrokerNodeGroupInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#az_distribution MskCluster#az_distribution}
    */
    readonly azDistribution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_subnets MskCluster#client_subnets}
    */
    readonly clientSubnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#ebs_volume_size MskCluster#ebs_volume_size}
    */
    readonly ebsVolumeSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#instance_type MskCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#security_groups MskCluster#security_groups}
    */
    readonly securityGroups: string[];
}
export declare function mskClusterBrokerNodeGroupInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfoOutputReference | MskClusterBrokerNodeGroupInfo): any;
export declare class MskClusterBrokerNodeGroupInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterBrokerNodeGroupInfo | undefined;
    set internalValue(value: MskClusterBrokerNodeGroupInfo | undefined);
    private _azDistribution?;
    get azDistribution(): string;
    set azDistribution(value: string);
    resetAzDistribution(): void;
    get azDistributionInput(): string;
    private _clientSubnets?;
    get clientSubnets(): string[];
    set clientSubnets(value: string[]);
    get clientSubnetsInput(): string[];
    private _ebsVolumeSize?;
    get ebsVolumeSize(): number;
    set ebsVolumeSize(value: number);
    get ebsVolumeSizeInput(): number;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    get securityGroupsInput(): string[];
}
export interface MskClusterClientAuthenticationSasl {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#iam MskCluster#iam}
    */
    readonly iam?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#scram MskCluster#scram}
    */
    readonly scram?: boolean | cdktf.IResolvable;
}
export declare function mskClusterClientAuthenticationSaslToTerraform(struct?: MskClusterClientAuthenticationSaslOutputReference | MskClusterClientAuthenticationSasl): any;
export declare class MskClusterClientAuthenticationSaslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterClientAuthenticationSasl | undefined;
    set internalValue(value: MskClusterClientAuthenticationSasl | undefined);
    private _iam?;
    get iam(): boolean | cdktf.IResolvable;
    set iam(value: boolean | cdktf.IResolvable);
    resetIam(): void;
    get iamInput(): boolean | cdktf.IResolvable;
    private _scram?;
    get scram(): boolean | cdktf.IResolvable;
    set scram(value: boolean | cdktf.IResolvable);
    resetScram(): void;
    get scramInput(): boolean | cdktf.IResolvable;
}
export interface MskClusterClientAuthenticationTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#certificate_authority_arns MskCluster#certificate_authority_arns}
    */
    readonly certificateAuthorityArns?: string[];
}
export declare function mskClusterClientAuthenticationTlsToTerraform(struct?: MskClusterClientAuthenticationTlsOutputReference | MskClusterClientAuthenticationTls): any;
export declare class MskClusterClientAuthenticationTlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterClientAuthenticationTls | undefined;
    set internalValue(value: MskClusterClientAuthenticationTls | undefined);
    private _certificateAuthorityArns?;
    get certificateAuthorityArns(): string[];
    set certificateAuthorityArns(value: string[]);
    resetCertificateAuthorityArns(): void;
    get certificateAuthorityArnsInput(): string[];
}
export interface MskClusterClientAuthentication {
    /**
    * sasl block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#sasl MskCluster#sasl}
    */
    readonly sasl?: MskClusterClientAuthenticationSasl;
    /**
    * tls block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tls MskCluster#tls}
    */
    readonly tls?: MskClusterClientAuthenticationTls;
}
export declare function mskClusterClientAuthenticationToTerraform(struct?: MskClusterClientAuthenticationOutputReference | MskClusterClientAuthentication): any;
export declare class MskClusterClientAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterClientAuthentication | undefined;
    set internalValue(value: MskClusterClientAuthentication | undefined);
    private _sasl;
    get sasl(): MskClusterClientAuthenticationSaslOutputReference;
    putSasl(value: MskClusterClientAuthenticationSasl): void;
    resetSasl(): void;
    get saslInput(): MskClusterClientAuthenticationSasl;
    private _tls;
    get tls(): MskClusterClientAuthenticationTlsOutputReference;
    putTls(value: MskClusterClientAuthenticationTls): void;
    resetTls(): void;
    get tlsInput(): MskClusterClientAuthenticationTls;
}
export interface MskClusterConfigurationInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#arn MskCluster#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#revision MskCluster#revision}
    */
    readonly revision: number;
}
export declare function mskClusterConfigurationInfoToTerraform(struct?: MskClusterConfigurationInfoOutputReference | MskClusterConfigurationInfo): any;
export declare class MskClusterConfigurationInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterConfigurationInfo | undefined;
    set internalValue(value: MskClusterConfigurationInfo | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _revision?;
    get revision(): number;
    set revision(value: number);
    get revisionInput(): number;
}
export interface MskClusterEncryptionInfoEncryptionInTransit {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_broker MskCluster#client_broker}
    */
    readonly clientBroker?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#in_cluster MskCluster#in_cluster}
    */
    readonly inCluster?: boolean | cdktf.IResolvable;
}
export declare function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransitOutputReference | MskClusterEncryptionInfoEncryptionInTransit): any;
export declare class MskClusterEncryptionInfoEncryptionInTransitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterEncryptionInfoEncryptionInTransit | undefined;
    set internalValue(value: MskClusterEncryptionInfoEncryptionInTransit | undefined);
    private _clientBroker?;
    get clientBroker(): string;
    set clientBroker(value: string);
    resetClientBroker(): void;
    get clientBrokerInput(): string;
    private _inCluster?;
    get inCluster(): boolean | cdktf.IResolvable;
    set inCluster(value: boolean | cdktf.IResolvable);
    resetInCluster(): void;
    get inClusterInput(): boolean | cdktf.IResolvable;
}
export interface MskClusterEncryptionInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}
    */
    readonly encryptionAtRestKmsKeyArn?: string;
    /**
    * encryption_in_transit block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_in_transit MskCluster#encryption_in_transit}
    */
    readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit;
}
export declare function mskClusterEncryptionInfoToTerraform(struct?: MskClusterEncryptionInfoOutputReference | MskClusterEncryptionInfo): any;
export declare class MskClusterEncryptionInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterEncryptionInfo | undefined;
    set internalValue(value: MskClusterEncryptionInfo | undefined);
    private _encryptionAtRestKmsKeyArn?;
    get encryptionAtRestKmsKeyArn(): string;
    set encryptionAtRestKmsKeyArn(value: string);
    resetEncryptionAtRestKmsKeyArn(): void;
    get encryptionAtRestKmsKeyArnInput(): string;
    private _encryptionInTransit;
    get encryptionInTransit(): MskClusterEncryptionInfoEncryptionInTransitOutputReference;
    putEncryptionInTransit(value: MskClusterEncryptionInfoEncryptionInTransit): void;
    resetEncryptionInTransit(): void;
    get encryptionInTransitInput(): MskClusterEncryptionInfoEncryptionInTransit;
}
export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#log_group MskCluster#log_group}
    */
    readonly logGroup?: string;
}
export declare function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference | MskClusterLoggingInfoBrokerLogsCloudwatchLogs): any;
export declare class MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    private _logGroup?;
    get logGroup(): string;
    set logGroup(value: string);
    resetLogGroup(): void;
    get logGroupInput(): string;
}
export interface MskClusterLoggingInfoBrokerLogsFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#delivery_stream MskCluster#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehoseOutputReference | MskClusterLoggingInfoBrokerLogsFirehose): any;
export declare class MskClusterLoggingInfoBrokerLogsFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterLoggingInfoBrokerLogsFirehose | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogsFirehose | undefined);
    private _deliveryStream?;
    get deliveryStream(): string;
    set deliveryStream(value: string);
    resetDeliveryStream(): void;
    get deliveryStreamInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface MskClusterLoggingInfoBrokerLogsS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#bucket MskCluster#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prefix MskCluster#prefix}
    */
    readonly prefix?: string;
}
export declare function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3OutputReference | MskClusterLoggingInfoBrokerLogsS3): any;
export declare class MskClusterLoggingInfoBrokerLogsS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterLoggingInfoBrokerLogsS3 | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogsS3 | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
export interface MskClusterLoggingInfoBrokerLogs {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cloudwatch_logs MskCluster#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#firehose MskCluster#firehose}
    */
    readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#s3 MskCluster#s3}
    */
    readonly s3?: MskClusterLoggingInfoBrokerLogsS3;
}
export declare function mskClusterLoggingInfoBrokerLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsOutputReference | MskClusterLoggingInfoBrokerLogs): any;
export declare class MskClusterLoggingInfoBrokerLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterLoggingInfoBrokerLogs | undefined;
    set internalValue(value: MskClusterLoggingInfoBrokerLogs | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
    private _firehose;
    get firehose(): MskClusterLoggingInfoBrokerLogsFirehoseOutputReference;
    putFirehose(value: MskClusterLoggingInfoBrokerLogsFirehose): void;
    resetFirehose(): void;
    get firehoseInput(): MskClusterLoggingInfoBrokerLogsFirehose;
    private _s3;
    get s3(): MskClusterLoggingInfoBrokerLogsS3OutputReference;
    putS3(value: MskClusterLoggingInfoBrokerLogsS3): void;
    resetS3(): void;
    get s3Input(): MskClusterLoggingInfoBrokerLogsS3;
}
export interface MskClusterLoggingInfo {
    /**
    * broker_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_logs MskCluster#broker_logs}
    */
    readonly brokerLogs: MskClusterLoggingInfoBrokerLogs;
}
export declare function mskClusterLoggingInfoToTerraform(struct?: MskClusterLoggingInfoOutputReference | MskClusterLoggingInfo): any;
export declare class MskClusterLoggingInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterLoggingInfo | undefined;
    set internalValue(value: MskClusterLoggingInfo | undefined);
    private _brokerLogs;
    get brokerLogs(): MskClusterLoggingInfoBrokerLogsOutputReference;
    putBrokerLogs(value: MskClusterLoggingInfoBrokerLogs): void;
    get brokerLogsInput(): MskClusterLoggingInfoBrokerLogs;
}
export interface MskClusterOpenMonitoringPrometheusJmxExporter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
}
export declare function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporterOutputReference | MskClusterOpenMonitoringPrometheusJmxExporter): any;
export declare class MskClusterOpenMonitoringPrometheusJmxExporterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterOpenMonitoringPrometheusJmxExporter | undefined;
    set internalValue(value: MskClusterOpenMonitoringPrometheusJmxExporter | undefined);
    private _enabledInBroker?;
    get enabledInBroker(): boolean | cdktf.IResolvable;
    set enabledInBroker(value: boolean | cdktf.IResolvable);
    get enabledInBrokerInput(): boolean | cdktf.IResolvable;
}
export interface MskClusterOpenMonitoringPrometheusNodeExporter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
}
export declare function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporterOutputReference | MskClusterOpenMonitoringPrometheusNodeExporter): any;
export declare class MskClusterOpenMonitoringPrometheusNodeExporterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterOpenMonitoringPrometheusNodeExporter | undefined;
    set internalValue(value: MskClusterOpenMonitoringPrometheusNodeExporter | undefined);
    private _enabledInBroker?;
    get enabledInBroker(): boolean | cdktf.IResolvable;
    set enabledInBroker(value: boolean | cdktf.IResolvable);
    get enabledInBrokerInput(): boolean | cdktf.IResolvable;
}
export interface MskClusterOpenMonitoringPrometheus {
    /**
    * jmx_exporter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#jmx_exporter MskCluster#jmx_exporter}
    */
    readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter;
    /**
    * node_exporter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#node_exporter MskCluster#node_exporter}
    */
    readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter;
}
export declare function mskClusterOpenMonitoringPrometheusToTerraform(struct?: MskClusterOpenMonitoringPrometheusOutputReference | MskClusterOpenMonitoringPrometheus): any;
export declare class MskClusterOpenMonitoringPrometheusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterOpenMonitoringPrometheus | undefined;
    set internalValue(value: MskClusterOpenMonitoringPrometheus | undefined);
    private _jmxExporter;
    get jmxExporter(): MskClusterOpenMonitoringPrometheusJmxExporterOutputReference;
    putJmxExporter(value: MskClusterOpenMonitoringPrometheusJmxExporter): void;
    resetJmxExporter(): void;
    get jmxExporterInput(): MskClusterOpenMonitoringPrometheusJmxExporter;
    private _nodeExporter;
    get nodeExporter(): MskClusterOpenMonitoringPrometheusNodeExporterOutputReference;
    putNodeExporter(value: MskClusterOpenMonitoringPrometheusNodeExporter): void;
    resetNodeExporter(): void;
    get nodeExporterInput(): MskClusterOpenMonitoringPrometheusNodeExporter;
}
export interface MskClusterOpenMonitoring {
    /**
    * prometheus block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prometheus MskCluster#prometheus}
    */
    readonly prometheus: MskClusterOpenMonitoringPrometheus;
}
export declare function mskClusterOpenMonitoringToTerraform(struct?: MskClusterOpenMonitoringOutputReference | MskClusterOpenMonitoring): any;
export declare class MskClusterOpenMonitoringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterOpenMonitoring | undefined;
    set internalValue(value: MskClusterOpenMonitoring | undefined);
    private _prometheus;
    get prometheus(): MskClusterOpenMonitoringPrometheusOutputReference;
    putPrometheus(value: MskClusterOpenMonitoringPrometheus): void;
    get prometheusInput(): MskClusterOpenMonitoringPrometheus;
}
export interface MskClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#create MskCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#delete MskCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#update MskCluster#update}
    */
    readonly update?: string;
}
export declare function mskClusterTimeoutsToTerraform(struct?: MskClusterTimeoutsOutputReference | MskClusterTimeouts): any;
export declare class MskClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): MskClusterTimeouts | undefined;
    set internalValue(value: MskClusterTimeouts | undefined);
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
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster}
*/
export declare class MskCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskClusterConfig
    */
    constructor(scope: Construct, id: string, config: MskClusterConfig);
    get arn(): string;
    get bootstrapBrokers(): string;
    get bootstrapBrokersSaslIam(): string;
    get bootstrapBrokersSaslScram(): string;
    get bootstrapBrokersTls(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get currentVersion(): string;
    private _enhancedMonitoring?;
    get enhancedMonitoring(): string;
    set enhancedMonitoring(value: string);
    resetEnhancedMonitoring(): void;
    get enhancedMonitoringInput(): string;
    get id(): string;
    private _kafkaVersion?;
    get kafkaVersion(): string;
    set kafkaVersion(value: string);
    get kafkaVersionInput(): string;
    private _numberOfBrokerNodes?;
    get numberOfBrokerNodes(): number;
    set numberOfBrokerNodes(value: number);
    get numberOfBrokerNodesInput(): number;
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
    get zookeeperConnectString(): string;
    get zookeeperConnectStringTls(): string;
    private _brokerNodeGroupInfo;
    get brokerNodeGroupInfo(): MskClusterBrokerNodeGroupInfoOutputReference;
    putBrokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo): void;
    get brokerNodeGroupInfoInput(): MskClusterBrokerNodeGroupInfo;
    private _clientAuthentication;
    get clientAuthentication(): MskClusterClientAuthenticationOutputReference;
    putClientAuthentication(value: MskClusterClientAuthentication): void;
    resetClientAuthentication(): void;
    get clientAuthenticationInput(): MskClusterClientAuthentication;
    private _configurationInfo;
    get configurationInfo(): MskClusterConfigurationInfoOutputReference;
    putConfigurationInfo(value: MskClusterConfigurationInfo): void;
    resetConfigurationInfo(): void;
    get configurationInfoInput(): MskClusterConfigurationInfo;
    private _encryptionInfo;
    get encryptionInfo(): MskClusterEncryptionInfoOutputReference;
    putEncryptionInfo(value: MskClusterEncryptionInfo): void;
    resetEncryptionInfo(): void;
    get encryptionInfoInput(): MskClusterEncryptionInfo;
    private _loggingInfo;
    get loggingInfo(): MskClusterLoggingInfoOutputReference;
    putLoggingInfo(value: MskClusterLoggingInfo): void;
    resetLoggingInfo(): void;
    get loggingInfoInput(): MskClusterLoggingInfo;
    private _openMonitoring;
    get openMonitoring(): MskClusterOpenMonitoringOutputReference;
    putOpenMonitoring(value: MskClusterOpenMonitoring): void;
    resetOpenMonitoring(): void;
    get openMonitoringInput(): MskClusterOpenMonitoring;
    private _timeouts;
    get timeouts(): MskClusterTimeoutsOutputReference;
    putTimeouts(value: MskClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): MskClusterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=msk-cluster.d.ts.map