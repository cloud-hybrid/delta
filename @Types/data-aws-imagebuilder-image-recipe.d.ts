import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html#arn DataAwsImagebuilderImageRecipe#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html#tags DataAwsImagebuilderImageRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs extends cdktf.ComplexComputedList {
    get deleteOnTermination(): any;
    get encrypted(): any;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMapping extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get ebs(): any;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsImagebuilderImageRecipeComponent extends cdktf.ComplexComputedList {
    get componentArn(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe}
*/
export declare class DataAwsImagebuilderImageRecipe extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe.html aws_imagebuilder_image_recipe} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageRecipeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageRecipeConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    blockDeviceMapping(index: string): DataAwsImagebuilderImageRecipeBlockDeviceMapping;
    component(index: string): DataAwsImagebuilderImageRecipeComponent;
    get dateCreated(): string;
    get description(): string;
    get id(): string;
    get name(): string;
    get owner(): string;
    get parentImage(): string;
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
    get workingDirectory(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-imagebuilder-image-recipe.d.ts.map