import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DataSync
*/
export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#destination_location_arn DatasyncTask#destination_location_arn}
    */
    readonly destinationLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#name DatasyncTask#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#source_location_arn DatasyncTask#source_location_arn}
    */
    readonly sourceLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags DatasyncTask#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags_all DatasyncTask#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * excludes block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#excludes DatasyncTask#excludes}
    */
    readonly excludes?: DatasyncTaskExcludes;
    /**
    * options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#options DatasyncTask#options}
    */
    readonly options?: DatasyncTaskOptions;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule DatasyncTask#schedule}
    */
    readonly schedule?: DatasyncTaskSchedule;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#timeouts DatasyncTask#timeouts}
    */
    readonly timeouts?: DatasyncTaskTimeouts;
}
export interface DatasyncTaskExcludes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#filter_type DatasyncTask#filter_type}
    */
    readonly filterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#value DatasyncTask#value}
    */
    readonly value?: string;
}
export declare function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludesOutputReference | DatasyncTaskExcludes): any;
export declare class DatasyncTaskExcludesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncTaskExcludes | undefined;
    set internalValue(value: DatasyncTaskExcludes | undefined);
    private _filterType?;
    get filterType(): string;
    set filterType(value: string);
    resetFilterType(): void;
    get filterTypeInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
}
export interface DatasyncTaskOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#atime DatasyncTask#atime}
    */
    readonly atime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#bytes_per_second DatasyncTask#bytes_per_second}
    */
    readonly bytesPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#gid DatasyncTask#gid}
    */
    readonly gid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#log_level DatasyncTask#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#mtime DatasyncTask#mtime}
    */
    readonly mtime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#overwrite_mode DatasyncTask#overwrite_mode}
    */
    readonly overwriteMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#posix_permissions DatasyncTask#posix_permissions}
    */
    readonly posixPermissions?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_deleted_files DatasyncTask#preserve_deleted_files}
    */
    readonly preserveDeletedFiles?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_devices DatasyncTask#preserve_devices}
    */
    readonly preserveDevices?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#task_queueing DatasyncTask#task_queueing}
    */
    readonly taskQueueing?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#transfer_mode DatasyncTask#transfer_mode}
    */
    readonly transferMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#uid DatasyncTask#uid}
    */
    readonly uid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#verify_mode DatasyncTask#verify_mode}
    */
    readonly verifyMode?: string;
}
export declare function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptionsOutputReference | DatasyncTaskOptions): any;
export declare class DatasyncTaskOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncTaskOptions | undefined;
    set internalValue(value: DatasyncTaskOptions | undefined);
    private _atime?;
    get atime(): string;
    set atime(value: string);
    resetAtime(): void;
    get atimeInput(): string;
    private _bytesPerSecond?;
    get bytesPerSecond(): number;
    set bytesPerSecond(value: number);
    resetBytesPerSecond(): void;
    get bytesPerSecondInput(): number;
    private _gid?;
    get gid(): string;
    set gid(value: string);
    resetGid(): void;
    get gidInput(): string;
    private _logLevel?;
    get logLevel(): string;
    set logLevel(value: string);
    resetLogLevel(): void;
    get logLevelInput(): string;
    private _mtime?;
    get mtime(): string;
    set mtime(value: string);
    resetMtime(): void;
    get mtimeInput(): string;
    private _overwriteMode?;
    get overwriteMode(): string;
    set overwriteMode(value: string);
    resetOverwriteMode(): void;
    get overwriteModeInput(): string;
    private _posixPermissions?;
    get posixPermissions(): string;
    set posixPermissions(value: string);
    resetPosixPermissions(): void;
    get posixPermissionsInput(): string;
    private _preserveDeletedFiles?;
    get preserveDeletedFiles(): string;
    set preserveDeletedFiles(value: string);
    resetPreserveDeletedFiles(): void;
    get preserveDeletedFilesInput(): string;
    private _preserveDevices?;
    get preserveDevices(): string;
    set preserveDevices(value: string);
    resetPreserveDevices(): void;
    get preserveDevicesInput(): string;
    private _taskQueueing?;
    get taskQueueing(): string;
    set taskQueueing(value: string);
    resetTaskQueueing(): void;
    get taskQueueingInput(): string;
    private _transferMode?;
    get transferMode(): string;
    set transferMode(value: string);
    resetTransferMode(): void;
    get transferModeInput(): string;
    private _uid?;
    get uid(): string;
    set uid(value: string);
    resetUid(): void;
    get uidInput(): string;
    private _verifyMode?;
    get verifyMode(): string;
    set verifyMode(value: string);
    resetVerifyMode(): void;
    get verifyModeInput(): string;
}
export interface DatasyncTaskSchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule_expression DatasyncTask#schedule_expression}
    */
    readonly scheduleExpression: string;
}
export declare function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskScheduleOutputReference | DatasyncTaskSchedule): any;
export declare class DatasyncTaskScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncTaskSchedule | undefined;
    set internalValue(value: DatasyncTaskSchedule | undefined);
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string;
}
export interface DatasyncTaskTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#create DatasyncTask#create}
    */
    readonly create?: string;
}
export declare function datasyncTaskTimeoutsToTerraform(struct?: DatasyncTaskTimeoutsOutputReference | DatasyncTaskTimeouts): any;
export declare class DatasyncTaskTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DatasyncTaskTimeouts | undefined;
    set internalValue(value: DatasyncTaskTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task}
*/
export declare class DatasyncTask extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncTaskConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncTaskConfig);
    get arn(): string;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    resetCloudwatchLogGroupArn(): void;
    get cloudwatchLogGroupArnInput(): string;
    private _destinationLocationArn?;
    get destinationLocationArn(): string;
    set destinationLocationArn(value: string);
    get destinationLocationArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _sourceLocationArn?;
    get sourceLocationArn(): string;
    set sourceLocationArn(value: string);
    get sourceLocationArnInput(): string;
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
    private _excludes;
    get excludes(): DatasyncTaskExcludesOutputReference;
    putExcludes(value: DatasyncTaskExcludes): void;
    resetExcludes(): void;
    get excludesInput(): DatasyncTaskExcludes;
    private _options;
    get options(): DatasyncTaskOptionsOutputReference;
    putOptions(value: DatasyncTaskOptions): void;
    resetOptions(): void;
    get optionsInput(): DatasyncTaskOptions;
    private _schedule;
    get schedule(): DatasyncTaskScheduleOutputReference;
    putSchedule(value: DatasyncTaskSchedule): void;
    resetSchedule(): void;
    get scheduleInput(): DatasyncTaskSchedule;
    private _timeouts;
    get timeouts(): DatasyncTaskTimeoutsOutputReference;
    putTimeouts(value: DatasyncTaskTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DatasyncTaskTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=datasync-task.d.ts.map