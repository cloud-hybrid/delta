import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogProvisionedProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accept_language ServicecatalogProvisionedProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}
    */
    readonly ignoreErrors?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#name ServicecatalogProvisionedProduct#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#notification_arns ServicecatalogProvisionedProduct#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_id ServicecatalogProvisionedProduct#path_id}
    */
    readonly pathId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_name ServicecatalogProvisionedProduct#path_name}
    */
    readonly pathName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_id ServicecatalogProvisionedProduct#product_id}
    */
    readonly productId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_name ServicecatalogProvisionedProduct#product_name}
    */
    readonly productName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}
    */
    readonly provisioningArtifactId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}
    */
    readonly provisioningArtifactName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}
    */
    readonly retainPhysicalResources?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags ServicecatalogProvisionedProduct#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags_all ServicecatalogProvisionedProduct#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * provisioning_parameters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}
    */
    readonly provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[];
    /**
    * stack_set_provisioning_preferences block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}
    */
    readonly stackSetProvisioningPreferences?: ServicecatalogProvisionedProductStackSetProvisioningPreferences;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#timeouts ServicecatalogProvisionedProduct#timeouts}
    */
    readonly timeouts?: ServicecatalogProvisionedProductTimeouts;
}
export interface ServicecatalogProvisionedProductProvisioningParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#key ServicecatalogProvisionedProduct#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}
    */
    readonly usePreviousValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#value ServicecatalogProvisionedProduct#value}
    */
    readonly value?: string;
}
export declare function servicecatalogProvisionedProductProvisioningParametersToTerraform(struct?: ServicecatalogProvisionedProductProvisioningParameters): any;
export interface ServicecatalogProvisionedProductStackSetProvisioningPreferences {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accounts ServicecatalogProvisionedProduct#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}
    */
    readonly maxConcurrencyCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}
    */
    readonly maxConcurrencyPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#regions ServicecatalogProvisionedProduct#regions}
    */
    readonly regions?: string[];
}
export declare function servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(struct?: ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference | ServicecatalogProvisionedProductStackSetProvisioningPreferences): any;
export declare class ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined;
    set internalValue(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined);
    private _accounts?;
    get accounts(): string[];
    set accounts(value: string[]);
    resetAccounts(): void;
    get accountsInput(): string[];
    private _failureToleranceCount?;
    get failureToleranceCount(): number;
    set failureToleranceCount(value: number);
    resetFailureToleranceCount(): void;
    get failureToleranceCountInput(): number;
    private _failureTolerancePercentage?;
    get failureTolerancePercentage(): number;
    set failureTolerancePercentage(value: number);
    resetFailureTolerancePercentage(): void;
    get failureTolerancePercentageInput(): number;
    private _maxConcurrencyCount?;
    get maxConcurrencyCount(): number;
    set maxConcurrencyCount(value: number);
    resetMaxConcurrencyCount(): void;
    get maxConcurrencyCountInput(): number;
    private _maxConcurrencyPercentage?;
    get maxConcurrencyPercentage(): number;
    set maxConcurrencyPercentage(value: number);
    resetMaxConcurrencyPercentage(): void;
    get maxConcurrencyPercentageInput(): number;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[];
}
export interface ServicecatalogProvisionedProductTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#create ServicecatalogProvisionedProduct#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#delete ServicecatalogProvisionedProduct#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#update ServicecatalogProvisionedProduct#update}
    */
    readonly update?: string;
}
export declare function servicecatalogProvisionedProductTimeoutsToTerraform(struct?: ServicecatalogProvisionedProductTimeoutsOutputReference | ServicecatalogProvisionedProductTimeouts): any;
export declare class ServicecatalogProvisionedProductTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServicecatalogProvisionedProductTimeouts | undefined;
    set internalValue(value: ServicecatalogProvisionedProductTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product}
*/
export declare class ServicecatalogProvisionedProduct extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisionedProductConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProvisionedProductConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    get arn(): string;
    get cloudwatchDashboardNames(): string[];
    get createdTime(): string;
    get id(): string;
    private _ignoreErrors?;
    get ignoreErrors(): boolean | cdktf.IResolvable;
    set ignoreErrors(value: boolean | cdktf.IResolvable);
    resetIgnoreErrors(): void;
    get ignoreErrorsInput(): boolean | cdktf.IResolvable;
    get lastProvisioningRecordId(): string;
    get lastRecordId(): string;
    get lastSuccessfulProvisioningRecordId(): string;
    get launchRoleArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _notificationArns?;
    get notificationArns(): string[];
    set notificationArns(value: string[]);
    resetNotificationArns(): void;
    get notificationArnsInput(): string[];
    private _pathId?;
    get pathId(): string;
    set pathId(value: string);
    resetPathId(): void;
    get pathIdInput(): string;
    private _pathName?;
    get pathName(): string;
    set pathName(value: string);
    resetPathName(): void;
    get pathNameInput(): string;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    resetProductId(): void;
    get productIdInput(): string;
    private _productName?;
    get productName(): string;
    set productName(value: string);
    resetProductName(): void;
    get productNameInput(): string;
    private _provisioningArtifactId?;
    get provisioningArtifactId(): string;
    set provisioningArtifactId(value: string);
    resetProvisioningArtifactId(): void;
    get provisioningArtifactIdInput(): string;
    private _provisioningArtifactName?;
    get provisioningArtifactName(): string;
    set provisioningArtifactName(value: string);
    resetProvisioningArtifactName(): void;
    get provisioningArtifactNameInput(): string;
    private _retainPhysicalResources?;
    get retainPhysicalResources(): boolean | cdktf.IResolvable;
    set retainPhysicalResources(value: boolean | cdktf.IResolvable);
    resetRetainPhysicalResources(): void;
    get retainPhysicalResourcesInput(): boolean | cdktf.IResolvable;
    get status(): string;
    get statusMessage(): string;
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
    get type(): string;
    private _provisioningParameters?;
    get provisioningParameters(): ServicecatalogProvisionedProductProvisioningParameters[];
    set provisioningParameters(value: ServicecatalogProvisionedProductProvisioningParameters[]);
    resetProvisioningParameters(): void;
    get provisioningParametersInput(): ServicecatalogProvisionedProductProvisioningParameters[];
    private _stackSetProvisioningPreferences;
    get stackSetProvisioningPreferences(): ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference;
    putStackSetProvisioningPreferences(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences): void;
    resetStackSetProvisioningPreferences(): void;
    get stackSetProvisioningPreferencesInput(): ServicecatalogProvisionedProductStackSetProvisioningPreferences;
    private _timeouts;
    get timeouts(): ServicecatalogProvisionedProductTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogProvisionedProductTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ServicecatalogProvisionedProductTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-provisioned-product.d.ts.map