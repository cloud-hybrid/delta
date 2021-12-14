import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface UuidConfig extends cdktf.TerraformMetaArguments {
    /**
    * Arbitrary map of values that, when changed, will trigger recreation of resource. See [the main provider documentation](../index.html) for more information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/random/r/uuid.html#keepers Uuid#keepers}
    */
    readonly keepers?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/random/r/uuid.html random_uuid}
*/
export declare class Uuid extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random/r/uuid.html random_uuid} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options UuidConfig = {}
    */
    constructor(scope: Construct, id: string, config?: UuidConfig);
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
    get result(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=uuid.d.ts.map