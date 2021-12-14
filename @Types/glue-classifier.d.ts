import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#name GlueClassifier#name}
    */
    readonly name: string;
    /**
    * csv_classifier block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#csv_classifier GlueClassifier#csv_classifier}
    */
    readonly csvClassifier?: GlueClassifierCsvClassifier;
    /**
    * grok_classifier block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_classifier GlueClassifier#grok_classifier}
    */
    readonly grokClassifier?: GlueClassifierGrokClassifier;
    /**
    * json_classifier block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_classifier GlueClassifier#json_classifier}
    */
    readonly jsonClassifier?: GlueClassifierJsonClassifier;
    /**
    * xml_classifier block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#xml_classifier GlueClassifier#xml_classifier}
    */
    readonly xmlClassifier?: GlueClassifierXmlClassifier;
}
export interface GlueClassifierCsvClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#allow_single_column GlueClassifier#allow_single_column}
    */
    readonly allowSingleColumn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#contains_header GlueClassifier#contains_header}
    */
    readonly containsHeader?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#delimiter GlueClassifier#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#disable_value_trimming GlueClassifier#disable_value_trimming}
    */
    readonly disableValueTrimming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#header GlueClassifier#header}
    */
    readonly header?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#quote_symbol GlueClassifier#quote_symbol}
    */
    readonly quoteSymbol?: string;
}
export declare function glueClassifierCsvClassifierToTerraform(struct?: GlueClassifierCsvClassifierOutputReference | GlueClassifierCsvClassifier): any;
export declare class GlueClassifierCsvClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueClassifierCsvClassifier | undefined;
    set internalValue(value: GlueClassifierCsvClassifier | undefined);
    private _allowSingleColumn?;
    get allowSingleColumn(): boolean | cdktf.IResolvable;
    set allowSingleColumn(value: boolean | cdktf.IResolvable);
    resetAllowSingleColumn(): void;
    get allowSingleColumnInput(): boolean | cdktf.IResolvable;
    private _containsHeader?;
    get containsHeader(): string;
    set containsHeader(value: string);
    resetContainsHeader(): void;
    get containsHeaderInput(): string;
    private _delimiter?;
    get delimiter(): string;
    set delimiter(value: string);
    resetDelimiter(): void;
    get delimiterInput(): string;
    private _disableValueTrimming?;
    get disableValueTrimming(): boolean | cdktf.IResolvable;
    set disableValueTrimming(value: boolean | cdktf.IResolvable);
    resetDisableValueTrimming(): void;
    get disableValueTrimmingInput(): boolean | cdktf.IResolvable;
    private _header?;
    get header(): string[];
    set header(value: string[]);
    resetHeader(): void;
    get headerInput(): string[];
    private _quoteSymbol?;
    get quoteSymbol(): string;
    set quoteSymbol(value: string);
    resetQuoteSymbol(): void;
    get quoteSymbolInput(): string;
}
export interface GlueClassifierGrokClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
    */
    readonly classification: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#custom_patterns GlueClassifier#custom_patterns}
    */
    readonly customPatterns?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_pattern GlueClassifier#grok_pattern}
    */
    readonly grokPattern: string;
}
export declare function glueClassifierGrokClassifierToTerraform(struct?: GlueClassifierGrokClassifierOutputReference | GlueClassifierGrokClassifier): any;
export declare class GlueClassifierGrokClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueClassifierGrokClassifier | undefined;
    set internalValue(value: GlueClassifierGrokClassifier | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
    get classificationInput(): string;
    private _customPatterns?;
    get customPatterns(): string;
    set customPatterns(value: string);
    resetCustomPatterns(): void;
    get customPatternsInput(): string;
    private _grokPattern?;
    get grokPattern(): string;
    set grokPattern(value: string);
    get grokPatternInput(): string;
}
export interface GlueClassifierJsonClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_path GlueClassifier#json_path}
    */
    readonly jsonPath: string;
}
export declare function glueClassifierJsonClassifierToTerraform(struct?: GlueClassifierJsonClassifierOutputReference | GlueClassifierJsonClassifier): any;
export declare class GlueClassifierJsonClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueClassifierJsonClassifier | undefined;
    set internalValue(value: GlueClassifierJsonClassifier | undefined);
    private _jsonPath?;
    get jsonPath(): string;
    set jsonPath(value: string);
    get jsonPathInput(): string;
}
export interface GlueClassifierXmlClassifier {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
    */
    readonly classification: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#row_tag GlueClassifier#row_tag}
    */
    readonly rowTag: string;
}
export declare function glueClassifierXmlClassifierToTerraform(struct?: GlueClassifierXmlClassifierOutputReference | GlueClassifierXmlClassifier): any;
export declare class GlueClassifierXmlClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GlueClassifierXmlClassifier | undefined;
    set internalValue(value: GlueClassifierXmlClassifier | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
    get classificationInput(): string;
    private _rowTag?;
    get rowTag(): string;
    set rowTag(value: string);
    get rowTagInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}
*/
export declare class GlueClassifier extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueClassifierConfig
    */
    constructor(scope: Construct, id: string, config: GlueClassifierConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _csvClassifier;
    get csvClassifier(): GlueClassifierCsvClassifierOutputReference;
    putCsvClassifier(value: GlueClassifierCsvClassifier): void;
    resetCsvClassifier(): void;
    get csvClassifierInput(): GlueClassifierCsvClassifier;
    private _grokClassifier;
    get grokClassifier(): GlueClassifierGrokClassifierOutputReference;
    putGrokClassifier(value: GlueClassifierGrokClassifier): void;
    resetGrokClassifier(): void;
    get grokClassifierInput(): GlueClassifierGrokClassifier;
    private _jsonClassifier;
    get jsonClassifier(): GlueClassifierJsonClassifierOutputReference;
    putJsonClassifier(value: GlueClassifierJsonClassifier): void;
    resetJsonClassifier(): void;
    get jsonClassifierInput(): GlueClassifierJsonClassifier;
    private _xmlClassifier;
    get xmlClassifier(): GlueClassifierXmlClassifierOutputReference;
    putXmlClassifier(value: GlueClassifierXmlClassifier): void;
    resetXmlClassifier(): void;
    get xmlClassifierInput(): GlueClassifierXmlClassifier;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-classifier.d.ts.map