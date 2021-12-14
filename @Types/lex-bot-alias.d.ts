import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lex
*/
export interface LexBotAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_name LexBotAlias#bot_name}
    */
    readonly botName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#bot_version LexBotAlias#bot_version}
    */
    readonly botVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#description LexBotAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#name LexBotAlias#name}
    */
    readonly name: string;
    /**
    * conversation_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#conversation_logs LexBotAlias#conversation_logs}
    */
    readonly conversationLogs?: LexBotAliasConversationLogs;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#timeouts LexBotAlias#timeouts}
    */
    readonly timeouts?: LexBotAliasTimeouts;
}
export interface LexBotAliasConversationLogsLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#destination LexBotAlias#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#kms_key_arn LexBotAlias#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_type LexBotAlias#log_type}
    */
    readonly logType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#resource_arn LexBotAlias#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function lexBotAliasConversationLogsLogSettingsToTerraform(struct?: LexBotAliasConversationLogsLogSettings): any;
export interface LexBotAliasConversationLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#iam_role_arn LexBotAlias#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * log_settings block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#log_settings LexBotAlias#log_settings}
    */
    readonly logSettings?: LexBotAliasConversationLogsLogSettings[];
}
export declare function lexBotAliasConversationLogsToTerraform(struct?: LexBotAliasConversationLogsOutputReference | LexBotAliasConversationLogs): any;
export declare class LexBotAliasConversationLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexBotAliasConversationLogs | undefined;
    set internalValue(value: LexBotAliasConversationLogs | undefined);
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string;
    private _logSettings?;
    get logSettings(): LexBotAliasConversationLogsLogSettings[];
    set logSettings(value: LexBotAliasConversationLogsLogSettings[]);
    resetLogSettings(): void;
    get logSettingsInput(): LexBotAliasConversationLogsLogSettings[];
}
export interface LexBotAliasTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#create LexBotAlias#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#delete LexBotAlias#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html#update LexBotAlias#update}
    */
    readonly update?: string;
}
export declare function lexBotAliasTimeoutsToTerraform(struct?: LexBotAliasTimeoutsOutputReference | LexBotAliasTimeouts): any;
export declare class LexBotAliasTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexBotAliasTimeouts | undefined;
    set internalValue(value: LexBotAliasTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias}
*/
export declare class LexBotAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_bot_alias.html aws_lex_bot_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexBotAliasConfig
    */
    constructor(scope: Construct, id: string, config: LexBotAliasConfig);
    get arn(): string;
    private _botName?;
    get botName(): string;
    set botName(value: string);
    get botNameInput(): string;
    private _botVersion?;
    get botVersion(): string;
    set botVersion(value: string);
    get botVersionInput(): string;
    get checksum(): string;
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
    private _conversationLogs;
    get conversationLogs(): LexBotAliasConversationLogsOutputReference;
    putConversationLogs(value: LexBotAliasConversationLogs): void;
    resetConversationLogs(): void;
    get conversationLogsInput(): LexBotAliasConversationLogs;
    private _timeouts;
    get timeouts(): LexBotAliasTimeoutsOutputReference;
    putTimeouts(value: LexBotAliasTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LexBotAliasTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lex-bot-alias.d.ts.map