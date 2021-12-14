import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS IoT
*/
export interface DataAwsIotEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html#endpoint_type DataAwsIotEndpoint#endpoint_type}
    */
    readonly endpointType?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint}
*/
export declare class DataAwsIotEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIotEndpointConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsIotEndpointConfig);
    get endpointAddress(): string;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    resetEndpointType(): void;
    get endpointTypeInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-iot-endpoint.d.ts.map