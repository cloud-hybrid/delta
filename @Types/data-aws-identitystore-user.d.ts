import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIdentitystoreUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html#identity_store_id DataAwsIdentitystoreUser#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html#user_id DataAwsIdentitystoreUser#user_id}
    */
    readonly userId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html#filter DataAwsIdentitystoreUser#filter}
    */
    readonly filter: DataAwsIdentitystoreUserFilter[];
}
export interface DataAwsIdentitystoreUserFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html#attribute_path DataAwsIdentitystoreUser#attribute_path}
    */
    readonly attributePath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html#attribute_value DataAwsIdentitystoreUser#attribute_value}
    */
    readonly attributeValue: string;
}
export declare function dataAwsIdentitystoreUserFilterToTerraform(struct?: DataAwsIdentitystoreUserFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html aws_identitystore_user}
*/
export declare class DataAwsIdentitystoreUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/identitystore_user.html aws_identitystore_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIdentitystoreUserConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIdentitystoreUserConfig);
    get id(): string;
    private _identityStoreId?;
    get identityStoreId(): string;
    set identityStoreId(value: string);
    get identityStoreIdInput(): string;
    private _userId?;
    get userId(): string;
    set userId(value: string);
    resetUserId(): void;
    get userIdInput(): string;
    get userName(): string;
    private _filter?;
    get filter(): DataAwsIdentitystoreUserFilter[];
    set filter(value: DataAwsIdentitystoreUserFilter[]);
    get filterInput(): DataAwsIdentitystoreUserFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-identitystore-user.d.ts.map