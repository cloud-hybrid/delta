// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function sesReceiptRuleAddHeaderActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        header_name: cdktf.stringToTerraform(struct.headerName),
        header_value: cdktf.stringToTerraform(struct.headerValue),
        position: cdktf.numberToTerraform(struct.position),
    };
}
export function sesReceiptRuleBounceActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        message: cdktf.stringToTerraform(struct.message),
        position: cdktf.numberToTerraform(struct.position),
        sender: cdktf.stringToTerraform(struct.sender),
        smtp_reply_code: cdktf.stringToTerraform(struct.smtpReplyCode),
        status_code: cdktf.stringToTerraform(struct.statusCode),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
export function sesReceiptRuleLambdaActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        function_arn: cdktf.stringToTerraform(struct.functionArn),
        invocation_type: cdktf.stringToTerraform(struct.invocationType),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
export function sesReceiptRuleS3ActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        object_key_prefix: cdktf.stringToTerraform(struct.objectKeyPrefix),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
export function sesReceiptRuleSnsActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        encoding: cdktf.stringToTerraform(struct.encoding),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
export function sesReceiptRuleStopActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        position: cdktf.numberToTerraform(struct.position),
        scope: cdktf.stringToTerraform(struct.scope),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
export function sesReceiptRuleWorkmailActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        organization_arn: cdktf.stringToTerraform(struct.organizationArn),
        position: cdktf.numberToTerraform(struct.position),
        topic_arn: cdktf.stringToTerraform(struct.topicArn),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule}
*/
export class SesReceiptRule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_ses_receipt_rule";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptRuleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_ses_receipt_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._after = config.after;
        this._enabled = config.enabled;
        this._name = config.name;
        this._recipients = config.recipients;
        this._ruleSetName = config.ruleSetName;
        this._scanEnabled = config.scanEnabled;
        this._tlsPolicy = config.tlsPolicy;
        this._addHeaderAction = config.addHeaderAction;
        this._bounceAction = config.bounceAction;
        this._lambdaAction = config.lambdaAction;
        this._s3Action = config.s3Action;
        this._snsAction = config.snsAction;
        this._stopAction = config.stopAction;
        this._workmailAction = config.workmailAction;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // after - computed: false, optional: true, required: false
    _after;
    get after() {
        return this.getStringAttribute('after');
    }
    set after(value) {
        this._after = value;
    }
    resetAfter() {
        this._after = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get afterInput() {
        return this._after;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
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
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // recipients - computed: false, optional: true, required: false
    _recipients;
    get recipients() {
        return this.getListAttribute('recipients');
    }
    set recipients(value) {
        this._recipients = value;
    }
    resetRecipients() {
        this._recipients = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recipientsInput() {
        return this._recipients;
    }
    // rule_set_name - computed: false, optional: false, required: true
    _ruleSetName;
    get ruleSetName() {
        return this.getStringAttribute('rule_set_name');
    }
    set ruleSetName(value) {
        this._ruleSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    get ruleSetNameInput() {
        return this._ruleSetName;
    }
    // scan_enabled - computed: false, optional: true, required: false
    _scanEnabled;
    get scanEnabled() {
        return this.getBooleanAttribute('scan_enabled');
    }
    set scanEnabled(value) {
        this._scanEnabled = value;
    }
    resetScanEnabled() {
        this._scanEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get scanEnabledInput() {
        return this._scanEnabled;
    }
    // tls_policy - computed: true, optional: true, required: false
    _tlsPolicy;
    get tlsPolicy() {
        return this.getStringAttribute('tls_policy');
    }
    set tlsPolicy(value) {
        this._tlsPolicy = value;
    }
    resetTlsPolicy() {
        this._tlsPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tlsPolicyInput() {
        return this._tlsPolicy;
    }
    // add_header_action - computed: false, optional: true, required: false
    _addHeaderAction;
    get addHeaderAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('add_header_action');
    }
    set addHeaderAction(value) {
        this._addHeaderAction = value;
    }
    resetAddHeaderAction() {
        this._addHeaderAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get addHeaderActionInput() {
        return this._addHeaderAction;
    }
    // bounce_action - computed: false, optional: true, required: false
    _bounceAction;
    get bounceAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('bounce_action');
    }
    set bounceAction(value) {
        this._bounceAction = value;
    }
    resetBounceAction() {
        this._bounceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bounceActionInput() {
        return this._bounceAction;
    }
    // lambda_action - computed: false, optional: true, required: false
    _lambdaAction;
    get lambdaAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('lambda_action');
    }
    set lambdaAction(value) {
        this._lambdaAction = value;
    }
    resetLambdaAction() {
        this._lambdaAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lambdaActionInput() {
        return this._lambdaAction;
    }
    // s3_action - computed: false, optional: true, required: false
    _s3Action;
    get s3Action() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('s3_action');
    }
    set s3Action(value) {
        this._s3Action = value;
    }
    resetS3Action() {
        this._s3Action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3ActionInput() {
        return this._s3Action;
    }
    // sns_action - computed: false, optional: true, required: false
    _snsAction;
    get snsAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('sns_action');
    }
    set snsAction(value) {
        this._snsAction = value;
    }
    resetSnsAction() {
        this._snsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snsActionInput() {
        return this._snsAction;
    }
    // stop_action - computed: false, optional: true, required: false
    _stopAction;
    get stopAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('stop_action');
    }
    set stopAction(value) {
        this._stopAction = value;
    }
    resetStopAction() {
        this._stopAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopActionInput() {
        return this._stopAction;
    }
    // workmail_action - computed: false, optional: true, required: false
    _workmailAction;
    get workmailAction() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('workmail_action');
    }
    set workmailAction(value) {
        this._workmailAction = value;
    }
    resetWorkmailAction() {
        this._workmailAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workmailActionInput() {
        return this._workmailAction;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            after: cdktf.stringToTerraform(this._after),
            enabled: cdktf.booleanToTerraform(this._enabled),
            name: cdktf.stringToTerraform(this._name),
            recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._recipients),
            rule_set_name: cdktf.stringToTerraform(this._ruleSetName),
            scan_enabled: cdktf.booleanToTerraform(this._scanEnabled),
            tls_policy: cdktf.stringToTerraform(this._tlsPolicy),
            add_header_action: cdktf.listMapper(sesReceiptRuleAddHeaderActionToTerraform)(this._addHeaderAction),
            bounce_action: cdktf.listMapper(sesReceiptRuleBounceActionToTerraform)(this._bounceAction),
            lambda_action: cdktf.listMapper(sesReceiptRuleLambdaActionToTerraform)(this._lambdaAction),
            s3_action: cdktf.listMapper(sesReceiptRuleS3ActionToTerraform)(this._s3Action),
            sns_action: cdktf.listMapper(sesReceiptRuleSnsActionToTerraform)(this._snsAction),
            stop_action: cdktf.listMapper(sesReceiptRuleStopActionToTerraform)(this._stopAction),
            workmail_action: cdktf.listMapper(sesReceiptRuleWorkmailActionToTerraform)(this._workmailAction),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VzLXJlY2VpcHQtcnVsZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsic2VzLXJlY2VpcHQtcnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0Ri9CLE1BQU0sVUFBVSx3Q0FBd0MsQ0FBQyxNQUFzQztJQUM3RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxZQUFZLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxXQUFXLENBQUM7UUFDMUQsUUFBUSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO0tBQ3BELENBQUE7QUFDSCxDQUFDO0FBNkJELE1BQU0sVUFBVSxxQ0FBcUMsQ0FBQyxNQUFtQztJQUN2RixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNqRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxR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