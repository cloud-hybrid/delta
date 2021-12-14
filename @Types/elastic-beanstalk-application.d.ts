import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Beanstalk
*/
export interface ElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#description ElasticBeanstalkApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#name ElasticBeanstalkApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags ElasticBeanstalkApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags_all ElasticBeanstalkApplication#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * appversion_lifecycle block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}
    */
    readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle;
}
export interface ElasticBeanstalkApplicationAppversionLifecycle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}
    */
    readonly deleteSourceFromS3?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}
    */
    readonly maxAgeInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_count ElasticBeanstalkApplication#max_count}
    */
    readonly maxCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#service_role ElasticBeanstalkApplication#service_role}
    */
    readonly serviceRole: string;
}
export declare function elasticBeanstalkApplicationAppversionLifecycleToTerraform(struct?: ElasticBeanstalkApplicationAppversionLifecycleOutputReference | ElasticBeanstalkApplicationAppversionLifecycle): any;
export declare class ElasticBeanstalkApplicationAppversionLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticBeanstalkApplicationAppversionLifecycle | undefined;
    set internalValue(value: ElasticBeanstalkApplicationAppversionLifecycle | undefined);
    private _deleteSourceFromS3?;
    get deleteSourceFromS3(): boolean | cdktf.IResolvable;
    set deleteSourceFromS3(value: boolean | cdktf.IResolvable);
    resetDeleteSourceFromS3(): void;
    get deleteSourceFromS3Input(): boolean | cdktf.IResolvable;
    private _maxAgeInDays?;
    get maxAgeInDays(): number;
    set maxAgeInDays(value: number);
    resetMaxAgeInDays(): void;
    get maxAgeInDaysInput(): number;
    private _maxCount?;
    get maxCount(): number;
    set maxCount(value: number);
    resetMaxCount(): void;
    get maxCountInput(): number;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application}
*/
export declare class ElasticBeanstalkApplication extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkApplicationConfig
    */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _appversionLifecycle;
    get appversionLifecycle(): ElasticBeanstalkApplicationAppversionLifecycleOutputReference;
    putAppversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle): void;
    resetAppversionLifecycle(): void;
    get appversionLifecycleInput(): ElasticBeanstalkApplicationAppversionLifecycle;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elastic-beanstalk-application.d.ts.map