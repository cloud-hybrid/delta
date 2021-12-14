import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#description DbSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#name DbSecurityGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#tags DbSecurityGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#tags_all DbSecurityGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * ingress block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#ingress DbSecurityGroup#ingress}
    */
    readonly ingress: DbSecurityGroupIngress[];
}
export interface DbSecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#cidr DbSecurityGroup#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_id DbSecurityGroup#security_group_id}
    */
    readonly securityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_name DbSecurityGroup#security_group_name}
    */
    readonly securityGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html#security_group_owner_id DbSecurityGroup#security_group_owner_id}
    */
    readonly securityGroupOwnerId?: string;
}
export declare function dbSecurityGroupIngressToTerraform(struct?: DbSecurityGroupIngress): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html aws_db_security_group}
*/
export declare class DbSecurityGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_security_group.html aws_db_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSecurityGroupConfig
    */
    constructor(scope: Construct, id: string, config: DbSecurityGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
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
    private _ingress?;
    get ingress(): DbSecurityGroupIngress[];
    set ingress(value: DbSecurityGroupIngress[]);
    get ingressInput(): DbSecurityGroupIngress[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-security-group.d.ts.map