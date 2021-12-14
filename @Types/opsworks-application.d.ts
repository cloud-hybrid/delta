import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS OpsWorks
*/
export interface OpsworksApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}
    */
    readonly autoBundleOnDeploy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}
    */
    readonly awsFlowRubySettings?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#data_source_arn OpsworksApplication#data_source_arn}
    */
    readonly dataSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#data_source_database_name OpsworksApplication#data_source_database_name}
    */
    readonly dataSourceDatabaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#data_source_type OpsworksApplication#data_source_type}
    */
    readonly dataSourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#description OpsworksApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#document_root OpsworksApplication#document_root}
    */
    readonly documentRoot?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#domains OpsworksApplication#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#enable_ssl OpsworksApplication#enable_ssl}
    */
    readonly enableSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#name OpsworksApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#rails_env OpsworksApplication#rails_env}
    */
    readonly railsEnv?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#short_name OpsworksApplication#short_name}
    */
    readonly shortName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#stack_id OpsworksApplication#stack_id}
    */
    readonly stackId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#type OpsworksApplication#type}
    */
    readonly type: string;
    /**
    * app_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#app_source OpsworksApplication#app_source}
    */
    readonly appSource?: OpsworksApplicationAppSource[];
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#environment OpsworksApplication#environment}
    */
    readonly environment?: OpsworksApplicationEnvironment[];
    /**
    * ssl_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#ssl_configuration OpsworksApplication#ssl_configuration}
    */
    readonly sslConfiguration?: OpsworksApplicationSslConfiguration[];
}
export interface OpsworksApplicationAppSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#password OpsworksApplication#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#revision OpsworksApplication#revision}
    */
    readonly revision?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#ssh_key OpsworksApplication#ssh_key}
    */
    readonly sshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#type OpsworksApplication#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#url OpsworksApplication#url}
    */
    readonly url?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#username OpsworksApplication#username}
    */
    readonly username?: string;
}
export declare function opsworksApplicationAppSourceToTerraform(struct?: OpsworksApplicationAppSource): any;
export interface OpsworksApplicationEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#key OpsworksApplication#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#secure OpsworksApplication#secure}
    */
    readonly secure?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#value OpsworksApplication#value}
    */
    readonly value: string;
}
export declare function opsworksApplicationEnvironmentToTerraform(struct?: OpsworksApplicationEnvironment): any;
export interface OpsworksApplicationSslConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#certificate OpsworksApplication#certificate}
    */
    readonly certificate: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#chain OpsworksApplication#chain}
    */
    readonly chain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html#private_key OpsworksApplication#private_key}
    */
    readonly privateKey: string;
}
export declare function opsworksApplicationSslConfigurationToTerraform(struct?: OpsworksApplicationSslConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html aws_opsworks_application}
*/
export declare class OpsworksApplication extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application.html aws_opsworks_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksApplicationConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksApplicationConfig);
    private _autoBundleOnDeploy?;
    get autoBundleOnDeploy(): string;
    set autoBundleOnDeploy(value: string);
    resetAutoBundleOnDeploy(): void;
    get autoBundleOnDeployInput(): string;
    private _awsFlowRubySettings?;
    get awsFlowRubySettings(): string;
    set awsFlowRubySettings(value: string);
    resetAwsFlowRubySettings(): void;
    get awsFlowRubySettingsInput(): string;
    private _dataSourceArn?;
    get dataSourceArn(): string;
    set dataSourceArn(value: string);
    resetDataSourceArn(): void;
    get dataSourceArnInput(): string;
    private _dataSourceDatabaseName?;
    get dataSourceDatabaseName(): string;
    set dataSourceDatabaseName(value: string);
    resetDataSourceDatabaseName(): void;
    get dataSourceDatabaseNameInput(): string;
    private _dataSourceType?;
    get dataSourceType(): string;
    set dataSourceType(value: string);
    resetDataSourceType(): void;
    get dataSourceTypeInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _documentRoot?;
    get documentRoot(): string;
    set documentRoot(value: string);
    resetDocumentRoot(): void;
    get documentRootInput(): string;
    private _domains?;
    get domains(): string[];
    set domains(value: string[]);
    resetDomains(): void;
    get domainsInput(): string[];
    private _enableSsl?;
    get enableSsl(): boolean | cdktf.IResolvable;
    set enableSsl(value: boolean | cdktf.IResolvable);
    resetEnableSsl(): void;
    get enableSslInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _railsEnv?;
    get railsEnv(): string;
    set railsEnv(value: string);
    resetRailsEnv(): void;
    get railsEnvInput(): string;
    private _shortName?;
    get shortName(): string;
    set shortName(value: string);
    resetShortName(): void;
    get shortNameInput(): string;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _appSource?;
    get appSource(): OpsworksApplicationAppSource[];
    set appSource(value: OpsworksApplicationAppSource[]);
    resetAppSource(): void;
    get appSourceInput(): OpsworksApplicationAppSource[];
    private _environment?;
    get environment(): OpsworksApplicationEnvironment[];
    set environment(value: OpsworksApplicationEnvironment[]);
    resetEnvironment(): void;
    get environmentInput(): OpsworksApplicationEnvironment[];
    private _sslConfiguration?;
    get sslConfiguration(): OpsworksApplicationSslConfiguration[];
    set sslConfiguration(value: OpsworksApplicationSslConfiguration[]);
    resetSslConfiguration(): void;
    get sslConfigurationInput(): OpsworksApplicationSslConfiguration[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=opsworks-application.d.ts.map