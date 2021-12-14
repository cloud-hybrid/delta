import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Serverless Application Repository
*/
export interface ServerlessapplicationrepositoryCloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}
    */
    readonly capabilities: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#name ServerlessapplicationrepositoryCloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}
    */
    readonly semanticVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#tags ServerlessapplicationrepositoryCloudformationStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}
    */
    readonly timeouts?: ServerlessapplicationrepositoryCloudformationStackTimeouts;
}
export interface ServerlessapplicationrepositoryCloudformationStackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#create ServerlessapplicationrepositoryCloudformationStack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#delete ServerlessapplicationrepositoryCloudformationStack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html#update ServerlessapplicationrepositoryCloudformationStack#update}
    */
    readonly update?: string;
}
export declare function serverlessapplicationrepositoryCloudformationStackTimeoutsToTerraform(struct?: ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference | ServerlessapplicationrepositoryCloudformationStackTimeouts): any;
export declare class ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServerlessapplicationrepositoryCloudformationStackTimeouts | undefined;
    set internalValue(value: ServerlessapplicationrepositoryCloudformationStackTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack}
*/
export declare class ServerlessapplicationrepositoryCloudformationStack extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack.html aws_serverlessapplicationrepository_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServerlessapplicationrepositoryCloudformationStackConfig
    */
    constructor(scope: Construct, id: string, config: ServerlessapplicationrepositoryCloudformationStackConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    get capabilitiesInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    outputs(key: string): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _semanticVersion?;
    get semanticVersion(): string;
    set semanticVersion(value: string);
    resetSemanticVersion(): void;
    get semanticVersionInput(): string;
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
    private _timeouts;
    get timeouts(): ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference;
    putTimeouts(value: ServerlessapplicationrepositoryCloudformationStackTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ServerlessapplicationrepositoryCloudformationStackTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=serverlessapplicationrepository-cloudformation-stack.d.ts.map