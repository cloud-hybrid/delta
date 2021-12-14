import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElastiCache
*/
export interface DataAwsElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#access_string DataAwsElasticacheUser#access_string}
    */
    readonly accessString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#engine DataAwsElasticacheUser#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#no_password_required DataAwsElasticacheUser#no_password_required}
    */
    readonly noPasswordRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#passwords DataAwsElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#user_id DataAwsElasticacheUser#user_id}
    */
    readonly userId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html#user_name DataAwsElasticacheUser#user_name}
    */
    readonly userName?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html aws_elasticache_user}
*/
export declare class DataAwsElasticacheUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticache_user.html aws_elasticache_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheUserConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheUserConfig);
    private _accessString?;
    get accessString(): string;
    set accessString(value: string);
    resetAccessString(): void;
    get accessStringInput(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
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
    private _userId?;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-elasticache-user.d.ts.map