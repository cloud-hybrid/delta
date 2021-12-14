import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ShuffleConfig extends cdktf.TerraformMetaArguments {
    /**
    * The list of strings to shuffle.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#input Shuffle#input}
    */
    readonly input: string[];
    /**
    * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#keepers Shuffle#keepers}
    */
    readonly keepers?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The number of results to return. Defaults to the number of items in the `input` list. If fewer items are requested, some elements will be excluded from the result. If more items are requested, items will be repeated in the result but not more frequently than the number of items in the input list.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#result_count Shuffle#result_count}
    */
    readonly resultCount?: number;
    /**
    * Arbitrary string with which to seed the random number generator, in order to produce less-volatile permutations of the list.
  
  **Important:** Even with an identical seed, it is not guaranteed that the same permutation will be produced across different versions of Terraform. This argument causes the result to be *less volatile*, but not fixed for all time.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/shuffle.html#seed Shuffle#seed}
    */
    readonly seed?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/random/r/shuffle.html random_shuffle}
*/
export declare class Shuffle extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random/r/shuffle.html random_shuffle} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShuffleConfig
    */
    constructor(scope: Construct, id: string, config: ShuffleConfig);
    get id(): string;
    private _input?;
    get input(): string[];
    set input(value: string[]);
    get inputInput(): string[];
    private _keepers?;
    get keepers(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set keepers(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetKeepers(): void;
    get keepersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get result(): string[];
    private _resultCount?;
    get resultCount(): number;
    set resultCount(value: number);
    resetResultCount(): void;
    get resultCountInput(): number;
    private _seed?;
    get seed(): string;
    set seed(value: string);
    resetSeed(): void;
    get seedInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=shuffle.d.ts.map