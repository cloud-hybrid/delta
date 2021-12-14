import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodePipeline
*/
export interface CodepipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#role_arn Codepipeline#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#tags Codepipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#tags_all Codepipeline#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * artifact_store block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#artifact_store Codepipeline#artifact_store}
    */
    readonly artifactStore: CodepipelineArtifactStore[];
    /**
    * stage block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#stage Codepipeline#stage}
    */
    readonly stage: CodepipelineStage[];
}
export interface CodepipelineArtifactStoreEncryptionKey {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#id Codepipeline#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#type Codepipeline#type}
    */
    readonly type: string;
}
export declare function codepipelineArtifactStoreEncryptionKeyToTerraform(struct?: CodepipelineArtifactStoreEncryptionKeyOutputReference | CodepipelineArtifactStoreEncryptionKey): any;
export declare class CodepipelineArtifactStoreEncryptionKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodepipelineArtifactStoreEncryptionKey | undefined;
    set internalValue(value: CodepipelineArtifactStoreEncryptionKey | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface CodepipelineArtifactStore {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#location Codepipeline#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#type Codepipeline#type}
    */
    readonly type: string;
    /**
    * encryption_key block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#encryption_key Codepipeline#encryption_key}
    */
    readonly encryptionKey?: CodepipelineArtifactStoreEncryptionKey;
}
export declare function codepipelineArtifactStoreToTerraform(struct?: CodepipelineArtifactStore): any;
export interface CodepipelineStageAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#category Codepipeline#category}
    */
    readonly category: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#configuration Codepipeline#configuration}
    */
    readonly configuration?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#input_artifacts Codepipeline#input_artifacts}
    */
    readonly inputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#namespace Codepipeline#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#output_artifacts Codepipeline#output_artifacts}
    */
    readonly outputArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#owner Codepipeline#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#provider Codepipeline#provider}
    */
    readonly provider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#region Codepipeline#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#role_arn Codepipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#run_order Codepipeline#run_order}
    */
    readonly runOrder?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#version Codepipeline#version}
    */
    readonly version: string;
}
export declare function codepipelineStageActionToTerraform(struct?: CodepipelineStageAction): any;
export interface CodepipelineStage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#name Codepipeline#name}
    */
    readonly name: string;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html#action Codepipeline#action}
    */
    readonly action: CodepipelineStageAction[];
}
export declare function codepipelineStageToTerraform(struct?: CodepipelineStage): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline}
*/
export declare class Codepipeline extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineConfig
    */
    constructor(scope: Construct, id: string, config: CodepipelineConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
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
    private _artifactStore?;
    get artifactStore(): CodepipelineArtifactStore[];
    set artifactStore(value: CodepipelineArtifactStore[]);
    get artifactStoreInput(): CodepipelineArtifactStore[];
    private _stage?;
    get stage(): CodepipelineStage[];
    set stage(value: CodepipelineStage[]);
    get stageInput(): CodepipelineStage[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codepipeline.d.ts.map