import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GameLift
*/
export interface GameliftBuildConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#name GameliftBuild#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#operating_system GameliftBuild#operating_system}
    */
    readonly operatingSystem: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#tags GameliftBuild#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#tags_all GameliftBuild#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#version GameliftBuild#version}
    */
    readonly version?: string;
    /**
    * storage_location block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#storage_location GameliftBuild#storage_location}
    */
    readonly storageLocation: GameliftBuildStorageLocation;
}
export interface GameliftBuildStorageLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#bucket GameliftBuild#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#key GameliftBuild#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html#role_arn GameliftBuild#role_arn}
    */
    readonly roleArn: string;
}
export declare function gameliftBuildStorageLocationToTerraform(struct?: GameliftBuildStorageLocationOutputReference | GameliftBuildStorageLocation): any;
export declare class GameliftBuildStorageLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GameliftBuildStorageLocation | undefined;
    set internalValue(value: GameliftBuildStorageLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build}
*/
export declare class GameliftBuild extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_build.html aws_gamelift_build} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftBuildConfig
    */
    constructor(scope: Construct, id: string, config: GameliftBuildConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    get operatingSystemInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _storageLocation;
    get storageLocation(): GameliftBuildStorageLocationOutputReference;
    putStorageLocation(value: GameliftBuildStorageLocation): void;
    get storageLocationInput(): GameliftBuildStorageLocation;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=gamelift-build.d.ts.map