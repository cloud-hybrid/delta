// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization}
*/
export class CognitoUserPoolUiCustomization extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_cognito_user_pool_ui_customization";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolUiCustomizationConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_cognito_user_pool_ui_customization',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._clientId = config.clientId;
        this._css = config.css;
        this._imageFile = config.imageFile;
        this._userPoolId = config.userPoolId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // client_id - computed: false, optional: true, required: false
    _clientId;
    get clientId() {
        return this.getStringAttribute('client_id');
    }
    set clientId(value) {
        this._clientId = value;
    }
    resetClientId() {
        this._clientId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientIdInput() {
        return this._clientId;
    }
    // creation_date - computed: true, optional: false, required: false
    get creationDate() {
        return this.getStringAttribute('creation_date');
    }
    // css - computed: false, optional: true, required: false
    _css;
    get css() {
        return this.getStringAttribute('css');
    }
    set css(value) {
        this._css = value;
    }
    resetCss() {
        this._css = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cssInput() {
        return this._css;
    }
    // css_version - computed: true, optional: false, required: false
    get cssVersion() {
        return this.getStringAttribute('css_version');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // image_file - computed: false, optional: true, required: false
    _imageFile;
    get imageFile() {
        return this.getStringAttribute('image_file');
    }
    set imageFile(value) {
        this._imageFile = value;
    }
    resetImageFile() {
        this._imageFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get imageFileInput() {
        return this._imageFile;
    }
    // image_url - computed: true, optional: false, required: false
    get imageUrl() {
        return this.getStringAttribute('image_url');
    }
    // last_modified_date - computed: true, optional: false, required: false
    get lastModifiedDate() {
        return this.getStringAttribute('last_modified_date');
    }
    // user_pool_id - computed: false, optional: false, required: true
    _userPoolId;
    get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    set userPoolId(value) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    get userPoolIdInput() {
        return this._userPoolId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            client_id: cdktf.stringToTerraform(this._clientId),
            css: cdktf.stringToTerraform(this._css),
            image_file: cdktf.stringToTerraform(this._imageFile),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0by11c2VyLXBvb2wtdWktY3VzdG9taXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiY29nbml0by11c2VyLXBvb2wtdWktY3VzdG9taXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUF3Qi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLDhCQUErQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFekUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHdDQUF3QyxDQUFDO0lBRXpGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTRDO1FBQzNGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsd0NBQXdDO1lBQy9ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLCtEQUErRDtJ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