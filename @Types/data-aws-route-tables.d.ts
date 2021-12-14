import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#tags DataAwsRouteTables#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#vpc_id DataAwsRouteTables#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#filter DataAwsRouteTables#filter}
    */
    readonly filter?: DataAwsRouteTablesFilter[];
}
export interface DataAwsRouteTablesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#name DataAwsRouteTables#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html#values DataAwsRouteTables#values}
    */
    readonly values: string[];
}
export declare function dataAwsRouteTablesFilterToTerraform(struct?: DataAwsRouteTablesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html aws_route_tables}
*/
export declare class DataAwsRouteTables extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route_tables.html aws_route_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteTablesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRouteTablesConfig);
    get id(): string;
    get ids(): string[];
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _filter?;
    get filter(): DataAwsRouteTablesFilter[];
    set filter(value: DataAwsRouteTablesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRouteTablesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-route-tables.d.ts.map