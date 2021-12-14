// https://www.terraform.io/docs/providers/random
// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/random random}
*/
export class RandomProvider extends cdktf.TerraformProvider {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "random";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/random random} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RandomProviderConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'random',
            terraformGeneratorMetadata: {
                providerName: 'random',
                providerVersionConstraint: '~>3.1.0'
            },
            terraformProviderSource: 'hashicorp/random'
        });
        this._alias = config.alias;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alias - computed: false, optional: true, required: false
    _alias;
    get alias() {
        return this._alias;
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alias: cdktf.stringToTerraform(this._alias),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJyYW5kb20tcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEO0FBQ2pELDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWEvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxjQUFlLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUV6RCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsUUFBUSxDQUFDO0lBRXpELGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQStCLEVBQUU7UUFDaEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSxRQUFRO1lBQy9CLDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsUUFBUTtnQkFDdEIseUJBQXlCLEVBQUUsU0FBUzthQUNyQztZQUNELHVCQUF1QixFQUFFLGtCQUFrQjtTQUM1QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLDJEQUEyRDtJQUNuRCxNQUFNLENBQVU7SUFDeEIsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFXLEtBQUssQ0FBQyxLQUF5QjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sVUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUMifQ==