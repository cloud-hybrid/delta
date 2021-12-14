import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#catalog_id GlueConnection#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#connection_properties GlueConnection#connection_properties}
    */
    readonly connectionProperties?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#connection_type GlueConnection#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#description GlueConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#match_criteria GlueConnection#match_criteria}
    */
    readonly matchCriteria?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#name GlueConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#tags GlueConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#tags_all GlueConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * physical_connection_requirements block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#physical_connection_requirements GlueConnection#physical_connection_requirements}
    */
    readonly physicalConnectionRequirements?: GlueConnectionPhysicalConnectionRequirements;
}
export interface GlueConnectionPhysicalConnectionRequirements {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#availability_zone GlueConnection#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#security_group_id_list GlueConnection#security_group_id_list}
    */
    readonly securityGroupIdList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html#subnet_id GlueConnection#subnet_id}
    */
    readonly subnetId?: string;
}
export declare function glueConnectionPhysicalConnectionRequirementsToTerraform(struct?: GlueConnectionPhysicalConnectionRequirementsOutputReference | GlueConnectionPhysicalConnectionRequirements): any;
export declare class GlueConnectionPhysicalConnectionRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueConnectionPhysicalConnectionRequirements | undefined;
    set internalValue(value: GlueConnectionPhysicalConnectionRequirements | undefined);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string;
    private _securityGroupIdList?;
    get securityGroupIdList(): string[];
    set securityGroupIdList(value: string[]);
    resetSecurityGroupIdList(): void;
    get securityGroupIdListInput(): string[];
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection}
*/
export declare class GlueConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_connection.html aws_glue_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueConnectionConfig
    */
    constructor(scope: Construct, id: string, config: GlueConnectionConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string;
    private _connectionProperties?;
    get connectionProperties(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set connectionProperties(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetConnectionProperties(): void;
    get connectionPropertiesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _connectionType?;
    get connectionType(): string;
    set connectionType(value: string);
    resetConnectionType(): void;
    get connectionTypeInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _matchCriteria?;
    get matchCriteria(): string[];
    set matchCriteria(value: string[]);
    resetMatchCriteria(): void;
    get matchCriteriaInput(): string[];
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
    private _physicalConnectionRequirements;
    get physicalConnectionRequirements(): GlueConnectionPhysicalConnectionRequirementsOutputReference;
    putPhysicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements): void;
    resetPhysicalConnectionRequirements(): void;
    get physicalConnectionRequirementsInput(): GlueConnectionPhysicalConnectionRequirements;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-connection.d.ts.map