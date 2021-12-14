import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#app_name SagemakerApp#app_name}
    */
    readonly appName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#app_type SagemakerApp#app_type}
    */
    readonly appType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#domain_id SagemakerApp#domain_id}
    */
    readonly domainId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#tags SagemakerApp#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#tags_all SagemakerApp#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#user_profile_name SagemakerApp#user_profile_name}
    */
    readonly userProfileName: string;
    /**
    * resource_spec block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#resource_spec SagemakerApp#resource_spec}
    */
    readonly resourceSpec?: SagemakerAppResourceSpec;
}
export interface SagemakerAppResourceSpec {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#instance_type SagemakerApp#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}
    */
    readonly sagemakerImageArn?: string;
}
export declare function sagemakerAppResourceSpecToTerraform(struct?: SagemakerAppResourceSpecOutputReference | SagemakerAppResourceSpec): any;
export declare class SagemakerAppResourceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerAppResourceSpec | undefined;
    set internalValue(value: SagemakerAppResourceSpec | undefined);
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
    private _sagemakerImageArn?;
    get sagemakerImageArn(): string;
    set sagemakerImageArn(value: string);
    resetSagemakerImageArn(): void;
    get sagemakerImageArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app}
*/
export declare class SagemakerApp extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerAppConfig);
    private _appName?;
    get appName(): string;
    set appName(value: string);
    get appNameInput(): string;
    private _appType?;
    get appType(): string;
    set appType(value: string);
    get appTypeInput(): string;
    get arn(): string;
    private _domainId?;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string;
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
    private _userProfileName?;
    get userProfileName(): string;
    set userProfileName(value: string);
    get userProfileNameInput(): string;
    private _resourceSpec;
    get resourceSpec(): SagemakerAppResourceSpecOutputReference;
    putResourceSpec(value: SagemakerAppResourceSpec): void;
    resetResourceSpec(): void;
    get resourceSpecInput(): SagemakerAppResourceSpec;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-app.d.ts.map