import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Streaming for Kafka
*/
export interface DataAwsMskConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html#name DataAwsMskConfiguration#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html aws_msk_configuration}
*/
export declare class DataAwsMskConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html aws_msk_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMskConfigurationConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
    get kafkaVersions(): string[];
    get latestRevision(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get serverProperties(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-msk-configuration.d.ts.map