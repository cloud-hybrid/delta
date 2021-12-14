// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html aws_pinpoint_apns_voip_sandbox_channel}
*/
export class PinpointApnsVoipSandboxChannel extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_pinpoint_apns_voip_sandbox_channel";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel.html aws_pinpoint_apns_voip_sandbox_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointApnsVoipSandboxChannelConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_pinpoint_apns_voip_sandbox_channel',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._applicationId = config.applicationId;
        this._bundleId = config.bundleId;
        this._certificate = config.certificate;
        this._defaultAuthenticationMethod = config.defaultAuthenticationMethod;
        this._enabled = config.enabled;
        this._privateKey = config.privateKey;
        this._teamId = config.teamId;
        this._tokenKey = config.tokenKey;
        this._tokenKeyId = config.tokenKeyId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // application_id - computed: false, optional: false, required: true
    _applicationId;
    get applicationId() {
        return this.getStringAttribute('application_id');
    }
    set applicationId(value) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    get applicationIdInput() {
        return this._applicationId;
    }
    // bundle_id - computed: false, optional: true, required: false
    _bundleId;
    get bundleId() {
        return this.getStringAttribute('bundle_id');
    }
    set bundleId(value) {
        this._bundleId = value;
    }
    resetBundleId() {
        this._bundleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bundleIdInput() {
        return this._bundleId;
    }
    // certificate - computed: false, optional: true, required: false
    _certificate;
    get certificate() {
        return this.getStringAttribute('certificate');
    }
    set certificate(value) {
        this._certificate = value;
    }
    resetCertificate() {
        this._certificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get certificateInput() {
        return this._certificate;
    }
    // default_authentication_method - computed: false, optional: true, required: false
    _defaultAuthenticationMethod;
    get defaultAuthenticationMethod() {
        return this.getStringAttribute('default_authentication_method');
    }
    set defaultAuthenticationMethod(value) {
        this._defaultAuthenticationMethod = value;
    }
    resetDefaultAuthenticationMethod() {
        this._defaultAuthenticationMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultAuthenticationMethodInput() {
        return this._defaultAuthenticationMethod;
    }
    // enabled - computed: false, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // private_key - computed: false, optional: true, required: false
    _privateKey;
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    set privateKey(value) {
        this._privateKey = value;
    }
    resetPrivateKey() {
        this._privateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateKeyInput() {
        return this._privateKey;
    }
    // team_id - computed: false, optional: true, required: false
    _teamId;
    get teamId() {
        return this.getStringAttribute('team_id');
    }
    set teamId(value) {
        this._teamId = value;
    }
    resetTeamId() {
        this._teamId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get teamIdInput() {
        return this._teamId;
    }
    // token_key - computed: false, optional: true, required: false
    _tokenKey;
    get tokenKey() {
        return this.getStringAttribute('token_key');
    }
    set tokenKey(value) {
        this._tokenKey = value;
    }
    resetTokenKey() {
        this._tokenKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenKeyInput() {
        return this._tokenKey;
    }
    // token_key_id - computed: false, optional: true, required: false
    _tokenKeyId;
    get tokenKeyId() {
        return this.getStringAttribute('token_key_id');
    }
    set tokenKeyId(value) {
        this._tokenKeyId = value;
    }
    resetTokenKeyId() {
        this._tokenKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tokenKeyIdInput() {
        return this._tokenKeyId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            application_id: cdktf.stringToTerraform(this._applicationId),
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            certificate: cdktf.stringToTerraform(this._certificate),
            default_authentication_method: cdktf.stringToTerraform(this._defaultAuthenticationMethod),
            enabled: cdktf.booleanToTerraform(this._enabled),
            private_key: cdktf.stringToTerraform(this._privateKey),
            team_id: cdktf.stringToTerraform(this._teamId),
            token_key: cdktf.stringToTerraform(this._tokenKey),
            token_key_id: cdktf.stringToTerraform(this._tokenKeyId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlucG9pbnQtYXBucy12b2lwLXNhbmRib3gtY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsicGlucG9pbnQtYXBucy12b2lwLXNhbmRib3gtY2hhbm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0Qy9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLDhCQUErQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFekUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHdDQUF3QyxDQUFDO0lBRXpGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTRDO1FBQzNGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsd0NBQXdDO1lBQy9ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMv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