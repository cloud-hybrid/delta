// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html aws_codeartifact_domain_permissions_policy}
*/
export class CodeartifactDomainPermissionsPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_codeartifact_domain_permissions_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy.html aws_codeartifact_domain_permissions_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactDomainPermissionsPolicyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codeartifact_domain_permissions_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._domain = config.domain;
        this._domainOwner = config.domainOwner;
        this._policyDocument = config.policyDocument;
        this._policyRevision = config.policyRevision;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // domain - computed: false, optional: false, required: true
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
    // domain_owner - computed: true, optional: true, required: false
    _domainOwner;
    get domainOwner() {
        return this.getStringAttribute('domain_owner');
    }
    set domainOwner(value) {
        this._domainOwner = value;
    }
    resetDomainOwner() {
        this._domainOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainOwnerInput() {
        return this._domainOwner;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // policy_document - computed: false, optional: false, required: true
    _policyDocument;
    get policyDocument() {
        return this.getStringAttribute('policy_document');
    }
    set policyDocument(value) {
        this._policyDocument = value;
    }
    // Temporarily expose input value. Use with caution.
    get policyDocumentInput() {
        return this._policyDocument;
    }
    // policy_revision - computed: true, optional: true, required: false
    _policyRevision;
    get policyRevision() {
        return this.getStringAttribute('policy_revision');
    }
    set policyRevision(value) {
        this._policyRevision = value;
    }
    resetPolicyRevision() {
        this._policyRevision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyRevisionInput() {
        return this._policyRevision;
    }
    // resource_arn - computed: true, optional: false, required: false
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            domain_owner: cdktf.stringToTerraform(this._domainOwner),
            policy_document: cdktf.stringToTerraform(this._policyDocument),
            policy_revision: cdktf.stringToTerraform(this._policyRevision),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWFydGlmYWN0LWRvbWFpbi1wZXJtaXNzaW9ucy1wb2xpY3kuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImNvZGVhcnRpZmFjdC1kb21haW4tcGVybWlzc2lvbnMtcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXdCL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sbUNBQW9DLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUU5RSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsNENBQTRDLENBQUM7SUFFN0YsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBaUQ7UUFDaEcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSw0Q0FBNEM7WUFDbkUsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBRWIs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