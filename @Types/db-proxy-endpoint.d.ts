import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbProxyEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_endpoint_name DbProxyEndpoint#db_proxy_endpoint_name}
    */
    readonly dbProxyEndpointName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_name DbProxyEndpoint#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags DbProxyEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags_all DbProxyEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#target_role DbProxyEndpoint#target_role}
    */
    readonly targetRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_security_group_ids DbProxyEndpoint#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_subnet_ids DbProxyEndpoint#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#timeouts DbProxyEndpoint#timeouts}
    */
    readonly timeouts?: DbProxyEndpointTimeouts;
}
export interface DbProxyEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#create DbProxyEndpoint#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#delete DbProxyEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#update DbProxyEndpoint#update}
    */
    readonly update?: string;
}
export declare function dbProxyEndpointTimeoutsToTerraform(struct?: DbProxyEndpointTimeoutsOutputReference | DbProxyEndpointTimeouts): any;
export declare class DbProxyEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbProxyEndpointTimeouts | undefined;
    set internalValue(value: DbProxyEndpointTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint}
*/
export declare class DbProxyEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DbProxyEndpointConfig);
    get arn(): string;
    private _dbProxyEndpointName?;
    get dbProxyEndpointName(): string;
    set dbProxyEndpointName(value: string);
    get dbProxyEndpointNameInput(): string;
    private _dbProxyName?;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    get endpoint(): string;
    get id(): string;
    get isDefault(): any;
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
    private _targetRole?;
    get targetRole(): string;
    set targetRole(value: string);
    resetTargetRole(): void;
    get targetRoleInput(): string;
    get vpcId(): string;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[];
    private _vpcSubnetIds?;
    get vpcSubnetIds(): string[];
    set vpcSubnetIds(value: string[]);
    get vpcSubnetIdsInput(): string[];
    private _timeouts;
    get timeouts(): DbProxyEndpointTimeoutsOutputReference;
    putTimeouts(value: DbProxyEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DbProxyEndpointTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-proxy-endpoint.d.ts.map