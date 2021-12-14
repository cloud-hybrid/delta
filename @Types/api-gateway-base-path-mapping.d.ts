import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayBasePathMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#api_id ApiGatewayBasePathMapping#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#base_path ApiGatewayBasePathMapping#base_path}
    */
    readonly basePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#domain_name ApiGatewayBasePathMapping#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#stage_name ApiGatewayBasePathMapping#stage_name}
    */
    readonly stageName?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html aws_api_gateway_base_path_mapping}
*/
export declare class ApiGatewayBasePathMapping extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html aws_api_gateway_base_path_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayBasePathMappingConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayBasePathMappingConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string;
    private _basePath?;
    get basePath(): string;
    set basePath(value: string);
    resetBasePath(): void;
    get basePathInput(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    resetStageName(): void;
    get stageNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-base-path-mapping.d.ts.map