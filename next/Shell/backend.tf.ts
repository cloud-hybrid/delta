import * as CDK from "cdktf";
import Construct from "construct"

declare abstract class TerraformRemoteState extends CDK.TerraformElement implements CDK.ITerraformAddressable {
    private readonly backend;
    private readonly config;
    /**
     * @experimental
     */
    static readonly tfResourceType = "terraform_remote_state";
    /**
     * @experimental
     */
    readonly fqn: string;
    /**
     * @experimental
     */
    constructor(scope: Construct, id: string, backend: string, config: CDK.DataTerraformRemoteStateRemoteConfig);
}


