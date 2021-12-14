import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Cognito
*/
export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#alias_attributes CognitoUserPool#alias_attributes}
    */
    readonly aliasAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#auto_verified_attributes CognitoUserPool#auto_verified_attributes}
    */
    readonly autoVerifiedAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_message CognitoUserPool#email_verification_message}
    */
    readonly emailVerificationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_subject CognitoUserPool#email_verification_subject}
    */
    readonly emailVerificationSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mfa_configuration CognitoUserPool#mfa_configuration}
    */
    readonly mfaConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_authentication_message CognitoUserPool#sms_authentication_message}
    */
    readonly smsAuthenticationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_verification_message CognitoUserPool#sms_verification_message}
    */
    readonly smsVerificationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags CognitoUserPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags_all CognitoUserPool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_attributes CognitoUserPool#username_attributes}
    */
    readonly usernameAttributes?: string[];
    /**
    * account_recovery_setting block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#account_recovery_setting CognitoUserPool#account_recovery_setting}
    */
    readonly accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting;
    /**
    * admin_create_user_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#admin_create_user_config CognitoUserPool#admin_create_user_config}
    */
    readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig;
    /**
    * device_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_configuration CognitoUserPool#device_configuration}
    */
    readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration;
    /**
    * email_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_configuration CognitoUserPool#email_configuration}
    */
    readonly emailConfiguration?: CognitoUserPoolEmailConfiguration;
    /**
    * lambda_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_config CognitoUserPool#lambda_config}
    */
    readonly lambdaConfig?: CognitoUserPoolLambdaConfig;
    /**
    * password_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#password_policy CognitoUserPool#password_policy}
    */
    readonly passwordPolicy?: CognitoUserPoolPasswordPolicy;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#schema CognitoUserPool#schema}
    */
    readonly schema?: CognitoUserPoolSchema[];
    /**
    * sms_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_configuration CognitoUserPool#sms_configuration}
    */
    readonly smsConfiguration?: CognitoUserPoolSmsConfiguration;
    /**
    * software_token_mfa_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}
    */
    readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration;
    /**
    * user_pool_add_ons block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_pool_add_ons CognitoUserPool#user_pool_add_ons}
    */
    readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns;
    /**
    * username_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_configuration CognitoUserPool#username_configuration}
    */
    readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration;
    /**
    * verification_message_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verification_message_template CognitoUserPool#verification_message_template}
    */
    readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate;
}
export interface CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#priority CognitoUserPool#priority}
    */
    readonly priority: number;
}
export declare function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism): any;
export interface CognitoUserPoolAccountRecoverySetting {
    /**
    * recovery_mechanism block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#recovery_mechanism CognitoUserPool#recovery_mechanism}
    */
    readonly recoveryMechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
}
export declare function cognitoUserPoolAccountRecoverySettingToTerraform(struct?: CognitoUserPoolAccountRecoverySettingOutputReference | CognitoUserPoolAccountRecoverySetting): any;
export declare class CognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolAccountRecoverySetting | undefined;
    set internalValue(value: CognitoUserPoolAccountRecoverySetting | undefined);
    private _recoveryMechanism?;
    get recoveryMechanism(): CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
    set recoveryMechanism(value: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[]);
    get recoveryMechanismInput(): CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
}
export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
    */
    readonly emailMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
    */
    readonly emailSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
    */
    readonly smsMessage?: string;
}
export declare function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference | CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any;
export declare class CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined;
    set internalValue(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined);
    private _emailMessage?;
    get emailMessage(): string;
    set emailMessage(value: string);
    resetEmailMessage(): void;
    get emailMessageInput(): string;
    private _emailSubject?;
    get emailSubject(): string;
    set emailSubject(value: string);
    resetEmailSubject(): void;
    get emailSubjectInput(): string;
    private _smsMessage?;
    get smsMessage(): string;
    set smsMessage(value: string);
    resetSmsMessage(): void;
    get smsMessageInput(): string;
}
export interface CognitoUserPoolAdminCreateUserConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}
    */
    readonly allowAdminCreateUserOnly?: boolean | cdktf.IResolvable;
    /**
    * invite_message_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#invite_message_template CognitoUserPool#invite_message_template}
    */
    readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
}
export declare function cognitoUserPoolAdminCreateUserConfigToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigOutputReference | CognitoUserPoolAdminCreateUserConfig): any;
export declare class CognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolAdminCreateUserConfig | undefined;
    set internalValue(value: CognitoUserPoolAdminCreateUserConfig | undefined);
    private _allowAdminCreateUserOnly?;
    get allowAdminCreateUserOnly(): boolean | cdktf.IResolvable;
    set allowAdminCreateUserOnly(value: boolean | cdktf.IResolvable);
    resetAllowAdminCreateUserOnly(): void;
    get allowAdminCreateUserOnlyInput(): boolean | cdktf.IResolvable;
    private _inviteMessageTemplate;
    get inviteMessageTemplate(): CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference;
    putInviteMessageTemplate(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): void;
    resetInviteMessageTemplate(): void;
    get inviteMessageTemplateInput(): CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
}
export interface CognitoUserPoolDeviceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}
    */
    readonly challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}
    */
    readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolDeviceConfigurationToTerraform(struct?: CognitoUserPoolDeviceConfigurationOutputReference | CognitoUserPoolDeviceConfiguration): any;
