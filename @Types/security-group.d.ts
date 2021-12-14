import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface SecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#egress SecurityGroup#egress}
    */
    readonly egress?: SecurityGroupEgress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ingress SecurityGroup#ingress}
    */
    readonly ingress?: SecurityGroupIngress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name SecurityGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#name_prefix SecurityGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}
    */
    readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags SecurityGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#tags_all SecurityGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#vpc_id SecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#timeouts SecurityGroup#timeouts}
    */
    readonly timeouts?: SecurityGroupTimeouts;
}
export interface SecurityGroupEgress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function securityGroupEgressToTerraform(struct?: SecurityGroupEgress): any;
export interface SecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#cidr_blocks SecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#description SecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#from_port SecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#prefix_list_ids SecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#protocol SecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#security_groups SecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#self SecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#to_port SecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function securityGroupIngressToTerraform(struct?: SecurityGroupIngress): any;
export interface SecurityGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#create SecurityGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group.html#delete SecurityGroup#delete}
    */
    readonly delete?: string;
}
export declare function securityGroupTimeoutsToTerraform(struct?: SecurityGroupTimeoutsOutputReference | SecurityGroupTimeouts): any;
export declare class SecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityGroupTimeouts | undefined;
    set internalValue(value: SecurityGroupTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group}
*/
export declare class SecurityGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/security_group.html aws_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SecurityGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _egress?;
    get egress(): SecurityGroupEgress[];
    set egress(value: SecurityGroupEgress[]);
    resetEgress(): void;
    get egressInput(): SecurityGroupEgress[];
    get id(): string;
    private _ingress?;
    get ingress(): SecurityGroupIngress[];
    set ingress(value: SecurityGroupIngress[]);
    resetIngress(): void;
    get ingressInput(): SecurityGroupIngress[];
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
    get ownerId(): string;
    private _revokeRulesOnDelete?;
    get revokeRulesOnDelete(): boolean | cdktf.IResolvable;
    set revokeRulesOnDelete(value: boolean | cdktf.IResolvable);
    resetRevokeRulesOnDelete(): void;
    get revokeRulesOnDeleteInput(): boolean | cdktf.IResolvable;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _timeouts;
    get timeouts(): SecurityGroupTimeoutsOutputReference;
    putTimeouts(value: SecurityGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): SecurityGroupTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=security-group.d.ts.map