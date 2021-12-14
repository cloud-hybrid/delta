import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Streaming for Kafka
*/
export interface DataAwsMskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html#cluster_name DataAwsMskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html#tags DataAwsMskCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster}
*/
export declare class DataAwsMskCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMskClusterConfig);
    get arn(): string;
    get bootstrapBrokers(): string;
    get bootstrapBrokersSaslIam(): string;
    get bootstrapBrokersSaslScram(): string;
    get bootstrapBrokersTls(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get id(): string;
    get kafkaVersion(): string;
    get numberOfBrokerNodes(): number;
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
    get zookeeperConnectString(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-msk-cluster.d.ts.map