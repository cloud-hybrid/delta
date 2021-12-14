import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Macie 2
*/
export interface Macie2ClassificationJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}
    */
    readonly customDataIdentifierIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#description Macie2ClassificationJob#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#initial_run Macie2ClassificationJob#initial_run}
    */
    readonly initialRun?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_status Macie2ClassificationJob#job_status}
    */
    readonly jobStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_type Macie2ClassificationJob#job_type}
    */
    readonly jobType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name Macie2ClassificationJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name_prefix Macie2ClassificationJob#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#sampling_percentage Macie2ClassificationJob#sampling_percentage}
    */
    readonly samplingPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags Macie2ClassificationJob#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags_all Macie2ClassificationJob#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * s3_job_definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#s3_job_definition Macie2ClassificationJob#s3_job_definition}
    */
    readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition;
    /**
    * schedule_frequency block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#schedule_frequency Macie2ClassificationJob#schedule_frequency}
    */
    readonly scheduleFrequency?: Macie2ClassificationJobScheduleFrequency;
}
export declare class Macie2ClassificationJobUserPausedDetails extends cdktf.ComplexComputedList {
    get jobExpiresAt(): string;
    get jobImminentExpirationHealthEventArn(): string;
    get jobPausedAt(): string;
}
export interface Macie2ClassificationJobS3JobDefinitionBucketDefinitions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#account_id Macie2ClassificationJob#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#buckets Macie2ClassificationJob#buckets}
    */
    readonly buckets: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions): any;
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues): any;
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}
    */
    readonly target?: string;
    /**
    * tag_values block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string;
    private _tagValues?;
    get tagValues(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
    set tagValues(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[]);
    resetTagValues(): void;
    get tagValuesInput(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
    /**
    * simple_scope_term block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
    */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
    /**
    * tag_scope_term block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
    */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd): any;
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludes {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludes): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined);
    private _and?;
    get and(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
    set and(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[]);
    resetAnd(): void;
    get andInput(): Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues): any;
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}
    */
    readonly target?: string;
    /**
    * tag_values block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm | undefined);
    private _comparator?;
    get comparator(): string;
    set comparator(value: string);
    resetComparator(): void;
    get comparatorInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string;
    private _tagValues?;
    get tagValues(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
    set tagValues(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[]);
    resetTagValues(): void;
    get tagValuesInput(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
    /**
    * simple_scope_term block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
    */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
    /**
    * tag_scope_term block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
    */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd): any;
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludes {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
}
export declare function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludes): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined);
    private _and?;
    get and(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
    set and(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[]);
    resetAnd(): void;
    get andInput(): Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
}
export interface Macie2ClassificationJobS3JobDefinitionScoping {
    /**
    * excludes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#excludes Macie2ClassificationJob#excludes}
    */
    readonly excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
    /**
    * includes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#includes Macie2ClassificationJob#includes}
    */
    readonly includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
}
export declare function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingOutputReference | Macie2ClassificationJobS3JobDefinitionScoping): any;
export declare class Macie2ClassificationJobS3JobDefinitionScopingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinitionScoping | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinitionScoping | undefined);
    private _excludes;
    get excludes(): Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference;
    putExcludes(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes): void;
    resetExcludes(): void;
    get excludesInput(): Macie2ClassificationJobS3JobDefinitionScopingExcludes;
    private _includes;
    get includes(): Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference;
    putIncludes(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes): void;
    resetIncludes(): void;
    get includesInput(): Macie2ClassificationJobS3JobDefinitionScopingIncludes;
}
export interface Macie2ClassificationJobS3JobDefinition {
    /**
    * bucket_definitions block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#bucket_definitions Macie2ClassificationJob#bucket_definitions}
    */
    readonly bucketDefinitions?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
    /**
    * scoping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#scoping Macie2ClassificationJob#scoping}
    */
    readonly scoping?: Macie2ClassificationJobS3JobDefinitionScoping;
}
export declare function macie2ClassificationJobS3JobDefinitionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionOutputReference | Macie2ClassificationJobS3JobDefinition): any;
export declare class Macie2ClassificationJobS3JobDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobS3JobDefinition | undefined;
    set internalValue(value: Macie2ClassificationJobS3JobDefinition | undefined);
    private _bucketDefinitions?;
    get bucketDefinitions(): Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
    set bucketDefinitions(value: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[]);
    resetBucketDefinitions(): void;
    get bucketDefinitionsInput(): Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
    private _scoping;
    get scoping(): Macie2ClassificationJobS3JobDefinitionScopingOutputReference;
    putScoping(value: Macie2ClassificationJobS3JobDefinitionScoping): void;
    resetScoping(): void;
    get scopingInput(): Macie2ClassificationJobS3JobDefinitionScoping;
}
export interface Macie2ClassificationJobScheduleFrequency {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#daily_schedule Macie2ClassificationJob#daily_schedule}
    */
    readonly dailySchedule?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#monthly_schedule Macie2ClassificationJob#monthly_schedule}
    */
    readonly monthlySchedule?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#weekly_schedule Macie2ClassificationJob#weekly_schedule}
    */
    readonly weeklySchedule?: string;
}
export declare function macie2ClassificationJobScheduleFrequencyToTerraform(struct?: Macie2ClassificationJobScheduleFrequencyOutputReference | Macie2ClassificationJobScheduleFrequency): any;
export declare class Macie2ClassificationJobScheduleFrequencyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Macie2ClassificationJobScheduleFrequency | undefined;
    set internalValue(value: Macie2ClassificationJobScheduleFrequency | undefined);
    private _dailySchedule?;
    get dailySchedule(): boolean | cdktf.IResolvable;
    set dailySchedule(value: boolean | cdktf.IResolvable);
    resetDailySchedule(): void;
    get dailyScheduleInput(): boolean | cdktf.IResolvable;
    private _monthlySchedule?;
    get monthlySchedule(): number;
    set monthlySchedule(value: number);
    resetMonthlySchedule(): void;
    get monthlyScheduleInput(): number;
    private _weeklySchedule?;
    get weeklySchedule(): string;
    set weeklySchedule(value: string);
    resetWeeklySchedule(): void;
    get weeklyScheduleInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job}
