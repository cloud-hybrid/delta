import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EFS
*/
export interface DataAwsEfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html#access_point_id DataAwsEfsAccessPoint#access_point_id}
    */
    readonly accessPointId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html#tags DataAwsEfsAccessPoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsEfsAccessPointPosixUser extends cdktf.ComplexComputedList {
    get gid(): number;
    get secondaryGids(): any;
    get uid(): number;
}
export declare class DataAwsEfsAccessPointRootDirectoryCreationInfo extends cdktf.ComplexComputedList {
    get ownerGid(): number;
    get ownerUid(): number;
    get permissions(): string;
}
export declare class DataAwsEfsAccessPointRootDirectory extends cdktf.ComplexComputedList {
    get creationInfo(): any;
    get path(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point}
*/
export declare class DataAwsEfsAccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_access_point.html aws_efs_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointConfig);
    private _accessPointId?;
    get accessPointId(): string;
    set accessPointId(value: string);
    get accessPointIdInput(): string;
    get arn(): string;
    get fileSystemArn(): string;
    get fileSystemId(): string;
    get id(): string;
    get ownerId(): string;
    posixUser(index: string): DataAwsEfsAccessPointPosixUser;
    rootDirectory(index: string): DataAwsEfsAccessPointRootDirectory;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-efs-access-point.d.ts.map