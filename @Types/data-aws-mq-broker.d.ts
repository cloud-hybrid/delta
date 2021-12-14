import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Message Queue
*/
export interface DataAwsMqBrokerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#broker_id DataAwsMqBroker#broker_id}
    */
    readonly brokerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#broker_name DataAwsMqBroker#broker_name}
    */
    readonly brokerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html#tags DataAwsMqBroker#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsMqBrokerConfiguration extends cdktf.ComplexComputedList {
    get id(): string;
    get revision(): number;
}
export declare class DataAwsMqBrokerEncryptionOptions extends cdktf.ComplexComputedList {
    get kmsKeyId(): string;
    get useAwsOwnedKey(): any;
}
export declare class DataAwsMqBrokerInstances extends cdktf.ComplexComputedList {
    get consoleUrl(): string;
    get endpoints(): string[];
    get ipAddress(): string;
}
export declare class DataAwsMqBrokerLdapServerMetadata extends cdktf.ComplexComputedList {
    get hosts(): string[];
    get roleBase(): string;
    get roleName(): string;
    get roleSearchMatching(): string;
    get roleSearchSubtree(): any;
    get serviceAccountPassword(): string;
    get serviceAccountUsername(): string;
    get userBase(): string;
    get userRoleName(): string;
    get userSearchMatching(): string;
    get userSearchSubtree(): any;
}
export declare class DataAwsMqBrokerLogs extends cdktf.ComplexComputedList {
    get audit(): string;
    get general(): any;
}
export declare class DataAwsMqBrokerMaintenanceWindowStartTime extends cdktf.ComplexComputedList {
    get dayOfWeek(): string;
    get timeOfDay(): string;
    get timeZone(): string;
}
export declare class DataAwsMqBrokerUser extends cdktf.ComplexComputedList {
    get consoleAccess(): any;
    get groups(): string[];
    get username(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker}
*/
export declare class DataAwsMqBroker extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMqBrokerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsMqBrokerConfig);
    get arn(): string;
    get authenticationStrategy(): string;
    get autoMinorVersionUpgrade(): any;
    private _brokerId?;
    get brokerId(): string;
    set brokerId(value: string);
    resetBrokerId(): void;
    get brokerIdInput(): string;
    private _brokerName?;
    get brokerName(): string;
    set brokerName(value: string);
    resetBrokerName(): void;
    get brokerNameInput(): string;
    configuration(index: string): DataAwsMqBrokerConfiguration;
    get deploymentMode(): string;
    encryptionOptions(index: string): DataAwsMqBrokerEncryptionOptions;
    get engineType(): string;
    get engineVersion(): string;
    get hostInstanceType(): string;
    get id(): string;
    instances(index: string): DataAwsMqBrokerInstances;
    ldapServerMetadata(index: string): DataAwsMqBrokerLdapServerMetadata;
    logs(index: string): DataAwsMqBrokerLogs;
    maintenanceWindowStartTime(index: string): DataAwsMqBrokerMaintenanceWindowStartTime;
    get publiclyAccessible(): any;
    get securityGroups(): string[];
    get storageType(): string;
    get subnetIds(): string[];
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
    user(index: string): DataAwsMqBrokerUser;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-mq-broker.d.ts.map