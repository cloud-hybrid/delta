import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DataSync
*/
export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#agent_arns DatasyncLocationS3#agent_arns}
    */
    readonly agentArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}
    */
    readonly s3BucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_storage_class DatasyncLocationS3#s3_storage_class}
    */
    readonly s3StorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#subdirectory DatasyncLocationS3#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags DatasyncLocationS3#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags_all DatasyncLocationS3#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * s3_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_config DatasyncLocationS3#s3_config}
    */
    readonly s3Config: DatasyncLocationS3S3Config;
}
export interface DatasyncLocationS3S3Config {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}
    */
    readonly bucketAccessRoleArn: string;
}
export declare function datasyncLocationS3S3ConfigToTerraform(struct?: DatasyncLocationS3S3ConfigOutputReference | DatasyncLocationS3S3Config): any;
export declare class DatasyncLocationS3S3ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncLocationS3S3Config | undefined;
    set internalValue(value: DatasyncLocationS3S3Config | undefined);
    private _bucketAccessRoleArn?;
    get bucketAccessRoleArn(): string;
    set bucketAccessRoleArn(value: string);
    get bucketAccessRoleArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3}
*/
export declare class DatasyncLocationS3 extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationS3Config
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationS3Config);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    resetAgentArns(): void;
    get agentArnsInput(): string[];
    get arn(): string;
    get id(): string;
    private _s3BucketArn?;
    get s3BucketArn(): string;
    set s3BucketArn(value: string);
    get s3BucketArnInput(): string;
    private _s3StorageClass?;
    get s3StorageClass(): string;
    set s3StorageClass(value: string);
    resetS3StorageClass(): void;
    get s3StorageClassInput(): string;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
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
    private _s3Config;
    get s3Config(): DatasyncLocationS3S3ConfigOutputReference;
    putS3Config(value: DatasyncLocationS3S3Config): void;
    get s3ConfigInput(): DatasyncLocationS3S3Config;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=datasync-location-s3.d.ts.map