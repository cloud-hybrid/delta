import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html#arn DataAwsImagebuilderComponent#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html#tags DataAwsImagebuilderComponent#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component}
*/
export declare class DataAwsImagebuilderComponent extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderComponentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderComponentConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get changeDescription(): string;
    get data(): string;
    get dateCreated(): string;
    get description(): string;
    get encrypted(): any;
    get id(): string;
    get kmsKeyId(): string;
    get name(): string;
    get owner(): string;
    get platform(): string;
    get supportedOsVersions(): string[];
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
    get type(): string;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-imagebuilder-component.d.ts.map