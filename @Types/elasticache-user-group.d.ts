import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElastiCache
*/
export interface ElasticacheUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#engine ElasticacheUserGroup#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#tags ElasticacheUserGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#tags_all ElasticacheUserGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#user_group_id ElasticacheUserGroup#user_group_id}
    */
    readonly userGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html#user_ids ElasticacheUserGroup#user_ids}
    */
    readonly userIds?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html aws_elasticache_user_group}
*/
export declare class ElasticacheUserGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user_group.html aws_elasticache_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheUserGroupConfig);
    get arn(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string;
    get id(): string;
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
    private _userGroupId?;
    get userGroupId(): string;
    set userGroupId(value: string);
    get userGroupIdInput(): string;
    private _userIds?;
    get userIds(): string[];
    set userIds(value: string[]);
    resetUserIds(): void;
    get userIdsInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elasticache-user-group.d.ts.map