export declare class CognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolDeviceConfiguration | undefined;
    set internalValue(value: CognitoUserPoolDeviceConfiguration | undefined);
    private _challengeRequiredOnNewDevice?;
    get challengeRequiredOnNewDevice(): boolean | cdktf.IResolvable;
    set challengeRequiredOnNewDevice(value: boolean | cdktf.IResolvable);
    resetChallengeRequiredOnNewDevice(): void;
    get challengeRequiredOnNewDeviceInput(): boolean | cdktf.IResolvable;
    private _deviceOnlyRememberedOnUserPrompt?;
    get deviceOnlyRememberedOnUserPrompt(): boolean | cdktf.IResolvable;
    set deviceOnlyRememberedOnUserPrompt(value: boolean | cdktf.IResolvable);
    resetDeviceOnlyRememberedOnUserPrompt(): void;
    get deviceOnlyRememberedOnUserPromptInput(): boolean | cdktf.IResolvable;
}
export interface CognitoUserPoolEmailConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#configuration_set CognitoUserPool#configuration_set}
    */
    readonly configurationSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_sending_account CognitoUserPool#email_sending_account}
    */
    readonly emailSendingAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#from_email_address CognitoUserPool#from_email_address}
    */
    readonly fromEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#reply_to_email_address CognitoUserPool#reply_to_email_address}
    */
    readonly replyToEmailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#source_arn CognitoUserPool#source_arn}
    */
    readonly sourceArn?: string;
}
export declare function cognitoUserPoolEmailConfigurationToTerraform(struct?: CognitoUserPoolEmailConfigurationOutputReference | CognitoUserPoolEmailConfiguration): any;
export declare class CognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolEmailConfiguration | undefined;
    set internalValue(value: CognitoUserPoolEmailConfiguration | undefined);
    private _configurationSet?;
    get configurationSet(): string;
    set configurationSet(value: string);
    resetConfigurationSet(): void;
    get configurationSetInput(): string;
    private _emailSendingAccount?;
    get emailSendingAccount(): string;
    set emailSendingAccount(value: string);
    resetEmailSendingAccount(): void;
    get emailSendingAccountInput(): string;
    private _fromEmailAddress?;
    get fromEmailAddress(): string;
    set fromEmailAddress(value: string);
    resetFromEmailAddress(): void;
    get fromEmailAddressInput(): string;
    private _replyToEmailAddress?;
    get replyToEmailAddress(): string;
    set replyToEmailAddress(value: string);
    resetReplyToEmailAddress(): void;
    get replyToEmailAddressInput(): string;
    private _sourceArn?;
    get sourceArn(): string;
    set sourceArn(value: string);
    resetSourceArn(): void;
    get sourceArnInput(): string;
}
export interface CognitoUserPoolLambdaConfigCustomEmailSender {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
    */
    readonly lambdaVersion: string;
}
export declare function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference | CognitoUserPoolLambdaConfigCustomEmailSender): any;
export declare class CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolLambdaConfigCustomEmailSender | undefined;
    set internalValue(value: CognitoUserPoolLambdaConfigCustomEmailSender | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string;
    private _lambdaVersion?;
    get lambdaVersion(): string;
    set lambdaVersion(value: string);
    get lambdaVersionInput(): string;
}
export interface CognitoUserPoolLambdaConfigCustomSmsSender {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
    */
    readonly lambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
    */
    readonly lambdaVersion: string;
}
export declare function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference | CognitoUserPoolLambdaConfigCustomSmsSender): any;
export declare class CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolLambdaConfigCustomSmsSender | undefined;
    set internalValue(value: CognitoUserPoolLambdaConfigCustomSmsSender | undefined);
    private _lambdaArn?;
    get lambdaArn(): string;
    set lambdaArn(value: string);
    get lambdaArnInput(): string;
    private _lambdaVersion?;
    get lambdaVersion(): string;
    set lambdaVersion(value: string);
    get lambdaVersionInput(): string;
}
export interface CognitoUserPoolLambdaConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#create_auth_challenge CognitoUserPool#create_auth_challenge}
    */
    readonly createAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_message CognitoUserPool#custom_message}
    */
    readonly customMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#define_auth_challenge CognitoUserPool#define_auth_challenge}
    */
    readonly defineAuthChallenge?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#kms_key_id CognitoUserPool#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_authentication CognitoUserPool#post_authentication}
    */
    readonly postAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_confirmation CognitoUserPool#post_confirmation}
    */
    readonly postConfirmation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_authentication CognitoUserPool#pre_authentication}
    */
    readonly preAuthentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_sign_up CognitoUserPool#pre_sign_up}
    */
    readonly preSignUp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_token_generation CognitoUserPool#pre_token_generation}
    */
    readonly preTokenGeneration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_migration CognitoUserPool#user_migration}
    */
    readonly userMigration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}
    */
    readonly verifyAuthChallengeResponse?: string;
    /**
    * custom_email_sender block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_email_sender CognitoUserPool#custom_email_sender}
    */
    readonly customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender;
    /**
    * custom_sms_sender block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_sms_sender CognitoUserPool#custom_sms_sender}
    */
    readonly customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender;
}
export declare function cognitoUserPoolLambdaConfigToTerraform(struct?: CognitoUserPoolLambdaConfigOutputReference | CognitoUserPoolLambdaConfig): any;
export declare class CognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolLambdaConfig | undefined;
    set internalValue(value: CognitoUserPoolLambdaConfig | undefined);
    private _createAuthChallenge?;
    get createAuthChallenge(): string;
    set createAuthChallenge(value: string);
    resetCreateAuthChallenge(): void;
    get createAuthChallengeInput(): string;
    private _customMessage?;
    get customMessage(): string;
    set customMessage(value: string);
    resetCustomMessage(): void;
    get customMessageInput(): string;
    private _defineAuthChallenge?;
    get defineAuthChallenge(): string;
    set defineAuthChallenge(value: string);
    resetDefineAuthChallenge(): void;
    get defineAuthChallengeInput(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _postAuthentication?;
    get postAuthentication(): string;
    set postAuthentication(value: string);
    resetPostAuthentication(): void;
    get postAuthenticationInput(): string;
    private _postConfirmation?;
    get postConfirmation(): string;
    set postConfirmation(value: string);
    resetPostConfirmation(): void;
    get postConfirmationInput(): string;
    private _preAuthentication?;
    get preAuthentication(): string;
    set preAuthentication(value: string);
    resetPreAuthentication(): void;
    get preAuthenticationInput(): string;
    private _preSignUp?;
    get preSignUp(): string;
    set preSignUp(value: string);
    resetPreSignUp(): void;
    get preSignUpInput(): string;
    private _preTokenGeneration?;
    get preTokenGeneration(): string;
    set preTokenGeneration(value: string);
    resetPreTokenGeneration(): void;
    get preTokenGenerationInput(): string;
    private _userMigration?;
    get userMigration(): string;
    set userMigration(value: string);
    resetUserMigration(): void;
    get userMigrationInput(): string;
    private _verifyAuthChallengeResponse?;
    get verifyAuthChallengeResponse(): string;
    set verifyAuthChallengeResponse(value: string);
    resetVerifyAuthChallengeResponse(): void;
    get verifyAuthChallengeResponseInput(): string;
    private _customEmailSender;
    get customEmailSender(): CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference;
    putCustomEmailSender(value: CognitoUserPoolLambdaConfigCustomEmailSender): void;
    resetCustomEmailSender(): void;
    get customEmailSenderInput(): CognitoUserPoolLambdaConfigCustomEmailSender;
    private _customSmsSender;
    get customSmsSender(): CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference;
    putCustomSmsSender(value: CognitoUserPoolLambdaConfigCustomSmsSender): void;
    resetCustomSmsSender(): void;
    get customSmsSenderInput(): CognitoUserPoolLambdaConfigCustomSmsSender;
}
export interface CognitoUserPoolPasswordPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#minimum_length CognitoUserPool#minimum_length}
    */
    readonly minimumLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_lowercase CognitoUserPool#require_lowercase}
    */
    readonly requireLowercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_numbers CognitoUserPool#require_numbers}
    */
    readonly requireNumbers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_symbols CognitoUserPool#require_symbols}
    */
    readonly requireSymbols?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_uppercase CognitoUserPool#require_uppercase}
    */
    readonly requireUppercase?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}
    */
    readonly temporaryPasswordValidityDays?: number;
}
export declare function cognitoUserPoolPasswordPolicyToTerraform(struct?: CognitoUserPoolPasswordPolicyOutputReference | CognitoUserPoolPasswordPolicy): any;
export declare class CognitoUserPoolPasswordPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolPasswordPolicy | undefined;
    set internalValue(value: CognitoUserPoolPasswordPolicy | undefined);
    private _minimumLength?;
    get minimumLength(): number;
    set minimumLength(value: number);
    resetMinimumLength(): void;
    get minimumLengthInput(): number;
    private _requireLowercase?;
    get requireLowercase(): boolean | cdktf.IResolvable;
    set requireLowercase(value: boolean | cdktf.IResolvable);
    resetRequireLowercase(): void;
    get requireLowercaseInput(): boolean | cdktf.IResolvable;
    private _requireNumbers?;
    get requireNumbers(): boolean | cdktf.IResolvable;
    set requireNumbers(value: boolean | cdktf.IResolvable);
    resetRequireNumbers(): void;
    get requireNumbersInput(): boolean | cdktf.IResolvable;
    private _requireSymbols?;
    get requireSymbols(): boolean | cdktf.IResolvable;
    set requireSymbols(value: boolean | cdktf.IResolvable);
    resetRequireSymbols(): void;
    get requireSymbolsInput(): boolean | cdktf.IResolvable;
    private _requireUppercase?;
    get requireUppercase(): boolean | cdktf.IResolvable;
    set requireUppercase(value: boolean | cdktf.IResolvable);
    resetRequireUppercase(): void;
    get requireUppercaseInput(): boolean | cdktf.IResolvable;
    private _temporaryPasswordValidityDays?;
    get temporaryPasswordValidityDays(): number;
    set temporaryPasswordValidityDays(value: number);
    resetTemporaryPasswordValidityDays(): void;
    get temporaryPasswordValidityDaysInput(): number;
}
export interface CognitoUserPoolSchemaNumberAttributeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_value CognitoUserPool#max_value}
    */
    readonly maxValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_value CognitoUserPool#min_value}
    */
    readonly minValue?: string;
}
export declare function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference | CognitoUserPoolSchemaNumberAttributeConstraints): any;
export declare class CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolSchemaNumberAttributeConstraints | undefined;
    set internalValue(value: CognitoUserPoolSchemaNumberAttributeConstraints | undefined);
    private _maxValue?;
    get maxValue(): string;
    set maxValue(value: string);
    resetMaxValue(): void;
    get maxValueInput(): string;
    private _minValue?;
    get minValue(): string;
    set minValue(value: string);
    resetMinValue(): void;
    get minValueInput(): string;
}
export interface CognitoUserPoolSchemaStringAttributeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_length CognitoUserPool#max_length}
    */
    readonly maxLength?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_length CognitoUserPool#min_length}
    */
    readonly minLength?: string;
}
export declare function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference | CognitoUserPoolSchemaStringAttributeConstraints): any;
export declare class CognitoUserPoolSchemaStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolSchemaStringAttributeConstraints | undefined;
    set internalValue(value: CognitoUserPoolSchemaStringAttributeConstraints | undefined);
    private _maxLength?;
    get maxLength(): string;
    set maxLength(value: string);
    resetMaxLength(): void;
    get maxLengthInput(): string;
    private _minLength?;
    get minLength(): string;
    set minLength(value: string);
    resetMinLength(): void;
    get minLengthInput(): string;
}
export interface CognitoUserPoolSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#attribute_data_type CognitoUserPool#attribute_data_type}
    */
    readonly attributeDataType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#developer_only_attribute CognitoUserPool#developer_only_attribute}
    */
    readonly developerOnlyAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mutable CognitoUserPool#mutable}
    */
    readonly mutable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#required CognitoUserPool#required}
    */
    readonly required?: boolean | cdktf.IResolvable;
    /**
    * number_attribute_constraints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#number_attribute_constraints CognitoUserPool#number_attribute_constraints}
    */
    readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints;
    /**
    * string_attribute_constraints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#string_attribute_constraints CognitoUserPool#string_attribute_constraints}
    */
    readonly stringAttributeConstraints?: CognitoUserPoolSchemaStringAttributeConstraints;
}
export declare function cognitoUserPoolSchemaToTerraform(struct?: CognitoUserPoolSchema): any;
export interface CognitoUserPoolSmsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#external_id CognitoUserPool#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sns_caller_arn CognitoUserPool#sns_caller_arn}
    */
    readonly snsCallerArn: string;
}
export declare function cognitoUserPoolSmsConfigurationToTerraform(struct?: CognitoUserPoolSmsConfigurationOutputReference | CognitoUserPoolSmsConfiguration): any;
export declare class CognitoUserPoolSmsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolSmsConfiguration | undefined;
    set internalValue(value: CognitoUserPoolSmsConfiguration | undefined);
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    get externalIdInput(): string;
    private _snsCallerArn?;
    get snsCallerArn(): string;
    set snsCallerArn(value: string);
    get snsCallerArnInput(): string;
}
export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#enabled CognitoUserPool#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference | CognitoUserPoolSoftwareTokenMfaConfiguration): any;
export declare class CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolSoftwareTokenMfaConfiguration | undefined;
    set internalValue(value: CognitoUserPoolSoftwareTokenMfaConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable;
}
export interface CognitoUserPoolUserPoolAddOns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#advanced_security_mode CognitoUserPool#advanced_security_mode}
    */
    readonly advancedSecurityMode: string;
}
export declare function cognitoUserPoolUserPoolAddOnsToTerraform(struct?: CognitoUserPoolUserPoolAddOnsOutputReference | CognitoUserPoolUserPoolAddOns): any;
export declare class CognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolUserPoolAddOns | undefined;
    set internalValue(value: CognitoUserPoolUserPoolAddOns | undefined);
    private _advancedSecurityMode?;
    get advancedSecurityMode(): string;
    set advancedSecurityMode(value: string);
    get advancedSecurityModeInput(): string;
}
export interface CognitoUserPoolUsernameConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#case_sensitive CognitoUserPool#case_sensitive}
    */
    readonly caseSensitive: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolUsernameConfigurationToTerraform(struct?: CognitoUserPoolUsernameConfigurationOutputReference | CognitoUserPoolUsernameConfiguration): any;
export declare class CognitoUserPoolUsernameConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolUsernameConfiguration | undefined;
    set internalValue(value: CognitoUserPoolUsernameConfiguration | undefined);
    private _caseSensitive?;
    get caseSensitive(): boolean | cdktf.IResolvable;
    set caseSensitive(value: boolean | cdktf.IResolvable);
    get caseSensitiveInput(): boolean | cdktf.IResolvable;
}
export interface CognitoUserPoolVerificationMessageTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#default_email_option CognitoUserPool#default_email_option}
    */
    readonly defaultEmailOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
    */
    readonly emailMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message_by_link CognitoUserPool#email_message_by_link}
    */
    readonly emailMessageByLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
    */
    readonly emailSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject_by_link CognitoUserPool#email_subject_by_link}
    */
    readonly emailSubjectByLink?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
    */
    readonly smsMessage?: string;
}
export declare function cognitoUserPoolVerificationMessageTemplateToTerraform(struct?: CognitoUserPoolVerificationMessageTemplateOutputReference | CognitoUserPoolVerificationMessageTemplate): any;
export declare class CognitoUserPoolVerificationMessageTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolVerificationMessageTemplate | undefined;
    set internalValue(value: CognitoUserPoolVerificationMessageTemplate | undefined);
    private _defaultEmailOption?;
    get defaultEmailOption(): string;
    set defaultEmailOption(value: string);
    resetDefaultEmailOption(): void;
    get defaultEmailOptionInput(): string;
    private _emailMessage?;
    get emailMessage(): string;
    set emailMessage(value: string);
    resetEmailMessage(): void;
    get emailMessageInput(): string;
    private _emailMessageByLink?;
    get emailMessageByLink(): string;
    set emailMessageByLink(value: string);
    resetEmailMessageByLink(): void;
    get emailMessageByLinkInput(): string;
    private _emailSubject?;
    get emailSubject(): string;
    set emailSubject(value: string);
    resetEmailSubject(): void;
    get emailSubjectInput(): string;
    private _emailSubjectByLink?;
    get emailSubjectByLink(): string;
    set emailSubjectByLink(value: string);
    resetEmailSubjectByLink(): void;
    get emailSubjectByLinkInput(): string;
    private _smsMessage?;
    get smsMessage(): string;
    set smsMessage(value: string);
    resetSmsMessage(): void;
    get smsMessageInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}
