import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Global Accelerator
*/
export interface DataAwsGlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html#name DataAwsGlobalacceleratorAccelerator#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html#tags DataAwsGlobalacceleratorAccelerator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsGlobalacceleratorAcceleratorAttributes extends cdktf.ComplexComputedList {
    get flowLogsEnabled(): any;
    get flowLogsS3Bucket(): string;
    get flowLogsS3Prefix(): string;
}
export declare class DataAwsGlobalacceleratorAcceleratorIpSets extends cdktf.ComplexComputedList {
    get ipAddresses(): string[];
    get ipFamily(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}
*/
export declare class DataAwsGlobalacceleratorAccelerator extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlobalacceleratorAcceleratorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsGlobalacceleratorAcceleratorConfig);
    get arn(): string;
    attributes(index: string): DataAwsGlobalacceleratorAcceleratorAttributes;
    get dnsName(): string;
    get enabled(): any;
    get hostedZoneId(): string;
    get id(): string;
    get ipAddressType(): string;
    ipSets(index: string): DataAwsGlobalacceleratorAcceleratorIpSets;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-globalaccelerator-accelerator.d.ts.map