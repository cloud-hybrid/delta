import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbOptionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#engine_name DbOptionGroup#engine_name}
    */
    readonly engineName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#major_engine_version DbOptionGroup#major_engine_version}
    */
    readonly majorEngineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name_prefix DbOptionGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_group_description DbOptionGroup#option_group_description}
    */
    readonly optionGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags DbOptionGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags_all DbOptionGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * option block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option DbOptionGroup#option}
    */
    readonly option?: DbOptionGroupOption[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#timeouts DbOptionGroup#timeouts}
    */
    readonly timeouts?: DbOptionGroupTimeouts;
}
export interface DbOptionGroupOptionOptionSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#value DbOptionGroup#value}
    */
    readonly value: string;
}
export declare function dbOptionGroupOptionOptionSettingsToTerraform(struct?: DbOptionGroupOptionOptionSettings): any;
export interface DbOptionGroupOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#db_security_group_memberships DbOptionGroup#db_security_group_memberships}
    */
    readonly dbSecurityGroupMemberships?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_name DbOptionGroup#option_name}
    */
    readonly optionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#port DbOptionGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#version DbOptionGroup#version}
    */
    readonly version?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}
    */
    readonly vpcSecurityGroupMemberships?: string[];
    /**
    * option_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_settings DbOptionGroup#option_settings}
    */
    readonly optionSettings?: DbOptionGroupOptionOptionSettings[];
}
export declare function dbOptionGroupOptionToTerraform(struct?: DbOptionGroupOption): any;
export interface DbOptionGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#delete DbOptionGroup#delete}
    */
    readonly delete?: string;
}
export declare function dbOptionGroupTimeoutsToTerraform(struct?: DbOptionGroupTimeoutsOutputReference | DbOptionGroupTimeouts): any;
export declare class DbOptionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbOptionGroupTimeouts | undefined;
    set internalValue(value: DbOptionGroupTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group}
*/
export declare class DbOptionGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbOptionGroupConfig
    */
    constructor(scope: Construct, id: string, config: DbOptionGroupConfig);
    get arn(): string;
    private _engineName?;
    get engineName(): string;
    set engineName(value: string);
    get engineNameInput(): string;
    get id(): string;
    private _majorEngineVersion?;
    get majorEngineVersion(): string;
    set majorEngineVersion(value: string);
    get majorEngineVersionInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _optionGroupDescription?;
    get optionGroupDescription(): string;
    set optionGroupDescription(value: string);
    resetOptionGroupDescription(): void;
    get optionGroupDescriptionInput(): string;
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
    private _option?;
    get option(): DbOptionGroupOption[];
    set option(value: DbOptionGroupOption[]);
    resetOption(): void;
    get optionInput(): DbOptionGroupOption[];
    private _timeouts;
    get timeouts(): DbOptionGroupTimeoutsOutputReference;
    putTimeouts(value: DbOptionGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DbOptionGroupTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-option-group.d.ts.map