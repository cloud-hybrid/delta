import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Streaming for Kafka
*/
export interface DataAwsMskKafkaVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#preferred_versions DataAwsMskKafkaVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#version DataAwsMskKafkaVersion#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version}
*/
export declare class DataAwsMskKafkaVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskKafkaVersionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsMskKafkaVersionConfig);
    get id(): string;
    private _preferredVersions?;
    get preferredVersions(): string[];
    set preferredVersions(value: string[]);
    resetPreferredVersions(): void;
    get preferredVersionsInput(): string[];
    get status(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-msk-kafka-version.d.ts.map