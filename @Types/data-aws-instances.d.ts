import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsInstancesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_state_names DataAwsInstances#instance_state_names}
    */
    readonly instanceStateNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#instance_tags DataAwsInstances#instance_tags}
    */
    readonly instanceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#filter DataAwsInstances#filter}
    */
    readonly filter?: DataAwsInstancesFilter[];
}
export interface DataAwsInstancesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#name DataAwsInstances#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instances.html#values DataAwsInstances#values}
    */
    readonly values: string[];
}
export declare function dataAwsInstancesFilterToTerraform(struct?: DataAwsInstancesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances}
*/
export declare class DataAwsInstances extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instances.html aws_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstancesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInstancesConfig);
    get id(): string;
    get ids(): string[];
    private _instanceStateNames?;
    get instanceStateNames(): string[];
    set instanceStateNames(value: string[]);
    resetInstanceStateNames(): void;
    get instanceStateNamesInput(): string[];
    private _instanceTags?;
    get instanceTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set instanceTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetInstanceTags(): void;
    get instanceTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get privateIps(): string[];
    get publicIps(): string[];
    private _filter?;
    get filter(): DataAwsInstancesFilter[];
    set filter(value: DataAwsInstancesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsInstancesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-instances.d.ts.map