import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Streaming for Kafka
*/
export interface DataAwsMskBrokerNodesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html#cluster_arn DataAwsMskBrokerNodes#cluster_arn}
    */
    readonly clusterArn: string;
}
export declare class DataAwsMskBrokerNodesNodeInfoList extends cdktf.ComplexComputedList {
    get attachedEniId(): string;
    get brokerId(): number;
    get clientSubnet(): string;
    get clientVpcIpAddress(): string;
    get endpoints(): string[];
    get nodeArn(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes}
*/
export declare class DataAwsMskBrokerNodes extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskBrokerNodesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMskBrokerNodesConfig);
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string;
    get id(): string;
    nodeInfoList(index: string): DataAwsMskBrokerNodesNodeInfoList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-msk-broker-nodes.d.ts.map