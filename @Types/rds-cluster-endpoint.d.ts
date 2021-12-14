import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface RdsClusterEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#cluster_endpoint_identifier RdsClusterEndpoint#cluster_endpoint_identifier}
    */
    readonly clusterEndpointIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#cluster_identifier RdsClusterEndpoint#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#custom_endpoint_type RdsClusterEndpoint#custom_endpoint_type}
    */
    readonly customEndpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#excluded_members RdsClusterEndpoint#excluded_members}
    */
    readonly excludedMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#static_members RdsClusterEndpoint#static_members}
    */
    readonly staticMembers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#tags RdsClusterEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html#tags_all RdsClusterEndpoint#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html aws_rds_cluster_endpoint}
*/
export declare class RdsClusterEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html aws_rds_cluster_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterEndpointConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterEndpointConfig);
    get arn(): string;
    private _clusterEndpointIdentifier?;
    get clusterEndpointIdentifier(): string;
    set clusterEndpointIdentifier(value: string);
    get clusterEndpointIdentifierInput(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    private _customEndpointType?;
    get customEndpointType(): string;
    set customEndpointType(value: string);
    get customEndpointTypeInput(): string;
    get endpoint(): string;
    private _excludedMembers?;
    get excludedMembers(): string[];
    set excludedMembers(value: string[]);
    resetExcludedMembers(): void;
    get excludedMembersInput(): string[];
    get id(): string;
    private _staticMembers?;
    get staticMembers(): string[];
    set staticMembers(value: string[]);
    resetStaticMembers(): void;
    get staticMembersInput(): string[];
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
//# sourceMappingURL=rds-cluster-endpoint.d.ts.map