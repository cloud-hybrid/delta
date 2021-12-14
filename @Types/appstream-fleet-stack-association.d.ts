import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppStream
*/
export interface AppstreamFleetStackAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet_stack_association.html#fleet_name AppstreamFleetStackAssociation#fleet_name}
    */
    readonly fleetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet_stack_association.html#stack_name AppstreamFleetStackAssociation#stack_name}
    */
    readonly stackName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet_stack_association.html aws_appstream_fleet_stack_association}
*/
export declare class AppstreamFleetStackAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appstream_fleet_stack_association.html aws_appstream_fleet_stack_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamFleetStackAssociationConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamFleetStackAssociationConfig);
    private _fleetName?;
    get fleetName(): string;
    set fleetName(value: string);
    get fleetNameInput(): string;
    get id(): string;
    private _stackName?;
    get stackName(): string;
    set stackName(value: string);
    get stackNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appstream-fleet-stack-association.d.ts.map