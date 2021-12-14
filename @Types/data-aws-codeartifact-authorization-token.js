// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token}
*/
export class DataAwsCodeartifactAuthorizationToken extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_codeartifact_authorization_token";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodeartifactAuthorizationTokenConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_codeartifact_authorization_token',
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
        this._durationSeconds = config.durationSeconds;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // authorization_token - computed: true, optional: false, required: false
    get authorizationToken() {
        return this.getStringAttribute('authorization_token');
    }
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
    // duration_seconds - computed: false, optional: true, required: false
    _durationSeconds;
    get durationSeconds() {
        return this.getNumberAttribute('duration_seconds');
    }
    set durationSeconds(value) {
        this._durationSeconds = value;
    }
    resetDurationSeconds() {
        this._durationSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get durationSecondsInput() {
        return this._durationSeconds;
    }
    // expiration - computed: true, optional: false, required: false
    get expiration() {
        return this.getStringAttribute('expiration');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            domain_owner: cdktf.stringToTerraform(this._domainOwner),
            duration_seconds: cdktf.numberToTerraform(this._durationSeconds),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtY29kZWFydGlmYWN0LWF1dGhvcml6YXRpb24tdG9rZW4uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWNvZGVhcnRpZmFjdC1hdXRob3JpemF0aW9uLXRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW9CL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8scUNBQXNDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVsRixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsc0NBQXNDLENBQUM7SUFFdkYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBbUQ7UUFDbEcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxzQ0FBc0M7WUFDN0QsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDakQsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLHlFQUF5RTtJQUN6RSxJQUFXLGtCQUFrQjtRQUMzQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCw0REFBNEQ7SUFDcEQsT0FBTyxDQUFVO0lBQ3pCLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxJQUFXLE1BQU0sQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsaUVBQWlFO0lBQ3pELFlBQVksQ0FBVTtJQUM5QixJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQVcsV0FBVyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsc0VBQXNFO0lBQzlELGdCQUFnQixDQUFVO0lBQ2xDLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFXLGVBQWUsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNNLG9CQUFvQjtRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxvQkFBb0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHVEQUF1RDtJQUN2RCxJQUFXLEVBQUU7UUFDWCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3hELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDakUsQ0FBQztJQUNKLENBQUMifQ==