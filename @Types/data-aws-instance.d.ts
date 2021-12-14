import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#get_password_data DataAwsInstance#get_password_data}
    */
    readonly fetchPasswordData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#get_user_data DataAwsInstance#get_user_data}
    */
    readonly fetchUserData?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#instance_id DataAwsInstance#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#instance_tags DataAwsInstance#instance_tags}
    */
    readonly instanceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#tags DataAwsInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#filter DataAwsInstance#filter}
    */
    readonly filter?: DataAwsInstanceFilter[];
}
export declare class DataAwsInstanceCreditSpecification extends cdktf.ComplexComputedList {
    get cpuCredits(): string;
}
export declare class DataAwsInstanceEbsBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get deviceName(): string;
    get encrypted(): any;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get tags(): any;
    get throughput(): number;
    get volumeId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsInstanceEnclaveOptions extends cdktf.ComplexComputedList {
    get enabled(): any;
}
export declare class DataAwsInstanceEphemeralBlockDevice extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get noDevice(): any;
    get virtualName(): string;
}
export declare class DataAwsInstanceMetadataOptions extends cdktf.ComplexComputedList {
    get httpEndpoint(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
}
export declare class DataAwsInstanceRootBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get deviceName(): string;
    get encrypted(): any;
    get iops(): number;
    get kmsKeyId(): string;
    get tags(): any;
    get throughput(): number;
    get volumeId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export interface DataAwsInstanceFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#name DataAwsInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#values DataAwsInstance#values}
    */
    readonly values: string[];
}
export declare function dataAwsInstanceFilterToTerraform(struct?: DataAwsInstanceFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance}
*/
export declare class DataAwsInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInstanceConfig);
    get ami(): string;
    get arn(): string;
    get associatePublicIpAddress(): any;
    get availabilityZone(): string;
    creditSpecification(index: string): DataAwsInstanceCreditSpecification;
    get disableApiTermination(): any;
    ebsBlockDevice(index: string): DataAwsInstanceEbsBlockDevice;
    get ebsOptimized(): any;
    enclaveOptions(index: string): DataAwsInstanceEnclaveOptions;
    ephemeralBlockDevice(index: string): DataAwsInstanceEphemeralBlockDevice;
    private _getPasswordData?;
    get fetchPasswordData(): boolean | cdktf.IResolvable;
    set fetchPasswordData(value: boolean | cdktf.IResolvable);
    resetFetchPasswordData(): void;
    get fetchPasswordDataInput(): boolean | cdktf.IResolvable;
    private _getUserData?;
    get fetchUserData(): boolean | cdktf.IResolvable;
    set fetchUserData(value: boolean | cdktf.IResolvable);
    resetFetchUserData(): void;
    get fetchUserDataInput(): boolean | cdktf.IResolvable;
    get hostId(): string;
    get iamInstanceProfile(): string;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string;
    get instanceState(): string;
    private _instanceTags?;
    get instanceTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set instanceTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetInstanceTags(): void;
    get instanceTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get instanceType(): string;
    get ipv6Addresses(): string[];
    get keyName(): string;
    metadataOptions(index: string): DataAwsInstanceMetadataOptions;
    get monitoring(): any;
    get networkInterfaceId(): string;
    get outpostArn(): string;
    get passwordData(): string;
    get placementGroup(): string;
    get placementPartitionNumber(): number;
    get privateDns(): string;
    get privateIp(): string;
    get publicDns(): string;
    get publicIp(): string;
    rootBlockDevice(index: string): DataAwsInstanceRootBlockDevice;
    get secondaryPrivateIps(): string[];
    get securityGroups(): string[];
    get sourceDestCheck(): any;
    get subnetId(): string;
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
    get tenancy(): string;
    get userData(): string;
    get userDataBase64(): string;
    get vpcSecurityGroupIds(): string[];
    private _filter?;
    get filter(): DataAwsInstanceFilter[];
    set filter(value: DataAwsInstanceFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsInstanceFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-instance.d.ts.map