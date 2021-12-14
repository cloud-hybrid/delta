import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glacier
*/
export interface GlacierVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#access_policy GlacierVault#access_policy}
    */
    readonly accessPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#name GlacierVault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#tags GlacierVault#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#tags_all GlacierVault#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * notification block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#notification GlacierVault#notification}
    */
    readonly notification?: GlacierVaultNotification;
}
export interface GlacierVaultNotification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#events GlacierVault#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#sns_topic GlacierVault#sns_topic}
    */
    readonly snsTopic: string;
}
export declare function glacierVaultNotificationToTerraform(struct?: GlacierVaultNotificationOutputReference | GlacierVaultNotification): any;
export declare class GlacierVaultNotificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlacierVaultNotification | undefined;
    set internalValue(value: GlacierVaultNotification | undefined);
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[];
    private _snsTopic?;
    get snsTopic(): string;
    set snsTopic(value: string);
    get snsTopicInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault}
*/
export declare class GlacierVault extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultConfig
    */
    constructor(scope: Construct, id: string, config: GlacierVaultConfig);
    private _accessPolicy?;
    get accessPolicy(): string;
    set accessPolicy(value: string);
    resetAccessPolicy(): void;
    get accessPolicyInput(): string;
    get arn(): string;
    get id(): string;
    get location(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _notification;
    get notification(): GlacierVaultNotificationOutputReference;
    putNotification(value: GlacierVaultNotification): void;
    resetNotification(): void;
    get notificationInput(): GlacierVaultNotification;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glacier-vault.d.ts.map