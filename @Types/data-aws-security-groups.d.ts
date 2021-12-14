import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsSecurityGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#tags DataAwsSecurityGroups#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#filter DataAwsSecurityGroups#filter}
    */
    readonly filter?: DataAwsSecurityGroupsFilter[];
}
export interface DataAwsSecurityGroupsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#name DataAwsSecurityGroups#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html#values DataAwsSecurityGroups#values}
    */
    readonly values: string[];
}
export declare function dataAwsSecurityGroupsFilterToTerraform(struct?: DataAwsSecurityGroupsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups}
*/
export declare class DataAwsSecurityGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_groups.html aws_security_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecurityGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSecurityGroupsConfig);
    get arns(): string[];
    get id(): string;
    get ids(): string[];
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
    get vpcIds(): string[];
    private _filter?;
    get filter(): DataAwsSecurityGroupsFilter[];
    set filter(value: DataAwsSecurityGroupsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSecurityGroupsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-security-groups.d.ts.map