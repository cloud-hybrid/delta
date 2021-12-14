import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElastiCache
*/
export interface ElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#access_string ElasticacheUser#access_string}
    */
    readonly accessString: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#engine ElasticacheUser#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#no_password_required ElasticacheUser#no_password_required}
    */
    readonly noPasswordRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#passwords ElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#tags ElasticacheUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#tags_all ElasticacheUser#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#user_id ElasticacheUser#user_id}
    */
    readonly userId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html#user_name ElasticacheUser#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html aws_elasticache_user}
*/
export declare class ElasticacheUser extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_user.html aws_elasticache_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheUserConfig);
    private _accessString?;
    get accessString(): string;
    set accessString(value: string);
    get accessStringInput(): string;
    get arn(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string;
    get id(): string;
    private _noPasswordRequired?;
    get noPasswordRequired(): boolean | cdktf.IResolvable;
    set noPasswordRequired(value: boolean | cdktf.IResolvable);
    resetNoPasswordRequired(): void;
    get noPasswordRequiredInput(): boolean | cdktf.IResolvable;
    private _passwords?;
    get passwords(): string[];
    set passwords(value: string[]);
    resetPasswords(): void;
    get passwordsInput(): string[];
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
    private _userId?;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elasticache-user.d.ts.map