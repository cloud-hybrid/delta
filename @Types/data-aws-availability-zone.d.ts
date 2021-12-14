import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsAvailabilityZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}
    */
    readonly allAvailabilityZones?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#state DataAwsAvailabilityZone#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#zone_id DataAwsAvailabilityZone#zone_id}
    */
    readonly zoneId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#filter DataAwsAvailabilityZone#filter}
    */
    readonly filter?: DataAwsAvailabilityZoneFilter[];
}
export interface DataAwsAvailabilityZoneFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#name DataAwsAvailabilityZone#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html#values DataAwsAvailabilityZone#values}
    */
    readonly values: string[];
}
export declare function dataAwsAvailabilityZoneFilterToTerraform(struct?: DataAwsAvailabilityZoneFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone}
*/
export declare class DataAwsAvailabilityZone extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zone.html aws_availability_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZoneConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAvailabilityZoneConfig);
    private _allAvailabilityZones?;
    get allAvailabilityZones(): boolean | cdktf.IResolvable;
    set allAvailabilityZones(value: boolean | cdktf.IResolvable);
    resetAllAvailabilityZones(): void;
    get allAvailabilityZonesInput(): boolean | cdktf.IResolvable;
    get groupName(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get nameSuffix(): string;
    get networkBorderGroup(): string;
    get optInStatus(): string;
    get parentZoneId(): string;
    get parentZoneName(): string;
    get region(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    get zoneType(): string;
    private _filter?;
    get filter(): DataAwsAvailabilityZoneFilter[];
    set filter(value: DataAwsAvailabilityZoneFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsAvailabilityZoneFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-availability-zone.d.ts.map