// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule}
*/
export class NetworkAclRule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_network_acl_rule";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkAclRuleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_network_acl_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cidrBlock = config.cidrBlock;
        this._egress = config.egress;
        this._fromPort = config.fromPort;
        this._icmpCode = config.icmpCode;
        this._icmpType = config.icmpType;
        this._ipv6CidrBlock = config.ipv6CidrBlock;
        this._networkAclId = config.networkAclId;
        this._protocol = config.protocol;
        this._ruleAction = config.ruleAction;
        this._ruleNumber = config.ruleNumber;
        this._toPort = config.toPort;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // cidr_block - computed: false, optional: true, required: false
    _cidrBlock;
    get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    set cidrBlock(value) {
        this._cidrBlock = value;
    }
    resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cidrBlockInput() {
        return this._cidrBlock;
    }
    // egress - computed: false, optional: true, required: false
    _egress;
    get egress() {
        return this.getBooleanAttribute('egress');
    }
    set egress(value) {
        this._egress = value;
    }
    resetEgress() {
        this._egress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get egressInput() {
        return this._egress;
    }
    // from_port - computed: false, optional: true, required: false
    _fromPort;
    get fromPort() {
        return this.getNumberAttribute('from_port');
    }
    set fromPort(value) {
        this._fromPort = value;
    }
    resetFromPort() {
        this._fromPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fromPortInput() {
        return this._fromPort;
    }
    // icmp_code - computed: false, optional: true, required: false
    _icmpCode;
    get icmpCode() {
        return this.getStringAttribute('icmp_code');
    }
    set icmpCode(value) {
        this._icmpCode = value;
    }
    resetIcmpCode() {
        this._icmpCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get icmpCodeInput() {
        return this._icmpCode;
    }
    // icmp_type - computed: false, optional: true, required: false
    _icmpType;
    get icmpType() {
        return this.getStringAttribute('icmp_type');
    }
    set icmpType(value) {
        this._icmpType = value;
    }
    resetIcmpType() {
        this._icmpType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get icmpTypeInput() {
        return this._icmpType;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // ipv6_cidr_block - computed: false, optional: true, required: false
    _ipv6CidrBlock;
    get ipv6CidrBlock() {
        return this.getStringAttribute('ipv6_cidr_block');
    }
    set ipv6CidrBlock(value) {
        this._ipv6CidrBlock = value;
    }
    resetIpv6CidrBlock() {
        this._ipv6CidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipv6CidrBlockInput() {
        return this._ipv6CidrBlock;
    }
    // network_acl_id - computed: false, optional: false, required: true
    _networkAclId;
    get networkAclId() {
        return this.getStringAttribute('network_acl_id');
    }
    set networkAclId(value) {
        this._networkAclId = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkAclIdInput() {
        return this._networkAclId;
    }
    // protocol - computed: false, optional: false, required: true
    _protocol;
    get protocol() {
        return this.getStringAttribute('protocol');
    }
    set protocol(value) {
        this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    get protocolInput() {
        return this._protocol;
    }
    // rule_action - computed: false, optional: false, required: true
    _ruleAction;
    get ruleAction() {
        return this.getStringAttribute('rule_action');
    }
    set ruleAction(value) {
        this._ruleAction = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleActionInput() {
        return this._ruleAction;
    }
    // rule_number - computed: false, optional: false, required: true
    _ruleNumber;
    get ruleNumber() {
        return this.getNumberAttribute('rule_number');
    }
    set ruleNumber(value) {
        this._ruleNumber = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleNumberInput() {
        return this._ruleNumber;
    }
    // to_port - computed: false, optional: true, required: false
    _toPort;
    get toPort() {
        return this.getNumberAttribute('to_port');
    }
    set toPort(value) {
        this._toPort = value;
    }
    resetToPort() {
        this._toPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get toPortInput() {
        return this._toPort;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cidr_block: cdktf.stringToTerraform(this._cidrBlock),
            egress: cdktf.booleanToTerraform(this._egress),
            from_port: cdktf.numberToTerraform(this._fromPort),
            icmp_code: cdktf.stringToTerraform(this._icmpCode),
            icmp_type: cdktf.stringToTerraform(this._icmpType),
            ipv6_cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
            network_acl_id: cdktf.stringToTerraform(this._networkAclId),
            protocol: cdktf.stringToTerraform(this._protocol),
            rule_action: cdktf.stringToTerraform(this._ruleAction),
            rule_number: cdktf.numberToTerraform(this._ruleNumber),
            to_port: cdktf.numberToTerraform(this._toPort),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay1hY2wtcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibmV0d29yay1hY2wtcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFvRC9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLGNBQWUsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRXpELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxzQkFBc0IsQ0FBQztJQUV2RSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUE0QjtRQUMzRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHNCQUFzQjtZQUM3QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7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