import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsAmiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#executable_users DataAwsAmi#executable_users}
    */
    readonly executableUsers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#most_recent DataAwsAmi#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#name_regex DataAwsAmi#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#owners DataAwsAmi#owners}
    */
    readonly owners: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#tags DataAwsAmi#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#filter DataAwsAmi#filter}
    */
    readonly filter?: DataAwsAmiFilter[];
}
export declare class DataAwsAmiBlockDeviceMappings extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get ebs(): any;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsAmiProductCodes extends cdktf.ComplexComputedList {
    get productCodeId(): string;
    get productCodeType(): string;
}
export interface DataAwsAmiFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#name DataAwsAmi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ami.html#values DataAwsAmi#values}
    */
    readonly values: string[];
}
export declare function dataAwsAmiFilterToTerraform(struct?: DataAwsAmiFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ami.html aws_ami}
*/
export declare class DataAwsAmi extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ami.html aws_ami} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAmiConfig);
    get architecture(): string;
    get arn(): string;
    blockDeviceMappings(index: string): DataAwsAmiBlockDeviceMappings;
    get creationDate(): string;
    get description(): string;
    get enaSupport(): any;
    private _executableUsers?;
    get executableUsers(): string[];
    set executableUsers(value: string[]);
    resetExecutableUsers(): void;
    get executableUsersInput(): string[];
    get hypervisor(): string;
    get id(): string;
    get imageId(): string;
    get imageLocation(): string;
    get imageOwnerAlias(): string;
    get imageType(): string;
    get kernelId(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable;
    get name(): string;
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    resetNameRegex(): void;
    get nameRegexInput(): string;
    get ownerId(): string;
    private _owners?;
    get owners(): string[];
    set owners(value: string[]);
    get ownersInput(): string[];
    get platform(): string;
    get platformDetails(): string;
    productCodes(index: string): DataAwsAmiProductCodes;
    get public(): any;
    get ramdiskId(): string;
    get rootDeviceName(): string;
    get rootDeviceType(): string;
    get rootSnapshotId(): string;
    get sriovNetSupport(): string;
    get state(): string;
    stateReason(key: string): string;
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
    get usageOperation(): string;
    get virtualizationType(): string;
    private _filter?;
    get filter(): DataAwsAmiFilter[];
    set filter(value: DataAwsAmiFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsAmiFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ami.d.ts.map