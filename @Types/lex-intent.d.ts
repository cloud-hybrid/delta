import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lex
*/
export interface LexIntentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#create_version LexIntent#create_version}
    */
    readonly createVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#description LexIntent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#name LexIntent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#parent_intent_signature LexIntent#parent_intent_signature}
    */
    readonly parentIntentSignature?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#sample_utterances LexIntent#sample_utterances}
    */
    readonly sampleUtterances?: string[];
    /**
    * conclusion_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#conclusion_statement LexIntent#conclusion_statement}
    */
    readonly conclusionStatement?: LexIntentConclusionStatement;
    /**
    * confirmation_prompt block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#confirmation_prompt LexIntent#confirmation_prompt}
    */
    readonly confirmationPrompt?: LexIntentConfirmationPrompt;
    /**
    * dialog_code_hook block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#dialog_code_hook LexIntent#dialog_code_hook}
    */
    readonly dialogCodeHook?: LexIntentDialogCodeHook;
    /**
    * follow_up_prompt block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#follow_up_prompt LexIntent#follow_up_prompt}
    */
    readonly followUpPrompt?: LexIntentFollowUpPrompt;
    /**
    * fulfillment_activity block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#fulfillment_activity LexIntent#fulfillment_activity}
    */
    readonly fulfillmentActivity: LexIntentFulfillmentActivity;
    /**
    * rejection_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
    */
    readonly rejectionStatement?: LexIntentRejectionStatement;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot LexIntent#slot}
    */
    readonly slot?: LexIntentSlot[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#timeouts LexIntent#timeouts}
    */
    readonly timeouts?: LexIntentTimeouts;
}
export interface LexIntentConclusionStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentConclusionStatementMessageToTerraform(struct?: LexIntentConclusionStatementMessage): any;
export interface LexIntentConclusionStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
    */
    readonly message: LexIntentConclusionStatementMessage[];
}
export declare function lexIntentConclusionStatementToTerraform(struct?: LexIntentConclusionStatementOutputReference | LexIntentConclusionStatement): any;
export declare class LexIntentConclusionStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentConclusionStatement | undefined;
    set internalValue(value: LexIntentConclusionStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string;
    private _message?;
    get message(): LexIntentConclusionStatementMessage[];
    set message(value: LexIntentConclusionStatementMessage[]);
    get messageInput(): LexIntentConclusionStatementMessage[];
}
export interface LexIntentConfirmationPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentConfirmationPromptMessageToTerraform(struct?: LexIntentConfirmationPromptMessage): any;
export interface LexIntentConfirmationPrompt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
    */
    readonly message: LexIntentConfirmationPromptMessage[];
}
export declare function lexIntentConfirmationPromptToTerraform(struct?: LexIntentConfirmationPromptOutputReference | LexIntentConfirmationPrompt): any;
export declare class LexIntentConfirmationPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentConfirmationPrompt | undefined;
    set internalValue(value: LexIntentConfirmationPrompt | undefined);
    private _maxAttempts?;
    get maxAttempts(): number;
    set maxAttempts(value: number);
    get maxAttemptsInput(): number;
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string;
    private _message?;
    get message(): LexIntentConfirmationPromptMessage[];
    set message(value: LexIntentConfirmationPromptMessage[]);
    get messageInput(): LexIntentConfirmationPromptMessage[];
}
export interface LexIntentDialogCodeHook {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message_version LexIntent#message_version}
    */
    readonly messageVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#uri LexIntent#uri}
    */
    readonly uri: string;
}
export declare function lexIntentDialogCodeHookToTerraform(struct?: LexIntentDialogCodeHookOutputReference | LexIntentDialogCodeHook): any;
export declare class LexIntentDialogCodeHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentDialogCodeHook | undefined;
    set internalValue(value: LexIntentDialogCodeHook | undefined);
    private _messageVersion?;
    get messageVersion(): string;
    set messageVersion(value: string);
    get messageVersionInput(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string;
}
export interface LexIntentFollowUpPromptPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentFollowUpPromptPromptMessageToTerraform(struct?: LexIntentFollowUpPromptPromptMessage): any;
export interface LexIntentFollowUpPromptPrompt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
    */
    readonly message: LexIntentFollowUpPromptPromptMessage[];
}
export declare function lexIntentFollowUpPromptPromptToTerraform(struct?: LexIntentFollowUpPromptPromptOutputReference | LexIntentFollowUpPromptPrompt): any;
export declare class LexIntentFollowUpPromptPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentFollowUpPromptPrompt | undefined;
    set internalValue(value: LexIntentFollowUpPromptPrompt | undefined);
    private _maxAttempts?;
    get maxAttempts(): number;
    set maxAttempts(value: number);
    get maxAttemptsInput(): number;
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string;
    private _message?;
    get message(): LexIntentFollowUpPromptPromptMessage[];
    set message(value: LexIntentFollowUpPromptPromptMessage[]);
    get messageInput(): LexIntentFollowUpPromptPromptMessage[];
}
export interface LexIntentFollowUpPromptRejectionStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentFollowUpPromptRejectionStatementMessageToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementMessage): any;
export interface LexIntentFollowUpPromptRejectionStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
    */
    readonly message: LexIntentFollowUpPromptRejectionStatementMessage[];
}
export declare function lexIntentFollowUpPromptRejectionStatementToTerraform(struct?: LexIntentFollowUpPromptRejectionStatementOutputReference | LexIntentFollowUpPromptRejectionStatement): any;
export declare class LexIntentFollowUpPromptRejectionStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentFollowUpPromptRejectionStatement | undefined;
    set internalValue(value: LexIntentFollowUpPromptRejectionStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string;
    private _message?;
    get message(): LexIntentFollowUpPromptRejectionStatementMessage[];
    set message(value: LexIntentFollowUpPromptRejectionStatementMessage[]);
    get messageInput(): LexIntentFollowUpPromptRejectionStatementMessage[];
}
export interface LexIntentFollowUpPrompt {
    /**
    * prompt block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#prompt LexIntent#prompt}
    */
    readonly prompt: LexIntentFollowUpPromptPrompt;
    /**
    * rejection_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#rejection_statement LexIntent#rejection_statement}
    */
    readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement;
}
export declare function lexIntentFollowUpPromptToTerraform(struct?: LexIntentFollowUpPromptOutputReference | LexIntentFollowUpPrompt): any;
export declare class LexIntentFollowUpPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentFollowUpPrompt | undefined;
    set internalValue(value: LexIntentFollowUpPrompt | undefined);
    private _prompt;
    get prompt(): LexIntentFollowUpPromptPromptOutputReference;
    putPrompt(value: LexIntentFollowUpPromptPrompt): void;
    get promptInput(): LexIntentFollowUpPromptPrompt;
    private _rejectionStatement;
    get rejectionStatement(): LexIntentFollowUpPromptRejectionStatementOutputReference;
    putRejectionStatement(value: LexIntentFollowUpPromptRejectionStatement): void;
    get rejectionStatementInput(): LexIntentFollowUpPromptRejectionStatement;
}
export interface LexIntentFulfillmentActivityCodeHook {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message_version LexIntent#message_version}
    */
    readonly messageVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#uri LexIntent#uri}
    */
    readonly uri: string;
}
export declare function lexIntentFulfillmentActivityCodeHookToTerraform(struct?: LexIntentFulfillmentActivityCodeHookOutputReference | LexIntentFulfillmentActivityCodeHook): any;
export declare class LexIntentFulfillmentActivityCodeHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentFulfillmentActivityCodeHook | undefined;
    set internalValue(value: LexIntentFulfillmentActivityCodeHook | undefined);
    private _messageVersion?;
    get messageVersion(): string;
    set messageVersion(value: string);
    get messageVersionInput(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string;
}
export interface LexIntentFulfillmentActivity {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#type LexIntent#type}
    */
    readonly type: string;
    /**
    * code_hook block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#code_hook LexIntent#code_hook}
    */
    readonly codeHook?: LexIntentFulfillmentActivityCodeHook;
}
export declare function lexIntentFulfillmentActivityToTerraform(struct?: LexIntentFulfillmentActivityOutputReference | LexIntentFulfillmentActivity): any;
export declare class LexIntentFulfillmentActivityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentFulfillmentActivity | undefined;
    set internalValue(value: LexIntentFulfillmentActivity | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _codeHook;
    get codeHook(): LexIntentFulfillmentActivityCodeHookOutputReference;
    putCodeHook(value: LexIntentFulfillmentActivityCodeHook): void;
    resetCodeHook(): void;
    get codeHookInput(): LexIntentFulfillmentActivityCodeHook;
}
export interface LexIntentRejectionStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentRejectionStatementMessageToTerraform(struct?: LexIntentRejectionStatementMessage): any;
export interface LexIntentRejectionStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
    */
    readonly message: LexIntentRejectionStatementMessage[];
}
export declare function lexIntentRejectionStatementToTerraform(struct?: LexIntentRejectionStatementOutputReference | LexIntentRejectionStatement): any;
export declare class LexIntentRejectionStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentRejectionStatement | undefined;
    set internalValue(value: LexIntentRejectionStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string;
    private _message?;
    get message(): LexIntentRejectionStatementMessage[];
    set message(value: LexIntentRejectionStatementMessage[]);
    get messageInput(): LexIntentRejectionStatementMessage[];
}
export interface LexIntentSlotValueElicitationPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content LexIntent#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#content_type LexIntent#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#group_number LexIntent#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexIntentSlotValueElicitationPromptMessageToTerraform(struct?: LexIntentSlotValueElicitationPromptMessage): any;
export interface LexIntentSlotValueElicitationPrompt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#max_attempts LexIntent#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#message LexIntent#message}
    */
    readonly message: LexIntentSlotValueElicitationPromptMessage[];
}
export declare function lexIntentSlotValueElicitationPromptToTerraform(struct?: LexIntentSlotValueElicitationPromptOutputReference | LexIntentSlotValueElicitationPrompt): any;
export declare class LexIntentSlotValueElicitationPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentSlotValueElicitationPrompt | undefined;
    set internalValue(value: LexIntentSlotValueElicitationPrompt | undefined);
    private _maxAttempts?;
    get maxAttempts(): number;
    set maxAttempts(value: number);
    get maxAttemptsInput(): number;
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string;
    private _message?;
    get message(): LexIntentSlotValueElicitationPromptMessage[];
    set message(value: LexIntentSlotValueElicitationPromptMessage[]);
    get messageInput(): LexIntentSlotValueElicitationPromptMessage[];
}
export interface LexIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#description LexIntent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#name LexIntent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#priority LexIntent#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#response_card LexIntent#response_card}
    */
    readonly responseCard?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#sample_utterances LexIntent#sample_utterances}
    */
    readonly sampleUtterances?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_constraint LexIntent#slot_constraint}
    */
    readonly slotConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_type LexIntent#slot_type}
    */
    readonly slotType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#slot_type_version LexIntent#slot_type_version}
    */
    readonly slotTypeVersion?: string;
    /**
    * value_elicitation_prompt block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#value_elicitation_prompt LexIntent#value_elicitation_prompt}
    */
    readonly valueElicitationPrompt?: LexIntentSlotValueElicitationPrompt;
}
export declare function lexIntentSlotToTerraform(struct?: LexIntentSlot): any;
export interface LexIntentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#create LexIntent#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#delete LexIntent#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html#update LexIntent#update}
    */
    readonly update?: string;
}
export declare function lexIntentTimeoutsToTerraform(struct?: LexIntentTimeoutsOutputReference | LexIntentTimeouts): any;
export declare class LexIntentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexIntentTimeouts | undefined;
    set internalValue(value: LexIntentTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent}
