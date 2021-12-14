import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html#arn DataAwsImagebuilderImage#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html#tags DataAwsImagebuilderImage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsImagebuilderImageImageTestsConfiguration extends cdktf.ComplexComputedList {
    get imageTestsEnabled(): any;
    get timeoutMinutes(): number;
}
export declare class DataAwsImagebuilderImageOutputResourcesAmis extends cdktf.ComplexComputedList {
    get accountId(): string;
    get description(): string;
    get image(): string;
    get name(): string;
    get region(): string;
}
export declare class DataAwsImagebuilderImageOutputResources extends cdktf.ComplexComputedList {
    get amis(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image}
*/
export declare class DataAwsImagebuilderImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image.html aws_imagebuilder_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get buildVersionArn(): string;
    get dateCreated(): string;
    get distributionConfigurationArn(): string;
    get enhancedImageMetadataEnabled(): any;
    get id(): string;
    get imageRecipeArn(): string;
    imageTestsConfiguration(index: string): DataAwsImagebuilderImageImageTestsConfiguration;
    get infrastructureConfigurationArn(): string;
    get name(): string;
    get osVersion(): string;
    outputResources(index: string): DataAwsImagebuilderImageOutputResources;
    get platform(): string;
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-imagebuilder-image.d.ts.map