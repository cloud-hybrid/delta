import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_encryption_by_default.html aws_ebs_encryption_by_default}
*/
export declare class DataAwsEbsEncryptionByDefault extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsEncryptionByDefaultConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsEncryptionByDefaultConfig);
    get enabled(): any;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ebs-encryption-by-default.d.ts.map