*/
export declare class Macie2ClassificationJob extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2ClassificationJobConfig
    */
    constructor(scope: Construct, id: string, config: Macie2ClassificationJobConfig);
    get createdAt(): string;
    private _customDataIdentifierIds?;
    get customDataIdentifierIds(): string[];
    set customDataIdentifierIds(value: string[]);
    resetCustomDataIdentifierIds(): void;
    get customDataIdentifierIdsInput(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _initialRun?;
    get initialRun(): boolean | cdktf.IResolvable;
    set initialRun(value: boolean | cdktf.IResolvable);
    resetInitialRun(): void;
    get initialRunInput(): boolean | cdktf.IResolvable;
    get jobArn(): string;
    get jobId(): string;
    private _jobStatus?;
    get jobStatus(): string;
    set jobStatus(value: string);
    resetJobStatus(): void;
    get jobStatusInput(): string;
    private _jobType?;
    get jobType(): string;
    set jobType(value: string);
    get jobTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _samplingPercentage?;
    get samplingPercentage(): number;
    set samplingPercentage(value: number);
    resetSamplingPercentage(): void;
    get samplingPercentageInput(): number;
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
    userPausedDetails(index: string): Macie2ClassificationJobUserPausedDetails;
    private _s3JobDefinition;
    get s3JobDefinition(): Macie2ClassificationJobS3JobDefinitionOutputReference;
    putS3JobDefinition(value: Macie2ClassificationJobS3JobDefinition): void;
    get s3JobDefinitionInput(): Macie2ClassificationJobS3JobDefinition;
    private _scheduleFrequency;
    get scheduleFrequency(): Macie2ClassificationJobScheduleFrequencyOutputReference;
    putScheduleFrequency(value: Macie2ClassificationJobScheduleFrequency): void;
    resetScheduleFrequency(): void;
    get scheduleFrequencyInput(): Macie2ClassificationJobScheduleFrequency;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=macie2-classification-job.d.ts.map