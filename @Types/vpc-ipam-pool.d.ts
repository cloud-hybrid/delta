import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface VpcIpamPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#address_family VpcIpamPool#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}
    */
    readonly allocationDefaultNetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}
    */
    readonly allocationMaxNetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}
    */
    readonly allocationMinNetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#allocation_resource_tags VpcIpamPool#allocation_resource_tags}
    */
    readonly allocationResourceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#auto_import VpcIpamPool#auto_import}
    */
    readonly autoImport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#aws_service VpcIpamPool#aws_service}
    */
    readonly awsService?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#description VpcIpamPool#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#ipam_scope_id VpcIpamPool#ipam_scope_id}
    */
    readonly ipamScopeId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#locale VpcIpamPool#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#publicly_advertisable VpcIpamPool#publicly_advertisable}
    */
    readonly publiclyAdvertisable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}
    */
    readonly sourceIpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#tags VpcIpamPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html#tags_all VpcIpamPool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool}
*/
export declare class VpcIpamPool extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool.html aws_vpc_ipam_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPoolConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamPoolConfig);
    private _addressFamily?;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string;
    private _allocationDefaultNetmaskLength?;
    get allocationDefaultNetmaskLength(): number;
    set allocationDefaultNetmaskLength(value: number);
    resetAllocationDefaultNetmaskLength(): void;
    get allocationDefaultNetmaskLengthInput(): number;
    private _allocationMaxNetmaskLength?;
    get allocationMaxNetmaskLength(): number;
    set allocationMaxNetmaskLength(value: number);
    resetAllocationMaxNetmaskLength(): void;
    get allocationMaxNetmaskLengthInput(): number;
    private _allocationMinNetmaskLength?;
    get allocationMinNetmaskLength(): number;
    set allocationMinNetmaskLength(value: number);
    resetAllocationMinNetmaskLength(): void;
    get allocationMinNetmaskLengthInput(): number;
    private _allocationResourceTags?;
    get allocationResourceTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set allocationResourceTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAllocationResourceTags(): void;
    get allocationResourceTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get arn(): string;
    private _autoImport?;
    get autoImport(): boolean | cdktf.IResolvable;
    set autoImport(value: boolean | cdktf.IResolvable);
    resetAutoImport(): void;
    get autoImportInput(): boolean | cdktf.IResolvable;
    private _awsService?;
    get awsService(): string;
    set awsService(value: string);
    resetAwsService(): void;
    get awsServiceInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _ipamScopeId?;
    get ipamScopeId(): string;
    set ipamScopeId(value: string);
    get ipamScopeIdInput(): string;
    get ipamScopeType(): string;
    private _locale?;
    get locale(): string;
    set locale(value: string);
    resetLocale(): void;
    get localeInput(): string;
    get poolDepth(): number;
    private _publiclyAdvertisable?;
    get publiclyAdvertisable(): boolean | cdktf.IResolvable;
    set publiclyAdvertisable(value: boolean | cdktf.IResolvable);
    resetPubliclyAdvertisable(): void;
    get publiclyAdvertisableInput(): boolean | cdktf.IResolvable;
    private _sourceIpamPoolId?;
    get sourceIpamPoolId(): string;
    set sourceIpamPoolId(value: string);
    resetSourceIpamPoolId(): void;
    get sourceIpamPoolIdInput(): string;
    get state(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=vpc-ipam-pool.d.ts.map