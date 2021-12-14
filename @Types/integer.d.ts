import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IntegerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#keepers Integer#keepers}
    */
    readonly keepers?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The maximum inclusive value of the range.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#max Integer#max}
    */
    readonly max: number;
    /**
    * The minimum inclusive value of the range.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#min Integer#min}
    */
    readonly min: number;
    /**
    * A custom seed to always produce the same value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/integer.html#seed Integer#seed}
    */
    readonly seed?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/random/r/integer.html random_integer}
*/
export declare class Integer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random/r/integer.html random_integer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IntegerConfig
    */
    constructor(scope: Construct, id: string, config: IntegerConfig);
    get id(): string;
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
    private _max?;
    get max(): number;
    set max(value: number);
    get maxInput(): number;
    private _min?;
    get min(): number;
    set min(value: number);
    get minInput(): number;
    get result(): number;
    private _seed?;
    get seed(): string;
    set seed(value: string);
    resetSeed(): void;
    get seedInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=integer.d.ts.map