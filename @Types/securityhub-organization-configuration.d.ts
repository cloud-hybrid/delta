import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Security Hub
*/
export interface SecurityhubOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html#auto_enable SecurityhubOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html aws_securityhub_organization_configuration}
*/
export declare class SecurityhubOrganizationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html aws_securityhub_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubOrganizationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubOrganizationConfigurationConfig);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=securityhub-organization-configuration.d.ts.map