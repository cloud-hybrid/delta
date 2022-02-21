import { Command } from "./subprocess.js";

/***
 * Regional Exclusions
 * -------------------
 * *Note* - ap-southeast-3 is an "Unknown Region" to the Cloud-Trail Resource(s)
 *
 * @type {string[]}
 *
 */

const Exclusions = [
    "af-south-1", "eu-south-1", "me-south-1", "ap-east-1", "ap-southeast-3"
];

const Data = JSON.parse(Command("aws ec2 describe-regions --all-region --query '*[].RegionName'"));

const Regions = [];
Data.forEach(($) => {
    if (!Exclusions.includes($)) {
        Regions.push($);
    }
});

export { Regions };

export default Regions;
