import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface DataAwsGlueConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html#id DataAwsGlueConnection#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html#tags DataAwsGlueConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsGlueConnectionPhysicalConnectionRequirements extends cdktf.ComplexComputedList {
    get availabilityZone(): string;
    get securityGroupIdList(): string[];
    get subnetId(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html aws_glue_connection}
*/
export declare class DataAwsGlueConnection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/glue_connection.html aws_glue_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsGlueConnectionConfig);
    get arn(): string;
    get catalogId(): string;
    connectionProperties(key: string): string;
    get connectionType(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get matchCriteria(): string[];
    get name(): string;
    physicalConnectionRequirements(index: string): DataAwsGlueConnectionPhysicalConnectionRequirements;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-glue-connection.d.ts.map