import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogTagOptionResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}
    */
    readonly tagOptionId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html aws_servicecatalog_tag_option_resource_association}
*/
export declare class ServicecatalogTagOptionResourceAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association.html aws_servicecatalog_tag_option_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogTagOptionResourceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogTagOptionResourceAssociationConfig);
    get id(): string;
    get resourceArn(): string;
    get resourceCreatedTime(): string;
    get resourceDescription(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string;
    get resourceName(): string;
    private _tagOptionId?;
    get tagOptionId(): string;
    set tagOptionId(value: string);
    get tagOptionIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-tag-option-resource-association.d.ts.map