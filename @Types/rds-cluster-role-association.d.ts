import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface RdsClusterRoleAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html#db_cluster_identifier RdsClusterRoleAssociation#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html#feature_name RdsClusterRoleAssociation#feature_name}
    */
    readonly featureName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html#role_arn RdsClusterRoleAssociation#role_arn}
    */
    readonly roleArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html aws_rds_cluster_role_association}
*/
export declare class RdsClusterRoleAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_role_association.html aws_rds_cluster_role_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterRoleAssociationConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterRoleAssociationConfig);
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    get dbClusterIdentifierInput(): string;
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
//# sourceMappingURL=rds-cluster-role-association.d.ts.map