import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Database Migration Service
*/
export interface DmsReplicationSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#replication_subnet_group_description DmsReplicationSubnetGroup#replication_subnet_group_description}
    */
    readonly replicationSubnetGroupDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#replication_subnet_group_id DmsReplicationSubnetGroup#replication_subnet_group_id}
    */
    readonly replicationSubnetGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#subnet_ids DmsReplicationSubnetGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#tags DmsReplicationSubnetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html#tags_all DmsReplicationSubnetGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group}
*/
export declare class DmsReplicationSubnetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html aws_dms_replication_subnet_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationSubnetGroupConfig
    */
    constructor(scope: Construct, id: string, config: DmsReplicationSubnetGroupConfig);
    get id(): string;
    get replicationSubnetGroupArn(): string;
    private _replicationSubnetGroupDescription?;
    get replicationSubnetGroupDescription(): string;
    set replicationSubnetGroupDescription(value: string);
    get replicationSubnetGroupDescriptionInput(): string;
    private _replicationSubnetGroupId?;
    get replicationSubnetGroupId(): string;
    set replicationSubnetGroupId(value: string);
    get replicationSubnetGroupIdInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dms-replication-subnet-group.d.ts.map