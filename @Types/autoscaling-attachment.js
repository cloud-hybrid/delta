// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment}
*/
export class AutoscalingAttachment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_autoscaling_attachment";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingAttachmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_autoscaling_attachment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._albTargetGroupArn = config.albTargetGroupArn;
        this._autoscalingGroupName = config.autoscalingGroupName;
        this._elb = config.elb;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // alb_target_group_arn - computed: false, optional: true, required: false
    _albTargetGroupArn;
    get albTargetGroupArn() {
        return this.getStringAttribute('alb_target_group_arn');
    }
    set albTargetGroupArn(value) {
        this._albTargetGroupArn = value;
    }
    resetAlbTargetGroupArn() {
        this._albTargetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get albTargetGroupArnInput() {
        return this._albTargetGroupArn;
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
    // elb - computed: false, optional: true, required: false
    _elb;
    get elb() {
        return this.getStringAttribute('elb');
    }
    set elb(value) {
        this._elb = value;
    }
    resetElb() {
        this._elb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elbInput() {
        return this._elb;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            alb_target_group_arn: cdktf.stringToTerraform(this._albTargetGroupArn),
            autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
            elb: cdktf.stringToTerraform(this._elb),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NjYWxpbmctYXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiYXV0b3NjYWxpbmctYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFvQi9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLHFCQUFzQixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFaEUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLDRCQUE0QixDQUFDO0lBRTdFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQW1DO1FBQ2xGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsNEJBQTRCO1lBQ25ELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiwwRUFBMEU7SUFDbEUsa0JBQWtCLENBQVU7SUFDcEMsSUFBVyxpQkFBaUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0QsSUFBVyxpQkFBaUIsQ0FBQyxLQUFhO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUNNLHNCQUFzQjtRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBb0Q7SUFDcEQsSUFBVyxzQkFBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELDRFQUE0RTtJQUNwRSxxQkFBcUIsQ0FBVTtJQUN2QyxJQUFXLG9CQUFvQjtRQUM3QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxJQUFXLG9CQUFvQixDQUFDLEtBQWE7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQW9EO0lBQ3BELElBQVcseUJBQXlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFFRCx5REFBeUQ7SUFDakQsSUFBSSxDQUFVO0lBQ3RCLElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxJQUFXLEdBQUcsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUVGLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUN0RSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQzNFLEdBQUcsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN4QyxDQUFDO0lBQ0osQ0FBQyJ9