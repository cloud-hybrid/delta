import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayDocumentationPartConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#properties ApiGatewayDocumentationPart#properties}
    */
    readonly properties: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#rest_api_id ApiGatewayDocumentationPart#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * location block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#location ApiGatewayDocumentationPart#location}
    */
    readonly location: ApiGatewayDocumentationPartLocation;
}
export interface ApiGatewayDocumentationPartLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#method ApiGatewayDocumentationPart#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#name ApiGatewayDocumentationPart#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#path ApiGatewayDocumentationPart#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#status_code ApiGatewayDocumentationPart#status_code}
    */
    readonly statusCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#type ApiGatewayDocumentationPart#type}
    */
    readonly type: string;
}
export declare function apiGatewayDocumentationPartLocationToTerraform(struct?: ApiGatewayDocumentationPartLocationOutputReference | ApiGatewayDocumentationPartLocation): any;
export declare class ApiGatewayDocumentationPartLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayDocumentationPartLocation | undefined;
    set internalValue(value: ApiGatewayDocumentationPartLocation | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    resetStatusCode(): void;
    get statusCodeInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part}
*/
export declare class ApiGatewayDocumentationPart extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDocumentationPartConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayDocumentationPartConfig);
    get id(): string;
    private _properties?;
    get properties(): string;
    set properties(value: string);
    get propertiesInput(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string;
    private _location;
    get location(): ApiGatewayDocumentationPartLocationOutputReference;
    putLocation(value: ApiGatewayDocumentationPartLocation): void;
    get locationInput(): ApiGatewayDocumentationPartLocation;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-documentation-part.d.ts.map