// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class VpnConnectionRoutes extends cdktf.ComplexComputedList {
    // destination_cidr_block - computed: true, optional: false, required: false
    get destinationCidrBlock() {
        return this.getStringAttribute('destination_cidr_block');
    }
    // source - computed: true, optional: false, required: false
    get source() {
        return this.getStringAttribute('source');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
}
export class VpnConnectionVgwTelemetry extends cdktf.ComplexComputedList {
    // accepted_route_count - computed: true, optional: false, required: false
    get acceptedRouteCount() {
        return this.getNumberAttribute('accepted_route_count');
    }
    // last_status_change - computed: true, optional: false, required: false
    get lastStatusChange() {
        return this.getStringAttribute('last_status_change');
    }
    // outside_ip_address - computed: true, optional: false, required: false
    get outsideIpAddress() {
        return this.getStringAttribute('outside_ip_address');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // status_message - computed: true, optional: false, required: false
    get statusMessage() {
        return this.getStringAttribute('status_message');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection}
*/
export class VpnConnection extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_vpn_connection";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection.html aws_vpn_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_vpn_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._customerGatewayId = config.customerGatewayId;
        this._enableAcceleration = config.enableAcceleration;
        this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
        this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
        this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
        this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
        this._staticRoutesOnly = config.staticRoutesOnly;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._transitGatewayId = config.transitGatewayId;
        this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
        this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
        this._tunnel1IkeVersions = config.tunnel1IkeVersions;
        this._tunnel1InsideCidr = config.tunnel1InsideCidr;
        this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
        this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
        this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
        this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
        this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
        this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
        this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
        this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
        this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
        this._tunnel1PresharedKey = config.tunnel1PresharedKey;
        this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
        this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
        this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
        this._tunnel1StartupAction = config.tunnel1StartupAction;
        this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
        this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
        this._tunnel2IkeVersions = config.tunnel2IkeVersions;
        this._tunnel2InsideCidr = config.tunnel2InsideCidr;
        this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
        this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
        this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
        this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
        this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
        this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
        this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
        this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
        this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
        this._tunnel2PresharedKey = config.tunnel2PresharedKey;
        this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
        this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
        this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
        this._tunnel2StartupAction = config.tunnel2StartupAction;
        this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
        this._type = config.type;
        this._vpnGatewayId = config.vpnGatewayId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // customer_gateway_configuration - computed: true, optional: false, required: false
    get customerGatewayConfiguration() {
        return this.getStringAttribute('customer_gateway_configuration');
    }
    // customer_gateway_id - computed: false, optional: false, required: true
    _customerGatewayId;
    get customerGatewayId() {
        return this.getStringAttribute('customer_gateway_id');
    }
    set customerGatewayId(value) {
        this._customerGatewayId = value;
    }
    // Temporarily expose input value. Use with caution.
    get customerGatewayIdInput() {
        return this._customerGatewayId;
    }
    // enable_acceleration - computed: true, optional: true, required: false
    _enableAcceleration;
    get enableAcceleration() {
        return this.getBooleanAttribute('enable_acceleration');
    }
    set enableAcceleration(value) {
        this._enableAcceleration = value;
    }
    resetEnableAcceleration() {
        this._enableAcceleration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAccelerationInput() {
        return this._enableAcceleration;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // local_ipv4_network_cidr - computed: true, optional: true, required: false
    _localIpv4NetworkCidr;
    get localIpv4NetworkCidr() {
        return this.getStringAttribute('local_ipv4_network_cidr');
    }
    set localIpv4NetworkCidr(value) {
        this._localIpv4NetworkCidr = value;
    }
    resetLocalIpv4NetworkCidr() {
        this._localIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localIpv4NetworkCidrInput() {
        return this._localIpv4NetworkCidr;
    }
    // local_ipv6_network_cidr - computed: true, optional: true, required: false
    _localIpv6NetworkCidr;
    get localIpv6NetworkCidr() {
        return this.getStringAttribute('local_ipv6_network_cidr');
    }
    set localIpv6NetworkCidr(value) {
        this._localIpv6NetworkCidr = value;
    }
    resetLocalIpv6NetworkCidr() {
        this._localIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get localIpv6NetworkCidrInput() {
        return this._localIpv6NetworkCidr;
    }
    // remote_ipv4_network_cidr - computed: true, optional: true, required: false
    _remoteIpv4NetworkCidr;
    get remoteIpv4NetworkCidr() {
        return this.getStringAttribute('remote_ipv4_network_cidr');
    }
    set remoteIpv4NetworkCidr(value) {
        this._remoteIpv4NetworkCidr = value;
    }
    resetRemoteIpv4NetworkCidr() {
        this._remoteIpv4NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteIpv4NetworkCidrInput() {
        return this._remoteIpv4NetworkCidr;
    }
    // remote_ipv6_network_cidr - computed: true, optional: true, required: false
    _remoteIpv6NetworkCidr;
    get remoteIpv6NetworkCidr() {
        return this.getStringAttribute('remote_ipv6_network_cidr');
    }
    set remoteIpv6NetworkCidr(value) {
        this._remoteIpv6NetworkCidr = value;
    }
    resetRemoteIpv6NetworkCidr() {
        this._remoteIpv6NetworkCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get remoteIpv6NetworkCidrInput() {
        return this._remoteIpv6NetworkCidr;
    }
    // routes - computed: true, optional: false, required: false
    routes(index) {
        return new VpnConnectionRoutes(this, 'routes', index);
    }
    // static_routes_only - computed: true, optional: true, required: false
    _staticRoutesOnly;
    get staticRoutesOnly() {
        return this.getBooleanAttribute('static_routes_only');
    }
    set staticRoutesOnly(value) {
        this._staticRoutesOnly = value;
    }
    resetStaticRoutesOnly() {
        this._staticRoutesOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get staticRoutesOnlyInput() {
        return this._staticRoutesOnly;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // transit_gateway_attachment_id - computed: true, optional: false, required: false
    get transitGatewayAttachmentId() {
        return this.getStringAttribute('transit_gateway_attachment_id');
    }
    // transit_gateway_id - computed: false, optional: true, required: false
    _transitGatewayId;
    get transitGatewayId() {
        return this.getStringAttribute('transit_gateway_id');
    }
    set transitGatewayId(value) {
        this._transitGatewayId = value;
    }
    resetTransitGatewayId() {
        this._transitGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get transitGatewayIdInput() {
        return this._transitGatewayId;
    }
    // tunnel1_address - computed: true, optional: false, required: false
    get tunnel1Address() {
        return this.getStringAttribute('tunnel1_address');
    }
    // tunnel1_bgp_asn - computed: true, optional: false, required: false
    get tunnel1BgpAsn() {
        return this.getStringAttribute('tunnel1_bgp_asn');
    }
    // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
    get tunnel1BgpHoldtime() {
        return this.getNumberAttribute('tunnel1_bgp_holdtime');
    }
    // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
    get tunnel1CgwInsideAddress() {
        return this.getStringAttribute('tunnel1_cgw_inside_address');
    }
    // tunnel1_dpd_timeout_action - computed: false, optional: true, required: false
    _tunnel1DpdTimeoutAction;
    get tunnel1DpdTimeoutAction() {
        return this.getStringAttribute('tunnel1_dpd_timeout_action');
    }
    set tunnel1DpdTimeoutAction(value) {
        this._tunnel1DpdTimeoutAction = value;
    }
    resetTunnel1DpdTimeoutAction() {
        this._tunnel1DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1DpdTimeoutActionInput() {
        return this._tunnel1DpdTimeoutAction;
    }
    // tunnel1_dpd_timeout_seconds - computed: false, optional: true, required: false
    _tunnel1DpdTimeoutSeconds;
    get tunnel1DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
    }
    set tunnel1DpdTimeoutSeconds(value) {
        this._tunnel1DpdTimeoutSeconds = value;
    }
    resetTunnel1DpdTimeoutSeconds() {
        this._tunnel1DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1DpdTimeoutSecondsInput() {
        return this._tunnel1DpdTimeoutSeconds;
    }
    // tunnel1_ike_versions - computed: false, optional: true, required: false
    _tunnel1IkeVersions;
    get tunnel1IkeVersions() {
        return this.getListAttribute('tunnel1_ike_versions');
    }
    set tunnel1IkeVersions(value) {
        this._tunnel1IkeVersions = value;
    }
    resetTunnel1IkeVersions() {
        this._tunnel1IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1IkeVersionsInput() {
        return this._tunnel1IkeVersions;
    }
    // tunnel1_inside_cidr - computed: true, optional: true, required: false
    _tunnel1InsideCidr;
    get tunnel1InsideCidr() {
        return this.getStringAttribute('tunnel1_inside_cidr');
    }
    set tunnel1InsideCidr(value) {
        this._tunnel1InsideCidr = value;
    }
    resetTunnel1InsideCidr() {
        this._tunnel1InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1InsideCidrInput() {
        return this._tunnel1InsideCidr;
    }
    // tunnel1_inside_ipv6_cidr - computed: true, optional: true, required: false
    _tunnel1InsideIpv6Cidr;
    get tunnel1InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
    }
    set tunnel1InsideIpv6Cidr(value) {
        this._tunnel1InsideIpv6Cidr = value;
    }
    resetTunnel1InsideIpv6Cidr() {
        this._tunnel1InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1InsideIpv6CidrInput() {
        return this._tunnel1InsideIpv6Cidr;
    }
    // tunnel1_phase1_dh_group_numbers - computed: false, optional: true, required: false
    _tunnel1Phase1DhGroupNumbers;
    get tunnel1Phase1DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel1_phase1_dh_group_numbers');
    }
    set tunnel1Phase1DhGroupNumbers(value) {
        this._tunnel1Phase1DhGroupNumbers = value;
    }
    resetTunnel1Phase1DhGroupNumbers() {
        this._tunnel1Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1DhGroupNumbersInput() {
        return this._tunnel1Phase1DhGroupNumbers;
    }
    // tunnel1_phase1_encryption_algorithms - computed: false, optional: true, required: false
    _tunnel1Phase1EncryptionAlgorithms;
    get tunnel1Phase1EncryptionAlgorithms() {
        return this.getListAttribute('tunnel1_phase1_encryption_algorithms');
    }
    set tunnel1Phase1EncryptionAlgorithms(value) {
        this._tunnel1Phase1EncryptionAlgorithms = value;
    }
    resetTunnel1Phase1EncryptionAlgorithms() {
        this._tunnel1Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1EncryptionAlgorithmsInput() {
        return this._tunnel1Phase1EncryptionAlgorithms;
    }
    // tunnel1_phase1_integrity_algorithms - computed: false, optional: true, required: false
    _tunnel1Phase1IntegrityAlgorithms;
    get tunnel1Phase1IntegrityAlgorithms() {
        return this.getListAttribute('tunnel1_phase1_integrity_algorithms');
    }
    set tunnel1Phase1IntegrityAlgorithms(value) {
        this._tunnel1Phase1IntegrityAlgorithms = value;
    }
    resetTunnel1Phase1IntegrityAlgorithms() {
        this._tunnel1Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1IntegrityAlgorithmsInput() {
        return this._tunnel1Phase1IntegrityAlgorithms;
    }
    // tunnel1_phase1_lifetime_seconds - computed: false, optional: true, required: false
    _tunnel1Phase1LifetimeSeconds;
    get tunnel1Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
    }
    set tunnel1Phase1LifetimeSeconds(value) {
        this._tunnel1Phase1LifetimeSeconds = value;
    }
    resetTunnel1Phase1LifetimeSeconds() {
        this._tunnel1Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase1LifetimeSecondsInput() {
        return this._tunnel1Phase1LifetimeSeconds;
    }
    // tunnel1_phase2_dh_group_numbers - computed: false, optional: true, required: false
    _tunnel1Phase2DhGroupNumbers;
    get tunnel1Phase2DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel1_phase2_dh_group_numbers');
    }
    set tunnel1Phase2DhGroupNumbers(value) {
        this._tunnel1Phase2DhGroupNumbers = value;
    }
    resetTunnel1Phase2DhGroupNumbers() {
        this._tunnel1Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2DhGroupNumbersInput() {
        return this._tunnel1Phase2DhGroupNumbers;
    }
    // tunnel1_phase2_encryption_algorithms - computed: false, optional: true, required: false
    _tunnel1Phase2EncryptionAlgorithms;
    get tunnel1Phase2EncryptionAlgorithms() {
        return this.getListAttribute('tunnel1_phase2_encryption_algorithms');
    }
    set tunnel1Phase2EncryptionAlgorithms(value) {
        this._tunnel1Phase2EncryptionAlgorithms = value;
    }
    resetTunnel1Phase2EncryptionAlgorithms() {
        this._tunnel1Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2EncryptionAlgorithmsInput() {
        return this._tunnel1Phase2EncryptionAlgorithms;
    }
    // tunnel1_phase2_integrity_algorithms - computed: false, optional: true, required: false
    _tunnel1Phase2IntegrityAlgorithms;
    get tunnel1Phase2IntegrityAlgorithms() {
        return this.getListAttribute('tunnel1_phase2_integrity_algorithms');
    }
    set tunnel1Phase2IntegrityAlgorithms(value) {
        this._tunnel1Phase2IntegrityAlgorithms = value;
    }
    resetTunnel1Phase2IntegrityAlgorithms() {
        this._tunnel1Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2IntegrityAlgorithmsInput() {
        return this._tunnel1Phase2IntegrityAlgorithms;
    }
    // tunnel1_phase2_lifetime_seconds - computed: false, optional: true, required: false
    _tunnel1Phase2LifetimeSeconds;
    get tunnel1Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
    }
    set tunnel1Phase2LifetimeSeconds(value) {
        this._tunnel1Phase2LifetimeSeconds = value;
    }
    resetTunnel1Phase2LifetimeSeconds() {
        this._tunnel1Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1Phase2LifetimeSecondsInput() {
        return this._tunnel1Phase2LifetimeSeconds;
    }
    // tunnel1_preshared_key - computed: true, optional: true, required: false
    _tunnel1PresharedKey;
    get tunnel1PresharedKey() {
        return this.getStringAttribute('tunnel1_preshared_key');
    }
    set tunnel1PresharedKey(value) {
        this._tunnel1PresharedKey = value;
    }
    resetTunnel1PresharedKey() {
        this._tunnel1PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1PresharedKeyInput() {
        return this._tunnel1PresharedKey;
    }
    // tunnel1_rekey_fuzz_percentage - computed: false, optional: true, required: false
    _tunnel1RekeyFuzzPercentage;
    get tunnel1RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
    }
    set tunnel1RekeyFuzzPercentage(value) {
        this._tunnel1RekeyFuzzPercentage = value;
    }
    resetTunnel1RekeyFuzzPercentage() {
        this._tunnel1RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1RekeyFuzzPercentageInput() {
        return this._tunnel1RekeyFuzzPercentage;
    }
    // tunnel1_rekey_margin_time_seconds - computed: false, optional: true, required: false
    _tunnel1RekeyMarginTimeSeconds;
    get tunnel1RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
    }
    set tunnel1RekeyMarginTimeSeconds(value) {
        this._tunnel1RekeyMarginTimeSeconds = value;
    }
    resetTunnel1RekeyMarginTimeSeconds() {
        this._tunnel1RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1RekeyMarginTimeSecondsInput() {
        return this._tunnel1RekeyMarginTimeSeconds;
    }
    // tunnel1_replay_window_size - computed: false, optional: true, required: false
    _tunnel1ReplayWindowSize;
    get tunnel1ReplayWindowSize() {
        return this.getNumberAttribute('tunnel1_replay_window_size');
    }
    set tunnel1ReplayWindowSize(value) {
        this._tunnel1ReplayWindowSize = value;
    }
    resetTunnel1ReplayWindowSize() {
        this._tunnel1ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1ReplayWindowSizeInput() {
        return this._tunnel1ReplayWindowSize;
    }
    // tunnel1_startup_action - computed: false, optional: true, required: false
    _tunnel1StartupAction;
    get tunnel1StartupAction() {
        return this.getStringAttribute('tunnel1_startup_action');
    }
    set tunnel1StartupAction(value) {
        this._tunnel1StartupAction = value;
    }
    resetTunnel1StartupAction() {
        this._tunnel1StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel1StartupActionInput() {
        return this._tunnel1StartupAction;
    }
    // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
    get tunnel1VgwInsideAddress() {
        return this.getStringAttribute('tunnel1_vgw_inside_address');
    }
    // tunnel2_address - computed: true, optional: false, required: false
    get tunnel2Address() {
        return this.getStringAttribute('tunnel2_address');
    }
    // tunnel2_bgp_asn - computed: true, optional: false, required: false
    get tunnel2BgpAsn() {
        return this.getStringAttribute('tunnel2_bgp_asn');
    }
    // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
    get tunnel2BgpHoldtime() {
        return this.getNumberAttribute('tunnel2_bgp_holdtime');
    }
    // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
    get tunnel2CgwInsideAddress() {
        return this.getStringAttribute('tunnel2_cgw_inside_address');
    }
    // tunnel2_dpd_timeout_action - computed: false, optional: true, required: false
    _tunnel2DpdTimeoutAction;
    get tunnel2DpdTimeoutAction() {
        return this.getStringAttribute('tunnel2_dpd_timeout_action');
    }
    set tunnel2DpdTimeoutAction(value) {
        this._tunnel2DpdTimeoutAction = value;
    }
    resetTunnel2DpdTimeoutAction() {
        this._tunnel2DpdTimeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2DpdTimeoutActionInput() {
        return this._tunnel2DpdTimeoutAction;
    }
    // tunnel2_dpd_timeout_seconds - computed: false, optional: true, required: false
    _tunnel2DpdTimeoutSeconds;
    get tunnel2DpdTimeoutSeconds() {
        return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
    }
    set tunnel2DpdTimeoutSeconds(value) {
        this._tunnel2DpdTimeoutSeconds = value;
    }
    resetTunnel2DpdTimeoutSeconds() {
        this._tunnel2DpdTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2DpdTimeoutSecondsInput() {
        return this._tunnel2DpdTimeoutSeconds;
    }
    // tunnel2_ike_versions - computed: false, optional: true, required: false
    _tunnel2IkeVersions;
    get tunnel2IkeVersions() {
        return this.getListAttribute('tunnel2_ike_versions');
    }
    set tunnel2IkeVersions(value) {
        this._tunnel2IkeVersions = value;
    }
    resetTunnel2IkeVersions() {
        this._tunnel2IkeVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2IkeVersionsInput() {
        return this._tunnel2IkeVersions;
    }
    // tunnel2_inside_cidr - computed: true, optional: true, required: false
    _tunnel2InsideCidr;
    get tunnel2InsideCidr() {
        return this.getStringAttribute('tunnel2_inside_cidr');
    }
    set tunnel2InsideCidr(value) {
        this._tunnel2InsideCidr = value;
    }
    resetTunnel2InsideCidr() {
        this._tunnel2InsideCidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2InsideCidrInput() {
        return this._tunnel2InsideCidr;
    }
    // tunnel2_inside_ipv6_cidr - computed: true, optional: true, required: false
    _tunnel2InsideIpv6Cidr;
    get tunnel2InsideIpv6Cidr() {
        return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
    }
    set tunnel2InsideIpv6Cidr(value) {
        this._tunnel2InsideIpv6Cidr = value;
    }
    resetTunnel2InsideIpv6Cidr() {
        this._tunnel2InsideIpv6Cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2InsideIpv6CidrInput() {
        return this._tunnel2InsideIpv6Cidr;
    }
    // tunnel2_phase1_dh_group_numbers - computed: false, optional: true, required: false
    _tunnel2Phase1DhGroupNumbers;
    get tunnel2Phase1DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel2_phase1_dh_group_numbers');
    }
    set tunnel2Phase1DhGroupNumbers(value) {
        this._tunnel2Phase1DhGroupNumbers = value;
    }
    resetTunnel2Phase1DhGroupNumbers() {
        this._tunnel2Phase1DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1DhGroupNumbersInput() {
        return this._tunnel2Phase1DhGroupNumbers;
    }
    // tunnel2_phase1_encryption_algorithms - computed: false, optional: true, required: false
    _tunnel2Phase1EncryptionAlgorithms;
    get tunnel2Phase1EncryptionAlgorithms() {
        return this.getListAttribute('tunnel2_phase1_encryption_algorithms');
    }
    set tunnel2Phase1EncryptionAlgorithms(value) {
        this._tunnel2Phase1EncryptionAlgorithms = value;
    }
    resetTunnel2Phase1EncryptionAlgorithms() {
        this._tunnel2Phase1EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1EncryptionAlgorithmsInput() {
        return this._tunnel2Phase1EncryptionAlgorithms;
    }
    // tunnel2_phase1_integrity_algorithms - computed: false, optional: true, required: false
    _tunnel2Phase1IntegrityAlgorithms;
    get tunnel2Phase1IntegrityAlgorithms() {
        return this.getListAttribute('tunnel2_phase1_integrity_algorithms');
    }
    set tunnel2Phase1IntegrityAlgorithms(value) {
        this._tunnel2Phase1IntegrityAlgorithms = value;
    }
    resetTunnel2Phase1IntegrityAlgorithms() {
        this._tunnel2Phase1IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1IntegrityAlgorithmsInput() {
        return this._tunnel2Phase1IntegrityAlgorithms;
    }
    // tunnel2_phase1_lifetime_seconds - computed: false, optional: true, required: false
    _tunnel2Phase1LifetimeSeconds;
    get tunnel2Phase1LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
    }
    set tunnel2Phase1LifetimeSeconds(value) {
        this._tunnel2Phase1LifetimeSeconds = value;
    }
    resetTunnel2Phase1LifetimeSeconds() {
        this._tunnel2Phase1LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase1LifetimeSecondsInput() {
        return this._tunnel2Phase1LifetimeSeconds;
    }
    // tunnel2_phase2_dh_group_numbers - computed: false, optional: true, required: false
    _tunnel2Phase2DhGroupNumbers;
    get tunnel2Phase2DhGroupNumbers() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tunnel2_phase2_dh_group_numbers');
    }
    set tunnel2Phase2DhGroupNumbers(value) {
        this._tunnel2Phase2DhGroupNumbers = value;
    }
    resetTunnel2Phase2DhGroupNumbers() {
        this._tunnel2Phase2DhGroupNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2DhGroupNumbersInput() {
        return this._tunnel2Phase2DhGroupNumbers;
    }
    // tunnel2_phase2_encryption_algorithms - computed: false, optional: true, required: false
    _tunnel2Phase2EncryptionAlgorithms;
    get tunnel2Phase2EncryptionAlgorithms() {
        return this.getListAttribute('tunnel2_phase2_encryption_algorithms');
    }
    set tunnel2Phase2EncryptionAlgorithms(value) {
        this._tunnel2Phase2EncryptionAlgorithms = value;
    }
    resetTunnel2Phase2EncryptionAlgorithms() {
        this._tunnel2Phase2EncryptionAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2EncryptionAlgorithmsInput() {
        return this._tunnel2Phase2EncryptionAlgorithms;
    }
    // tunnel2_phase2_integrity_algorithms - computed: false, optional: true, required: false
    _tunnel2Phase2IntegrityAlgorithms;
    get tunnel2Phase2IntegrityAlgorithms() {
        return this.getListAttribute('tunnel2_phase2_integrity_algorithms');
    }
    set tunnel2Phase2IntegrityAlgorithms(value) {
        this._tunnel2Phase2IntegrityAlgorithms = value;
    }
    resetTunnel2Phase2IntegrityAlgorithms() {
        this._tunnel2Phase2IntegrityAlgorithms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2IntegrityAlgorithmsInput() {
        return this._tunnel2Phase2IntegrityAlgorithms;
    }
    // tunnel2_phase2_lifetime_seconds - computed: false, optional: true, required: false
    _tunnel2Phase2LifetimeSeconds;
    get tunnel2Phase2LifetimeSeconds() {
        return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
    }
    set tunnel2Phase2LifetimeSeconds(value) {
        this._tunnel2Phase2LifetimeSeconds = value;
    }
    resetTunnel2Phase2LifetimeSeconds() {
        this._tunnel2Phase2LifetimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2Phase2LifetimeSecondsInput() {
        return this._tunnel2Phase2LifetimeSeconds;
    }
    // tunnel2_preshared_key - computed: true, optional: true, required: false
    _tunnel2PresharedKey;
    get tunnel2PresharedKey() {
        return this.getStringAttribute('tunnel2_preshared_key');
    }
    set tunnel2PresharedKey(value) {
        this._tunnel2PresharedKey = value;
    }
    resetTunnel2PresharedKey() {
        this._tunnel2PresharedKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2PresharedKeyInput() {
        return this._tunnel2PresharedKey;
    }
    // tunnel2_rekey_fuzz_percentage - computed: false, optional: true, required: false
    _tunnel2RekeyFuzzPercentage;
    get tunnel2RekeyFuzzPercentage() {
        return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
    }
    set tunnel2RekeyFuzzPercentage(value) {
        this._tunnel2RekeyFuzzPercentage = value;
    }
    resetTunnel2RekeyFuzzPercentage() {
        this._tunnel2RekeyFuzzPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2RekeyFuzzPercentageInput() {
        return this._tunnel2RekeyFuzzPercentage;
    }
    // tunnel2_rekey_margin_time_seconds - computed: false, optional: true, required: false
    _tunnel2RekeyMarginTimeSeconds;
    get tunnel2RekeyMarginTimeSeconds() {
        return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
    }
    set tunnel2RekeyMarginTimeSeconds(value) {
        this._tunnel2RekeyMarginTimeSeconds = value;
    }
    resetTunnel2RekeyMarginTimeSeconds() {
        this._tunnel2RekeyMarginTimeSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2RekeyMarginTimeSecondsInput() {
        return this._tunnel2RekeyMarginTimeSeconds;
    }
    // tunnel2_replay_window_size - computed: false, optional: true, required: false
    _tunnel2ReplayWindowSize;
    get tunnel2ReplayWindowSize() {
        return this.getNumberAttribute('tunnel2_replay_window_size');
    }
    set tunnel2ReplayWindowSize(value) {
        this._tunnel2ReplayWindowSize = value;
    }
    resetTunnel2ReplayWindowSize() {
        this._tunnel2ReplayWindowSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2ReplayWindowSizeInput() {
        return this._tunnel2ReplayWindowSize;
    }
    // tunnel2_startup_action - computed: false, optional: true, required: false
    _tunnel2StartupAction;
    get tunnel2StartupAction() {
        return this.getStringAttribute('tunnel2_startup_action');
    }
    set tunnel2StartupAction(value) {
        this._tunnel2StartupAction = value;
    }
    resetTunnel2StartupAction() {
        this._tunnel2StartupAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnel2StartupActionInput() {
        return this._tunnel2StartupAction;
    }
    // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
    get tunnel2VgwInsideAddress() {
        return this.getStringAttribute('tunnel2_vgw_inside_address');
    }
    // tunnel_inside_ip_version - computed: true, optional: true, required: false
    _tunnelInsideIpVersion;
    get tunnelInsideIpVersion() {
        return this.getStringAttribute('tunnel_inside_ip_version');
    }
    set tunnelInsideIpVersion(value) {
        this._tunnelInsideIpVersion = value;
    }
    resetTunnelInsideIpVersion() {
        this._tunnelInsideIpVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tunnelInsideIpVersionInput() {
        return this._tunnelInsideIpVersion;
    }
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // vgw_telemetry - computed: true, optional: false, required: false
    vgwTelemetry(index) {
        return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
    }
    // vpn_gateway_id - computed: false, optional: true, required: false
    _vpnGatewayId;
    get vpnGatewayId() {
        return this.getStringAttribute('vpn_gateway_id');
    }
    set vpnGatewayId(value) {
        this._vpnGatewayId = value;
    }
    resetVpnGatewayId() {
        this._vpnGatewayId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpnGatewayIdInput() {
        return this._vpnGatewayId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
            enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
            local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
            local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
            remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
            remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
            static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
            tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
            tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
            tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1IkeVersions),
            tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
            tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
            tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase1DhGroupNumbers),
            tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1EncryptionAlgorithms),
            tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase1IntegrityAlgorithms),
            tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
            tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel1Phase2DhGroupNumbers),
            tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2EncryptionAlgorithms),
            tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel1Phase2IntegrityAlgorithms),
            tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
            tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
            tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
            tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
            tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
            tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
            tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
            tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
            tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2IkeVersions),
            tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
            tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
            tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase1DhGroupNumbers),
            tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1EncryptionAlgorithms),
            tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase1IntegrityAlgorithms),
            tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
            tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform)(this._tunnel2Phase2DhGroupNumbers),
            tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2EncryptionAlgorithms),
            tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform)(this._tunnel2Phase2IntegrityAlgorithms),
            tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
            tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
            tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
            tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
            tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
            tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
            tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
            type: cdktf.stringToTerraform(this._type),
            vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBuLWNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInZwbi1jb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQTJNL0IsTUFBTSxPQUFPLG1CQUFvQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFaEUsNEVBQTRFO0lBQzVFLElBQVcsb0JBQW9CO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXRFLDBFQUEwRTtJQUMxRSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx3RUFBd0U7SUFDeEUsSUFBVyxnQkFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0VBQW9FO0lBQ3BFLElB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