import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#name DataAwsSecurityGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#tags DataAwsSecurityGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#vpc_id DataAwsSecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#filter DataAwsSecurityGroup#filter}
    */
    readonly filter?: DataAwsSecurityGroupFilter[];
}
export interface DataAwsSecurityGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#name DataAwsSecurityGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/security_group.html#values DataAwsSecurityGroup#values}
    */
    readonly values: string[];
}
export declare function dataAwsSecurityGroupFilterToTerraform(struct?: DataAwsSecurityGroupFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group}
*/
export declare class DataAwsSecurityGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/security_group.html aws_security_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecurityGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSecurityGroupConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _filter?;
    get filter(): DataAwsSecurityGroupFilter[];
    set filter(value: DataAwsSecurityGroupFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSecurityGroupFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-security-group.d.ts.map