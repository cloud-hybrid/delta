import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface NetworkAclRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#cidr_block NetworkAclRule#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#egress NetworkAclRule#egress}
    */
    readonly egress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#from_port NetworkAclRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#icmp_code NetworkAclRule#icmp_code}
    */
    readonly icmpCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#icmp_type NetworkAclRule#icmp_type}
    */
    readonly icmpType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#network_acl_id NetworkAclRule#network_acl_id}
    */
    readonly networkAclId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#protocol NetworkAclRule#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#rule_action NetworkAclRule#rule_action}
    */
    readonly ruleAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#rule_number NetworkAclRule#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html#to_port NetworkAclRule#to_port}
    */
    readonly toPort?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule}
*/
export declare class NetworkAclRule extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html aws_network_acl_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkAclRuleConfig
    */
    constructor(scope: Construct, id: string, config: NetworkAclRuleConfig);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string;
    private _egress?;
    get egress(): boolean | cdktf.IResolvable;
    set egress(value: boolean | cdktf.IResolvable);
    resetEgress(): void;
    get egressInput(): boolean | cdktf.IResolvable;
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    resetFromPort(): void;
    get fromPortInput(): number;
    private _icmpCode?;
    get icmpCode(): string;
    set icmpCode(value: string);
    resetIcmpCode(): void;
    get icmpCodeInput(): string;
    private _icmpType?;
    get icmpType(): string;
    set icmpType(value: string);
    resetIcmpType(): void;
    get icmpTypeInput(): string;
    get id(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string;
    private _networkAclId?;
    get networkAclId(): string;
    set networkAclId(value: string);
    get networkAclIdInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _ruleAction?;
    get ruleAction(): string;
    set ruleAction(value: string);
    get ruleActionInput(): string;
    private _ruleNumber?;
    get ruleNumber(): number;
    set ruleNumber(value: number);
    get ruleNumberInput(): number;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=network-acl-rule.d.ts.map