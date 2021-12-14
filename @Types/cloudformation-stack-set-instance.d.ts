import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFormation
*/
export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#account_id CloudformationStackSetInstance#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#parameter_overrides CloudformationStackSetInstance#parameter_overrides}
    */
    readonly parameterOverrides?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#region CloudformationStackSetInstance#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#retain_stack CloudformationStackSetInstance#retain_stack}
    */
    readonly retainStack?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#stack_set_name CloudformationStackSetInstance#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * deployment_targets block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#deployment_targets CloudformationStackSetInstance#deployment_targets}
    */
    readonly deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#timeouts CloudformationStackSetInstance#timeouts}
    */
    readonly timeouts?: CloudformationStackSetInstanceTimeouts;
}
export interface CloudformationStackSetInstanceDeploymentTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
}
export declare function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any;
export declare class CloudformationStackSetInstanceDeploymentTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudformationStackSetInstanceDeploymentTargets | undefined;
    set internalValue(value: CloudformationStackSetInstanceDeploymentTargets | undefined);
    private _organizationalUnitIds?;
    get organizationalUnitIds(): string[];
    set organizationalUnitIds(value: string[]);
    resetOrganizationalUnitIds(): void;
    get organizationalUnitIdsInput(): string[];
}
export interface CloudformationStackSetInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#create CloudformationStackSetInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#delete CloudformationStackSetInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#update CloudformationStackSetInstance#update}
    */
    readonly update?: string;
}
export declare function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeoutsOutputReference | CloudformationStackSetInstanceTimeouts): any;
export declare class CloudformationStackSetInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudformationStackSetInstanceTimeouts | undefined;
    set internalValue(value: CloudformationStackSetInstanceTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance}
*/
export declare class CloudformationStackSetInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetInstanceConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get id(): string;
    get organizationalUnitId(): string;
    private _parameterOverrides?;
    get parameterOverrides(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameterOverrides(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameterOverrides(): void;
    get parameterOverridesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    private _retainStack?;
    get retainStack(): boolean | cdktf.IResolvable;
    set retainStack(value: boolean | cdktf.IResolvable);
    resetRetainStack(): void;
    get retainStackInput(): boolean | cdktf.IResolvable;
    get stackId(): string;
    private _stackSetName?;
    get stackSetName(): string;
    set stackSetName(value: string);
    get stackSetNameInput(): string;
    private _deploymentTargets;
    get deploymentTargets(): CloudformationStackSetInstanceDeploymentTargetsOutputReference;
    putDeploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets): void;
    resetDeploymentTargets(): void;
    get deploymentTargetsInput(): CloudformationStackSetInstanceDeploymentTargets;
    private _timeouts;
    get timeouts(): CloudformationStackSetInstanceTimeoutsOutputReference;
    putTimeouts(value: CloudformationStackSetInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): CloudformationStackSetInstanceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudformation-stack-set-instance.d.ts.map