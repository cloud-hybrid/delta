// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
    };
}
export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._sagemakerImageArn) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._sagemakerImageArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._sagemakerImageArn = value.sagemakerImageArn;
        }
    }
    // instance_type - computed: false, optional: true, required: false
    _instanceType;
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    // sagemaker_image_arn - computed: false, optional: true, required: false
    _sagemakerImageArn;
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
}
export function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        default_resource_spec: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
export class SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._lifecycleConfigArns) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        if (this._defaultResourceSpec?.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lifecycleConfigArns = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    // lifecycle_config_arns - computed: false, optional: true, required: false
    _lifecycleConfigArns;
    get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    set lifecycleConfigArns(value) {
        this._lifecycleConfigArns = value;
    }
    resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
    // default_resource_spec - computed: false, optional: true, required: false
    _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        app_image_config_name: cdktf.stringToTerraform(struct.appImageConfigName),
        image_name: cdktf.stringToTerraform(struct.imageName),
        image_version_number: cdktf.numberToTerraform(struct.imageVersionNumber),
    };
}
export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
    };
}
export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._sagemakerImageArn) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._sagemakerImageArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._sagemakerImageArn = value.sagemakerImageArn;
        }
    }
    // instance_type - computed: false, optional: true, required: false
    _instanceType;
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    // sagemaker_image_arn - computed: false, optional: true, required: false
    _sagemakerImageArn;
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
}
export function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.lifecycleConfigArns),
        custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct.customImage),
        default_resource_spec: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
