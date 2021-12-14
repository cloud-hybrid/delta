import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#cluster_name EksFargateProfile#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#fargate_profile_name EksFargateProfile#fargate_profile_name}
    */
    readonly fargateProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}
    */
    readonly podExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#subnet_ids EksFargateProfile#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags EksFargateProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags_all EksFargateProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * selector block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#selector EksFargateProfile#selector}
    */
    readonly selector: EksFargateProfileSelector[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#timeouts EksFargateProfile#timeouts}
    */
    readonly timeouts?: EksFargateProfileTimeouts;
}
export interface EksFargateProfileSelector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#labels EksFargateProfile#labels}
    */
    readonly labels?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#namespace EksFargateProfile#namespace}
    */
    readonly namespace: string;
}
export declare function eksFargateProfileSelectorToTerraform(struct?: EksFargateProfileSelector): any;
export interface EksFargateProfileTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#create EksFargateProfile#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#delete EksFargateProfile#delete}
    */
    readonly delete?: string;
}
export declare function eksFargateProfileTimeoutsToTerraform(struct?: EksFargateProfileTimeoutsOutputReference | EksFargateProfileTimeouts): any;
export declare class EksFargateProfileTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksFargateProfileTimeouts | undefined;
    set internalValue(value: EksFargateProfileTimeouts | undefined);
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile}
*/
export declare class EksFargateProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksFargateProfileConfig
    */
    constructor(scope: Construct, id: string, config: EksFargateProfileConfig);
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    private _fargateProfileName?;
    get fargateProfileName(): string;
    set fargateProfileName(value: string);
    get fargateProfileNameInput(): string;
    get id(): string;
    private _podExecutionRoleArn?;
    get podExecutionRoleArn(): string;
    set podExecutionRoleArn(value: string);
    get podExecutionRoleArnInput(): string;
    get status(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
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
    private _selector?;
    get selector(): EksFargateProfileSelector[];
    set selector(value: EksFargateProfileSelector[]);
    get selectorInput(): EksFargateProfileSelector[];
    private _timeouts;
    get timeouts(): EksFargateProfileTimeoutsOutputReference;
    putTimeouts(value: EksFargateProfileTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EksFargateProfileTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=eks-fargate-profile.d.ts.map