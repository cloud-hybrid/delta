import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigAggregateAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#account_id ConfigAggregateAuthorization#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#region ConfigAggregateAuthorization#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags ConfigAggregateAuthorization#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags_all ConfigAggregateAuthorization#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization}
*/
export declare class ConfigAggregateAuthorization extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigAggregateAuthorizationConfig
    */
    constructor(scope: Construct, id: string, config: ConfigAggregateAuthorizationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get arn(): string;
    get id(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-aggregate-authorization.d.ts.map