import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudcontrolapiResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html#identifier DataAwsCloudcontrolapiResource#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html#role_arn DataAwsCloudcontrolapiResource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html#type_name DataAwsCloudcontrolapiResource#type_name}
    */
    readonly typeName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html#type_version_id DataAwsCloudcontrolapiResource#type_version_id}
    */
    readonly typeVersionId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource}
*/
export declare class DataAwsCloudcontrolapiResource extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudcontrolapiResourceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudcontrolapiResourceConfig);
    get id(): string;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    get properties(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    get typeNameInput(): string;
    private _typeVersionId?;
    get typeVersionId(): string;
    set typeVersionId(value: string);
    resetTypeVersionId(): void;
    get typeVersionIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudcontrolapi-resource.d.ts.map