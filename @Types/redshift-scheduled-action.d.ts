import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Redshift
*/
export interface RedshiftScheduledActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#description RedshiftScheduledAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#enable RedshiftScheduledAction#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#end_time RedshiftScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#iam_role RedshiftScheduledAction#iam_role}
    */
    readonly iamRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#name RedshiftScheduledAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#schedule RedshiftScheduledAction#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#start_time RedshiftScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * target_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#target_action RedshiftScheduledAction#target_action}
    */
    readonly targetAction: RedshiftScheduledActionTargetAction;
}
export interface RedshiftScheduledActionTargetActionPauseCluster {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
}
export declare function redshiftScheduledActionTargetActionPauseClusterToTerraform(struct?: RedshiftScheduledActionTargetActionPauseClusterOutputReference | RedshiftScheduledActionTargetActionPauseCluster): any;
export declare class RedshiftScheduledActionTargetActionPauseClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RedshiftScheduledActionTargetActionPauseCluster | undefined;
    set internalValue(value: RedshiftScheduledActionTargetActionPauseCluster | undefined);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
}
export interface RedshiftScheduledActionTargetActionResizeCluster {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#classic RedshiftScheduledAction#classic}
    */
    readonly classic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_type RedshiftScheduledAction#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#node_type RedshiftScheduledAction#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#number_of_nodes RedshiftScheduledAction#number_of_nodes}
    */
    readonly numberOfNodes?: number;
}
export declare function redshiftScheduledActionTargetActionResizeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResizeClusterOutputReference | RedshiftScheduledActionTargetActionResizeCluster): any;
export declare class RedshiftScheduledActionTargetActionResizeClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RedshiftScheduledActionTargetActionResizeCluster | undefined;
    set internalValue(value: RedshiftScheduledActionTargetActionResizeCluster | undefined);
    private _classic?;
    get classic(): boolean | cdktf.IResolvable;
    set classic(value: boolean | cdktf.IResolvable);
    resetClassic(): void;
    get classicInput(): boolean | cdktf.IResolvable;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    private _clusterType?;
    get clusterType(): string;
    set clusterType(value: string);
    resetClusterType(): void;
    get clusterTypeInput(): string;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    resetNodeType(): void;
    get nodeTypeInput(): string;
    private _numberOfNodes?;
    get numberOfNodes(): number;
    set numberOfNodes(value: number);
    resetNumberOfNodes(): void;
    get numberOfNodesInput(): number;
}
export interface RedshiftScheduledActionTargetActionResumeCluster {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
}
export declare function redshiftScheduledActionTargetActionResumeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResumeClusterOutputReference | RedshiftScheduledActionTargetActionResumeCluster): any;
export declare class RedshiftScheduledActionTargetActionResumeClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RedshiftScheduledActionTargetActionResumeCluster | undefined;
    set internalValue(value: RedshiftScheduledActionTargetActionResumeCluster | undefined);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
}
export interface RedshiftScheduledActionTargetAction {
    /**
    * pause_cluster block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#pause_cluster RedshiftScheduledAction#pause_cluster}
    */
    readonly pauseCluster?: RedshiftScheduledActionTargetActionPauseCluster;
    /**
    * resize_cluster block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resize_cluster RedshiftScheduledAction#resize_cluster}
    */
    readonly resizeCluster?: RedshiftScheduledActionTargetActionResizeCluster;
    /**
    * resume_cluster block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resume_cluster RedshiftScheduledAction#resume_cluster}
    */
    readonly resumeCluster?: RedshiftScheduledActionTargetActionResumeCluster;
}
export declare function redshiftScheduledActionTargetActionToTerraform(struct?: RedshiftScheduledActionTargetActionOutputReference | RedshiftScheduledActionTargetAction): any;
export declare class RedshiftScheduledActionTargetActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): RedshiftScheduledActionTargetAction | undefined;
    set internalValue(value: RedshiftScheduledActionTargetAction | undefined);
    private _pauseCluster;
    get pauseCluster(): RedshiftScheduledActionTargetActionPauseClusterOutputReference;
    putPauseCluster(value: RedshiftScheduledActionTargetActionPauseCluster): void;
    resetPauseCluster(): void;
    get pauseClusterInput(): RedshiftScheduledActionTargetActionPauseCluster;
    private _resizeCluster;
    get resizeCluster(): RedshiftScheduledActionTargetActionResizeClusterOutputReference;
    putResizeCluster(value: RedshiftScheduledActionTargetActionResizeCluster): void;
    resetResizeCluster(): void;
    get resizeClusterInput(): RedshiftScheduledActionTargetActionResizeCluster;
    private _resumeCluster;
    get resumeCluster(): RedshiftScheduledActionTargetActionResumeClusterOutputReference;
    putResumeCluster(value: RedshiftScheduledActionTargetActionResumeCluster): void;
    resetResumeCluster(): void;
    get resumeClusterInput(): RedshiftScheduledActionTargetActionResumeCluster;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action}
*/
export declare class RedshiftScheduledAction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftScheduledActionConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftScheduledActionConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable;
    private _endTime?;
    get endTime(): string;
    set endTime(value: string);
    resetEndTime(): void;
    get endTimeInput(): string;
    private _iamRole?;
    get iamRole(): string;
    set iamRole(value: string);
    get iamRoleInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    get scheduleInput(): string;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    resetStartTime(): void;
    get startTimeInput(): string;
    private _targetAction;
    get targetAction(): RedshiftScheduledActionTargetActionOutputReference;
    putTargetAction(value: RedshiftScheduledActionTargetAction): void;
    get targetActionInput(): RedshiftScheduledActionTargetAction;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=redshift-scheduled-action.d.ts.map