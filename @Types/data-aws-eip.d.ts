import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#public_ip DataAwsEip#public_ip}
    */
    readonly publicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#tags DataAwsEip#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#filter DataAwsEip#filter}
    */
    readonly filter?: DataAwsEipFilter[];
}
export interface DataAwsEipFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#name DataAwsEip#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eip.html#values DataAwsEip#values}
    */
    readonly values: string[];
}
export declare function dataAwsEipFilterToTerraform(struct?: DataAwsEipFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip}
*/
export declare class DataAwsEip extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eip.html aws_eip} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEipConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEipConfig);
    get associationId(): string;
    get carrierIp(): string;
    get customerOwnedIp(): string;
    get customerOwnedIpv4Pool(): string;
    get domain(): string;
    get id(): string;
    get instanceId(): string;
    get networkInterfaceId(): string;
    get networkInterfaceOwnerId(): string;
    get privateDns(): string;
    get privateIp(): string;
    get publicDns(): string;
    private _publicIp?;
    get publicIp(): string;
    set publicIp(value: string);
    resetPublicIp(): void;
    get publicIpInput(): string;
    get publicIpv4Pool(): string;
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
    get filter(): DataAwsEipFilter[];
    set filter(value: DataAwsEipFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEipFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-eip.d.ts.map