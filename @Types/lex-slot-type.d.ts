import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lex
*/
export interface LexSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create_version LexSlotType#create_version}
    */
    readonly createVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#description LexSlotType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#name LexSlotType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value_selection_strategy LexSlotType#value_selection_strategy}
    */
    readonly valueSelectionStrategy?: string;
    /**
    * enumeration_value block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#enumeration_value LexSlotType#enumeration_value}
    */
    readonly enumerationValue: LexSlotTypeEnumerationValue[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#timeouts LexSlotType#timeouts}
    */
    readonly timeouts?: LexSlotTypeTimeouts;
}
export interface LexSlotTypeEnumerationValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#synonyms LexSlotType#synonyms}
    */
    readonly synonyms?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#value LexSlotType#value}
    */
    readonly value: string;
}
export declare function lexSlotTypeEnumerationValueToTerraform(struct?: LexSlotTypeEnumerationValue): any;
export interface LexSlotTypeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#create LexSlotType#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#delete LexSlotType#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html#update LexSlotType#update}
    */
    readonly update?: string;
}
export declare function lexSlotTypeTimeoutsToTerraform(struct?: LexSlotTypeTimeoutsOutputReference | LexSlotTypeTimeouts): any;
export declare class LexSlotTypeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LexSlotTypeTimeouts | undefined;
    set internalValue(value: LexSlotTypeTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type}
*/
export declare class LexSlotType extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lex_slot_type.html aws_lex_slot_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexSlotTypeConfig
    */
    constructor(scope: Construct, id: string, config: LexSlotTypeConfig);
    get checksum(): string;
    private _createVersion?;
    get createVersion(): boolean | cdktf.IResolvable;
    set createVersion(value: boolean | cdktf.IResolvable);
    resetCreateVersion(): void;
    get createVersionInput(): boolean | cdktf.IResolvable;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lastUpdatedDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _valueSelectionStrategy?;
    get valueSelectionStrategy(): string;
    set valueSelectionStrategy(value: string);
    resetValueSelectionStrategy(): void;
    get valueSelectionStrategyInput(): string;
    get version(): string;
    private _enumerationValue?;
    get enumerationValue(): LexSlotTypeEnumerationValue[];
    set enumerationValue(value: LexSlotTypeEnumerationValue[]);
    get enumerationValueInput(): LexSlotTypeEnumerationValue[];
    private _timeouts;
    get timeouts(): LexSlotTypeTimeoutsOutputReference;
    putTimeouts(value: LexSlotTypeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LexSlotTypeTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lex-slot-type.d.ts.map