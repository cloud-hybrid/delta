import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Network Firewall
*/
export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}
    */
    readonly firewallArn: string;
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
    */
    readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration;
}
export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination NetworkfirewallLoggingConfiguration#log_destination}
    */
    readonly logDestination: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
    */
    readonly logDestinationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_type NetworkfirewallLoggingConfiguration#log_type}
    */
    readonly logType: string;
}
export declare function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig): any;
export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
    /**
    * log_destination_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}
    */
    readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
}
export declare function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference | NetworkfirewallLoggingConfigurationLoggingConfiguration): any;
export declare class NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): NetworkfirewallLoggingConfigurationLoggingConfiguration | undefined;
    set internalValue(value: NetworkfirewallLoggingConfigurationLoggingConfiguration | undefined);
    private _logDestinationConfig?;
    get logDestinationConfig(): NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
    set logDestinationConfig(value: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[]);
    get logDestinationConfigInput(): NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration}
*/
export declare class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallLoggingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig);
    private _firewallArn?;
    get firewallArn(): string;
    set firewallArn(value: string);
    get firewallArnInput(): string;
    get id(): string;
    private _loggingConfiguration;
    get loggingConfiguration(): NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration): void;
    get loggingConfigurationInput(): NetworkfirewallLoggingConfigurationLoggingConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=networkfirewall-logging-configuration.d.ts.map