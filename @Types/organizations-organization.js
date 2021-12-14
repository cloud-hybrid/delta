// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class OrganizationsOrganizationAccounts extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // email - computed: true, optional: false, required: false
    get email() {
        return this.getStringAttribute('email');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export class OrganizationsOrganizationNonMasterAccounts extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // email - computed: true, optional: false, required: false
    get email() {
        return this.getStringAttribute('email');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export class OrganizationsOrganizationRootsPolicyTypes extends cdktf.ComplexComputedList {
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
}
export class OrganizationsOrganizationRoots extends cdktf.ComplexComputedList {
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // policy_types - computed: true, optional: false, required: false
    get policyTypes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('policy_types');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization}
*/
export class OrganizationsOrganization extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_organizations_organization";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization.html aws_organizations_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsOrganizationConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_organizations_organization',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._awsServiceAccessPrincipals = config.awsServiceAccessPrincipals;
        this._enabledPolicyTypes = config.enabledPolicyTypes;
        this._featureSet = config.featureSet;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // accounts - computed: true, optional: false, required: false
    accounts(index) {
        return new OrganizationsOrganizationAccounts(this, 'accounts', index);
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // aws_service_access_principals - computed: false, optional: true, required: false
    _awsServiceAccessPrincipals;
    get awsServiceAccessPrincipals() {
        return this.getListAttribute('aws_service_access_principals');
    }
    set awsServiceAccessPrincipals(value) {
        this._awsServiceAccessPrincipals = value;
    }
    resetAwsServiceAccessPrincipals() {
        this._awsServiceAccessPrincipals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsServiceAccessPrincipalsInput() {
        return this._awsServiceAccessPrincipals;
    }
    // enabled_policy_types - computed: false, optional: true, required: false
    _enabledPolicyTypes;
    get enabledPolicyTypes() {
        return this.getListAttribute('enabled_policy_types');
    }
    set enabledPolicyTypes(value) {
        this._enabledPolicyTypes = value;
    }
    resetEnabledPolicyTypes() {
        this._enabledPolicyTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledPolicyTypesInput() {
        return this._enabledPolicyTypes;
    }
    // feature_set - computed: false, optional: true, required: false
    _featureSet;
    get featureSet() {
        return this.getStringAttribute('feature_set');
    }
    set featureSet(value) {
        this._featureSet = value;
    }
    resetFeatureSet() {
        this._featureSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get featureSetInput() {
        return this._featureSet;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // master_account_arn - computed: true, optional: false, required: false
    get masterAccountArn() {
        return this.getStringAttribute('master_account_arn');
    }
    // master_account_email - computed: true, optional: false, required: false
    get masterAccountEmail() {
        return this.getStringAttribute('master_account_email');
    }
    // master_account_id - computed: true, optional: false, required: false
    get masterAccountId() {
        return this.getStringAttribute('master_account_id');
    }
    // non_master_accounts - computed: true, optional: false, required: false
    nonMasterAccounts(index) {
        return new OrganizationsOrganizationNonMasterAccounts(this, 'non_master_accounts', index);
    }
    // roots - computed: true, optional: false, required: false
    roots(index) {
        return new OrganizationsOrganizationRoots(this, 'roots', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            aws_service_access_principals: cdktf.listMapper(cdktf.stringToTerraform)(this._awsServiceAccessPrincipals),
            enabled_policy_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledPolicyTypes),
            feature_set: cdktf.stringToTerraform(this._featureSet),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9ucy1vcmdhbml6YXRpb24uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIm9yZ2FuaXphdGlvbnMtb3JnYW5pemF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW1CL0IsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFOUUseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHdEQUF3RDtJQUN4RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLDBDQUEyQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkYseURBQXlEO0lBQ3pELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwyREFBMkQ7SUFDM0QsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHdEQUF3RDtJQUN4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