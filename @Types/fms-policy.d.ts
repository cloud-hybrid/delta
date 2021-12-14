import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Firewall Management Service
*/
export interface FmsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}
    */
    readonly deleteAllPolicyResources?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#exclude_resource_tags FmsPolicy#exclude_resource_tags}
    */
    readonly excludeResourceTags: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#name FmsPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#remediation_enabled FmsPolicy#remediation_enabled}
    */
    readonly remediationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_tags FmsPolicy#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_type FmsPolicy#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#resource_type_list FmsPolicy#resource_type_list}
    */
    readonly resourceTypeList?: string[];
    /**
    * exclude_map block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#exclude_map FmsPolicy#exclude_map}
    */
    readonly excludeMap?: FmsPolicyExcludeMap;
    /**
    * include_map block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#include_map FmsPolicy#include_map}
    */
    readonly includeMap?: FmsPolicyIncludeMap;
    /**
    * security_service_policy_data block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#security_service_policy_data FmsPolicy#security_service_policy_data}
    */
    readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData;
}
export interface FmsPolicyExcludeMap {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#account FmsPolicy#account}
    */
    readonly account?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#orgunit FmsPolicy#orgunit}
    */
    readonly orgunit?: string[];
}
export declare function fmsPolicyExcludeMapToTerraform(struct?: FmsPolicyExcludeMapOutputReference | FmsPolicyExcludeMap): any;
export declare class FmsPolicyExcludeMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FmsPolicyExcludeMap | undefined;
    set internalValue(value: FmsPolicyExcludeMap | undefined);
    private _account?;
    get account(): string[];
    set account(value: string[]);
    resetAccount(): void;
    get accountInput(): string[];
    private _orgunit?;
    get orgunit(): string[];
    set orgunit(value: string[]);
    resetOrgunit(): void;
    get orgunitInput(): string[];
}
export interface FmsPolicyIncludeMap {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#account FmsPolicy#account}
    */
    readonly account?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#orgunit FmsPolicy#orgunit}
    */
    readonly orgunit?: string[];
}
export declare function fmsPolicyIncludeMapToTerraform(struct?: FmsPolicyIncludeMapOutputReference | FmsPolicyIncludeMap): any;
export declare class FmsPolicyIncludeMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FmsPolicyIncludeMap | undefined;
    set internalValue(value: FmsPolicyIncludeMap | undefined);
    private _account?;
    get account(): string[];
    set account(value: string[]);
    resetAccount(): void;
    get accountInput(): string[];
    private _orgunit?;
    get orgunit(): string[];
    set orgunit(value: string[]);
    resetOrgunit(): void;
    get orgunitInput(): string[];
}
export interface FmsPolicySecurityServicePolicyData {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#managed_service_data FmsPolicy#managed_service_data}
    */
    readonly managedServiceData?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html#type FmsPolicy#type}
    */
    readonly type: string;
}
export declare function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyDataOutputReference | FmsPolicySecurityServicePolicyData): any;
export declare class FmsPolicySecurityServicePolicyDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FmsPolicySecurityServicePolicyData | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyData | undefined);
    private _managedServiceData?;
    get managedServiceData(): string;
    set managedServiceData(value: string);
    resetManagedServiceData(): void;
    get managedServiceDataInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy}
*/
export declare class FmsPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fms_policy.html aws_fms_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsPolicyConfig
    */
    constructor(scope: Construct, id: string, config: FmsPolicyConfig);
    get arn(): string;
    private _deleteAllPolicyResources?;
    get deleteAllPolicyResources(): boolean | cdktf.IResolvable;
    set deleteAllPolicyResources(value: boolean | cdktf.IResolvable);
    resetDeleteAllPolicyResources(): void;
    get deleteAllPolicyResourcesInput(): boolean | cdktf.IResolvable;
    private _excludeResourceTags?;
    get excludeResourceTags(): boolean | cdktf.IResolvable;
    set excludeResourceTags(value: boolean | cdktf.IResolvable);
    get excludeResourceTagsInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get policyUpdateToken(): string;
    private _remediationEnabled?;
    get remediationEnabled(): boolean | cdktf.IResolvable;
    set remediationEnabled(value: boolean | cdktf.IResolvable);
    resetRemediationEnabled(): void;
    get remediationEnabledInput(): boolean | cdktf.IResolvable;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set resourceTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetResourceTags(): void;
    get resourceTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string;
    private _resourceTypeList?;
    get resourceTypeList(): string[];
    set resourceTypeList(value: string[]);
    resetResourceTypeList(): void;
    get resourceTypeListInput(): string[];
    private _excludeMap;
    get excludeMap(): FmsPolicyExcludeMapOutputReference;
    putExcludeMap(value: FmsPolicyExcludeMap): void;
    resetExcludeMap(): void;
    get excludeMapInput(): FmsPolicyExcludeMap;
    private _includeMap;
    get includeMap(): FmsPolicyIncludeMapOutputReference;
    putIncludeMap(value: FmsPolicyIncludeMap): void;
    resetIncludeMap(): void;
    get includeMapInput(): FmsPolicyIncludeMap;
    private _securityServicePolicyData;
    get securityServicePolicyData(): FmsPolicySecurityServicePolicyDataOutputReference;
    putSecurityServicePolicyData(value: FmsPolicySecurityServicePolicyData): void;
    get securityServicePolicyDataInput(): FmsPolicySecurityServicePolicyData;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=fms-policy.d.ts.map