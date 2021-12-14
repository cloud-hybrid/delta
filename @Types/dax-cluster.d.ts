import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DynamoDB Accelerator
*/
export interface DaxClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#availability_zones DaxCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#cluster_name DaxCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#description DaxCluster#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#iam_role_arn DaxCluster#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#maintenance_window DaxCluster#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#node_type DaxCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#notification_topic_arn DaxCluster#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#parameter_group_name DaxCluster#parameter_group_name}
    */
    readonly parameterGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#replication_factor DaxCluster#replication_factor}
    */
    readonly replicationFactor: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#security_group_ids DaxCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#subnet_group_name DaxCluster#subnet_group_name}
    */
    readonly subnetGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#tags DaxCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#tags_all DaxCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * server_side_encryption block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#server_side_encryption DaxCluster#server_side_encryption}
    */
    readonly serverSideEncryption?: DaxClusterServerSideEncryption;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#timeouts DaxCluster#timeouts}
    */
    readonly timeouts?: DaxClusterTimeouts;
}
export declare class DaxClusterNodes extends cdktf.ComplexComputedList {
    get address(): string;
    get availabilityZone(): string;
    get id(): string;
    get port(): number;
}
export interface DaxClusterServerSideEncryption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#enabled DaxCluster#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function daxClusterServerSideEncryptionToTerraform(struct?: DaxClusterServerSideEncryptionOutputReference | DaxClusterServerSideEncryption): any;
export declare class DaxClusterServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DaxClusterServerSideEncryption | undefined;
    set internalValue(value: DaxClusterServerSideEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface DaxClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#create DaxCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#delete DaxCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html#update DaxCluster#update}
    */
    readonly update?: string;
}
export declare function daxClusterTimeoutsToTerraform(struct?: DaxClusterTimeoutsOutputReference | DaxClusterTimeouts): any;
export declare class DaxClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DaxClusterTimeouts | undefined;
    set internalValue(value: DaxClusterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster}
*/
export declare class DaxCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_cluster.html aws_dax_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DaxClusterConfig
    */
    constructor(scope: Construct, id: string, config: DaxClusterConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[];
    get clusterAddress(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get configurationEndpoint(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string;
    get id(): string;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string;
    nodes(index: string): DaxClusterNodes;
    private _notificationTopicArn?;
    get notificationTopicArn(): string;
    set notificationTopicArn(value: string);
    resetNotificationTopicArn(): void;
    get notificationTopicArnInput(): string;
    private _parameterGroupName?;
    get parameterGroupName(): string;
    set parameterGroupName(value: string);
    resetParameterGroupName(): void;
    get parameterGroupNameInput(): string;
    get port(): number;
    private _replicationFactor?;
    get replicationFactor(): number;
    set replicationFactor(value: number);
    get replicationFactorInput(): number;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _subnetGroupName?;
    get subnetGroupName(): string;
    set subnetGroupName(value: string);
    resetSubnetGroupName(): void;
    get subnetGroupNameInput(): string;
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
    private _serverSideEncryption;
    get serverSideEncryption(): DaxClusterServerSideEncryptionOutputReference;
    putServerSideEncryption(value: DaxClusterServerSideEncryption): void;
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): DaxClusterServerSideEncryption;
    private _timeouts;
    get timeouts(): DaxClusterTimeoutsOutputReference;
    putTimeouts(value: DaxClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DaxClusterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dax-cluster.d.ts.map