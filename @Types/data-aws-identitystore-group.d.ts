import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#group_id DataAwsIdentitystoreGroup#group_id}
    */
    readonly groupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#filter DataAwsIdentitystoreGroup#filter}
    */
    readonly filter: DataAwsIdentitystoreGroupFilter[];
}
export interface DataAwsIdentitystoreGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#attribute_path DataAwsIdentitystoreGroup#attribute_path}
    */
    readonly attributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#attribute_value DataAwsIdentitystoreGroup#attribute_value}
    */
    readonly attributeValue: string;
}
export declare function dataAwsIdentitystoreGroupFilterToTerraform(struct?: DataAwsIdentitystoreGroupFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html aws_identitystore_group}
*/
export declare class DataAwsIdentitystoreGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html aws_identitystore_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreGroupConfig);
    get displayName(): string;
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    resetGroupId(): void;
    get groupIdInput(): string;
    get id(): string;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string;
    private _filter?;
    get filter(): DataAwsIdentitystoreGroupFilter[];
    set filter(value: DataAwsIdentitystoreGroupFilter[]);
    get filterInput(): DataAwsIdentitystoreGroupFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-identitystore-group.d.ts.map