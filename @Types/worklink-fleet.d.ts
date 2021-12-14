import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WorkLink
*/
export interface WorklinkFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#audit_stream_arn WorklinkFleet#audit_stream_arn}
    */
    readonly auditStreamArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#device_ca_certificate WorklinkFleet#device_ca_certificate}
    */
    readonly deviceCaCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#display_name WorklinkFleet#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#name WorklinkFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#optimize_for_end_user_location WorklinkFleet#optimize_for_end_user_location}
    */
    readonly optimizeForEndUserLocation?: boolean | cdktf.IResolvable;
    /**
    * identity_provider block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#identity_provider WorklinkFleet#identity_provider}
    */
    readonly identityProvider?: WorklinkFleetIdentityProvider;
    /**
    * network block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#network WorklinkFleet#network}
    */
    readonly network?: WorklinkFleetNetwork;
}
export interface WorklinkFleetIdentityProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#saml_metadata WorklinkFleet#saml_metadata}
    */
    readonly samlMetadata: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#type WorklinkFleet#type}
    */
    readonly type: string;
}
export declare function worklinkFleetIdentityProviderToTerraform(struct?: WorklinkFleetIdentityProviderOutputReference | WorklinkFleetIdentityProvider): any;
export declare class WorklinkFleetIdentityProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WorklinkFleetIdentityProvider | undefined;
    set internalValue(value: WorklinkFleetIdentityProvider | undefined);
    private _samlMetadata?;
    get samlMetadata(): string;
    set samlMetadata(value: string);
    get samlMetadataInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export interface WorklinkFleetNetwork {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#security_group_ids WorklinkFleet#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#subnet_ids WorklinkFleet#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html#vpc_id WorklinkFleet#vpc_id}
    */
    readonly vpcId: string;
}
export declare function worklinkFleetNetworkToTerraform(struct?: WorklinkFleetNetworkOutputReference | WorklinkFleetNetwork): any;
export declare class WorklinkFleetNetworkOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): WorklinkFleetNetwork | undefined;
    set internalValue(value: WorklinkFleetNetwork | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet}
*/
export declare class WorklinkFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html aws_worklink_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorklinkFleetConfig
    */
    constructor(scope: Construct, id: string, config: WorklinkFleetConfig);
    get arn(): string;
    private _auditStreamArn?;
    get auditStreamArn(): string;
    set auditStreamArn(value: string);
    resetAuditStreamArn(): void;
    get auditStreamArnInput(): string;
    get companyCode(): string;
    get createdTime(): string;
    private _deviceCaCertificate?;
    get deviceCaCertificate(): string;
    set deviceCaCertificate(value: string);
    resetDeviceCaCertificate(): void;
    get deviceCaCertificateInput(): string;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string;
    get id(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _optimizeForEndUserLocation?;
    get optimizeForEndUserLocation(): boolean | cdktf.IResolvable;
    set optimizeForEndUserLocation(value: boolean | cdktf.IResolvable);
    resetOptimizeForEndUserLocation(): void;
    get optimizeForEndUserLocationInput(): boolean | cdktf.IResolvable;
    private _identityProvider;
    get identityProvider(): WorklinkFleetIdentityProviderOutputReference;
    putIdentityProvider(value: WorklinkFleetIdentityProvider): void;
    resetIdentityProvider(): void;
    get identityProviderInput(): WorklinkFleetIdentityProvider;
    private _network;
    get network(): WorklinkFleetNetworkOutputReference;
    putNetwork(value: WorklinkFleetNetwork): void;
    resetNetwork(): void;
    get networkInput(): WorklinkFleetNetwork;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=worklink-fleet.d.ts.map