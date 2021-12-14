import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Outposts
*/
export interface DataAwsOutpostsOutpostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html#name DataAwsOutpostsOutpost#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html#owner_id DataAwsOutpostsOutpost#owner_id}
    */
    readonly ownerId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost}
*/
export declare class DataAwsOutpostsOutpost extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOutpostsOutpostConfig);
    get arn(): string;
    get availabilityZone(): string;
    get availabilityZoneId(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string;
    get siteId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-outposts-outpost.d.ts.map