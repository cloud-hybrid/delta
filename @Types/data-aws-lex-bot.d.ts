import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lex
*/
export interface DataAwsLexBotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html#name DataAwsLexBot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html#version DataAwsLexBot#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot}
*/
export declare class DataAwsLexBot extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lex_bot.html aws_lex_bot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexBotConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLexBotConfig);
    get arn(): string;
    get checksum(): string;
    get childDirected(): any;
    get createdDate(): string;
    get description(): string;
    get detectSentiment(): any;
    get enableModelImprovements(): any;
    get failureReason(): string;
    get id(): string;
    get idleSessionTtlInSeconds(): number;
    get lastUpdatedDate(): string;
    get locale(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nluIntentConfidenceThreshold(): number;
    get status(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    get voiceId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-lex-bot.d.ts.map