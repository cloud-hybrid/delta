import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogBudgetResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html#budget_name ServicecatalogBudgetResourceAssociation#budget_name}
    */
    readonly budgetName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html#resource_id ServicecatalogBudgetResourceAssociation#resource_id}
    */
    readonly resourceId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association}
*/
export declare class ServicecatalogBudgetResourceAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogBudgetResourceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogBudgetResourceAssociationConfig);
    private _budgetName?;
    get budgetName(): string;
    set budgetName(value: string);
    get budgetNameInput(): string;
    get id(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-budget-resource-association.d.ts.map