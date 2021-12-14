import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbInstanceRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html#db_instance_identifier DbInstanceRoleAssociation#db_instance_identifier}
    */
    readonly dbInstanceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html#feature_name DbInstanceRoleAssociation#feature_name}
    */
    readonly featureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html#role_arn DbInstanceRoleAssociation#role_arn}
    */
    readonly roleArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html aws_db_instance_role_association}
*/
export declare class DbInstanceRoleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association.html aws_db_instance_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceRoleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DbInstanceRoleAssociationConfig);
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    get dbInstanceIdentifierInput(): string;
    private _featureName?;
    get featureName(): string;
    set featureName(value: string);
    get featureNameInput(): string;
    get id(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-instance-role-association.d.ts.map