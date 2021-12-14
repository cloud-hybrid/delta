import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderImageRecipesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#owner DataAwsImagebuilderImageRecipes#owner}
    */
    readonly owner?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#filter DataAwsImagebuilderImageRecipes#filter}
    */
    readonly filter?: DataAwsImagebuilderImageRecipesFilter[];
}
export interface DataAwsImagebuilderImageRecipesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#name DataAwsImagebuilderImageRecipes#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html#values DataAwsImagebuilderImageRecipes#values}
    */
    readonly values: string[];
}
export declare function dataAwsImagebuilderImageRecipesFilterToTerraform(struct?: DataAwsImagebuilderImageRecipesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html aws_imagebuilder_image_recipes}
*/
export declare class DataAwsImagebuilderImageRecipes extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipes.html aws_imagebuilder_image_recipes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageRecipesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsImagebuilderImageRecipesConfig);
    get arns(): string[];
    get id(): string;
    get names(): string[];
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string;
    private _filter?;
    get filter(): DataAwsImagebuilderImageRecipesFilter[];
    set filter(value: DataAwsImagebuilderImageRecipesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsImagebuilderImageRecipesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-imagebuilder-image-recipes.d.ts.map