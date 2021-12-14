import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Systems Manager
*/
export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
    */
    readonly applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#association_name SsmAssociation#association_name}
    */
    readonly associationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
    */
    readonly automationTargetParameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#compliance_severity SsmAssociation#compliance_severity}
    */
    readonly complianceSeverity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#document_version SsmAssociation#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#instance_id SsmAssociation#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_concurrency SsmAssociation#max_concurrency}
    */
    readonly maxConcurrency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_errors SsmAssociation#max_errors}
    */
    readonly maxErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#name SsmAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#parameters SsmAssociation#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#schedule_expression SsmAssociation#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * output_location block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#output_location SsmAssociation#output_location}
    */
    readonly outputLocation?: SsmAssociationOutputLocation;
    /**
    * targets block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#targets SsmAssociation#targets}
    */
    readonly targets?: SsmAssociationTargets[];
}
export interface SsmAssociationOutputLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_bucket_name SsmAssociation#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_key_prefix SsmAssociation#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_region SsmAssociation#s3_region}
    */
    readonly s3Region?: string;
}
export declare function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocationOutputReference | SsmAssociationOutputLocation): any;
export declare class SsmAssociationOutputLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SsmAssociationOutputLocation | undefined;
    set internalValue(value: SsmAssociationOutputLocation | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string;
    private _s3Region?;
    get s3Region(): string;
    set s3Region(value: string);
    resetS3Region(): void;
    get s3RegionInput(): string;
}
export interface SsmAssociationTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#key SsmAssociation#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#values SsmAssociation#values}
    */
    readonly values: string[];
}
export declare function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association}
*/
export declare class SsmAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmAssociationConfig
    */
    constructor(scope: Construct, id: string, config: SsmAssociationConfig);
    private _applyOnlyAtCronInterval?;
    get applyOnlyAtCronInterval(): boolean | cdktf.IResolvable;
    set applyOnlyAtCronInterval(value: boolean | cdktf.IResolvable);
    resetApplyOnlyAtCronInterval(): void;
    get applyOnlyAtCronIntervalInput(): boolean | cdktf.IResolvable;
    get associationId(): string;
    private _associationName?;
    get associationName(): string;
    set associationName(value: string);
    resetAssociationName(): void;
    get associationNameInput(): string;
    private _automationTargetParameterName?;
    get automationTargetParameterName(): string;
    set automationTargetParameterName(value: string);
    resetAutomationTargetParameterName(): void;
    get automationTargetParameterNameInput(): string;
    private _complianceSeverity?;
    get complianceSeverity(): string;
    set complianceSeverity(value: string);
    resetComplianceSeverity(): void;
    get complianceSeverityInput(): string;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string;
    private _maxConcurrency?;
    get maxConcurrency(): string;
    set maxConcurrency(value: string);
    resetMaxConcurrency(): void;
    get maxConcurrencyInput(): string;
    private _maxErrors?;
    get maxErrors(): string;
    set maxErrors(value: string);
    resetMaxErrors(): void;
    get maxErrorsInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set parameters(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    resetScheduleExpression(): void;
    get scheduleExpressionInput(): string;
    private _outputLocation;
    get outputLocation(): SsmAssociationOutputLocationOutputReference;
    putOutputLocation(value: SsmAssociationOutputLocation): void;
    resetOutputLocation(): void;
    get outputLocationInput(): SsmAssociationOutputLocation;
    private _targets?;
    get targets(): SsmAssociationTargets[];
    set targets(value: SsmAssociationTargets[]);
    resetTargets(): void;
    get targetsInput(): SsmAssociationTargets[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ssm-association.d.ts.map