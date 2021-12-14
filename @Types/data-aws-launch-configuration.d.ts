import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsLaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html#name DataAwsLaunchConfiguration#name}
    */
    readonly name: string;
}
export declare class DataAwsLaunchConfigurationEbsBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get deviceName(): string;
    get encrypted(): any;
    get iops(): number;
    get noDevice(): any;
    get snapshotId(): string;
    get throughput(): any;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsLaunchConfigurationEphemeralBlockDevice extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get virtualName(): string;
}
export declare class DataAwsLaunchConfigurationMetadataOptions extends cdktf.ComplexComputedList {
    get httpEndpoint(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
}
export declare class DataAwsLaunchConfigurationRootBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get encrypted(): any;
    get iops(): number;
    get throughput(): any;
    get volumeSize(): number;
    get volumeType(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration}
*/
export declare class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLaunchConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLaunchConfigurationConfig);
    get arn(): string;
    get associatePublicIpAddress(): any;
    ebsBlockDevice(index: string): DataAwsLaunchConfigurationEbsBlockDevice;
    get ebsOptimized(): any;
    get enableMonitoring(): any;
    ephemeralBlockDevice(index: string): DataAwsLaunchConfigurationEphemeralBlockDevice;
    get iamInstanceProfile(): string;
    get id(): string;
    get imageId(): string;
    get instanceType(): string;
    get keyName(): string;
    metadataOptions(index: string): DataAwsLaunchConfigurationMetadataOptions;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get placementTenancy(): string;
    rootBlockDevice(index: string): DataAwsLaunchConfigurationRootBlockDevice;
    get securityGroups(): string[];
    get spotPrice(): string;
    get userData(): string;
    get vpcClassicLinkId(): string;
    get vpcClassicLinkSecurityGroups(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-launch-configuration.d.ts.map