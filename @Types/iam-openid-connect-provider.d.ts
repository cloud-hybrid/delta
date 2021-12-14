import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Identity and Access Management
*/
export interface IamOpenidConnectProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#client_id_list IamOpenidConnectProvider#client_id_list}
    */
    readonly clientIdList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags IamOpenidConnectProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#tags_all IamOpenidConnectProvider#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#thumbprint_list IamOpenidConnectProvider#thumbprint_list}
    */
    readonly thumbprintList: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html#url IamOpenidConnectProvider#url}
    */
    readonly url: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider}
*/
export declare class IamOpenidConnectProvider extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_openid_connect_provider.html aws_iam_openid_connect_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamOpenidConnectProviderConfig
    */
    constructor(scope: Construct, id: string, config: IamOpenidConnectProviderConfig);
    get arn(): string;
    private _clientIdList?;
    get clientIdList(): string[];
    set clientIdList(value: string[]);
    get clientIdListInput(): string[];
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
    private _thumbprintList?;
    get thumbprintList(): string[];
    set thumbprintList(value: string[]);
    get thumbprintListInput(): string[];
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=iam-openid-connect-provider.d.ts.map