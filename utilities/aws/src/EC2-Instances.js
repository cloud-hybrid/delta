/***
 * @name        EC2-Utility
 * @package     @cloud-technology
 * @summary     ESM EC2 Extension
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import * as FS from "fs";
import * as Path from "path";

import { CWD } from "./../index.js";

const Client = (await import("@aws-sdk/client-ec2")).EC2;

const Service = new Client({region: "us-east-2"});

const AMI = {
    IDs: [],
    Total: -1
};

const Container = {
    Instances: [],
    Total: -1
};

const Function = async () => {
    let $ = await Service.describeInstances({Filters: null, NextToken: null});
    $.Reservations.forEach((Data) => {
        Data.Instances.forEach((VPS) => {
            AMI.IDs.push(VPS.ImageId);
            Container.Instances.push(VPS);
        });
    });

    while ( $.NextToken ) {
        $.Reservations.forEach((Data) => {
            Data.Instances.forEach((VPS) => {
                AMI.IDs.push(VPS.ImageId);
                Container.Instances.push(VPS);
            });
        });

        const Token = $?.NextToken;
        if ( Token === undefined ) break;

        $ = await Service.describeInstances({
            NextToken: Token
        });
    }

    AMI.Total = AMI.IDs.length;
    Container.Total = Container.Instances.length;

    const Data = JSON.stringify(Container, null, 4);

    FS.writeFileSync([CWD, "Instances.json"].join(Path.sep), Data);
};

export { Function };

export default Function;