export class SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._lifecycleConfigArns) {
            hasAnyValues = true;
            internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
        }
        if (this._customImage) {
            hasAnyValues = true;
            internalValueResult.customImage = this._customImage;
        }
        if (this._defaultResourceSpec?.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._lifecycleConfigArns = undefined;
            this._customImage = undefined;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._lifecycleConfigArns = value.lifecycleConfigArns;
            this._customImage = value.customImage;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    // lifecycle_config_arns - computed: false, optional: true, required: false
    _lifecycleConfigArns;
    get lifecycleConfigArns() {
        return this.getListAttribute('lifecycle_config_arns');
    }
    set lifecycleConfigArns(value) {
        this._lifecycleConfigArns = value;
    }
    resetLifecycleConfigArns() {
        this._lifecycleConfigArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lifecycleConfigArnsInput() {
        return this._lifecycleConfigArns;
    }
    // custom_image - computed: false, optional: true, required: false
    _customImage;
    get customImage() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_image');
    }
    set customImage(value) {
        this._customImage = value;
    }
    resetCustomImage() {
        this._customImage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customImageInput() {
        return this._customImage;
    }
    // default_resource_spec - computed: false, optional: true, required: false
    _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
export function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        notebook_output_option: cdktf.stringToTerraform(struct.notebookOutputOption),
        s3_kms_key_id: cdktf.stringToTerraform(struct.s3KmsKeyId),
        s3_output_path: cdktf.stringToTerraform(struct.s3OutputPath),
    };
}
export class SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._notebookOutputOption) {
            hasAnyValues = true;
            internalValueResult.notebookOutputOption = this._notebookOutputOption;
        }
        if (this._s3KmsKeyId) {
            hasAnyValues = true;
            internalValueResult.s3KmsKeyId = this._s3KmsKeyId;
        }
        if (this._s3OutputPath) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._notebookOutputOption = undefined;
            this._s3KmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._notebookOutputOption = value.notebookOutputOption;
            this._s3KmsKeyId = value.s3KmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
    }
    // notebook_output_option - computed: false, optional: true, required: false
    _notebookOutputOption;
    get notebookOutputOption() {
        return this.getStringAttribute('notebook_output_option');
    }
    set notebookOutputOption(value) {
        this._notebookOutputOption = value;
    }
    resetNotebookOutputOption() {
        this._notebookOutputOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notebookOutputOptionInput() {
        return this._notebookOutputOption;
    }
    // s3_kms_key_id - computed: false, optional: true, required: false
    _s3KmsKeyId;
    get s3KmsKeyId() {
        return this.getStringAttribute('s3_kms_key_id');
    }
    set s3KmsKeyId(value) {
        this._s3KmsKeyId = value;
    }
    resetS3KmsKeyId() {
        this._s3KmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3KmsKeyIdInput() {
        return this._s3KmsKeyId;
    }
    // s3_output_path - computed: false, optional: true, required: false
    _s3OutputPath;
    get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    set s3OutputPath(value) {
        this._s3OutputPath = value;
    }
    resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        instance_type: cdktf.stringToTerraform(struct.instanceType),
        sagemaker_image_arn: cdktf.stringToTerraform(struct.sagemakerImageArn),
    };
}
export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._instanceType) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._sagemakerImageArn) {
            hasAnyValues = true;
            internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._instanceType = undefined;
            this._sagemakerImageArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._instanceType = value.instanceType;
            this._sagemakerImageArn = value.sagemakerImageArn;
        }
    }
    // instance_type - computed: false, optional: true, required: false
    _instanceType;
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    set instanceType(value) {
        this._instanceType = value;
    }
    resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceTypeInput() {
        return this._instanceType;
    }
    // sagemaker_image_arn - computed: false, optional: true, required: false
    _sagemakerImageArn;
    get sagemakerImageArn() {
        return this.getStringAttribute('sagemaker_image_arn');
    }
    set sagemakerImageArn(value) {
        this._sagemakerImageArn = value;
    }
    resetSagemakerImageArn() {
        this._sagemakerImageArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sagemakerImageArnInput() {
        return this._sagemakerImageArn;
    }
}
export function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        default_resource_spec: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct.defaultResourceSpec),
    };
}
export class SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._defaultResourceSpec?.internalValue) {
            hasAnyValues = true;
            internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._defaultResourceSpec.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
        }
    }
    // default_resource_spec - computed: false, optional: true, required: false
    _defaultResourceSpec = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec", true);
    get defaultResourceSpec() {
        return this._defaultResourceSpec;
    }
    putDefaultResourceSpec(value) {
        this._defaultResourceSpec.internalValue = value;
    }
    resetDefaultResourceSpec() {
        this._defaultResourceSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get defaultResourceSpecInput() {
        return this._defaultResourceSpec.internalValue;
    }
}
export function sagemakerDomainDefaultUserSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        execution_role: cdktf.stringToTerraform(struct.executionRole),
        security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroups),
        jupyter_server_app_settings: sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct.jupyterServerAppSettings),
        kernel_gateway_app_settings: sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct.kernelGatewayAppSettings),
        sharing_settings: sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct.sharingSettings),
        tensor_board_app_settings: sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct.tensorBoardAppSettings),
    };
}
export class SagemakerDomainDefaultUserSettingsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._executionRole) {
            hasAnyValues = true;
            internalValueResult.executionRole = this._executionRole;
        }
        if (this._securityGroups) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._jupyterServerAppSettings?.internalValue) {
            hasAnyValues = true;
            internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
        }
        if (this._kernelGatewayAppSettings?.internalValue) {
            hasAnyValues = true;
            internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
        }
        if (this._sharingSettings?.internalValue) {
            hasAnyValues = true;
            internalValueResult.sharingSettings = this._sharingSettings?.internalValue;
        }
        if (this._tensorBoardAppSettings?.internalValue) {
            hasAnyValues = true;
            internalValueResult.tensorBoardAppSettings = this._tensorBoardAppSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._executionRole = undefined;
            this._securityGroups = undefined;
            this._jupyterServerAppSettings.internalValue = undefined;
            this._kernelGatewayAppSettings.internalValue = undefined;
            this._sharingSettings.internalValue = undefined;
            this._tensorBoardAppSettings.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._executionRole = value.executionRole;
            this._securityGroups = value.securityGroups;
            this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
            this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
            this._sharingSettings.internalValue = value.sharingSettings;
            this._tensorBoardAppSettings.internalValue = value.tensorBoardAppSettings;
        }
    }
    // execution_role - computed: false, optional: false, required: true
    _executionRole;
    get executionRole() {
        return this.getStringAttribute('execution_role');
    }
    set executionRole(value) {
        this._executionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleInput() {
        return this._executionRole;
    }
    // security_groups - computed: false, optional: true, required: false
    _securityGroups;
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    set securityGroups(value) {
        this._securityGroups = value;
    }
    resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupsInput() {
        return this._securityGroups;
    }
    // jupyter_server_app_settings - computed: false, optional: true, required: false
    _jupyterServerAppSettings = new SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings", true);
    get jupyterServerAppSettings() {
        return this._jupyterServerAppSettings;
    }
    putJupyterServerAppSettings(value) {
        this._jupyterServerAppSettings.internalValue = value;
    }
    resetJupyterServerAppSettings() {
        this._jupyterServerAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jupyterServerAppSettingsInput() {
        return this._jupyterServerAppSettings.internalValue;
    }
    // kernel_gateway_app_settings - computed: false, optional: true, required: false
    _kernelGatewayAppSettings = new SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings", true);
    get kernelGatewayAppSettings() {
        return this._kernelGatewayAppSettings;
    }
    putKernelGatewayAppSettings(value) {
        this._kernelGatewayAppSettings.internalValue = value;
    }
    resetKernelGatewayAppSettings() {
        this._kernelGatewayAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kernelGatewayAppSettingsInput() {
        return this._kernelGatewayAppSettings.internalValue;
    }
    // sharing_settings - computed: false, optional: true, required: false
    _sharingSettings = new SagemakerDomainDefaultUserSettingsSharingSettingsOutputReference(this, "sharing_settings", true);
    get sharingSettings() {
        return this._sharingSettings;
    }
    putSharingSettings(value) {
        this._sharingSettings.internalValue = value;
    }
    resetSharingSettings() {
        this._sharingSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sharingSettingsInput() {
        return this._sharingSettings.internalValue;
    }
    // tensor_board_app_settings - computed: false, optional: true, required: false
    _tensorBoardAppSettings = new SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsOutputReference(this, "tensor_board_app_settings", true);
    get tensorBoardAppSettings() {
        return this._tensorBoardAppSettings;
    }
    putTensorBoardAppSettings(value) {
        this._tensorBoardAppSettings.internalValue = value;
    }
    resetTensorBoardAppSettings() {
        this._tensorBoardAppSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tensorBoardAppSettingsInput() {
        return this._tensorBoardAppSettings.internalValue;
    }
}
export function sagemakerDomainRetentionPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        home_efs_file_system: cdktf.stringToTerraform(struct.homeEfsFileSystem),
    };
}
export class SagemakerDomainRetentionPolicyOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._homeEfsFileSystem) {
            hasAnyValues = true;
            internalValueResult.homeEfsFileSystem = this._homeEfsFileSystem;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._homeEfsFileSystem = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._homeEfsFileSystem = value.homeEfsFileSystem;
        }
    }
    // home_efs_file_system - computed: false, optional: true, required: false
    _homeEfsFileSystem;
    get homeEfsFileSystem() {
        return this.getStringAttribute('home_efs_file_system');
    }
    set homeEfsFileSystem(value) {
        this._homeEfsFileSystem = value;
    }
    resetHomeEfsFileSystem() {
        this._homeEfsFileSystem = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get homeEfsFileSystemInput() {
        return this._homeEfsFileSystem;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain}
*/
export class SagemakerDomain extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_sagemaker_domain";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDomainConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_sagemaker_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._appNetworkAccessType = config.appNetworkAccessType;
        this._authMode = config.authMode;
        this._domainName = config.domainName;
        this._kmsKeyId = config.kmsKeyId;
        this._subnetIds = config.subnetIds;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._vpcId = config.vpcId;
        this._defaultUserSettings.internalValue = config.defaultUserSettings;
        this._retentionPolicy.internalValue = config.retentionPolicy;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // app_network_access_type - computed: false, optional: true, required: false
    _appNetworkAccessType;
    get appNetworkAccessType() {
        return this.getStringAttribute('app_network_access_type');
    }
    set appNetworkAccessType(value) {
        this._appNetworkAccessType = value;
    }
    resetAppNetworkAccessType() {
        this._appNetworkAccessType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get appNetworkAccessTypeInput() {
        return this._appNetworkAccessType;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // auth_mode - computed: false, optional: false, required: true
    _authMode;
    get authMode() {
        return this.getStringAttribute('auth_mode');
    }
    set authMode(value) {
        this._authMode = value;
    }
    // Temporarily expose input value. Use with caution.
    get authModeInput() {
        return this._authMode;
    }
    // domain_name - computed: false, optional: false, required: true
    _domainName;
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    // home_efs_file_system_id - computed: true, optional: false, required: false
    get homeEfsFileSystemId() {
        return this.getStringAttribute('home_efs_file_system_id');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kms_key_id - computed: false, optional: true, required: false
    _kmsKeyId;
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
    get singleSignOnManagedApplicationInstanceId() {
        return this.getStringAttribute('single_sign_on_managed_application_instance_id');
    }
    // subnet_ids - computed: false, optional: false, required: true
    _subnetIds;
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // url - computed: true, optional: false, required: false
    get url() {
        return this.getStringAttribute('url');
    }
    // vpc_id - computed: false, optional: false, required: true
    _vpcId;
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    set vpcId(value) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    get vpcIdInput() {
        return this._vpcId;
    }
    // default_user_settings - computed: false, optional: false, required: true
    _defaultUserSettings = new SagemakerDomainDefaultUserSettingsOutputReference(this, "default_user_settings", true);
    get defaultUserSettings() {
        return this._defaultUserSettings;
    }
    putDefaultUserSettings(value) {
        this._defaultUserSettings.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get defaultUserSettingsInput() {
        return this._defaultUserSettings.internalValue;
    }
    // retention_policy - computed: false, optional: true, required: false
    _retentionPolicy = new SagemakerDomainRetentionPolicyOutputReference(this, "retention_policy", true);
    get retentionPolicy() {
        return this._retentionPolicy;
    }
    putRetentionPolicy(value) {
        this._retentionPolicy.internalValue = value;
    }
    resetRetentionPolicy() {
        this._retentionPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retentionPolicyInput() {
        return this._retentionPolicy.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
            auth_mode: cdktf.stringToTerraform(this._authMode),
            domain_name: cdktf.stringToTerraform(this._domainName),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            vpc_id: cdktf.stringToTerraform(this._vpcId),
            default_user_settings: sagemakerDomainDefaultUserSettingsToTerraform(this._defaultUserSettings.internalValue),
            retention_policy: sagemakerDomainRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnZW1ha2VyLWRvbWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsic2FnZW1ha2VyLWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE4RC9CLE1BQU0sVUFBVSx3RkFBd0YsQ0FBQyxNQUFxTDtJQUM1UixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLGFBQWEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM1RCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGlCQUFpQixDQUFDO0tBQ3hFLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLDRGQUE2RixTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQzNILGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFh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