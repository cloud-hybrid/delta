// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule}
*/
export class AutoscalingSchedule extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_autoscaling_schedule";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingScheduleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_schedule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._autoscalingGroupName = config.autoscalingGroupName;
        this._desiredCapacity = config.desiredCapacity;
        this._endTime = config.endTime;
        this._maxSize = config.maxSize;
        this._minSize = config.minSize;
        this._recurrence = config.recurrence;
        this._scheduledActionName = config.scheduledActionName;
        this._startTime = config.startTime;
        this._timeZone = config.timeZone;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // autoscaling_group_name - computed: false, optional: false, required: true
    _autoscalingGroupName;
    get autoscalingGroupName() {
        return this.getStringAttribute('autoscaling_group_name');
    }
    set autoscalingGroupName(value) {
        this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingGroupNameInput() {
        return this._autoscalingGroupName;
    }
    // desired_capacity - computed: true, optional: true, required: false
    _desiredCapacity;
    get desiredCapacity() {
        return this.getNumberAttribute('desired_capacity');
    }
    set desiredCapacity(value) {
        this._desiredCapacity = value;
    }
    resetDesiredCapacity() {
        this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get desiredCapacityInput() {
        return this._desiredCapacity;
    }
    // end_time - computed: true, optional: true, required: false
    _endTime;
    get endTime() {
        return this.getStringAttribute('end_time');
    }
    set endTime(value) {
        this._endTime = value;
    }
    resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get endTimeInput() {
        return this._endTime;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // max_size - computed: true, optional: true, required: false
    _maxSize;
    get maxSize() {
        return this.getNumberAttribute('max_size');
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    resetMaxSize() {
        this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxSizeInput() {
        return this._maxSize;
    }
    // min_size - computed: true, optional: true, required: false
    _minSize;
    get minSize() {
        return this.getNumberAttribute('min_size');
    }
    set minSize(value) {
        this._minSize = value;
    }
    resetMinSize() {
        this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minSizeInput() {
        return this._minSize;
    }
    // recurrence - computed: true, optional: true, required: false
    _recurrence;
    get recurrence() {
        return this.getStringAttribute('recurrence');
    }
    set recurrence(value) {
        this._recurrence = value;
    }
    resetRecurrence() {
        this._recurrence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recurrenceInput() {
        return this._recurrence;
    }
    // scheduled_action_name - computed: false, optional: false, required: true
    _scheduledActionName;
    get scheduledActionName() {
        return this.getStringAttribute('scheduled_action_name');
    }
    set scheduledActionName(value) {
        this._scheduledActionName = value;
    }
    // Temporarily expose input value. Use with caution.
    get scheduledActionNameInput() {
        return this._scheduledActionName;
    }
    // start_time - computed: true, optional: true, required: false
    _startTime;
    get startTime() {
        return this.getStringAttribute('start_time');
    }
    set startTime(value) {
        this._startTime = value;
    }
    resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get startTimeInput() {
        return this._startTime;
    }
    // time_zone - computed: true, optional: true, required: false
    _timeZone;
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    set timeZone(value) {
        this._timeZone = value;
    }
    resetTimeZone() {
        this._timeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeZoneInput() {
        return this._timeZone;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
            end_time: cdktf.stringToTerraform(this._endTime),
            max_size: cdktf.numberToTerraform(this._maxSize),
            min_size: cdktf.numberToTerraform(this._minSize),
            recurrence: cdktf.stringToTerraform(this._recurrence),
            scheduled_action_name: cdktf.stringToTerraform(this._scheduledActionName),
            start_time: cdktf.stringToTerraform(this._startTime),
            time_zone: cdktf.stringToTerraform(this._timeZone),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmctc2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImF1dG9zY2FsaW5nLXNjaGVkdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQTRDL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUU5RCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsMEJBQTBCLENBQUM7SUFFM0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBaUM7UUFDaEYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwwQkFBMEI7WUFDakQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFN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