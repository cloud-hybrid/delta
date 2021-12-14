// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions extends cdktf.ComplexComputedList {
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
export class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions extends cdktf.ComplexComputedList {
    // permissions - computed: true, optional: false, required: false
    get permissions() {
        return this.getListAttribute('permissions');
    }
    // principal - computed: true, optional: false, required: false
    get principal() {
        return this.getStringAttribute('principal');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
*/
export class DataAwsLakeformationDataLakeSettings extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_lakeformation_data_lake_settings";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationDataLakeSettingsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_lakeformation_data_lake_settings',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._catalogId = config.catalogId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // admins - computed: true, optional: false, required: false
    get admins() {
        return this.getListAttribute('admins');
    }
    // catalog_id - computed: false, optional: true, required: false
    _catalogId;
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    set catalogId(value) {
        this._catalogId = value;
    }
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get catalogIdInput() {
        return this._catalogId;
    }
    // create_database_default_permissions - computed: true, optional: false, required: false
    createDatabaseDefaultPermissions(index) {
        return new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions(this, 'create_database_default_permissions', index);
    }
    // create_table_default_permissions - computed: true, optional: false, required: false
    createTableDefaultPermissions(index) {
        return new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions(this, 'create_table_default_permissions', index);
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // trusted_resource_owners - computed: true, optional: false, required: false
    get trustedResourceOwners() {
        return this.getListAttribute('trusted_resource_owners');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            catalog_id: cdktf.stringToTerraform(this._catalogId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbGFrZWZvcm1hdGlvbi1kYXRhLWxha2Utc2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWxha2Vmb3JtYXRpb24tZGF0YS1sYWtlLXNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQVcvQixNQUFNLE9BQU8sb0VBQXFFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVqSCxpRUFBaUU7SUFDakUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwrREFBK0Q7SUFDL0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyxpRUFBa0UsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTlHLGlFQUFpRTtJQUNqRSxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBRUQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sb0NBQXFDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVqRixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsc0NBQXNDLENBQUM7SUFFdkYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBcUQsRUFBRTtRQUN0RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHNDQUFzQztZQUM3RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiw0REFBNEQ7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdFQUFnRTtJQUN4RCxVQUFVLENBQVU7SUFDNUIsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFXLFNBQVMsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFDTSxjQUFjO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxjQUFjO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUZBQXlGO0lBQ2xGLGdDQUFnQyxDQUFDLEtBQWE7UUFDbkQsT0FBTyxJQUFJLG9FQUFvRSxDQUFDLElBQUksRUFBRSxxQ0FBcUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0SSxDQUFDO0lBRUQsc0ZBQXNGO0lBQy9FLDZCQUE2QixDQUFDLEtBQWE7UUFDaEQsT0FBTyxJQUFJLGlFQUFpRSxDQUFDLElBQUksRUFBRSxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoSSxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELElBQVcsRUFBRTtRQUNYLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDckQsQ0FBQztJQUNKLENBQUMifQ==