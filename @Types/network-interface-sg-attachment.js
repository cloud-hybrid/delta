// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment}
*/
export class NetworkInterfaceSgAttachment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_network_interface_sg_attachment";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html aws_network_interface_sg_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfaceSgAttachmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_network_interface_sg_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._networkInterfaceId = config.networkInterfaceId;
        this._securityGroupId = config.securityGroupId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // network_interface_id - computed: false, optional: false, required: true
    _networkInterfaceId;
    get networkInterfaceId() {
        return this.getStringAttribute('network_interface_id');
    }
    set networkInterfaceId(value) {
        this._networkInterfaceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkInterfaceIdInput() {
        return this._networkInterfaceId;
    }
    // security_group_id - computed: false, optional: false, required: true
    _securityGroupId;
    get securityGroupId() {
        return this.getStringAttribute('security_group_id');
    }
    set securityGroupId(value) {
        this._securityGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupIdInput() {
        return this._securityGroupId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
            security_group_id: cdktf.stringToTerraform(this._securityGroupId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay1pbnRlcmZhY2Utc2ctYXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibmV0d29yay1pbnRlcmZhY2Utc2ctYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnQi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLDRCQUE2QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFdkUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHFDQUFxQyxDQUFDO0lBRXRGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTBDO1FBQ3pGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUscUNBQXFDO1lBQzVELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3JELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO0lBQ2pELENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYix1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDBFQUEwRTtJQUNsRSxtQkFBbUIsQ0FBVTtJQUNyQyxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCxJQUFXLGtCQUFrQixDQUFDLEtBQWE7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7SUFFRCx1RUFBdUU7SUFDL0QsZ0JBQWdCLENBQVU7SUFDbEMsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELElBQVcsZUFBZSxDQUFDLEtBQWE7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFFRixvQkFBb0I7UUFDNUIsT0FBTztZQUNMLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDdkUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUNsRSxDQUFDO0lBQ0osQ0FBQyJ9