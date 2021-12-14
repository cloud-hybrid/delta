import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EFS
*/
export interface DataAwsEfsMountTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html#access_point_id DataAwsEfsMountTarget#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html#file_system_id DataAwsEfsMountTarget#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html#mount_target_id DataAwsEfsMountTarget#mount_target_id}
    */
    readonly mountTargetId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target}
*/
export declare class DataAwsEfsMountTarget extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target.html aws_efs_mount_target} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsMountTargetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEfsMountTargetConfig);
    private _accessPointId?;
    get accessPointId(): string;
    set accessPointId(value: string);
    resetAccessPointId(): void;
    get accessPointIdInput(): string;
    get availabilityZoneId(): string;
    get availabilityZoneName(): string;
    get dnsName(): string;
    get fileSystemArn(): string;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string;
    get id(): string;
    get ipAddress(): string;
    get mountTargetDnsName(): string;
    private _mountTargetId?;
    get mountTargetId(): string;
    set mountTargetId(value: string);
    resetMountTargetId(): void;
    get mountTargetIdInput(): string;
    get networkInterfaceId(): string;
    get ownerId(): string;
    get securityGroups(): string[];
    get subnetId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-efs-mount-target.d.ts.map