import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}
    */
    readonly enabledClusterLogTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#name EksCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#role_arn EksCluster#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags EksCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags_all EksCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#version EksCluster#version}
    */
    readonly version?: string;
    /**
    * encryption_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#encryption_config EksCluster#encryption_config}
    */
    readonly encryptionConfig?: EksClusterEncryptionConfig;
    /**
    * kubernetes_network_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#kubernetes_network_config EksCluster#kubernetes_network_config}
    */
    readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#timeouts EksCluster#timeouts}
    */
    readonly timeouts?: EksClusterTimeouts;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#vpc_config EksCluster#vpc_config}
    */
    readonly vpcConfig: EksClusterVpcConfig;
}
export declare class EksClusterCertificateAuthority extends cdktf.ComplexComputedList {
    get data(): string;
}
export declare class EksClusterIdentityOidc extends cdktf.ComplexComputedList {
    get issuer(): string;
}
export declare class EksClusterIdentity extends cdktf.ComplexComputedList {
    get oidc(): any;
}
export interface EksClusterEncryptionConfigProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#key_arn EksCluster#key_arn}
    */
    readonly keyArn: string;
}
export declare function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any;
export declare class EksClusterEncryptionConfigProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksClusterEncryptionConfigProvider | undefined;
    set internalValue(value: EksClusterEncryptionConfigProvider | undefined);
    private _keyArn?;
    get keyArn(): string;
    set keyArn(value: string);
    get keyArnInput(): string;
}
export interface EksClusterEncryptionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#resources EksCluster#resources}
    */
    readonly resources: string[];
    /**
    * provider block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#provider EksCluster#provider}
    */
    readonly provider: EksClusterEncryptionConfigProvider;
}
export declare function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any;
export declare class EksClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksClusterEncryptionConfig | undefined;
    set internalValue(value: EksClusterEncryptionConfig | undefined);
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    get resourcesInput(): string[];
    private _provider;
    get provider(): EksClusterEncryptionConfigProviderOutputReference;
    putProvider(value: EksClusterEncryptionConfigProvider): void;
    get providerInput(): EksClusterEncryptionConfigProvider;
}
export interface EksClusterKubernetesNetworkConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#service_ipv4_cidr EksCluster#service_ipv4_cidr}
    */
    readonly serviceIpv4Cidr?: string;
}
export declare function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any;
export declare class EksClusterKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksClusterKubernetesNetworkConfig | undefined;
    set internalValue(value: EksClusterKubernetesNetworkConfig | undefined);
    private _serviceIpv4Cidr?;
    get serviceIpv4Cidr(): string;
    set serviceIpv4Cidr(value: string);
    resetServiceIpv4Cidr(): void;
    get serviceIpv4CidrInput(): string;
}
export interface EksClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#create EksCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#delete EksCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#update EksCluster#update}
    */
    readonly update?: string;
}
export declare function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeoutsOutputReference | EksClusterTimeouts): any;
export declare class EksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksClusterTimeouts | undefined;
    set internalValue(value: EksClusterTimeouts | undefined);
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
export interface EksClusterVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_private_access EksCluster#endpoint_private_access}
    */
    readonly endpointPrivateAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_public_access EksCluster#endpoint_public_access}
    */
    readonly endpointPublicAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#public_access_cidrs EksCluster#public_access_cidrs}
    */
    readonly publicAccessCidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#security_group_ids EksCluster#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#subnet_ids EksCluster#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any;
export declare class EksClusterVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksClusterVpcConfig | undefined;
    set internalValue(value: EksClusterVpcConfig | undefined);
    private _endpointPrivateAccess?;
    get endpointPrivateAccess(): boolean | cdktf.IResolvable;
    set endpointPrivateAccess(value: boolean | cdktf.IResolvable);
    resetEndpointPrivateAccess(): void;
    get endpointPrivateAccessInput(): boolean | cdktf.IResolvable;
    private _endpointPublicAccess?;
    get endpointPublicAccess(): boolean | cdktf.IResolvable;
    set endpointPublicAccess(value: boolean | cdktf.IResolvable);
    resetEndpointPublicAccess(): void;
    get endpointPublicAccessInput(): boolean | cdktf.IResolvable;
    private _publicAccessCidrs?;
    get publicAccessCidrs(): string[];
    set publicAccessCidrs(value: string[]);
    resetPublicAccessCidrs(): void;
    get publicAccessCidrsInput(): string[];
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster}
*/
export declare class EksCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksClusterConfig
    */
    constructor(scope: Construct, id: string, config: EksClusterConfig);
    get arn(): string;
    certificateAuthority(index: string): EksClusterCertificateAuthority;
    get createdAt(): string;
    private _enabledClusterLogTypes?;
    get enabledClusterLogTypes(): string[];
    set enabledClusterLogTypes(value: string[]);
    resetEnabledClusterLogTypes(): void;
    get enabledClusterLogTypesInput(): string[];
    get endpoint(): string;
    get id(): string;
    identity(index: string): EksClusterIdentity;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platformVersion(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    get status(): string;
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _encryptionConfig;
    get encryptionConfig(): EksClusterEncryptionConfigOutputReference;
    putEncryptionConfig(value: EksClusterEncryptionConfig): void;
    resetEncryptionConfig(): void;
    get encryptionConfigInput(): EksClusterEncryptionConfig;
    private _kubernetesNetworkConfig;
    get kubernetesNetworkConfig(): EksClusterKubernetesNetworkConfigOutputReference;
    putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig): void;
    resetKubernetesNetworkConfig(): void;
    get kubernetesNetworkConfigInput(): EksClusterKubernetesNetworkConfig;
    private _timeouts;
    get timeouts(): EksClusterTimeoutsOutputReference;
    putTimeouts(value: EksClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EksClusterTimeouts;
    private _vpcConfig;
    get vpcConfig(): EksClusterVpcConfigOutputReference;
    putVpcConfig(value: EksClusterVpcConfig): void;
    get vpcConfigInput(): EksClusterVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=eks-cluster.d.ts.map