import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IdConfig extends cdktf.TerraformMetaArguments {
    /**
    * The number of random bytes to produce. The minimum value is 1, which produces eight bits of randomness.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id.html#byte_length Id#byte_length}
    */
    readonly byteLength: number;
    /**
    * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id.html#keepers Id#keepers}
    */
    readonly keepers?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Arbitrary string to prefix the output value with. This string is supplied as-is, meaning it is not guaranteed to be URL-safe or base64 encoded.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/id.html#prefix Id#prefix}
    */
    readonly prefix?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/random/r/id.html random_id}
*/
export declare class Id extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random/r/id.html random_id} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IdConfig
    */
    constructor(scope: Construct, id: string, config: IdConfig);
    get b64Std(): string;
    get b64Url(): string;
    private _byteLength?;
    get byteLength(): number;
    set byteLength(value: number);
    get byteLengthInput(): number;
    get dec(): string;
    get hex(): string;
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
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=id.d.ts.map