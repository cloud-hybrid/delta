import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface EbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html#enabled EbsEncryptionByDefault#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default}
*/
export declare class EbsEncryptionByDefault extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsEncryptionByDefaultConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EbsEncryptionByDefaultConfig);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ebs-encryption-by-default.d.ts.map