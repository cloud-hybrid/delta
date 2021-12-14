// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsMskBrokerNodesNodeInfoList extends cdktf.ComplexComputedList {
    // attached_eni_id - computed: true, optional: false, required: false
    get attachedEniId() {
        return this.getStringAttribute('attached_eni_id');
    }
    // broker_id - computed: true, optional: false, required: false
    get brokerId() {
        return this.getNumberAttribute('broker_id');
    }
    // client_subnet - computed: true, optional: false, required: false
    get clientSubnet() {
        return this.getStringAttribute('client_subnet');
    }
    // client_vpc_ip_address - computed: true, optional: false, required: false
    get clientVpcIpAddress() {
        return this.getStringAttribute('client_vpc_ip_address');
    }
    // endpoints - computed: true, optional: false, required: false
    get endpoints() {
        return this.getListAttribute('endpoints');
    }
    // node_arn - computed: true, optional: false, required: false
    get nodeArn() {
        return this.getStringAttribute('node_arn');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes}
*/
export class DataAwsMskBrokerNodes extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_msk_broker_nodes";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskBrokerNodesConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_msk_broker_nodes',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clusterArn = config.clusterArn;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cluster_arn - computed: false, optional: false, required: true
    _clusterArn;
    get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    set clusterArn(value) {
        this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterArnInput() {
        return this._clusterArn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // node_info_list - computed: true, optional: false, required: false
    nodeInfoList(index) {
        return new DataAwsMskBrokerNodesNodeInfoList(this, 'node_info_list', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cluster_arn: cdktf.stringToTerraform(this._clusterArn),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbXNrLWJyb2tlci1ub2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtbXNrLWJyb2tlci1ub2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFXL0IsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUUscUVBQXFFO0lBQ3JFLElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsSUFBVyxZQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwyRUFBMkU7SUFDM0UsSUFBVyxrQkFBa0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRWxFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxzQkFBc0IsQ0FBQztJQUV2RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFtQztRQUNsRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHNCQUFzQjtZQUM3QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixpRUFBaUU7SUFDekQsV0FBVyxDQUFVO0lBQzdCLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBVyxVQUFVLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0VBQW9FO0lBQzdELFlBQVksQ0FBQyxLQUFhO1FBQy9CLE9BQU8sSUFBSSxpQ0FBaUMsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3ZELENBQUM7SUFDSixDQUFDIn0=