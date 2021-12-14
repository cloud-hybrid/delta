import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppConfig
*/
export interface AppconfigEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#application_id AppconfigEnvironment#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#description AppconfigEnvironment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#name AppconfigEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#tags AppconfigEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#tags_all AppconfigEnvironment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * monitor block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#monitor AppconfigEnvironment#monitor}
    */
    readonly monitor?: AppconfigEnvironmentMonitor[];
}
export interface AppconfigEnvironmentMonitor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#alarm_arn AppconfigEnvironment#alarm_arn}
    */
    readonly alarmArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html#alarm_role_arn AppconfigEnvironment#alarm_role_arn}
    */
    readonly alarmRoleArn?: string;
}
export declare function appconfigEnvironmentMonitorToTerraform(struct?: AppconfigEnvironmentMonitor): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html aws_appconfig_environment}
*/
export declare class AppconfigEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment.html aws_appconfig_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigEnvironmentConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get environmentId(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get state(): string;
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
    private _monitor?;
    get monitor(): AppconfigEnvironmentMonitor[];
    set monitor(value: AppconfigEnvironmentMonitor[]);
    resetMonitor(): void;
    get monitorInput(): AppconfigEnvironmentMonitor[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appconfig-environment.d.ts.map