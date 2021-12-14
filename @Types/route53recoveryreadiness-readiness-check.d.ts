import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoveryreadinessReadinessCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#readiness_check_name Route53RecoveryreadinessReadinessCheck#readiness_check_name}
    */
    readonly readinessCheckName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#resource_set_name Route53RecoveryreadinessReadinessCheck#resource_set_name}
    */
    readonly resourceSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#tags Route53RecoveryreadinessReadinessCheck#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#tags_all Route53RecoveryreadinessReadinessCheck#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#timeouts Route53RecoveryreadinessReadinessCheck#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessReadinessCheckTimeouts;
}
export interface Route53RecoveryreadinessReadinessCheckTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html#delete Route53RecoveryreadinessReadinessCheck#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessReadinessCheckTimeoutsToTerraform(struct?: Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference | Route53RecoveryreadinessReadinessCheckTimeouts): any;
export declare class Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessReadinessCheckTimeouts | undefined;
    set internalValue(value: Route53RecoveryreadinessReadinessCheckTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html aws_route53recoveryreadiness_readiness_check}
*/
export declare class Route53RecoveryreadinessReadinessCheck extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_readiness_check.html aws_route53recoveryreadiness_readiness_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessReadinessCheckConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessReadinessCheckConfig);
    get arn(): string;
    get id(): string;
    private _readinessCheckName?;
    get readinessCheckName(): string;
    set readinessCheckName(value: string);
    get readinessCheckNameInput(): string;
    private _resourceSetName?;
    get resourceSetName(): string;
    set resourceSetName(value: string);
    get resourceSetNameInput(): string;
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
    get timeouts(): Route53RecoveryreadinessReadinessCheckTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessReadinessCheckTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Route53RecoveryreadinessReadinessCheckTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53recoveryreadiness-readiness-check.d.ts.map