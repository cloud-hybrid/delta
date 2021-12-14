import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Resource Access Manager
*/
export interface RamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#allow_external_principals RamResourceShare#allow_external_principals}
    */
    readonly allowExternalPrincipals?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#name RamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#tags RamResourceShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#tags_all RamResourceShare#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#timeouts RamResourceShare#timeouts}
    */
    readonly timeouts?: RamResourceShareTimeouts;
}
export interface RamResourceShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#create RamResourceShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#delete RamResourceShare#delete}
    */
    readonly delete?: string;
}
export declare function ramResourceShareTimeoutsToTerraform(struct?: RamResourceShareTimeoutsOutputReference | RamResourceShareTimeouts): any;
export declare class RamResourceShareTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RamResourceShareTimeouts | undefined;
    set internalValue(value: RamResourceShareTimeouts | undefined);
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share}
*/
export declare class RamResourceShare extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareConfig
    */
    constructor(scope: Construct, id: string, config: RamResourceShareConfig);
    private _allowExternalPrincipals?;
    get allowExternalPrincipals(): boolean | cdktf.IResolvable;
    set allowExternalPrincipals(value: boolean | cdktf.IResolvable);
    resetAllowExternalPrincipals(): void;
    get allowExternalPrincipalsInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    get id(): string;
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
    private _timeouts;
    get timeouts(): RamResourceShareTimeoutsOutputReference;
    putTimeouts(value: RamResourceShareTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): RamResourceShareTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ram-resource-share.d.ts.map