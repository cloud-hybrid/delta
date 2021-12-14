import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Email Service
*/
export interface SesReceiptRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#after SesReceiptRule#after}
    */
    readonly after?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#enabled SesReceiptRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#name SesReceiptRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#recipients SesReceiptRule#recipients}
    */
    readonly recipients?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#rule_set_name SesReceiptRule#rule_set_name}
    */
    readonly ruleSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#scan_enabled SesReceiptRule#scan_enabled}
    */
    readonly scanEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#tls_policy SesReceiptRule#tls_policy}
    */
    readonly tlsPolicy?: string;
    /**
    * add_header_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#add_header_action SesReceiptRule#add_header_action}
    */
    readonly addHeaderAction?: SesReceiptRuleAddHeaderAction[];
    /**
    * bounce_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#bounce_action SesReceiptRule#bounce_action}
    */
    readonly bounceAction?: SesReceiptRuleBounceAction[];
    /**
    * lambda_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#lambda_action SesReceiptRule#lambda_action}
    */
    readonly lambdaAction?: SesReceiptRuleLambdaAction[];
    /**
    * s3_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#s3_action SesReceiptRule#s3_action}
    */
    readonly s3Action?: SesReceiptRuleS3Action[];
    /**
    * sns_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#sns_action SesReceiptRule#sns_action}
    */
    readonly snsAction?: SesReceiptRuleSnsAction[];
    /**
    * stop_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#stop_action SesReceiptRule#stop_action}
    */
    readonly stopAction?: SesReceiptRuleStopAction[];
    /**
    * workmail_action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#workmail_action SesReceiptRule#workmail_action}
    */
    readonly workmailAction?: SesReceiptRuleWorkmailAction[];
}
export interface SesReceiptRuleAddHeaderAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#header_name SesReceiptRule#header_name}
    */
    readonly headerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#header_value SesReceiptRule#header_value}
    */
    readonly headerValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
}
export declare function sesReceiptRuleAddHeaderActionToTerraform(struct?: SesReceiptRuleAddHeaderAction): any;
export interface SesReceiptRuleBounceAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#message SesReceiptRule#message}
    */
    readonly message: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#sender SesReceiptRule#sender}
    */
    readonly sender: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#smtp_reply_code SesReceiptRule#smtp_reply_code}
    */
    readonly smtpReplyCode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#status_code SesReceiptRule#status_code}
    */
    readonly statusCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleBounceActionToTerraform(struct?: SesReceiptRuleBounceAction): any;
export interface SesReceiptRuleLambdaAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#function_arn SesReceiptRule#function_arn}
    */
    readonly functionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#invocation_type SesReceiptRule#invocation_type}
    */
    readonly invocationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleLambdaActionToTerraform(struct?: SesReceiptRuleLambdaAction): any;
export interface SesReceiptRuleS3Action {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#bucket_name SesReceiptRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#kms_key_arn SesReceiptRule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#object_key_prefix SesReceiptRule#object_key_prefix}
    */
    readonly objectKeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleS3ActionToTerraform(struct?: SesReceiptRuleS3Action): any;
export interface SesReceiptRuleSnsAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#encoding SesReceiptRule#encoding}
    */
    readonly encoding?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn: string;
}
export declare function sesReceiptRuleSnsActionToTerraform(struct?: SesReceiptRuleSnsAction): any;
export interface SesReceiptRuleStopAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#scope SesReceiptRule#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleStopActionToTerraform(struct?: SesReceiptRuleStopAction): any;
export interface SesReceiptRuleWorkmailAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#organization_arn SesReceiptRule#organization_arn}
    */
    readonly organizationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#position SesReceiptRule#position}
    */
    readonly position: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html#topic_arn SesReceiptRule#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function sesReceiptRuleWorkmailActionToTerraform(struct?: SesReceiptRuleWorkmailAction): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule}
*/
export declare class SesReceiptRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html aws_ses_receipt_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesReceiptRuleConfig
    */
    constructor(scope: Construct, id: string, config: SesReceiptRuleConfig);
    private _after?;
    get after(): string;
    set after(value: string);
    resetAfter(): void;
    get afterInput(): string;
    get arn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _recipients?;
    get recipients(): string[];
    set recipients(value: string[]);
    resetRecipients(): void;
    get recipientsInput(): string[];
    private _ruleSetName?;
    get ruleSetName(): string;
    set ruleSetName(value: string);
    get ruleSetNameInput(): string;
    private _scanEnabled?;
    get scanEnabled(): boolean | cdktf.IResolvable;
    set scanEnabled(value: boolean | cdktf.IResolvable);
    resetScanEnabled(): void;
    get scanEnabledInput(): boolean | cdktf.IResolvable;
    private _tlsPolicy?;
    get tlsPolicy(): string;
    set tlsPolicy(value: string);
    resetTlsPolicy(): void;
    get tlsPolicyInput(): string;
    private _addHeaderAction?;
    get addHeaderAction(): SesReceiptRuleAddHeaderAction[];
    set addHeaderAction(value: SesReceiptRuleAddHeaderAction[]);
    resetAddHeaderAction(): void;
    get addHeaderActionInput(): SesReceiptRuleAddHeaderAction[];
    private _bounceAction?;
    get bounceAction(): SesReceiptRuleBounceAction[];
    set bounceAction(value: SesReceiptRuleBounceAction[]);
    resetBounceAction(): void;
    get bounceActionInput(): SesReceiptRuleBounceAction[];
    private _lambdaAction?;
    get lambdaAction(): SesReceiptRuleLambdaAction[];
    set lambdaAction(value: SesReceiptRuleLambdaAction[]);
    resetLambdaAction(): void;
    get lambdaActionInput(): SesReceiptRuleLambdaAction[];
    private _s3Action?;
    get s3Action(): SesReceiptRuleS3Action[];
    set s3Action(value: SesReceiptRuleS3Action[]);
    resetS3Action(): void;
    get s3ActionInput(): SesReceiptRuleS3Action[];
    private _snsAction?;
    get snsAction(): SesReceiptRuleSnsAction[];
    set snsAction(value: SesReceiptRuleSnsAction[]);
    resetSnsAction(): void;
    get snsActionInput(): SesReceiptRuleSnsAction[];
    private _stopAction?;
    get stopAction(): SesReceiptRuleStopAction[];
    set stopAction(value: SesReceiptRuleStopAction[]);
    resetStopAction(): void;
    get stopActionInput(): SesReceiptRuleStopAction[];
    private _workmailAction?;
    get workmailAction(): SesReceiptRuleWorkmailAction[];
    set workmailAction(value: SesReceiptRuleWorkmailAction[]);
    resetWorkmailAction(): void;
    get workmailActionInput(): SesReceiptRuleWorkmailAction[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ses-receipt-rule.d.ts.map