import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Registry
*/
export interface EcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * replication_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#replication_configuration EcrReplicationConfiguration#replication_configuration}
    */
    readonly replicationConfiguration?: EcrReplicationConfigurationReplicationConfiguration;
}
export interface EcrReplicationConfigurationReplicationConfigurationRuleDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#region EcrReplicationConfiguration#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#registry_id EcrReplicationConfiguration#registry_id}
    */
    readonly registryId: string;
}
export declare function ecrReplicationConfigurationReplicationConfigurationRuleDestinationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleDestination): any;
export interface EcrReplicationConfigurationReplicationConfigurationRule {
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#destination EcrReplicationConfiguration#destination}
    */
    readonly destination: EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
}
export declare function ecrReplicationConfigurationReplicationConfigurationRuleToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRuleOutputReference | EcrReplicationConfigurationReplicationConfigurationRule): any;
export declare class EcrReplicationConfigurationReplicationConfigurationRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcrReplicationConfigurationReplicationConfigurationRule | undefined;
    set internalValue(value: EcrReplicationConfigurationReplicationConfigurationRule | undefined);
    private _destination?;
    get destination(): EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
    set destination(value: EcrReplicationConfigurationReplicationConfigurationRuleDestination[]);
    get destinationInput(): EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
}
export interface EcrReplicationConfigurationReplicationConfiguration {
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html#rule EcrReplicationConfiguration#rule}
    */
    readonly rule: EcrReplicationConfigurationReplicationConfigurationRule;
}
export declare function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationOutputReference | EcrReplicationConfigurationReplicationConfiguration): any;
export declare class EcrReplicationConfigurationReplicationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcrReplicationConfigurationReplicationConfiguration | undefined;
    set internalValue(value: EcrReplicationConfigurationReplicationConfiguration | undefined);
    private _rule;
    get rule(): EcrReplicationConfigurationReplicationConfigurationRuleOutputReference;
    putRule(value: EcrReplicationConfigurationReplicationConfigurationRule): void;
    get ruleInput(): EcrReplicationConfigurationReplicationConfigurationRule;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration}
*/
export declare class EcrReplicationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration.html aws_ecr_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrReplicationConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EcrReplicationConfigurationConfig);
    get id(): string;
    get registryId(): string;
    private _replicationConfiguration;
    get replicationConfiguration(): EcrReplicationConfigurationReplicationConfigurationOutputReference;
    putReplicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration): void;
    resetReplicationConfiguration(): void;
    get replicationConfigurationInput(): EcrReplicationConfigurationReplicationConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecr-replication-configuration.d.ts.map