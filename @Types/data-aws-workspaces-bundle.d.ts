import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS WorkSpaces
*/
export interface DataAwsWorkspacesBundleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html#bundle_id DataAwsWorkspacesBundle#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html#name DataAwsWorkspacesBundle#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html#owner DataAwsWorkspacesBundle#owner}
    */
    readonly owner?: string;
}
export declare class DataAwsWorkspacesBundleComputeType extends cdktf.ComplexComputedList {
    get name(): string;
}
export declare class DataAwsWorkspacesBundleRootStorage extends cdktf.ComplexComputedList {
    get capacity(): string;
}
export declare class DataAwsWorkspacesBundleUserStorage extends cdktf.ComplexComputedList {
    get capacity(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle}
*/
export declare class DataAwsWorkspacesBundle extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesBundleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsWorkspacesBundleConfig);
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    resetBundleId(): void;
    get bundleIdInput(): string;
    computeType(index: string): DataAwsWorkspacesBundleComputeType;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string;
    rootStorage(index: string): DataAwsWorkspacesBundleRootStorage;
    userStorage(index: string): DataAwsWorkspacesBundleUserStorage;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-workspaces-bundle.d.ts.map