*/
export declare class LexIntent extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_intent.html aws_lex_intent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexIntentConfig
    */
    constructor(scope: Construct, id: string, config: LexIntentConfig);
    get arn(): string;
    get checksum(): string;
    private _createVersion?;
    get createVersion(): boolean | cdktf.IResolvable;
    set createVersion(value: boolean | cdktf.IResolvable);
    resetCreateVersion(): void;
    get createVersionInput(): boolean | cdktf.IResolvable;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentIntentSignature?;
    get parentIntentSignature(): string;
    set parentIntentSignature(value: string);
    resetParentIntentSignature(): void;
    get parentIntentSignatureInput(): string;
    private _sampleUtterances?;
    get sampleUtterances(): string[];
    set sampleUtterances(value: string[]);
    resetSampleUtterances(): void;
    get sampleUtterancesInput(): string[];
    get version(): string;
    private _conclusionStatement;
    get conclusionStatement(): LexIntentConclusionStatementOutputReference;
    putConclusionStatement(value: LexIntentConclusionStatement): void;
    resetConclusionStatement(): void;
    get conclusionStatementInput(): LexIntentConclusionStatement;
    private _confirmationPrompt;
    get confirmationPrompt(): LexIntentConfirmationPromptOutputReference;
    putConfirmationPrompt(value: LexIntentConfirmationPrompt): void;
    resetConfirmationPrompt(): void;
    get confirmationPromptInput(): LexIntentConfirmationPrompt;
    private _dialogCodeHook;
    get dialogCodeHook(): LexIntentDialogCodeHookOutputReference;
    putDialogCodeHook(value: LexIntentDialogCodeHook): void;
    resetDialogCodeHook(): void;
    get dialogCodeHookInput(): LexIntentDialogCodeHook;
    private _followUpPrompt;
    get followUpPrompt(): LexIntentFollowUpPromptOutputReference;
    putFollowUpPrompt(value: LexIntentFollowUpPrompt): void;
    resetFollowUpPrompt(): void;
    get followUpPromptInput(): LexIntentFollowUpPrompt;
    private _fulfillmentActivity;
    get fulfillmentActivity(): LexIntentFulfillmentActivityOutputReference;
    putFulfillmentActivity(value: LexIntentFulfillmentActivity): void;
    get fulfillmentActivityInput(): LexIntentFulfillmentActivity;
    private _rejectionStatement;
    get rejectionStatement(): LexIntentRejectionStatementOutputReference;
    putRejectionStatement(value: LexIntentRejectionStatement): void;
    resetRejectionStatement(): void;
    get rejectionStatementInput(): LexIntentRejectionStatement;
    private _slot?;
    get slot(): LexIntentSlot[];
    set slot(value: LexIntentSlot[]);
    resetSlot(): void;
    get slotInput(): LexIntentSlot[];
    private _timeouts;
    get timeouts(): LexIntentTimeoutsOutputReference;
    putTimeouts(value: LexIntentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LexIntentTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lex-intent.d.ts.map