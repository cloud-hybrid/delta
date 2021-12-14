import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RandomProviderConfig {
    /**
    * Alias name
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random#alias RandomProvider#alias}
    */
    readonly alias?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/random random}
*/
export declare class RandomProvider extends cdktf.TerraformProvider {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random random} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RandomProviderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: RandomProviderConfig);
    private _alias?;
    get alias(): string | undefined;
    set alias(value: string | undefined);
    resetAlias(): void;
    get aliasInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=random-provider.d.ts.map