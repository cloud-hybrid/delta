import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayClientCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html#description ApiGatewayClientCertificate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html#tags ApiGatewayClientCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html#tags_all ApiGatewayClientCertificate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html aws_api_gateway_client_certificate}
*/
export declare class ApiGatewayClientCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html aws_api_gateway_client_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayClientCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ApiGatewayClientCertificateConfig);
    get arn(): string;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get expirationDate(): string;
    get id(): string;
    get pemEncodedCertificate(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-client-certificate.d.ts.map