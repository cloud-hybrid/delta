import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudcontrolapiResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#desired_state CloudcontrolapiResource#desired_state}
    */
    readonly desiredState: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#role_arn CloudcontrolapiResource#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#schema CloudcontrolapiResource#schema}
    */
    readonly schema?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#type_name CloudcontrolapiResource#type_name}
    */
    readonly typeName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#type_version_id CloudcontrolapiResource#type_version_id}
    */
    readonly typeVersionId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#timeouts CloudcontrolapiResource#timeouts}
    */
    readonly timeouts?: CloudcontrolapiResourceTimeouts;
}
export interface CloudcontrolapiResourceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#create CloudcontrolapiResource#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#delete CloudcontrolapiResource#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html#update CloudcontrolapiResource#update}
    */
    readonly update?: string;
}
export declare function cloudcontrolapiResourceTimeoutsToTerraform(struct?: CloudcontrolapiResourceTimeoutsOutputReference | CloudcontrolapiResourceTimeouts): any;
export declare class CloudcontrolapiResourceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudcontrolapiResourceTimeouts | undefined;
    set internalValue(value: CloudcontrolapiResourceTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource}
*/
export declare class CloudcontrolapiResource extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudcontrolapiResourceConfig
    */
    constructor(scope: Construct, id: string, config: CloudcontrolapiResourceConfig);
    private _desiredState?;
    get desiredState(): string;
    set desiredState(value: string);
    get desiredStateInput(): string;
    get id(): string;
    get properties(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    resetSchema(): void;
    get schemaInput(): string;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    get typeNameInput(): string;
    private _typeVersionId?;
    get typeVersionId(): string;
    set typeVersionId(value: string);
    resetTypeVersionId(): void;
    get typeVersionIdInput(): string;
    private _timeouts;
    get timeouts(): CloudcontrolapiResourceTimeoutsOutputReference;
    putTimeouts(value: CloudcontrolapiResourceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): CloudcontrolapiResourceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudcontrolapi-resource.d.ts.map