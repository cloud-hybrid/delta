import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Managed Message Queue
*/
export interface MqConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#authentication_strategy MqConfiguration#authentication_strategy}
    */
    readonly authenticationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#data MqConfiguration#data}
    */
    readonly data: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#description MqConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#engine_type MqConfiguration#engine_type}
    */
    readonly engineType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#engine_version MqConfiguration#engine_version}
    */
    readonly engineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#name MqConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#tags MqConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html#tags_all MqConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration}
*/
export declare class MqConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_configuration.html aws_mq_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MqConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: MqConfigurationConfig);
    get arn(): string;
    private _authenticationStrategy?;
    get authenticationStrategy(): string;
    set authenticationStrategy(value: string);
    resetAuthenticationStrategy(): void;
    get authenticationStrategyInput(): string;
    private _data?;
    get data(): string;
    set data(value: string);
    get dataInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _engineType?;
    get engineType(): string;
    set engineType(value: string);
    get engineTypeInput(): string;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    get engineVersionInput(): string;
    get id(): string;
    get latestRevision(): number;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=mq-configuration.d.ts.map