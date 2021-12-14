import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoveryreadinessRecoveryGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#cells Route53RecoveryreadinessRecoveryGroup#cells}
    */
    readonly cells?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#recovery_group_name Route53RecoveryreadinessRecoveryGroup#recovery_group_name}
    */
    readonly recoveryGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#tags Route53RecoveryreadinessRecoveryGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#tags_all Route53RecoveryreadinessRecoveryGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#timeouts Route53RecoveryreadinessRecoveryGroup#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessRecoveryGroupTimeouts;
}
export interface Route53RecoveryreadinessRecoveryGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html#delete Route53RecoveryreadinessRecoveryGroup#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessRecoveryGroupTimeoutsToTerraform(struct?: Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference | Route53RecoveryreadinessRecoveryGroupTimeouts): any;
export declare class Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessRecoveryGroupTimeouts | undefined;
    set internalValue(value: Route53RecoveryreadinessRecoveryGroupTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group}
*/
export declare class Route53RecoveryreadinessRecoveryGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_recovery_group.html aws_route53recoveryreadiness_recovery_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessRecoveryGroupConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessRecoveryGroupConfig);
    get arn(): string;
    private _cells?;
    get cells(): string[];
    set cells(value: string[]);
    resetCells(): void;
    get cellsInput(): string[];
    get id(): string;
    private _recoveryGroupName?;
    get recoveryGroupName(): string;
    set recoveryGroupName(value: string);
    get recoveryGroupNameInput(): string;
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
    get timeouts(): Route53RecoveryreadinessRecoveryGroupTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessRecoveryGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Route53RecoveryreadinessRecoveryGroupTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53recoveryreadiness-recovery-group.d.ts.map