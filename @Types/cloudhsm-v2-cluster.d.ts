import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudHSM
*/
export interface CloudhsmV2ClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#hsm_type CloudhsmV2Cluster#hsm_type}
    */
    readonly hsmType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}
    */
    readonly sourceBackupIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#subnet_ids CloudhsmV2Cluster#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#tags CloudhsmV2Cluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#tags_all CloudhsmV2Cluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#timeouts CloudhsmV2Cluster#timeouts}
    */
    readonly timeouts?: CloudhsmV2ClusterTimeouts;
}
export declare class CloudhsmV2ClusterClusterCertificates extends cdktf.ComplexComputedList {
    get awsHardwareCertificate(): string;
    get clusterCertificate(): string;
    get clusterCsr(): string;
    get hsmCertificate(): string;
    get manufacturerHardwareCertificate(): string;
}
export interface CloudhsmV2ClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#create CloudhsmV2Cluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#delete CloudhsmV2Cluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html#update CloudhsmV2Cluster#update}
    */
    readonly update?: string;
}
export declare function cloudhsmV2ClusterTimeoutsToTerraform(struct?: CloudhsmV2ClusterTimeoutsOutputReference | CloudhsmV2ClusterTimeouts): any;
export declare class CloudhsmV2ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudhsmV2ClusterTimeouts | undefined;
    set internalValue(value: CloudhsmV2ClusterTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster}
*/
export declare class CloudhsmV2Cluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html aws_cloudhsm_v2_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2ClusterConfig
    */
    constructor(scope: Construct, id: string, config: CloudhsmV2ClusterConfig);
    clusterCertificates(index: string): CloudhsmV2ClusterClusterCertificates;
    get clusterId(): string;
    get clusterState(): string;
    private _hsmType?;
    get hsmType(): string;
    set hsmType(value: string);
    get hsmTypeInput(): string;
    get id(): string;
    get securityGroupId(): string;
    private _sourceBackupIdentifier?;
    get sourceBackupIdentifier(): string;
    set sourceBackupIdentifier(value: string);
    resetSourceBackupIdentifier(): void;
    get sourceBackupIdentifierInput(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    get vpcId(): string;
    private _timeouts;
    get timeouts(): CloudhsmV2ClusterTimeoutsOutputReference;
    putTimeouts(value: CloudhsmV2ClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): CloudhsmV2ClusterTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudhsm-v2-cluster.d.ts.map