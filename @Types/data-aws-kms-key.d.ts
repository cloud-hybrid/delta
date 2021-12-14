import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Key Management Service
*/
export interface DataAwsKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#grant_tokens DataAwsKmsKey#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#key_id DataAwsKmsKey#key_id}
    */
    readonly keyId: string;
}
export declare class DataAwsKmsKeyMultiRegionConfigurationPrimaryKey extends cdktf.ComplexComputedList {
    get arn(): string;
    get region(): string;
}
export declare class DataAwsKmsKeyMultiRegionConfigurationReplicaKeys extends cdktf.ComplexComputedList {
    get arn(): string;
    get region(): string;
}
export declare class DataAwsKmsKeyMultiRegionConfiguration extends cdktf.ComplexComputedList {
    get multiRegionKeyType(): string;
    get primaryKey(): any;
    get replicaKeys(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key}
*/
export declare class DataAwsKmsKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKmsKeyConfig);
    get arn(): string;
    get awsAccountId(): string;
    get creationDate(): string;
    get customerMasterKeySpec(): string;
    get deletionDate(): string;
    get description(): string;
    get enabled(): any;
    get expirationModel(): string;
    private _grantTokens?;
    get grantTokens(): string[];
    set grantTokens(value: string[]);
    resetGrantTokens(): void;
    get grantTokensInput(): string[];
    get id(): string;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    get keyManager(): string;
    get keyState(): string;
    get keyUsage(): string;
    get multiRegion(): any;
    multiRegionConfiguration(index: string): DataAwsKmsKeyMultiRegionConfiguration;
    get origin(): string;
    get validTo(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-kms-key.d.ts.map