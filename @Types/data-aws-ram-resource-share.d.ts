import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Resource Access Manager
*/
export interface DataAwsRamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#resource_owner DataAwsRamResourceShare#resource_owner}
    */
    readonly resourceOwner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#tags DataAwsRamResourceShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#filter DataAwsRamResourceShare#filter}
    */
    readonly filter?: DataAwsRamResourceShareFilter[];
}
export interface DataAwsRamResourceShareFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#values DataAwsRamResourceShare#values}
    */
    readonly values: string[];
}
export declare function dataAwsRamResourceShareFilterToTerraform(struct?: DataAwsRamResourceShareFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share}
*/
export declare class DataAwsRamResourceShare extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRamResourceShareConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRamResourceShareConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get owningAccountId(): string;
    private _resourceOwner?;
    get resourceOwner(): string;
    set resourceOwner(value: string);
    get resourceOwnerInput(): string;
    get status(): string;
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
    get filter(): DataAwsRamResourceShareFilter[];
    set filter(value: DataAwsRamResourceShareFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRamResourceShareFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ram-resource-share.d.ts.map