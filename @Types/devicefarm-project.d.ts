import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Device Farm
*/
export interface DevicefarmProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html#default_job_timeout_minutes DevicefarmProject#default_job_timeout_minutes}
    */
    readonly defaultJobTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html#name DevicefarmProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html#tags DevicefarmProject#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html#tags_all DevicefarmProject#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html aws_devicefarm_project}
*/
export declare class DevicefarmProject extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html aws_devicefarm_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevicefarmProjectConfig
    */
    constructor(scope: Construct, id: string, config: DevicefarmProjectConfig);
    get arn(): string;
    private _defaultJobTimeoutMinutes?;
    get defaultJobTimeoutMinutes(): number;
    set defaultJobTimeoutMinutes(value: number);
    resetDefaultJobTimeoutMinutes(): void;
    get defaultJobTimeoutMinutesInput(): number;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=devicefarm-project.d.ts.map