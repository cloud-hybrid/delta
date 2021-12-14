/***
 * @name        EC2 Utility
 * @package     @cloud-technology
 * @summary     ESM-based CLI Prompt
 *
 * @author      Jacob B. Sanders
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */

import * as FS from "fs";

const Client = (await import("@aws-sdk/client-ec2")).EC2;

const Service = new Client({region: "us-east-2"});

const Schema = (Properties) => {
    const Tags = Properties.Tags?.filter(($) => !(String($.Key).includes("aws")));

    return {
        "Name": Properties?.Name,
        "Description": Properties?.Description,
        "Creation-Date": Properties?.CreatedDate,
        "Modification-Date": Properties?.LastChangedDate,
        "Access-Date": Properties?.LastAccessedDate,
        "Tags": Tags || Properties?.Tags
    };
};

const Function = (async () => {
    const Service = new Client();

    const AMI = {
        IDs: [],
        Total: -1
    };

    const Container = {
        Instances: [],
        Total: -1
    };

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

    FS.writeFileSync("AWS-EC2-Instances.json", Data);
    console.log("AMIs" + ":", JSON.stringify(AMI, null, 4));

    console.log("Total Instances" + ":", Container.length);
})();