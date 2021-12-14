import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppStream
*/
export interface AppstreamStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#description AppstreamStack#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#display_name AppstreamStack#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#embed_host_domains AppstreamStack#embed_host_domains}
    */
    readonly embedHostDomains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#feedback_url AppstreamStack#feedback_url}
    */
    readonly feedbackUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#name AppstreamStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#redirect_url AppstreamStack#redirect_url}
    */
    readonly redirectUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#tags AppstreamStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#tags_all AppstreamStack#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * access_endpoints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#access_endpoints AppstreamStack#access_endpoints}
    */
    readonly accessEndpoints?: AppstreamStackAccessEndpoints[];
    /**
    * application_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#application_settings AppstreamStack#application_settings}
    */
    readonly applicationSettings?: AppstreamStackApplicationSettings;
    /**
    * storage_connectors block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#storage_connectors AppstreamStack#storage_connectors}
    */
    readonly storageConnectors?: AppstreamStackStorageConnectors[];
    /**
    * user_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#user_settings AppstreamStack#user_settings}
    */
    readonly userSettings?: AppstreamStackUserSettings[];
}
export interface AppstreamStackAccessEndpoints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#endpoint_type AppstreamStack#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#vpce_id AppstreamStack#vpce_id}
    */
    readonly vpceId?: string;
}
export declare function appstreamStackAccessEndpointsToTerraform(struct?: AppstreamStackAccessEndpoints): any;
export interface AppstreamStackApplicationSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#enabled AppstreamStack#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#settings_group AppstreamStack#settings_group}
    */
    readonly settingsGroup?: string;
}
export declare function appstreamStackApplicationSettingsToTerraform(struct?: AppstreamStackApplicationSettingsOutputReference | AppstreamStackApplicationSettings): any;
export declare class AppstreamStackApplicationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AppstreamStackApplicationSettings | undefined;
    set internalValue(value: AppstreamStackApplicationSettings | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _settingsGroup?;
    get settingsGroup(): string;
    set settingsGroup(value: string);
    resetSettingsGroup(): void;
    get settingsGroupInput(): string;
}
export interface AppstreamStackStorageConnectors {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#connector_type AppstreamStack#connector_type}
    */
    readonly connectorType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#domains AppstreamStack#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#resource_identifier AppstreamStack#resource_identifier}
    */
    readonly resourceIdentifier?: string;
}
export declare function appstreamStackStorageConnectorsToTerraform(struct?: AppstreamStackStorageConnectors): any;
export interface AppstreamStackUserSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#action AppstreamStack#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html#permission AppstreamStack#permission}
    */
    readonly permission: string;
}
export declare function appstreamStackUserSettingsToTerraform(struct?: AppstreamStackUserSettings): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html aws_appstream_stack}
*/
export declare class AppstreamStack extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_stack.html aws_appstream_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamStackConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamStackConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string;
    private _embedHostDomains?;
    get embedHostDomains(): string[];
    set embedHostDomains(value: string[]);
    resetEmbedHostDomains(): void;
    get embedHostDomainsInput(): string[];
    private _feedbackUrl?;
    get feedbackUrl(): string;
    set feedbackUrl(value: string);
    resetFeedbackUrl(): void;
    get feedbackUrlInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _redirectUrl?;
    get redirectUrl(): string;
    set redirectUrl(value: string);
    resetRedirectUrl(): void;
    get redirectUrlInput(): string;
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
    private _accessEndpoints?;
    get accessEndpoints(): AppstreamStackAccessEndpoints[];
    set accessEndpoints(value: AppstreamStackAccessEndpoints[]);
    resetAccessEndpoints(): void;
    get accessEndpointsInput(): AppstreamStackAccessEndpoints[];
    private _applicationSettings;
    get applicationSettings(): AppstreamStackApplicationSettingsOutputReference;
    putApplicationSettings(value: AppstreamStackApplicationSettings): void;
    resetApplicationSettings(): void;
    get applicationSettingsInput(): AppstreamStackApplicationSettings;
    private _storageConnectors?;
    get storageConnectors(): AppstreamStackStorageConnectors[];
    set storageConnectors(value: AppstreamStackStorageConnectors[]);
    resetStorageConnectors(): void;
    get storageConnectorsInput(): AppstreamStackStorageConnectors[];
    private _userSettings?;
    get userSettings(): AppstreamStackUserSettings[];
    set userSettings(value: AppstreamStackUserSettings[]);
    resetUserSettings(): void;
    get userSettingsInput(): AppstreamStackUserSettings[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appstream-stack.d.ts.map