import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#keepers Pet#keepers}
    */
    readonly keepers?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * The length (in words) of the pet name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#length Pet#length}
    */
    readonly length?: number;
    /**
    * A string to prefix the name with.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#prefix Pet#prefix}
    */
    readonly prefix?: string;
    /**
    * The character to separate words in the pet name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/pet.html#separator Pet#separator}
    */
    readonly separator?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/random/r/pet.html random_pet}
*/
export declare class Pet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random/r/pet.html random_pet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: PetConfig);
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
    private _length?;
    get length(): number;
    set length(value: number);
    resetLength(): void;
    get lengthInput(): number;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
    private _separator?;
    get separator(): string;
    set separator(value: string);
    resetSeparator(): void;
    get separatorInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=pet.d.ts.map