import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html#arn DataAwsImagebuilderDistributionConfiguration#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html#tags DataAwsImagebuilderDistributionConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission extends cdktf.ComplexComputedList {
    get userGroups(): string[];
    get userIds(): string[];
}
export declare class DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration extends cdktf.ComplexComputedList {
    get amiTags(): any;
    get description(): string;
    get kmsKeyId(): string;
    get launchPermission(): any;
    get name(): string;
    get targetAccountIds(): string[];
}
export declare class DataAwsImagebuilderDistributionConfigurationDistribution extends cdktf.ComplexComputedList {
    get amiDistributionConfiguration(): any;
    get licenseConfigurationArns(): string[];
    get region(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
*/
export declare class DataAwsImagebuilderDistributionConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderDistributionConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderDistributionConfigurationConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get dateCreated(): string;
    get dateUpdated(): string;
    get description(): string;
    distribution(index: string): DataAwsImagebuilderDistributionConfigurationDistribution;
    get id(): string;
    get name(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-imagebuilder-distribution-configuration.d.ts.map