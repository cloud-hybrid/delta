import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic MapReduce
*/
export interface EmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping.html#identity_id EmrStudioSessionMapping#identity_id}
    */
    readonly identityId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping.html#identity_name EmrStudioSessionMapping#identity_name}
    */
    readonly identityName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping.html#identity_type EmrStudioSessionMapping#identity_type}
    */
    readonly identityType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping.html#session_policy_arn EmrStudioSessionMapping#session_policy_arn}
    */
    readonly sessionPolicyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping.html#studio_id EmrStudioSessionMapping#studio_id}
    */
    readonly studioId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping.html aws_emr_studio_session_mapping}
*/
export declare class EmrStudioSessionMapping extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping.html aws_emr_studio_session_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrStudioSessionMappingConfig
    */
    constructor(scope: Construct, id: string, config: EmrStudioSessionMappingConfig);
    get id(): string;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    resetIdentityId(): void;
    get identityIdInput(): string;
    private _identityName?;
    get identityName(): string;
    set identityName(value: string);
    resetIdentityName(): void;
    get identityNameInput(): string;
    private _identityType?;
    get identityType(): string;
    set identityType(value: string);
    get identityTypeInput(): string;
    private _sessionPolicyArn?;
    get sessionPolicyArn(): string;
    set sessionPolicyArn(value: string);
    get sessionPolicyArnInput(): string;
    private _studioId?;
    get studioId(): string;
    set studioId(value: string);
    get studioIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=emr-studio-session-mapping.d.ts.map