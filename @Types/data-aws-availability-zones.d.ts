import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsAvailabilityZonesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}
    */
    readonly allAvailabilityZones?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_names DataAwsAvailabilityZones#exclude_names}
    */
    readonly excludeNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}
    */
    readonly excludeZoneIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#state DataAwsAvailabilityZones#state}
    */
    readonly state?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#filter DataAwsAvailabilityZones#filter}
    */
    readonly filter?: DataAwsAvailabilityZonesFilter[];
}
export interface DataAwsAvailabilityZonesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#name DataAwsAvailabilityZones#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#values DataAwsAvailabilityZones#values}
    */
    readonly values: string[];
}
export declare function dataAwsAvailabilityZonesFilterToTerraform(struct?: DataAwsAvailabilityZonesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones}
*/
export declare class DataAwsAvailabilityZones extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZonesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAvailabilityZonesConfig);
    private _allAvailabilityZones?;
    get allAvailabilityZones(): boolean | cdktf.IResolvable;
    set allAvailabilityZones(value: boolean | cdktf.IResolvable);
    resetAllAvailabilityZones(): void;
    get allAvailabilityZonesInput(): boolean | cdktf.IResolvable;
    private _excludeNames?;
    get excludeNames(): string[];
    set excludeNames(value: string[]);
    resetExcludeNames(): void;
    get excludeNamesInput(): string[];
    private _excludeZoneIds?;
    get excludeZoneIds(): string[];
    set excludeZoneIds(value: string[]);
    resetExcludeZoneIds(): void;
    get excludeZoneIdsInput(): string[];
    get groupNames(): string[];
    get id(): string;
    get names(): string[];
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    get zoneIds(): string[];
    private _filter?;
    get filter(): DataAwsAvailabilityZonesFilter[];
    set filter(value: DataAwsAvailabilityZonesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsAvailabilityZonesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-availability-zones.d.ts.map