import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DataAwsDxLocationsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_locations.html aws_dx_locations}
*/
export declare class DataAwsDxLocations extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_locations.html aws_dx_locations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxLocationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDxLocationsConfig);
    get id(): string;
    get locationCodes(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-dx-locations.d.ts.map