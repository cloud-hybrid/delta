import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Registry
*/
export interface DataAwsEcrAuthorizationTokenConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html#registry_id DataAwsEcrAuthorizationToken#registry_id}
    */
    readonly registryId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token}
*/
export declare class DataAwsEcrAuthorizationToken extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrAuthorizationTokenConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEcrAuthorizationTokenConfig);
    get authorizationToken(): string;
    get expiresAt(): string;
    get id(): string;
    get password(): string;
    get proxyEndpoint(): string;
    private _registryId?;
    get registryId(): string;
    set registryId(value: string);
    resetRegistryId(): void;
    get registryIdInput(): string;
    get userName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ecr-authorization-token.d.ts.map