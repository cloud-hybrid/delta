// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy}
*/
export class IamAccountPasswordPolicy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_iam_account_password_policy";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamAccountPasswordPolicyConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_iam_account_password_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowUsersToChangePassword = config.allowUsersToChangePassword;
        this._hardExpiry = config.hardExpiry;
        this._maxPasswordAge = config.maxPasswordAge;
        this._minimumPasswordLength = config.minimumPasswordLength;
        this._passwordReusePrevention = config.passwordReusePrevention;
        this._requireLowercaseCharacters = config.requireLowercaseCharacters;
        this._requireNumbers = config.requireNumbers;
        this._requireSymbols = config.requireSymbols;
        this._requireUppercaseCharacters = config.requireUppercaseCharacters;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allow_users_to_change_password - computed: false, optional: true, required: false
    _allowUsersToChangePassword;
    get allowUsersToChangePassword() {
        return this.getBooleanAttribute('allow_users_to_change_password');
    }
    set allowUsersToChangePassword(value) {
        this._allowUsersToChangePassword = value;
    }
    resetAllowUsersToChangePassword() {
        this._allowUsersToChangePassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowUsersToChangePasswordInput() {
        return this._allowUsersToChangePassword;
    }
    // expire_passwords - computed: true, optional: false, required: false
    get expirePasswords() {
        return this.getBooleanAttribute('expire_passwords');
    }
    // hard_expiry - computed: true, optional: true, required: false
    _hardExpiry;
    get hardExpiry() {
        return this.getBooleanAttribute('hard_expiry');
    }
    set hardExpiry(value) {
        this._hardExpiry = value;
    }
    resetHardExpiry() {
        this._hardExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hardExpiryInput() {
        return this._hardExpiry;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // max_password_age - computed: true, optional: true, required: false
    _maxPasswordAge;
    get maxPasswordAge() {
        return this.getNumberAttribute('max_password_age');
    }
    set maxPasswordAge(value) {
        this._maxPasswordAge = value;
    }
    resetMaxPasswordAge() {
        this._maxPasswordAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPasswordAgeInput() {
        return this._maxPasswordAge;
    }
    // minimum_password_length - computed: false, optional: true, required: false
    _minimumPasswordLength;
    get minimumPasswordLength() {
        return this.getNumberAttribute('minimum_password_length');
    }
    set minimumPasswordLength(value) {
        this._minimumPasswordLength = value;
    }
    resetMinimumPasswordLength() {
        this._minimumPasswordLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumPasswordLengthInput() {
        return this._minimumPasswordLength;
    }
    // password_reuse_prevention - computed: true, optional: true, required: false
    _passwordReusePrevention;
    get passwordReusePrevention() {
        return this.getNumberAttribute('password_reuse_prevention');
    }
    set passwordReusePrevention(value) {
        this._passwordReusePrevention = value;
    }
    resetPasswordReusePrevention() {
        this._passwordReusePrevention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordReusePreventionInput() {
        return this._passwordReusePrevention;
    }
    // require_lowercase_characters - computed: true, optional: true, required: false
    _requireLowercaseCharacters;
    get requireLowercaseCharacters() {
        return this.getBooleanAttribute('require_lowercase_characters');
    }
    set requireLowercaseCharacters(value) {
        this._requireLowercaseCharacters = value;
    }
    resetRequireLowercaseCharacters() {
        this._requireLowercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireLowercaseCharactersInput() {
        return this._requireLowercaseCharacters;
    }
    // require_numbers - computed: true, optional: true, required: false
    _requireNumbers;
    get requireNumbers() {
        return this.getBooleanAttribute('require_numbers');
    }
    set requireNumbers(value) {
        this._requireNumbers = value;
    }
    resetRequireNumbers() {
        this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireNumbersInput() {
        return this._requireNumbers;
    }
    // require_symbols - computed: true, optional: true, required: false
    _requireSymbols;
    get requireSymbols() {
        return this.getBooleanAttribute('require_symbols');
    }
    set requireSymbols(value) {
        this._requireSymbols = value;
    }
    resetRequireSymbols() {
        this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireSymbolsInput() {
        return this._requireSymbols;
    }
    // require_uppercase_characters - computed: true, optional: true, required: false
    _requireUppercaseCharacters;
    get requireUppercaseCharacters() {
        return this.getBooleanAttribute('require_uppercase_characters');
    }
    set requireUppercaseCharacters(value) {
        this._requireUppercaseCharacters = value;
    }
    resetRequireUppercaseCharacters() {
        this._requireUppercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireUppercaseCharactersInput() {
        return this._requireUppercaseCharacters;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_users_to_change_password: cdktf.booleanToTerraform(this._allowUsersToChangePassword),
            hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
            max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
            minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
            password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
            require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
            require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
            require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
            require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLWFjY291bnQtcGFzc3dvcmQtcG9saWN5LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJpYW0tYWNjb3VudC1wYXNzd29yZC1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBNEMvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRW5FLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxpQ0FBaUMsQ0FBQztJQUVsRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxTQUF5QyxFQUFFO1FBQzFGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsaUNBQWlDO1lBQ3hELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDN0MsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1FBQy9ELElBQUksQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsMEJBQTBCLENBQUM7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO0lBQ3ZFLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYixvRkFBb0Y7SUFDNUUsMkJBQTJCLENBQStCO0lBQ2xFLElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdDQUFnQyxDQUFRLENBQUM7SUFDM0UsQ0FBQztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBa0M7UUFDdEUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsZUFBZTtRQUN4QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBUSxDQUFDO0lBQzdELENBQUM7SUFFRCxnRUFBZ0U7SUFDeEQsV0FBVyxDQUErQjtJQUNsRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFRLENBQUM7SUFDeEQsQ0FBQztJQUNELElBQVcsVUFBVSxDQUFDLEtBQWtDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFDTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxxRUFBcUU7SUFDN0QsZUFBZSxDQUFVO0lBQ2pDLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELDZFQUE2RTtJQUNyRSxzQkFBc0IsQ0FBVTtJQUN4QyxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxJQUFXLHFCQUFxQixDQUFDLEtBQWE7UUFDNUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBQ00sMEJBQTBCO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLDBCQUEwQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDO0lBRUQsOEVBQThFO0lBQ3RFLHdCQUF3QixDQUFVO0lBQzFDLElBQVcsdUJBQXVCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELElBQVcsdUJBQXVCLENBQUMsS0FBYTtRQUM5QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7SUFDTSw0QkFBNEI7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcsNEJBQTRCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7SUFFRCxpRkFBaUY7SUFDekUsMkJBQTJCLENBQStCO0lBQ2xFLElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDhCQUE4QixDQUFRLENBQUM7SUFDekUsQ0FBQztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBa0M7UUFDdEUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0lBRUQsb0VBQW9FO0lBQzVELGVBQWUsQ0FBK0I7SUFDdEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFRLENBQUM7SUFDNUQsQ0FBQztJQUNELElBQVcsY0FBYyxDQUFDLEtBQWtDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDTSxtQkFBbUI7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCxlQUFlLENBQStCO0lBQ3RELElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBUSxDQUFDO0lBQzVELENBQUM7SUFDRCxJQUFXLGNBQWMsQ0FBQyxLQUFrQztRQUMxRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ00sbUJBQW1CO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpRkFBaUY7SUFDekUsMkJBQTJCLENBQStCO0lBQ2xFLElBQVcsMEJBQTBCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLDhCQUE4QixDQUFRLENBQUM7SUFDekUsQ0FBQztJQUNELElBQVcsMEJBQTBCLENBQUMsS0FBa0M7UUFDdEUsSUFBSSxDQUFDLDJCQUEyQixHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBQ00sK0JBQStCO1FBQ3BDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCw4QkFBOEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQzFGLFdBQVcsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2RCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUMvRCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzdFLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDakYsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN4RixlQUFlLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0QsZUFBZSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELDRCQUE0QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7U0FDekYsQ0FBQztJQUNKLENBQUMifQ==