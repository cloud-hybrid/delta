import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GuardDuty
*/
export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#detector_id GuarddutyOrganizationConfiguration#detector_id}
    */
    readonly detectorId: string;
    /**
    * datasources block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#datasources GuarddutyOrganizationConfiguration#datasources}
    */
    readonly datasources?: GuarddutyOrganizationConfigurationDatasources;
}
export interface GuarddutyOrganizationConfigurationDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
}
export declare function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable;
}
export interface GuarddutyOrganizationConfigurationDatasources {
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#s3_logs GuarddutyOrganizationConfiguration#s3_logs}
    */
    readonly s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
}
export declare function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GuarddutyOrganizationConfigurationDatasources | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasources | undefined);
    private _s3Logs;
    get s3Logs(): GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference;
    putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): GuarddutyOrganizationConfigurationDatasourcesS3Logs;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration}
*/
export declare class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyOrganizationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string;
    get id(): string;
    private _datasources;
    get datasources(): GuarddutyOrganizationConfigurationDatasourcesOutputReference;
    putDatasources(value: GuarddutyOrganizationConfigurationDatasources): void;
    resetDatasources(): void;
    get datasourcesInput(): GuarddutyOrganizationConfigurationDatasources;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=guardduty-organization-configuration.d.ts.map