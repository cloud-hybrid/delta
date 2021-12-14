import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DefaultSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#egress DefaultSecurityGroup#egress}
    */
    readonly egress?: DefaultSecurityGroupEgress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ingress DefaultSecurityGroup#ingress}
    */
    readonly ingress?: DefaultSecurityGroupIngress[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}
    */
    readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags DefaultSecurityGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#tags_all DefaultSecurityGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#vpc_id DefaultSecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
}
export interface DefaultSecurityGroupEgress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function defaultSecurityGroupEgressToTerraform(struct?: DefaultSecurityGroupEgress): any;
export interface DefaultSecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#cidr_blocks DefaultSecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#description DefaultSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#from_port DefaultSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#protocol DefaultSecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#security_groups DefaultSecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#self DefaultSecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html#to_port DefaultSecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function defaultSecurityGroupIngressToTerraform(struct?: DefaultSecurityGroupIngress): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group}
*/
export declare class DefaultSecurityGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_security_group.html aws_default_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSecurityGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DefaultSecurityGroupConfig);
    get arn(): string;
    get description(): string;
    private _egress?;
    get egress(): DefaultSecurityGroupEgress[];
    set egress(value: DefaultSecurityGroupEgress[]);
    resetEgress(): void;
    get egressInput(): DefaultSecurityGroupEgress[];
    get id(): string;
    private _ingress?;
    get ingress(): DefaultSecurityGroupIngress[];
    set ingress(value: DefaultSecurityGroupIngress[]);
    resetIngress(): void;
    get ingressInput(): DefaultSecurityGroupIngress[];
    get name(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=default-security-group.d.ts.map