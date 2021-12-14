import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoveryreadinessCellConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#cell_name Route53RecoveryreadinessCell#cell_name}
    */
    readonly cellName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#cells Route53RecoveryreadinessCell#cells}
    */
    readonly cells?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#tags Route53RecoveryreadinessCell#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#tags_all Route53RecoveryreadinessCell#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#timeouts Route53RecoveryreadinessCell#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessCellTimeouts;
}
export interface Route53RecoveryreadinessCellTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html#delete Route53RecoveryreadinessCell#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessCellTimeoutsToTerraform(struct?: Route53RecoveryreadinessCellTimeoutsOutputReference | Route53RecoveryreadinessCellTimeouts): any;
export declare class Route53RecoveryreadinessCellTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessCellTimeouts | undefined;
    set internalValue(value: Route53RecoveryreadinessCellTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell}
*/
export declare class Route53RecoveryreadinessCell extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_cell.html aws_route53recoveryreadiness_cell} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessCellConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessCellConfig);
    get arn(): string;
    private _cellName?;
    get cellName(): string;
    set cellName(value: string);
    get cellNameInput(): string;
    private _cells?;
    get cells(): string[];
    set cells(value: string[]);
    resetCells(): void;
    get cellsInput(): string[];
    get id(): string;
    get parentReadinessScopes(): string[];
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _timeouts;
    get timeouts(): Route53RecoveryreadinessCellTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessCellTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Route53RecoveryreadinessCellTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53recoveryreadiness-cell.d.ts.map