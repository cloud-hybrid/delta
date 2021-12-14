import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html#db_instance_identifier DataAwsDbInstance#db_instance_identifier}
    */
    readonly dbInstanceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html#tags DataAwsDbInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance}
*/
export declare class DataAwsDbInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDbInstanceConfig);
    get address(): string;
    get allocatedStorage(): number;
    get autoMinorVersionUpgrade(): any;
    get availabilityZone(): string;
    get backupRetentionPeriod(): number;
    get caCertIdentifier(): string;
    get dbClusterIdentifier(): string;
    get dbInstanceArn(): string;
    get dbInstanceClass(): string;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    get dbInstanceIdentifierInput(): string;
    get dbInstancePort(): number;
    get dbName(): string;
    get dbParameterGroups(): string[];
    get dbSecurityGroups(): string[];
    get dbSubnetGroup(): string;
    get enabledCloudwatchLogsExports(): string[];
    get endpoint(): string;
    get engine(): string;
    get engineVersion(): string;
    get hostedZoneId(): string;
    get id(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    get masterUsername(): string;
    get monitoringInterval(): number;
    get monitoringRoleArn(): string;
    get multiAz(): any;
    get optionGroupMemberships(): string[];
    get port(): number;
    get preferredBackupWindow(): string;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): any;
    get replicateSourceDb(): string;
    get resourceId(): string;
    get storageEncrypted(): any;
    get storageType(): string;
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
    get timezone(): string;
    get vpcSecurityGroups(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-db-instance.d.ts.map