import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Storage Service
*/
export interface S3AccountPublicAccessBlockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#account_id S3AccountPublicAccessBlock#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_acls S3AccountPublicAccessBlock#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#block_public_policy S3AccountPublicAccessBlock#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#ignore_public_acls S3AccountPublicAccessBlock#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html#restrict_public_buckets S3AccountPublicAccessBlock#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block}
*/
export declare class S3AccountPublicAccessBlock extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_account_public_access_block.html aws_s3_account_public_access_block} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3AccountPublicAccessBlockConfig = {}
    */
    constructor(scope: Construct, id: string, config?: S3AccountPublicAccessBlockConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _blockPublicAcls?;
    get blockPublicAcls(): boolean | cdktf.IResolvable;
    set blockPublicAcls(value: boolean | cdktf.IResolvable);
    resetBlockPublicAcls(): void;
    get blockPublicAclsInput(): boolean | cdktf.IResolvable;
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean | cdktf.IResolvable;
    set blockPublicPolicy(value: boolean | cdktf.IResolvable);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _ignorePublicAcls?;
    get ignorePublicAcls(): boolean | cdktf.IResolvable;
    set ignorePublicAcls(value: boolean | cdktf.IResolvable);
    resetIgnorePublicAcls(): void;
    get ignorePublicAclsInput(): boolean | cdktf.IResolvable;
    private _restrictPublicBuckets?;
    get restrictPublicBuckets(): boolean | cdktf.IResolvable;
    set restrictPublicBuckets(value: boolean | cdktf.IResolvable);
    resetRestrictPublicBuckets(): void;
    get restrictPublicBucketsInput(): boolean | cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=s3-account-public-access-block.d.ts.map