import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#key_name DataAwsKeyPair#key_name}
    */
    readonly keyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#key_pair_id DataAwsKeyPair#key_pair_id}
    */
    readonly keyPairId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#tags DataAwsKeyPair#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#filter DataAwsKeyPair#filter}
    */
    readonly filter?: DataAwsKeyPairFilter[];
}
export interface DataAwsKeyPairFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#name DataAwsKeyPair#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html#values DataAwsKeyPair#values}
    */
    readonly values: string[];
}
export declare function dataAwsKeyPairFilterToTerraform(struct?: DataAwsKeyPairFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html aws_key_pair}
*/
export declare class DataAwsKeyPair extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/key_pair.html aws_key_pair} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKeyPairConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsKeyPairConfig);
    get arn(): string;
    get fingerprint(): string;
    get id(): string;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string;
    private _keyPairId?;
    get keyPairId(): string;
    set keyPairId(value: string);
    resetKeyPairId(): void;
    get keyPairIdInput(): string;
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
    private _filter?;
    get filter(): DataAwsKeyPairFilter[];
    set filter(value: DataAwsKeyPairFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsKeyPairFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-key-pair.d.ts.map