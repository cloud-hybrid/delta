import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DataSync
*/
export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}
    */
    readonly efsFileSystemArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subdirectory DatasyncLocationEfs#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags DatasyncLocationEfs#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags_all DatasyncLocationEfs#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * ec2_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#ec2_config DatasyncLocationEfs#ec2_config}
    */
    readonly ec2Config: DatasyncLocationEfsEc2Config;
}
export interface DatasyncLocationEfsEc2Config {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#security_group_arns DatasyncLocationEfs#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subnet_arn DatasyncLocationEfs#subnet_arn}
    */
    readonly subnetArn: string;
}
export declare function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2ConfigOutputReference | DatasyncLocationEfsEc2Config): any;
export declare class DatasyncLocationEfsEc2ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncLocationEfsEc2Config | undefined;
    set internalValue(value: DatasyncLocationEfsEc2Config | undefined);
    private _securityGroupArns?;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    get securityGroupArnsInput(): string[];
    private _subnetArn?;
    get subnetArn(): string;
    set subnetArn(value: string);
    get subnetArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs}
*/
export declare class DatasyncLocationEfs extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationEfsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig);
    get arn(): string;
    private _efsFileSystemArn?;
    get efsFileSystemArn(): string;
    set efsFileSystemArn(value: string);
    get efsFileSystemArnInput(): string;
    get id(): string;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string;
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
    get uri(): string;
    private _ec2Config;
    get ec2Config(): DatasyncLocationEfsEc2ConfigOutputReference;
    putEc2Config(value: DatasyncLocationEfsEc2Config): void;
    get ec2ConfigInput(): DatasyncLocationEfsEc2Config;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=datasync-location-efs.d.ts.map