import Path from "path";
import Process from "process";

import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { Container, Image, DockerProvider } from "@cdktf/provider-docker";

const TF = TerraformStack;

class Stack extends TerraformStack {
    provider: DockerProvider;

    image: Image;

    container: Container;

    constructor(scope: Construct, name: string) {
        super( scope, name );

        this.provider = new DockerProvider( this, "nginx", {} );

        this.image = new Image( this, "nginx-base-image", {
            name: "nginx:latest",
            keepLocally: false,
            forceRemove: true
        } );

        this.container = new Container( this, "nginx-base-container", {
            image: this.image.latest,
            name: "nginx-base-http-container",
            destroyGraceSeconds: 30,
            ports: [
                {
                    internal: 80,
                    external: 8000
                }
            ]
        } );
    }
}

const Application = new App({
    skipValidation: false,
    stackTraces: true
});

const Instance = new Stack( Application, "NGINX-Base-HTTP-Container-Image" );

/*** @param name {string} - Name of the Generated Stack */
/// const Generator = (name: string) => new Stack( Application, ["NGINX-Base-HTTP-Container-Image", name].join("-") );

Application.synth();

export { TF, Application, Stack, Instance };

export default Instance;