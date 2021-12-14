import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Signer
*/
export interface SignerSigningJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}
    */
    readonly ignoreSigningJobFailure?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#profile_name SignerSigningJob#profile_name}
    */
    readonly profileName: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#destination SignerSigningJob#destination}
    */
    readonly destination: SignerSigningJobDestination;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#source SignerSigningJob#source}
    */
    readonly source: SignerSigningJobSource;
}
export declare class SignerSigningJobRevocationRecord extends cdktf.ComplexComputedList {
    get reason(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class SignerSigningJobSignedObjectS3 extends cdktf.ComplexComputedList {
    get bucket(): string;
    get key(): string;
}
export declare class SignerSigningJobSignedObject extends cdktf.ComplexComputedList {
    get s3(): any;
}
export interface SignerSigningJobDestinationS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#bucket SignerSigningJob#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#prefix SignerSigningJob#prefix}
    */
    readonly prefix?: string;
}
export declare function signerSigningJobDestinationS3ToTerraform(struct?: SignerSigningJobDestinationS3OutputReference | SignerSigningJobDestinationS3): any;
export declare class SignerSigningJobDestinationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SignerSigningJobDestinationS3 | undefined;
    set internalValue(value: SignerSigningJobDestinationS3 | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
export interface SignerSigningJobDestination {
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#s3 SignerSigningJob#s3}
    */
    readonly s3: SignerSigningJobDestinationS3;
}
export declare function signerSigningJobDestinationToTerraform(struct?: SignerSigningJobDestinationOutputReference | SignerSigningJobDestination): any;
export declare class SignerSigningJobDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SignerSigningJobDestination | undefined;
    set internalValue(value: SignerSigningJobDestination | undefined);
    private _s3;
    get s3(): SignerSigningJobDestinationS3OutputReference;
    putS3(value: SignerSigningJobDestinationS3): void;
    get s3Input(): SignerSigningJobDestinationS3;
}
export interface SignerSigningJobSourceS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#bucket SignerSigningJob#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#key SignerSigningJob#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#version SignerSigningJob#version}
    */
    readonly version: string;
}
export declare function signerSigningJobSourceS3ToTerraform(struct?: SignerSigningJobSourceS3OutputReference | SignerSigningJobSourceS3): any;
export declare class SignerSigningJobSourceS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SignerSigningJobSourceS3 | undefined;
    set internalValue(value: SignerSigningJobSourceS3 | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
}
export interface SignerSigningJobSource {
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html#s3 SignerSigningJob#s3}
    */
    readonly s3: SignerSigningJobSourceS3;
}
export declare function signerSigningJobSourceToTerraform(struct?: SignerSigningJobSourceOutputReference | SignerSigningJobSource): any;
export declare class SignerSigningJobSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SignerSigningJobSource | undefined;
    set internalValue(value: SignerSigningJobSource | undefined);
    private _s3;
    get s3(): SignerSigningJobSourceS3OutputReference;
    putS3(value: SignerSigningJobSourceS3): void;
    get s3Input(): SignerSigningJobSourceS3;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job}
*/
export declare class SignerSigningJob extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job.html aws_signer_signing_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningJobConfig
    */
    constructor(scope: Construct, id: string, config: SignerSigningJobConfig);
    get completedAt(): string;
    get createdAt(): string;
    get id(): string;
    private _ignoreSigningJobFailure?;
    get ignoreSigningJobFailure(): boolean | cdktf.IResolvable;
    set ignoreSigningJobFailure(value: boolean | cdktf.IResolvable);
    resetIgnoreSigningJobFailure(): void;
    get ignoreSigningJobFailureInput(): boolean | cdktf.IResolvable;
    get jobId(): string;
    get jobInvoker(): string;
    get jobOwner(): string;
    get platformDisplayName(): string;
    get platformId(): string;
    private _profileName?;
    get profileName(): string;
    set profileName(value: string);
    get profileNameInput(): string;
    get profileVersion(): string;
    get requestedBy(): string;
    revocationRecord(index: string): SignerSigningJobRevocationRecord;
    get signatureExpiresAt(): string;
    signedObject(index: string): SignerSigningJobSignedObject;
    get status(): string;
    get statusReason(): string;
    private _destination;
    get destination(): SignerSigningJobDestinationOutputReference;
    putDestination(value: SignerSigningJobDestination): void;
    get destinationInput(): SignerSigningJobDestination;
    private _source;
    get source(): SignerSigningJobSourceOutputReference;
    putSource(value: SignerSigningJobSource): void;
    get sourceInput(): SignerSigningJobSource;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=signer-signing-job.d.ts.map