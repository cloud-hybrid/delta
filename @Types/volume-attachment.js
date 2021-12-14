// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment}
*/
export class VolumeAttachment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_volume_attachment";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeAttachmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_volume_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._deviceName = config.deviceName;
        this._forceDetach = config.forceDetach;
        this._instanceId = config.instanceId;
        this._skipDestroy = config.skipDestroy;
        this._stopInstanceBeforeDetaching = config.stopInstanceBeforeDetaching;
        this._volumeId = config.volumeId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // device_name - computed: false, optional: false, required: true
    _deviceName;
    get deviceName() {
        return this.getStringAttribute('device_name');
    }
    set deviceName(value) {
        this._deviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    get deviceNameInput() {
        return this._deviceName;
    }
    // force_detach - computed: false, optional: true, required: false
    _forceDetach;
    get forceDetach() {
        return this.getBooleanAttribute('force_detach');
    }
    set forceDetach(value) {
        this._forceDetach = value;
    }
    resetForceDetach() {
        this._forceDetach = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forceDetachInput() {
        return this._forceDetach;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_id - computed: false, optional: false, required: true
    _instanceId;
    get instanceId() {
        return this.getStringAttribute('instance_id');
    }
    set instanceId(value) {
        this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceIdInput() {
        return this._instanceId;
    }
    // skip_destroy - computed: false, optional: true, required: false
    _skipDestroy;
    get skipDestroy() {
        return this.getBooleanAttribute('skip_destroy');
    }
    set skipDestroy(value) {
        this._skipDestroy = value;
    }
    resetSkipDestroy() {
        this._skipDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipDestroyInput() {
        return this._skipDestroy;
    }
    // stop_instance_before_detaching - computed: false, optional: true, required: false
    _stopInstanceBeforeDetaching;
    get stopInstanceBeforeDetaching() {
        return this.getBooleanAttribute('stop_instance_before_detaching');
    }
    set stopInstanceBeforeDetaching(value) {
        this._stopInstanceBeforeDetaching = value;
    }
    resetStopInstanceBeforeDetaching() {
        this._stopInstanceBeforeDetaching = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stopInstanceBeforeDetachingInput() {
        return this._stopInstanceBeforeDetaching;
    }
    // volume_id - computed: false, optional: false, required: true
    _volumeId;
    get volumeId() {
        return this.getStringAttribute('volume_id');
    }
    set volumeId(value) {
        this._volumeId = value;
    }
    // Temporarily expose input value. Use with caution.
    get volumeIdInput() {
        return this._volumeId;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            device_name: cdktf.stringToTerraform(this._deviceName),
            force_detach: cdktf.booleanToTerraform(this._forceDetach),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
            stop_instance_before_detaching: cdktf.booleanToTerraform(this._stopInstanceBeforeDetaching),
            volume_id: cdktf.stringToTerraform(this._volumeId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm9sdW1lLWF0dGFjaG1lbnQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInZvbHVtZS1hdHRhY2htZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdDL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUUzRCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsdUJBQXVCLENBQUM7SUFFeEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBOEI7UUFDN0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx1QkFBdUI7WUFDOUMsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLDJCQUEyQixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFB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