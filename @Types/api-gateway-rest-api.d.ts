import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#api_key_source ApiGatewayRestApi#api_key_source}
    */
    readonly apiKeySource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#binary_media_types ApiGatewayRestApi#binary_media_types}
    */
    readonly binaryMediaTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#body ApiGatewayRestApi#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#description ApiGatewayRestApi#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}
    */
    readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}
    */
    readonly minimumCompressionSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#name ApiGatewayRestApi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#parameters ApiGatewayRestApi#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#policy ApiGatewayRestApi#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#tags ApiGatewayRestApi#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#tags_all ApiGatewayRestApi#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * endpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}
    */
    readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration;
}
export interface ApiGatewayRestApiEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#types ApiGatewayRestApi#types}
    */
    readonly types: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}
    */
    readonly vpcEndpointIds?: string[];
}
export declare function apiGatewayRestApiEndpointConfigurationToTerraform(struct?: ApiGatewayRestApiEndpointConfigurationOutputReference | ApiGatewayRestApiEndpointConfiguration): any;
export declare class ApiGatewayRestApiEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayRestApiEndpointConfiguration | undefined;
    set internalValue(value: ApiGatewayRestApiEndpointConfiguration | undefined);
    private _types?;
    get types(): string[];
    set types(value: string[]);
    get typesInput(): string[];
    private _vpcEndpointIds?;
    get vpcEndpointIds(): string[];
    set vpcEndpointIds(value: string[]);
    resetVpcEndpointIds(): void;
    get vpcEndpointIdsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api}
*/
export declare class ApiGatewayRestApi extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRestApiConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayRestApiConfig);
    private _apiKeySource?;
    get apiKeySource(): string;
    set apiKeySource(value: string);
    resetApiKeySource(): void;
    get apiKeySourceInput(): string;
    get arn(): string;
    private _binaryMediaTypes?;
    get binaryMediaTypes(): string[];
    set binaryMediaTypes(value: string[]);
    resetBinaryMediaTypes(): void;
    get binaryMediaTypesInput(): string[];
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _disableExecuteApiEndpoint?;
    get disableExecuteApiEndpoint(): boolean | cdktf.IResolvable;
    set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable);
    resetDisableExecuteApiEndpoint(): void;
    get disableExecuteApiEndpointInput(): boolean | cdktf.IResolvable;
    get executionArn(): string;
    get id(): string;
    private _minimumCompressionSize?;
    get minimumCompressionSize(): number;
    set minimumCompressionSize(value: number);
    resetMinimumCompressionSize(): void;
    get minimumCompressionSizeInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string;
    get rootResourceId(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _endpointConfiguration;
    get endpointConfiguration(): ApiGatewayRestApiEndpointConfigurationOutputReference;
    putEndpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration): void;
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): ApiGatewayRestApiEndpointConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-rest-api.d.ts.map