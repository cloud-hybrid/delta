import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Registry
*/
export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_tag_mutability EcrRepository#image_tag_mutability}
    */
    readonly imageTagMutability?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#name EcrRepository#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags EcrRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags_all EcrRepository#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_configuration EcrRepository#encryption_configuration}
    */
    readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[];
    /**
    * image_scanning_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_scanning_configuration EcrRepository#image_scanning_configuration}
    */
    readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#timeouts EcrRepository#timeouts}
    */
    readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_type EcrRepository#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#kms_key EcrRepository#kms_key}
    */
    readonly kmsKey?: string;
}
export declare function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration): any;
export interface EcrRepositoryImageScanningConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#scan_on_push EcrRepository#scan_on_push}
    */
    readonly scanOnPush: boolean | cdktf.IResolvable;
}
export declare function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfigurationOutputReference | EcrRepositoryImageScanningConfiguration): any;
export declare class EcrRepositoryImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcrRepositoryImageScanningConfiguration | undefined;
    set internalValue(value: EcrRepositoryImageScanningConfiguration | undefined);
    private _scanOnPush?;
    get scanOnPush(): boolean | cdktf.IResolvable;
    set scanOnPush(value: boolean | cdktf.IResolvable);
    get scanOnPushInput(): boolean | cdktf.IResolvable;
}
export interface EcrRepositoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#delete EcrRepository#delete}
    */
    readonly delete?: string;
}
export declare function ecrRepositoryTimeoutsToTerraform(struct?: EcrRepositoryTimeoutsOutputReference | EcrRepositoryTimeouts): any;
export declare class EcrRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcrRepositoryTimeouts | undefined;
    set internalValue(value: EcrRepositoryTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository}
*/
export declare class EcrRepository extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: EcrRepositoryConfig);
    get arn(): string;
    get id(): string;
    private _imageTagMutability?;
    get imageTagMutability(): string;
    set imageTagMutability(value: string);
    resetImageTagMutability(): void;
    get imageTagMutabilityInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get registryId(): string;
    get repositoryUrl(): string;
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
    private _encryptionConfiguration?;
    get encryptionConfiguration(): EcrRepositoryEncryptionConfiguration[];
    set encryptionConfiguration(value: EcrRepositoryEncryptionConfiguration[]);
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): EcrRepositoryEncryptionConfiguration[];
    private _imageScanningConfiguration;
    get imageScanningConfiguration(): EcrRepositoryImageScanningConfigurationOutputReference;
    putImageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration): void;
    resetImageScanningConfiguration(): void;
    get imageScanningConfigurationInput(): EcrRepositoryImageScanningConfiguration;
    private _timeouts;
    get timeouts(): EcrRepositoryTimeoutsOutputReference;
    putTimeouts(value: EcrRepositoryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EcrRepositoryTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecr-repository.d.ts.map