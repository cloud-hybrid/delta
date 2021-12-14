import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Quotas
*/
export interface DataAwsServicequotasServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html#service_name DataAwsServicequotasService#service_name}
    */
    readonly serviceName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html aws_servicequotas_service}
*/
export declare class DataAwsServicequotasService extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service.html aws_servicequotas_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicequotasServiceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicequotasServiceConfig);
    get id(): string;
    get serviceCode(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-servicequotas-service.d.ts.map