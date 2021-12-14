import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Streaming for Kafka
*/
export interface MskConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#description MskConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#kafka_versions MskConfiguration#kafka_versions}
    */
    readonly kafkaVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#name MskConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#server_properties MskConfiguration#server_properties}
    */
    readonly serverProperties: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration}
*/
export declare class MskConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: MskConfigurationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _kafkaVersions?;
    get kafkaVersions(): string[];
    set kafkaVersions(value: string[]);
    resetKafkaVersions(): void;
    get kafkaVersionsInput(): string[];
    get latestRevision(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _serverProperties?;
    get serverProperties(): string;
    set serverProperties(value: string);
    get serverPropertiesInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=msk-configuration.d.ts.map