import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeDeploy
*/
export interface CodedeployDeploymentConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#compute_platform CodedeployDeploymentConfig#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}
    */
    readonly deploymentConfigName: string;
    /**
    * minimum_healthy_hosts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}
    */
    readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts;
    /**
    * traffic_routing_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}
    */
    readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig;
}
export interface CodedeployDeploymentConfigMinimumHealthyHosts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#value CodedeployDeploymentConfig#value}
    */
    readonly value?: number;
}
export declare function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference | CodedeployDeploymentConfigMinimumHealthyHosts): any;
export declare class CodedeployDeploymentConfigMinimumHealthyHostsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentConfigMinimumHealthyHosts | undefined;
    set internalValue(value: CodedeployDeploymentConfigMinimumHealthyHosts | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}
    */
    readonly percentage?: number;
}
export declare function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any;
export declare class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined;
    set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number;
    private _percentage?;
    get percentage(): number;
    set percentage(value: number);
    resetPercentage(): void;
    get percentageInput(): number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}
    */
    readonly percentage?: number;
}
export declare function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any;
export declare class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined;
    set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number;
    private _percentage?;
    get percentage(): number;
    set percentage(value: number);
    resetPercentage(): void;
    get percentageInput(): number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * time_based_canary block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_canary CodedeployDeploymentConfig#time_based_canary}
    */
    readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
    /**
    * time_based_linear block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_linear CodedeployDeploymentConfig#time_based_linear}
    */
    readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
}
export declare function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference | CodedeployDeploymentConfigTrafficRoutingConfig): any;
export declare class CodedeployDeploymentConfigTrafficRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfig | undefined;
    set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfig | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _timeBasedCanary;
    get timeBasedCanary(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference;
    putTimeBasedCanary(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): void;
    resetTimeBasedCanary(): void;
    get timeBasedCanaryInput(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
    private _timeBasedLinear;
    get timeBasedLinear(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference;
    putTimeBasedLinear(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): void;
    resetTimeBasedLinear(): void;
    get timeBasedLinearInput(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config}
*/
export declare class CodedeployDeploymentConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentConfigConfig
    */
    constructor(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig);
    private _computePlatform?;
    get computePlatform(): string;
    set computePlatform(value: string);
    resetComputePlatform(): void;
    get computePlatformInput(): string;
    get deploymentConfigId(): string;
    private _deploymentConfigName?;
    get deploymentConfigName(): string;
    set deploymentConfigName(value: string);
    get deploymentConfigNameInput(): string;
    get id(): string;
    private _minimumHealthyHosts;
    get minimumHealthyHosts(): CodedeployDeploymentConfigMinimumHealthyHostsOutputReference;
    putMinimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts): void;
    resetMinimumHealthyHosts(): void;
    get minimumHealthyHostsInput(): CodedeployDeploymentConfigMinimumHealthyHosts;
    private _trafficRoutingConfig;
    get trafficRoutingConfig(): CodedeployDeploymentConfigTrafficRoutingConfigOutputReference;
    putTrafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig): void;
    resetTrafficRoutingConfig(): void;
    get trafficRoutingConfigInput(): CodedeployDeploymentConfigTrafficRoutingConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codedeploy-deployment-config.d.ts.map