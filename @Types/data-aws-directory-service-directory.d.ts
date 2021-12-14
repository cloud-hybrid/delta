import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Directory Service
*/
export interface DataAwsDirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html#directory_id DataAwsDirectoryServiceDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html#tags DataAwsDirectoryServiceDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsDirectoryServiceDirectoryConnectSettings extends cdktf.ComplexComputedList {
    get availabilityZones(): string[];
    get connectIps(): string[];
    get customerDnsIps(): string[];
    get customerUsername(): string;
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare class DataAwsDirectoryServiceDirectoryVpcSettings extends cdktf.ComplexComputedList {
    get availabilityZones(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory}
*/
export declare class DataAwsDirectoryServiceDirectory extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory.html aws_directory_service_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDirectoryServiceDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDirectoryServiceDirectoryConfig);
    get accessUrl(): string;
    get alias(): string;
    connectSettings(index: string): DataAwsDirectoryServiceDirectoryConnectSettings;
    get description(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string;
    get dnsIpAddresses(): string[];
    get edition(): string;
    get enableSso(): any;
    get id(): string;
    get name(): string;
    get securityGroupId(): string;
    get shortName(): string;
    get size(): string;
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
    get type(): string;
    vpcSettings(index: string): DataAwsDirectoryServiceDirectoryVpcSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-directory-service-directory.d.ts.map