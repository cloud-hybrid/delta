/***
 * @author      Jacob B. Sanders
 * @package     @cloud-technology
 * @summary     Module Exportable
 *
 * @license     BSD 3-Clause License
 * @copyright   Cloud-Technology LLC. & Affiliates
 */
import Path from "path";
import Process from "process";
import AWS from "@cdktf/provider-aws";
import { App, TerraformStack, TerraformOutput } from "cdktf";
const Provider = (instance) => {
    new AWS.AwsProvider(instance, "AWS-Provider-ID", {
        region: "us-east-2",
    });
};
class TF extends TerraformStack {
}
class Stack extends TF {
    constructor(scope, { name, protocol, }, overwrites = {}) {
        super(scope, name);
        /// ==> Cloud Provider
        Provider(this);
        // Create and Configure API Gateway
        const Gateway = new AWS.apigatewayv2.Apigatewayv2Api(this, "AWS-API-Gateway-Version-2", {
            name: name,
            protocolType: protocol,
            ...overwrites,
        });
        /// --> Data Attributes Binding
        Stack.Gateway(this, Gateway);
        /// --> Define Stateful Stack Attributes
        const Output = new TerraformOutput(this, "TF-Output-API-Gateway-URL", {
            value: {
                Name: name,
            },
        });
        // --> Stack Data Output
        Stack.Output(this, Output);
    }
}
Stack.Gateway = (instance, Data) => {
    instance.gateway = Data;
};
Stack.Output = (instance, output) => {
    instance.output = output;
};
class Gateway extends Stack {
}
const Application = new App({
    outdir: Path.relative(Process.cwd(), "distribution"),
    skipValidation: false,
    stackTraces: true,
});
export { Gateway };
export default Gateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJLUdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBUEktR2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztHQU9HO0FBRUgsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQ3hCLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUU5QixPQUFPLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQztBQU10QyxPQUFPLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxPQUFPLENBQUM7QUE2QzdELE1BQU0sUUFBUSxHQUFHLENBQUMsUUFBd0IsRUFBRSxFQUFFO0lBQzFDLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7UUFDN0MsTUFBTSxFQUFFLFdBQVc7S0FDdEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsTUFBTSxFQUFHLFNBQVEsY0FBYztDQUFHO0FBRWxDLE1BQU0sS0FBTSxTQUFRLEVBQUU7SUFXbEIsWUFDSSxLQUFnQixFQUNoQixFQUNJLElBQUksRUFDSixRQUFRLEdBQ0QsRUFDWCxhQUFpQyxFQUFFO1FBRW5DLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkIsc0JBQXNCO1FBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVmLG1DQUFtQztRQUNuQyxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSwyQkFBMkIsRUFBRTtZQUNwRixJQUFJLEVBQUUsSUFBSTtZQUNWLFlBQVksRUFBRSxRQUFRO1lBQ3RCLEdBQUksVUFBVTtTQUNqQixDQUFDLENBQUM7UUFFSCwrQkFBK0I7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFN0Isd0NBQXdDO1FBQ3hDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSwyQkFBMkIsRUFBRTtZQUNsRSxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLElBQUk7YUFDYjtTQUNKLENBQUMsQ0FBQztRQUVILHdCQUF3QjtRQUN4QixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOztBQXpDYSxhQUFPLEdBQWdCLENBQUMsUUFBZSxFQUFFLElBQXFCLEVBQUUsRUFBRTtJQUM1RSxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUM1QixDQUFDLENBQUM7QUFHWSxZQUFNLEdBQWdCLENBQUMsUUFBZSxFQUFFLE1BQVcsRUFBRSxFQUFFO0lBQ2pFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQXFDTixNQUFNLE9BQVEsU0FBUSxLQUFLO0NBQUc7QUFFOUIsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLGNBQWMsQ0FBQztJQUNwRCxjQUFjLEVBQUUsS0FBSztJQUNyQixXQUFXLEVBQUUsSUFBSTtDQUNwQixDQUFDLENBQUM7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUEyQixDQUFDO0FBRTVDLGVBQWUsT0FBTyxDQUFDIn0=