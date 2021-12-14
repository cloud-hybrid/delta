// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class ApprunnerCustomDomainAssociationCertificateValidationRecords extends cdktf.ComplexComputedList {
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // type - computed: true, optional: false, required: false
    get type() {
        return this.getStringAttribute('type');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getStringAttribute('value');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association}
*/
export class ApprunnerCustomDomainAssociation extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_apprunner_custom_domain_association";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerCustomDomainAssociationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_apprunner_custom_domain_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._domainName = config.domainName;
        this._enableWwwSubdomain = config.enableWwwSubdomain;
        this._serviceArn = config.serviceArn;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // certificate_validation_records - computed: true, optional: false, required: false
    certificateValidationRecords(index) {
        return new ApprunnerCustomDomainAssociationCertificateValidationRecords(this, 'certificate_validation_records', index);
    }
    // dns_target - computed: true, optional: false, required: false
    get dnsTarget() {
        return this.getStringAttribute('dns_target');
    }
    // domain_name - computed: false, optional: false, required: true
    _domainName;
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    // enable_www_subdomain - computed: false, optional: true, required: false
    _enableWwwSubdomain;
    get enableWwwSubdomain() {
        return this.getBooleanAttribute('enable_www_subdomain');
    }
    set enableWwwSubdomain(value) {
        this._enableWwwSubdomain = value;
    }
    resetEnableWwwSubdomain() {
        this._enableWwwSubdomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableWwwSubdomainInput() {
        return this._enableWwwSubdomain;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // service_arn - computed: false, optional: false, required: true
    _serviceArn;
    get serviceArn() {
        return this.getStringAttribute('service_arn');
    }
    set serviceArn(value) {
        this._serviceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get serviceArnInput() {
        return this._serviceArn;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            enable_www_subdomain: cdktf.booleanToTerraform(this._enableWwwSubdomain),
            service_arn: cdktf.stringToTerraform(this._serviceArn),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwcnVubmVyLWN1c3RvbS1kb21haW4tYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImFwcHJ1bm5lci1jdXN0b20tZG9tYWluLWFzc29jaWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW1CL0IsTUFBTSxPQUFPLDREQUE2RCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFekcsMERBQTBEO0lBQzFELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRjtBQUVEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFM0Usb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHlDQUF5QyxDQUFDO0lBRTFGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQThDO1FBQzdGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUseUNBQXlDO1lBQ2hFLDBCQUEwQixFQUFFO2dCQUMxQixZ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