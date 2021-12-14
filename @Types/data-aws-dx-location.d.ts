import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DataAwsDxLocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html#location_code DataAwsDxLocation#location_code}
    */
    readonly locationCode: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html aws_dx_location}
*/
export declare class DataAwsDxLocation extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_location.html aws_dx_location} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxLocationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDxLocationConfig);
    get availablePortSpeeds(): string[];
    get availableProviders(): string[];
    get id(): string;
    private _locationCode?;
    get locationCode(): string;
    set locationCode(value: string);
    get locationCodeInput(): string;
    get locationName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-dx-location.d.ts.map