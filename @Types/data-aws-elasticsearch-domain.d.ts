import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElasticSearch Service
*/
export interface DataAwsElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html#domain_name DataAwsElasticsearchDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html#tags DataAwsElasticsearchDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsElasticsearchDomainAdvancedSecurityOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get internalUserDatabaseEnabled(): any;
}
export declare class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration extends cdktf.ComplexComputedList {
    get unit(): string;
    get value(): number;
}
export declare class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule extends cdktf.ComplexComputedList {
    get cronExpressionForRecurrence(): string;
    get duration(): any;
    get startAt(): string;
}
export declare class DataAwsElasticsearchDomainAutoTuneOptions extends cdktf.ComplexComputedList {
    get desiredState(): string;
    get maintenanceSchedule(): any;
    get rollbackOnDisable(): string;
}
export declare class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig extends cdktf.ComplexComputedList {
    get availabilityZoneCount(): number;
}
export declare class DataAwsElasticsearchDomainClusterConfig extends cdktf.ComplexComputedList {
    get dedicatedMasterCount(): number;
    get dedicatedMasterEnabled(): any;
    get dedicatedMasterType(): string;
    get instanceCount(): number;
    get instanceType(): string;
    get warmCount(): number;
    get warmEnabled(): any;
    get warmType(): string;
    get zoneAwarenessConfig(): any;
    get zoneAwarenessEnabled(): any;
}
export declare class DataAwsElasticsearchDomainCognitoOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
    get identityPoolId(): string;
    get roleArn(): string;
    get userPoolId(): string;
}
export declare class DataAwsElasticsearchDomainEbsOptions extends cdktf.ComplexComputedList {
    get ebsEnabled(): any;
    get iops(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsElasticsearchDomainEncryptionAtRest extends cdktf.ComplexComputedList {
    get enabled(): any;
    get kmsKeyId(): string;
}
export declare class DataAwsElasticsearchDomainLogPublishingOptions extends cdktf.ComplexComputedList {
    get cloudwatchLogGroupArn(): string;
    get enabled(): any;
    get logType(): string;
}
export declare class DataAwsElasticsearchDomainNodeToNodeEncryption extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare class DataAwsElasticsearchDomainSnapshotOptions extends cdktf.ComplexComputedList {
    get automatedSnapshotStartHour(): number;
}
export declare class DataAwsElasticsearchDomainVpcOptions extends cdktf.ComplexComputedList {
    get availabilityZones(): string[];
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain}
*/
export declare class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticsearchDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticsearchDomainConfig);
    get accessPolicies(): string;
    advancedOptions(key: string): string;
    advancedSecurityOptions(index: string): DataAwsElasticsearchDomainAdvancedSecurityOptions;
    get arn(): string;
    autoTuneOptions(index: string): DataAwsElasticsearchDomainAutoTuneOptions;
    clusterConfig(index: string): DataAwsElasticsearchDomainClusterConfig;
    cognitoOptions(index: string): DataAwsElasticsearchDomainCognitoOptions;
    get created(): any;
    get deleted(): any;
    get domainId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    ebsOptions(index: string): DataAwsElasticsearchDomainEbsOptions;
    get elasticsearchVersion(): string;
    encryptionAtRest(index: string): DataAwsElasticsearchDomainEncryptionAtRest;
    get endpoint(): string;
    get id(): string;
    get kibanaEndpoint(): string;
    logPublishingOptions(index: string): DataAwsElasticsearchDomainLogPublishingOptions;
    nodeToNodeEncryption(index: string): DataAwsElasticsearchDomainNodeToNodeEncryption;
    get processing(): any;
    snapshotOptions(index: string): DataAwsElasticsearchDomainSnapshotOptions;
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
    vpcOptions(index: string): DataAwsElasticsearchDomainVpcOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-elasticsearch-domain.d.ts.map