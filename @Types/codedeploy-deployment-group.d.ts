import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeDeploy
*/
export interface CodedeployDeploymentGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#app_name CodedeployDeploymentGroup#app_name}
    */
    readonly appName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#autoscaling_groups CodedeployDeploymentGroup#autoscaling_groups}
    */
    readonly autoscalingGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_config_name CodedeployDeploymentGroup#deployment_config_name}
    */
    readonly deploymentConfigName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_group_name CodedeployDeploymentGroup#deployment_group_name}
    */
    readonly deploymentGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#service_role_arn CodedeployDeploymentGroup#service_role_arn}
    */
    readonly serviceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#tags CodedeployDeploymentGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#tags_all CodedeployDeploymentGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * alarm_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#alarm_configuration CodedeployDeploymentGroup#alarm_configuration}
    */
    readonly alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration;
    /**
    * auto_rollback_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#auto_rollback_configuration CodedeployDeploymentGroup#auto_rollback_configuration}
    */
    readonly autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration;
    /**
    * blue_green_deployment_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#blue_green_deployment_config CodedeployDeploymentGroup#blue_green_deployment_config}
    */
    readonly blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig;
    /**
    * deployment_style block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_style CodedeployDeploymentGroup#deployment_style}
    */
    readonly deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle;
    /**
    * ec2_tag_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
    */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[];
    /**
    * ec2_tag_set block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_set CodedeployDeploymentGroup#ec2_tag_set}
    */
    readonly ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[];
    /**
    * ecs_service block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ecs_service CodedeployDeploymentGroup#ecs_service}
    */
    readonly ecsService?: CodedeployDeploymentGroupEcsService;
    /**
    * load_balancer_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#load_balancer_info CodedeployDeploymentGroup#load_balancer_info}
    */
    readonly loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo;
    /**
    * on_premises_instance_tag_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#on_premises_instance_tag_filter CodedeployDeploymentGroup#on_premises_instance_tag_filter}
    */
    readonly onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
    /**
    * trigger_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_configuration CodedeployDeploymentGroup#trigger_configuration}
    */
    readonly triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[];
}
export interface CodedeployDeploymentGroupAlarmConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#alarms CodedeployDeploymentGroup#alarms}
    */
    readonly alarms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#enabled CodedeployDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ignore_poll_alarm_failure CodedeployDeploymentGroup#ignore_poll_alarm_failure}
    */
    readonly ignorePollAlarmFailure?: boolean | cdktf.IResolvable;
}
export declare function codedeployDeploymentGroupAlarmConfigurationToTerraform(struct?: CodedeployDeploymentGroupAlarmConfigurationOutputReference | CodedeployDeploymentGroupAlarmConfiguration): any;
export declare class CodedeployDeploymentGroupAlarmConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupAlarmConfiguration | undefined;
    set internalValue(value: CodedeployDeploymentGroupAlarmConfiguration | undefined);
    private _alarms?;
    get alarms(): string[];
    set alarms(value: string[]);
    resetAlarms(): void;
    get alarmsInput(): string[];
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _ignorePollAlarmFailure?;
    get ignorePollAlarmFailure(): boolean | cdktf.IResolvable;
    set ignorePollAlarmFailure(value: boolean | cdktf.IResolvable);
    resetIgnorePollAlarmFailure(): void;
    get ignorePollAlarmFailureInput(): boolean | cdktf.IResolvable;
}
export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#enabled CodedeployDeploymentGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#events CodedeployDeploymentGroup#events}
    */
    readonly events?: string[];
}
export declare function codedeployDeploymentGroupAutoRollbackConfigurationToTerraform(struct?: CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference | CodedeployDeploymentGroupAutoRollbackConfiguration): any;
export declare class CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupAutoRollbackConfiguration | undefined;
    set internalValue(value: CodedeployDeploymentGroupAutoRollbackConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _events?;
    get events(): string[];
    set events(value: string[]);
    resetEvents(): void;
    get eventsInput(): string[];
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action_on_timeout CodedeployDeploymentGroup#action_on_timeout}
    */
    readonly actionOnTimeout?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#wait_time_in_minutes CodedeployDeploymentGroup#wait_time_in_minutes}
    */
    readonly waitTimeInMinutes?: number;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption | undefined);
    private _actionOnTimeout?;
    get actionOnTimeout(): string;
    set actionOnTimeout(value: string);
    resetActionOnTimeout(): void;
    get actionOnTimeoutInput(): string;
    private _waitTimeInMinutes?;
    get waitTimeInMinutes(): number;
    set waitTimeInMinutes(value: number);
    resetWaitTimeInMinutes(): void;
    get waitTimeInMinutesInput(): number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action CodedeployDeploymentGroup#action}
    */
    readonly action?: string;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#action CodedeployDeploymentGroup#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#termination_wait_time_in_minutes CodedeployDeploymentGroup#termination_wait_time_in_minutes}
    */
    readonly terminationWaitTimeInMinutes?: number;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _terminationWaitTimeInMinutes?;
    get terminationWaitTimeInMinutes(): number;
    set terminationWaitTimeInMinutes(value: number);
    resetTerminationWaitTimeInMinutes(): void;
    get terminationWaitTimeInMinutesInput(): number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
    /**
    * deployment_ready_option block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_ready_option CodedeployDeploymentGroup#deployment_ready_option}
    */
    readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
    /**
    * green_fleet_provisioning_option block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#green_fleet_provisioning_option CodedeployDeploymentGroup#green_fleet_provisioning_option}
    */
    readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
    /**
    * terminate_blue_instances_on_deployment_success block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#terminate_blue_instances_on_deployment_success CodedeployDeploymentGroup#terminate_blue_instances_on_deployment_success}
    */
    readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
}
export declare function codedeployDeploymentGroupBlueGreenDeploymentConfigToTerraform(struct?: CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference | CodedeployDeploymentGroupBlueGreenDeploymentConfig): any;
export declare class CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined;
    set internalValue(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig | undefined);
    private _deploymentReadyOption;
    get deploymentReadyOption(): CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOptionOutputReference;
    putDeploymentReadyOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption): void;
    resetDeploymentReadyOption(): void;
    get deploymentReadyOptionInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption;
    private _greenFleetProvisioningOption;
    get greenFleetProvisioningOption(): CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOptionOutputReference;
    putGreenFleetProvisioningOption(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption): void;
    resetGreenFleetProvisioningOption(): void;
    get greenFleetProvisioningOptionInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption;
    private _terminateBlueInstancesOnDeploymentSuccess;
    get terminateBlueInstancesOnDeploymentSuccess(): CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccessOutputReference;
    putTerminateBlueInstancesOnDeploymentSuccess(value: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess): void;
    resetTerminateBlueInstancesOnDeploymentSuccess(): void;
    get terminateBlueInstancesOnDeploymentSuccessInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
}
export interface CodedeployDeploymentGroupDeploymentStyle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_option CodedeployDeploymentGroup#deployment_option}
    */
    readonly deploymentOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#deployment_type CodedeployDeploymentGroup#deployment_type}
    */
    readonly deploymentType?: string;
}
export declare function codedeployDeploymentGroupDeploymentStyleToTerraform(struct?: CodedeployDeploymentGroupDeploymentStyleOutputReference | CodedeployDeploymentGroupDeploymentStyle): any;
export declare class CodedeployDeploymentGroupDeploymentStyleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupDeploymentStyle | undefined;
    set internalValue(value: CodedeployDeploymentGroupDeploymentStyle | undefined);
    private _deploymentOption?;
    get deploymentOption(): string;
    set deploymentOption(value: string);
    resetDeploymentOption(): void;
    get deploymentOptionInput(): string;
    private _deploymentType?;
    get deploymentType(): string;
    set deploymentType(value: string);
    resetDeploymentType(): void;
    get deploymentTypeInput(): string;
}
export interface CodedeployDeploymentGroupEc2TagFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
}
export declare function codedeployDeploymentGroupEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagFilter): any;
export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
}
export declare function codedeployDeploymentGroupEc2TagSetEc2TagFilterToTerraform(struct?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter): any;
export interface CodedeployDeploymentGroupEc2TagSet {
    /**
    * ec2_tag_filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#ec2_tag_filter CodedeployDeploymentGroup#ec2_tag_filter}
    */
    readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
}
export declare function codedeployDeploymentGroupEc2TagSetToTerraform(struct?: CodedeployDeploymentGroupEc2TagSet): any;
export interface CodedeployDeploymentGroupEcsService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#cluster_name CodedeployDeploymentGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#service_name CodedeployDeploymentGroup#service_name}
    */
    readonly serviceName: string;
}
export declare function codedeployDeploymentGroupEcsServiceToTerraform(struct?: CodedeployDeploymentGroupEcsServiceOutputReference | CodedeployDeploymentGroupEcsService): any;
export declare class CodedeployDeploymentGroupEcsServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupEcsService | undefined;
    set internalValue(value: CodedeployDeploymentGroupEcsService | undefined);
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}
    */
    readonly name?: string;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoElbInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo): any;
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}
    */
    readonly name?: string;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo): any;
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#listener_arns CodedeployDeploymentGroup#listener_arns}
    */
    readonly listenerArns: string[];
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute | undefined);
    private _listenerArns?;
    get listenerArns(): string[];
    set listenerArns(value: string[]);
    get listenerArnsInput(): string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#name CodedeployDeploymentGroup#name}
    */
    readonly name: string;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroupToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup): any;
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#listener_arns CodedeployDeploymentGroup#listener_arns}
    */
    readonly listenerArns: string[];
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute | undefined);
    private _listenerArns?;
    get listenerArns(): string[];
    set listenerArns(value: string[]);
    get listenerArnsInput(): string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
    /**
    * prod_traffic_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#prod_traffic_route CodedeployDeploymentGroup#prod_traffic_route}
    */
    readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
    /**
    * target_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group CodedeployDeploymentGroup#target_group}
    */
    readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
    /**
    * test_traffic_route block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#test_traffic_route CodedeployDeploymentGroup#test_traffic_route}
    */
    readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo | undefined);
    private _prodTrafficRoute;
    get prodTrafficRoute(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRouteOutputReference;
    putProdTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute): void;
    get prodTrafficRouteInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
    private _targetGroup?;
    get targetGroup(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
    set targetGroup(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[]);
    get targetGroupInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
    private _testTrafficRoute;
    get testTrafficRoute(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRouteOutputReference;
    putTestTrafficRoute(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute): void;
    resetTestTrafficRoute(): void;
    get testTrafficRouteInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
}
export interface CodedeployDeploymentGroupLoadBalancerInfo {
    /**
    * elb_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#elb_info CodedeployDeploymentGroup#elb_info}
    */
    readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
    /**
    * target_group_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group_info CodedeployDeploymentGroup#target_group_info}
    */
    readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
    /**
    * target_group_pair_info block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#target_group_pair_info CodedeployDeploymentGroup#target_group_pair_info}
    */
    readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
}
export declare function codedeployDeploymentGroupLoadBalancerInfoToTerraform(struct?: CodedeployDeploymentGroupLoadBalancerInfoOutputReference | CodedeployDeploymentGroupLoadBalancerInfo): any;
export declare class CodedeployDeploymentGroupLoadBalancerInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentGroupLoadBalancerInfo | undefined;
    set internalValue(value: CodedeployDeploymentGroupLoadBalancerInfo | undefined);
    private _elbInfo?;
    get elbInfo(): CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
    set elbInfo(value: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[]);
    resetElbInfo(): void;
    get elbInfoInput(): CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
    private _targetGroupInfo?;
    get targetGroupInfo(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
    set targetGroupInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[]);
    resetTargetGroupInfo(): void;
    get targetGroupInfoInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
    private _targetGroupPairInfo;
    get targetGroupPairInfo(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoOutputReference;
    putTargetGroupPairInfo(value: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo): void;
    resetTargetGroupPairInfo(): void;
    get targetGroupPairInfoInput(): CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo;
}
export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#key CodedeployDeploymentGroup#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#type CodedeployDeploymentGroup#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#value CodedeployDeploymentGroup#value}
    */
    readonly value?: string;
}
export declare function codedeployDeploymentGroupOnPremisesInstanceTagFilterToTerraform(struct?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter): any;
export interface CodedeployDeploymentGroupTriggerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_events CodedeployDeploymentGroup#trigger_events}
    */
    readonly triggerEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_name CodedeployDeploymentGroup#trigger_name}
    */
    readonly triggerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html#trigger_target_arn CodedeployDeploymentGroup#trigger_target_arn}
    */
    readonly triggerTargetArn: string;
}
export declare function codedeployDeploymentGroupTriggerConfigurationToTerraform(struct?: CodedeployDeploymentGroupTriggerConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group}
*/
export declare class CodedeployDeploymentGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html aws_codedeploy_deployment_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentGroupConfig
    */
    constructor(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig);
    private _appName?;
    get appName(): string;
    set appName(value: string);
    get appNameInput(): string;
    get arn(): string;
    private _autoscalingGroups?;
    get autoscalingGroups(): string[];
    set autoscalingGroups(value: string[]);
    resetAutoscalingGroups(): void;
    get autoscalingGroupsInput(): string[];
    get computePlatform(): string;
    private _deploymentConfigName?;
    get deploymentConfigName(): string;
    set deploymentConfigName(value: string);
    resetDeploymentConfigName(): void;
    get deploymentConfigNameInput(): string;
    get deploymentGroupId(): string;
    private _deploymentGroupName?;
    get deploymentGroupName(): string;
    set deploymentGroupName(value: string);
    get deploymentGroupNameInput(): string;
    get id(): string;
    private _serviceRoleArn?;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    get serviceRoleArnInput(): string;
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
    private _alarmConfiguration;
    get alarmConfiguration(): CodedeployDeploymentGroupAlarmConfigurationOutputReference;
    putAlarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration): void;
    resetAlarmConfiguration(): void;
    get alarmConfigurationInput(): CodedeployDeploymentGroupAlarmConfiguration;
    private _autoRollbackConfiguration;
    get autoRollbackConfiguration(): CodedeployDeploymentGroupAutoRollbackConfigurationOutputReference;
    putAutoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration): void;
    resetAutoRollbackConfiguration(): void;
    get autoRollbackConfigurationInput(): CodedeployDeploymentGroupAutoRollbackConfiguration;
    private _blueGreenDeploymentConfig;
    get blueGreenDeploymentConfig(): CodedeployDeploymentGroupBlueGreenDeploymentConfigOutputReference;
    putBlueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig): void;
    resetBlueGreenDeploymentConfig(): void;
    get blueGreenDeploymentConfigInput(): CodedeployDeploymentGroupBlueGreenDeploymentConfig;
    private _deploymentStyle;
    get deploymentStyle(): CodedeployDeploymentGroupDeploymentStyleOutputReference;
    putDeploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle): void;
    resetDeploymentStyle(): void;
    get deploymentStyleInput(): CodedeployDeploymentGroupDeploymentStyle;
    private _ec2TagFilter?;
    get ec2TagFilter(): CodedeployDeploymentGroupEc2TagFilter[];
    set ec2TagFilter(value: CodedeployDeploymentGroupEc2TagFilter[]);
    resetEc2TagFilter(): void;
    get ec2TagFilterInput(): CodedeployDeploymentGroupEc2TagFilter[];
    private _ec2TagSet?;
    get ec2TagSet(): CodedeployDeploymentGroupEc2TagSet[];
    set ec2TagSet(value: CodedeployDeploymentGroupEc2TagSet[]);
    resetEc2TagSet(): void;
    get ec2TagSetInput(): CodedeployDeploymentGroupEc2TagSet[];
    private _ecsService;
    get ecsService(): CodedeployDeploymentGroupEcsServiceOutputReference;
    putEcsService(value: CodedeployDeploymentGroupEcsService): void;
    resetEcsService(): void;
    get ecsServiceInput(): CodedeployDeploymentGroupEcsService;
    private _loadBalancerInfo;
    get loadBalancerInfo(): CodedeployDeploymentGroupLoadBalancerInfoOutputReference;
    putLoadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo): void;
    resetLoadBalancerInfo(): void;
    get loadBalancerInfoInput(): CodedeployDeploymentGroupLoadBalancerInfo;
    private _onPremisesInstanceTagFilter?;
    get onPremisesInstanceTagFilter(): CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
    set onPremisesInstanceTagFilter(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[]);
    resetOnPremisesInstanceTagFilter(): void;
    get onPremisesInstanceTagFilterInput(): CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
    private _triggerConfiguration?;
    get triggerConfiguration(): CodedeployDeploymentGroupTriggerConfiguration[];
    set triggerConfiguration(value: CodedeployDeploymentGroupTriggerConfiguration[]);
    resetTriggerConfiguration(): void;
    get triggerConfigurationInput(): CodedeployDeploymentGroupTriggerConfiguration[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codedeploy-deployment-group.d.ts.map