*/
export declare class CognitoUserPool extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolConfig
    */
    constructor(scope: Construct, id: string, config: CognitoUserPoolConfig);
    private _aliasAttributes?;
    get aliasAttributes(): string[];
    set aliasAttributes(value: string[]);
    resetAliasAttributes(): void;
    get aliasAttributesInput(): string[];
    get arn(): string;
    private _autoVerifiedAttributes?;
    get autoVerifiedAttributes(): string[];
    set autoVerifiedAttributes(value: string[]);
    resetAutoVerifiedAttributes(): void;
    get autoVerifiedAttributesInput(): string[];
    get creationDate(): string;
    get customDomain(): string;
    get domain(): string;
    private _emailVerificationMessage?;
    get emailVerificationMessage(): string;
    set emailVerificationMessage(value: string);
    resetEmailVerificationMessage(): void;
    get emailVerificationMessageInput(): string;
    private _emailVerificationSubject?;
    get emailVerificationSubject(): string;
    set emailVerificationSubject(value: string);
    resetEmailVerificationSubject(): void;
    get emailVerificationSubjectInput(): string;
    get endpoint(): string;
    get estimatedNumberOfUsers(): number;
    get id(): string;
    get lastModifiedDate(): string;
    private _mfaConfiguration?;
    get mfaConfiguration(): string;
    set mfaConfiguration(value: string);
    resetMfaConfiguration(): void;
    get mfaConfigurationInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _smsAuthenticationMessage?;
    get smsAuthenticationMessage(): string;
    set smsAuthenticationMessage(value: string);
    resetSmsAuthenticationMessage(): void;
    get smsAuthenticationMessageInput(): string;
    private _smsVerificationMessage?;
    get smsVerificationMessage(): string;
    set smsVerificationMessage(value: string);
    resetSmsVerificationMessage(): void;
    get smsVerificationMessageInput(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _usernameAttributes?;
    get usernameAttributes(): string[];
    set usernameAttributes(value: string[]);
    resetUsernameAttributes(): void;
    get usernameAttributesInput(): string[];
    private _accountRecoverySetting;
    get accountRecoverySetting(): CognitoUserPoolAccountRecoverySettingOutputReference;
    putAccountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting): void;
    resetAccountRecoverySetting(): void;
    get accountRecoverySettingInput(): CognitoUserPoolAccountRecoverySetting;
    private _adminCreateUserConfig;
    get adminCreateUserConfig(): CognitoUserPoolAdminCreateUserConfigOutputReference;
    putAdminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig): void;
    resetAdminCreateUserConfig(): void;
    get adminCreateUserConfigInput(): CognitoUserPoolAdminCreateUserConfig;
    private _deviceConfiguration;
    get deviceConfiguration(): CognitoUserPoolDeviceConfigurationOutputReference;
    putDeviceConfiguration(value: CognitoUserPoolDeviceConfiguration): void;
    resetDeviceConfiguration(): void;
    get deviceConfigurationInput(): CognitoUserPoolDeviceConfiguration;
    private _emailConfiguration;
    get emailConfiguration(): CognitoUserPoolEmailConfigurationOutputReference;
    putEmailConfiguration(value: CognitoUserPoolEmailConfiguration): void;
    resetEmailConfiguration(): void;
    get emailConfigurationInput(): CognitoUserPoolEmailConfiguration;
    private _lambdaConfig;
    get lambdaConfig(): CognitoUserPoolLambdaConfigOutputReference;
    putLambdaConfig(value: CognitoUserPoolLambdaConfig): void;
    resetLambdaConfig(): void;
    get lambdaConfigInput(): CognitoUserPoolLambdaConfig;
    private _passwordPolicy;
    get passwordPolicy(): CognitoUserPoolPasswordPolicyOutputReference;
    putPasswordPolicy(value: CognitoUserPoolPasswordPolicy): void;
    resetPasswordPolicy(): void;
    get passwordPolicyInput(): CognitoUserPoolPasswordPolicy;
    private _schema?;
    get schema(): CognitoUserPoolSchema[];
    set schema(value: CognitoUserPoolSchema[]);
    resetSchema(): void;
    get schemaInput(): CognitoUserPoolSchema[];
    private _smsConfiguration;
    get smsConfiguration(): CognitoUserPoolSmsConfigurationOutputReference;
    putSmsConfiguration(value: CognitoUserPoolSmsConfiguration): void;
    resetSmsConfiguration(): void;
    get smsConfigurationInput(): CognitoUserPoolSmsConfiguration;
    private _softwareTokenMfaConfiguration;
    get softwareTokenMfaConfiguration(): CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference;
    putSoftwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration): void;
    resetSoftwareTokenMfaConfiguration(): void;
    get softwareTokenMfaConfigurationInput(): CognitoUserPoolSoftwareTokenMfaConfiguration;
    private _userPoolAddOns;
    get userPoolAddOns(): CognitoUserPoolUserPoolAddOnsOutputReference;
    putUserPoolAddOns(value: CognitoUserPoolUserPoolAddOns): void;
    resetUserPoolAddOns(): void;
    get userPoolAddOnsInput(): CognitoUserPoolUserPoolAddOns;
    private _usernameConfiguration;
    get usernameConfiguration(): CognitoUserPoolUsernameConfigurationOutputReference;
    putUsernameConfiguration(value: CognitoUserPoolUsernameConfiguration): void;
    resetUsernameConfiguration(): void;
    get usernameConfigurationInput(): CognitoUserPoolUsernameConfiguration;
    private _verificationMessageTemplate;
    get verificationMessageTemplate(): CognitoUserPoolVerificationMessageTemplateOutputReference;
    putVerificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate): void;
    resetVerificationMessageTemplate(): void;
    get verificationMessageTemplateInput(): CognitoUserPoolVerificationMessageTemplate;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cognito-user-pool.d.ts.map