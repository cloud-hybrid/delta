import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GameLift
*/
export interface GameliftAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#description GameliftAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#name GameliftAlias#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags GameliftAlias#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#tags_all GameliftAlias#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * routing_strategy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#routing_strategy GameliftAlias#routing_strategy}
    */
    readonly routingStrategy: GameliftAliasRoutingStrategy;
}
export interface GameliftAliasRoutingStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#fleet_id GameliftAlias#fleet_id}
    */
    readonly fleetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#message GameliftAlias#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html#type GameliftAlias#type}
    */
    readonly type: string;
}
export declare function gameliftAliasRoutingStrategyToTerraform(struct?: GameliftAliasRoutingStrategyOutputReference | GameliftAliasRoutingStrategy): any;
export declare class GameliftAliasRoutingStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GameliftAliasRoutingStrategy | undefined;
    set internalValue(value: GameliftAliasRoutingStrategy | undefined);
    private _fleetId?;
    get fleetId(): string;
    set fleetId(value: string);
    resetFleetId(): void;
    get fleetIdInput(): string;
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias}
*/
export declare class GameliftAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_alias.html aws_gamelift_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftAliasConfig
    */
    constructor(scope: Construct, id: string, config: GameliftAliasConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _routingStrategy;
    get routingStrategy(): GameliftAliasRoutingStrategyOutputReference;
    putRoutingStrategy(value: GameliftAliasRoutingStrategy): void;
    get routingStrategyInput(): GameliftAliasRoutingStrategy;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=gamelift-alias.d.ts.map