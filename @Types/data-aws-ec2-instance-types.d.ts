import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2InstanceTypesConfig extends cdktf.TerraformMetaArguments {
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_types.html#filter DataAwsEc2InstanceTypes#filter}
    */
    readonly filter?: DataAwsEc2InstanceTypesFilter[];
}
export interface DataAwsEc2InstanceTypesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_types.html#name DataAwsEc2InstanceTypes#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_types.html#values DataAwsEc2InstanceTypes#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2InstanceTypesFilterToTerraform(struct?: DataAwsEc2InstanceTypesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_types.html aws_ec2_instance_types}
*/
export declare class DataAwsEc2InstanceTypes extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_types.html aws_ec2_instance_types} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2InstanceTypesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2InstanceTypesConfig);
    get id(): string;
    get instanceTypes(): string[];
    private _filter?;
    get filter(): DataAwsEc2InstanceTypesFilter[];
    set filter(value: DataAwsEc2InstanceTypesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2InstanceTypesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-instance-types.d.ts.map