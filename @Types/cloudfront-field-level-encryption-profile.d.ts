import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontFieldLevelEncryptionProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#comment CloudfrontFieldLevelEncryptionProfile#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#name CloudfrontFieldLevelEncryptionProfile#name}
    */
    readonly name: string;
    /**
    * encryption_entities block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}
    */
    readonly encryptionEntities: CloudfrontFieldLevelEncryptionProfileEncryptionEntities;
}
export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#items CloudfrontFieldLevelEncryptionProfile#items}
    */
    readonly items?: string[];
}
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference | CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns): any;
export declare class CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatternsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns | undefined);
    private _items?;
    get items(): string[];
    set items(value: string[]);
    resetItems(): void;
    get itemsInput(): string[];
}
export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}
    */
    readonly providerId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}
    */
    readonly publicKeyId: string;
    /**
    * field_patterns block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}
    */
    readonly fieldPatterns: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsFieldPatterns;
}
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems): any;
export interface CloudfrontFieldLevelEncryptionProfileEncryptionEntities {
    /**
    * items block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html#items CloudfrontFieldLevelEncryptionProfile#items}
    */
    readonly items?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[];
}
export declare function cloudfrontFieldLevelEncryptionProfileEncryptionEntitiesToTerraform(struct?: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference | CloudfrontFieldLevelEncryptionProfileEncryptionEntities): any;
export declare class CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontFieldLevelEncryptionProfileEncryptionEntities | undefined;
    set internalValue(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntities | undefined);
    private _items?;
    get items(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[];
    set items(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[]);
    resetItems(): void;
    get itemsInput(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesItems[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html aws_cloudfront_field_level_encryption_profile}
*/
export declare class CloudfrontFieldLevelEncryptionProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_profile.html aws_cloudfront_field_level_encryption_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFieldLevelEncryptionProfileConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionProfileConfig);
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    get etag(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _encryptionEntities;
    get encryptionEntities(): CloudfrontFieldLevelEncryptionProfileEncryptionEntitiesOutputReference;
    putEncryptionEntities(value: CloudfrontFieldLevelEncryptionProfileEncryptionEntities): void;
    get encryptionEntitiesInput(): CloudfrontFieldLevelEncryptionProfileEncryptionEntities;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-field-level-encryption-profile.d.ts.map