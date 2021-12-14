import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lex
*/
export interface LexBotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#child_directed LexBot#child_directed}
    */
    readonly childDirected: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#create_version LexBot#create_version}
    */
    readonly createVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#description LexBot#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#detect_sentiment LexBot#detect_sentiment}
    */
    readonly detectSentiment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#enable_model_improvements LexBot#enable_model_improvements}
    */
    readonly enableModelImprovements?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}
    */
    readonly idleSessionTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#locale LexBot#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#name LexBot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}
    */
    readonly nluIntentConfidenceThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#process_behavior LexBot#process_behavior}
    */
    readonly processBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#voice_id LexBot#voice_id}
    */
    readonly voiceId?: string;
    /**
    * abort_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#abort_statement LexBot#abort_statement}
    */
    readonly abortStatement: LexBotAbortStatement;
    /**
    * clarification_prompt block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#clarification_prompt LexBot#clarification_prompt}
    */
    readonly clarificationPrompt?: LexBotClarificationPrompt;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent LexBot#intent}
    */
    readonly intent: LexBotIntent[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#timeouts LexBot#timeouts}
    */
    readonly timeouts?: LexBotTimeouts;
}
export interface LexBotAbortStatementMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content LexBot#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content_type LexBot#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#group_number LexBot#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexBotAbortStatementMessageToTerraform(struct?: LexBotAbortStatementMessage): any;
export interface LexBotAbortStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#response_card LexBot#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#message LexBot#message}
    */
    readonly message: LexBotAbortStatementMessage[];
}
export declare function lexBotAbortStatementToTerraform(struct?: LexBotAbortStatementOutputReference | LexBotAbortStatement): any;
export declare class LexBotAbortStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexBotAbortStatement | undefined;
    set internalValue(value: LexBotAbortStatement | undefined);
    private _responseCard?;
    get responseCard(): string;
    set responseCard(value: string);
    resetResponseCard(): void;
    get responseCardInput(): string;
    private _message?;
    get message(): LexBotAbortStatementMessage[];
    set message(value: LexBotAbortStatementMessage[]);
    get messageInput(): LexBotAbortStatementMessage[];
}
export interface LexBotClarificationPromptMessage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content LexBot#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#content_type LexBot#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#group_number LexBot#group_number}
    */
    readonly groupNumber?: number;
}
export declare function lexBotClarificationPromptMessageToTerraform(struct?: LexBotClarificationPromptMessage): any;
export interface LexBotClarificationPrompt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#max_attempts LexBot#max_attempts}
    */
    readonly maxAttempts: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#response_card LexBot#response_card}
    */
    readonly responseCard?: string;
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#message LexBot#message}
    */
    readonly message: LexBotClarificationPromptMessage[];
}
export declare function lexBotClarificationPromptToTerraform(struct?: LexBotClarificationPromptOutputReference | LexBotClarificationPrompt): any;
export declare class LexBotClarificationPromptOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexBotClarificationPrompt | undefined;
    set internalValue(value: LexBotClarificationPrompt | undefined);
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
    get message(): LexBotClarificationPromptMessage[];
    set message(value: LexBotClarificationPromptMessage[]);
    get messageInput(): LexBotClarificationPromptMessage[];
}
export interface LexBotIntent {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent_name LexBot#intent_name}
    */
    readonly intentName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#intent_version LexBot#intent_version}
    */
    readonly intentVersion: string;
}
export declare function lexBotIntentToTerraform(struct?: LexBotIntent): any;
export interface LexBotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#create LexBot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#delete LexBot#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html#update LexBot#update}
    */
    readonly update?: string;
}
export declare function lexBotTimeoutsToTerraform(struct?: LexBotTimeoutsOutputReference | LexBotTimeouts): any;
export declare class LexBotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexBotTimeouts | undefined;
    set internalValue(value: LexBotTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot}
*/
export declare class LexBot extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot.html aws_lex_bot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexBotConfig
    */
    constructor(scope: Construct, id: string, config: LexBotConfig);
    get arn(): string;
    get checksum(): string;
    private _childDirected?;
    get childDirected(): boolean | cdktf.IResolvable;
    set childDirected(value: boolean | cdktf.IResolvable);
    get childDirectedInput(): boolean | cdktf.IResolvable;
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
    private _detectSentiment?;
    get detectSentiment(): boolean | cdktf.IResolvable;
    set detectSentiment(value: boolean | cdktf.IResolvable);
    resetDetectSentiment(): void;
    get detectSentimentInput(): boolean | cdktf.IResolvable;
    private _enableModelImprovements?;
    get enableModelImprovements(): boolean | cdktf.IResolvable;
    set enableModelImprovements(value: boolean | cdktf.IResolvable);
    resetEnableModelImprovements(): void;
    get enableModelImprovementsInput(): boolean | cdktf.IResolvable;
    get failureReason(): string;
    get id(): string;
    private _idleSessionTtlInSeconds?;
    get idleSessionTtlInSeconds(): number;
    set idleSessionTtlInSeconds(value: number);
    resetIdleSessionTtlInSeconds(): void;
    get idleSessionTtlInSecondsInput(): number;
    get lastUpdatedDate(): string;
    private _locale?;
    get locale(): string;
    set locale(value: string);
    resetLocale(): void;
    get localeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _nluIntentConfidenceThreshold?;
    get nluIntentConfidenceThreshold(): number;
    set nluIntentConfidenceThreshold(value: number);
    resetNluIntentConfidenceThreshold(): void;
    get nluIntentConfidenceThresholdInput(): number;
    private _processBehavior?;
    get processBehavior(): string;
    set processBehavior(value: string);
    resetProcessBehavior(): void;
    get processBehaviorInput(): string;
    get status(): string;
    get version(): string;
    private _voiceId?;
    get voiceId(): string;
    set voiceId(value: string);
    resetVoiceId(): void;
    get voiceIdInput(): string;
    private _abortStatement;
    get abortStatement(): LexBotAbortStatementOutputReference;
    putAbortStatement(value: LexBotAbortStatement): void;
    get abortStatementInput(): LexBotAbortStatement;
    private _clarificationPrompt;
    get clarificationPrompt(): LexBotClarificationPromptOutputReference;
    putClarificationPrompt(value: LexBotClarificationPrompt): void;
    resetClarificationPrompt(): void;
    get clarificationPromptInput(): LexBotClarificationPrompt;
    private _intent?;
    get intent(): LexBotIntent[];
    set intent(value: LexBotIntent[]);
    get intentInput(): LexBotIntent[];
    private _timeouts;
    get timeouts(): LexBotTimeoutsOutputReference;
    putTimeouts(value: LexBotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LexBotTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lex-bot.d.ts.map