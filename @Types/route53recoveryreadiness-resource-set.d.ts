import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53RecoveryreadinessResourceSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}
    */
    readonly resourceSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}
    */
    readonly resourceSetType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#tags Route53RecoveryreadinessResourceSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#tags_all Route53RecoveryreadinessResourceSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * resources block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resources Route53RecoveryreadinessResourceSet#resources}
    */
    readonly resources: Route53RecoveryreadinessResourceSetResources[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#timeouts Route53RecoveryreadinessResourceSet#timeouts}
    */
    readonly timeouts?: Route53RecoveryreadinessResourceSetTimeouts;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#arn Route53RecoveryreadinessResourceSet#arn}
    */
    readonly arn?: string;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string;
    private _recordSetId?;
    get recordSetId(): string;
    set recordSetId(value: string);
    resetRecordSetId(): void;
    get recordSetIdInput(): string;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {
    /**
    * nlb_resource block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}
    */
    readonly nlbResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
    /**
    * r53_resource block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}
    */
    readonly r53Resource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource | undefined);
    private _nlbResource;
    get nlbResource(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference;
    putNlbResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource): void;
    resetNlbResource(): void;
    get nlbResourceInput(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource;
    private _r53Resource;
    get r53Resource(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference;
    putR53Resource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource): void;
    resetR53Resource(): void;
    get r53ResourceInput(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource;
}
export interface Route53RecoveryreadinessResourceSetResourcesDnsTargetResource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#domain_name Route53RecoveryreadinessResourceSet#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}
    */
    readonly hostedZoneArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}
    */
    readonly recordSetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#record_type Route53RecoveryreadinessResourceSet#record_type}
    */
    readonly recordType?: string;
    /**
    * target_resource block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#target_resource Route53RecoveryreadinessResourceSet#target_resource}
    */
    readonly targetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
}
export declare function route53RecoveryreadinessResourceSetResourcesDnsTargetResourceToTerraform(struct?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference | Route53RecoveryreadinessResourceSetResourcesDnsTargetResource): any;
export declare class Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    private _hostedZoneArn?;
    get hostedZoneArn(): string;
    set hostedZoneArn(value: string);
    resetHostedZoneArn(): void;
    get hostedZoneArnInput(): string;
    private _recordSetId?;
    get recordSetId(): string;
    set recordSetId(value: string);
    resetRecordSetId(): void;
    get recordSetIdInput(): string;
    private _recordType?;
    get recordType(): string;
    set recordType(value: string);
    resetRecordType(): void;
    get recordTypeInput(): string;
    private _targetResource;
    get targetResource(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference;
    putTargetResource(value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource): void;
    resetTargetResource(): void;
    get targetResourceInput(): Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource;
}
export interface Route53RecoveryreadinessResourceSetResources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}
    */
    readonly readinessScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}
    */
    readonly resourceArn?: string;
    /**
    * dns_target_resource block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}
    */
    readonly dnsTargetResource?: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource;
}
export declare function route53RecoveryreadinessResourceSetResourcesToTerraform(struct?: Route53RecoveryreadinessResourceSetResources): any;
export interface Route53RecoveryreadinessResourceSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html#delete Route53RecoveryreadinessResourceSet#delete}
    */
    readonly delete?: string;
}
export declare function route53RecoveryreadinessResourceSetTimeoutsToTerraform(struct?: Route53RecoveryreadinessResourceSetTimeoutsOutputReference | Route53RecoveryreadinessResourceSetTimeouts): any;
export declare class Route53RecoveryreadinessResourceSetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Route53RecoveryreadinessResourceSetTimeouts | undefined;
    set internalValue(value: Route53RecoveryreadinessResourceSetTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set}
*/
export declare class Route53RecoveryreadinessResourceSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set.html aws_route53recoveryreadiness_resource_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoveryreadinessResourceSetConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoveryreadinessResourceSetConfig);
    get arn(): string;
    get id(): string;
    private _resourceSetName?;
    get resourceSetName(): string;
    set resourceSetName(value: string);
    get resourceSetNameInput(): string;
    private _resourceSetType?;
    get resourceSetType(): string;
    set resourceSetType(value: string);
    get resourceSetTypeInput(): string;
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
    private _resources?;
    get resources(): Route53RecoveryreadinessResourceSetResources[];
    set resources(value: Route53RecoveryreadinessResourceSetResources[]);
    get resourcesInput(): Route53RecoveryreadinessResourceSetResources[];
    private _timeouts;
    get timeouts(): Route53RecoveryreadinessResourceSetTimeoutsOutputReference;
    putTimeouts(value: Route53RecoveryreadinessResourceSetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Route53RecoveryreadinessResourceSetTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53recoveryreadiness-resource-set.d.ts.map