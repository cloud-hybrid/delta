// import "cdktf/lib/testing/adapters/jest"; // Load types for expect matchers
// import { Testing } from "cdktf";
// describe("My CDKTF Application", () => {
// The tests below are example tests, you can find more information at
// https://cdk.tf/testing
// it.todo("should be tested");
// // All Unit testst test the synthesised terraform code, it does not create real-world resources
// describe("Unit testing using assertions", () => {
//   it("should contain a resource", () => {
//     // import { Image,Container } from "./.gen/providers/docker"
//     expect(
//       Testing.synthScope((scope) => {
//         new MyApplicationsAbstraction(scope, "my-app", {});
//       })
//     ).toHaveResource(Container);
//     expect(
//       Testing.synthScope((scope) => {
//         new MyApplicationsAbstraction(scope, "my-app", {});
//       })
//     ).toHaveResourceWithProperties(Image, { name: "ubuntu:latest" });
//   });
// });
// describe("Unit testing using snapshots", () => {
//   it("Tests the snapshot", () => {
//     const app = Testing.app();
//     const stack = new TerraformStack(app, "test");
//     new TestProvider(stack, "provider", {
//       accessKey: "1",
//     });
//     new TestResource(stack, "test", {
//       name: "my-resource",
//     });
//     expect(Testing.synth(stack)).toMatchSnapshot();
//   });
//   it("Tests a combination of resources", () => {
//     expect(
//       Testing.synthScope((stack) => {
//         new TestDataSource(stack, "test-data-source", {
//           name: "foo",
//         });
//         new TestResource(stack, "test-resource", {
//           name: "bar",
//         });
//       })
//     ).toMatchInlineSnapshot();
//   });
// });
// describe("Checking validity", () => {
//   it("check if the produced terraform configuration is valid", () => {
//     const app = Testing.app();
//     const stack = new TerraformStack(app, "test");
//     new TestDataSource(stack, "test-data-source", {
//       name: "foo",
//     });
//     new TestResource(stack, "test-resource", {
//       name: "bar",
//     });
//     expect(Testing.fullSynth(app)).toBeValidTerraform();
//   });
//   it("check if this can be planned", () => {
//     const app = Testing.app();
//     const stack = new TerraformStack(app, "test");
//     new TestDataSource(stack, "test-data-source", {
//       name: "foo",
//     });
//     new TestResource(stack, "test-resource", {
//       name: "bar",
//     });
//     expect(Testing.fullSynth(app)).toPlanSuccessfully();
//   });
// });
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi10ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi10ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RSxtQ0FBbUM7QUFFbkMsMkNBQTJDO0FBQzNDLHNFQUFzRTtBQUN0RSx5QkFBeUI7QUFDekIsK0JBQStCO0FBRS9CLGtHQUFrRztBQUNsRyxvREFBb0Q7QUFDcEQsNENBQTRDO0FBQzVDLG1FQUFtRTtBQUNuRSxjQUFjO0FBQ2Qsd0NBQXdDO0FBQ3hDLDhEQUE4RDtBQUM5RCxXQUFXO0FBQ1gsbUNBQW1DO0FBRW5DLGNBQWM7QUFDZCx3Q0FBd0M7QUFDeEMsOERBQThEO0FBQzlELFdBQVc7QUFDWCx3RUFBd0U7QUFDeEUsUUFBUTtBQUNSLE1BQU07QUFFTixtREFBbUQ7QUFDbkQscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQyxxREFBcUQ7QUFFckQsNENBQTRDO0FBQzVDLHdCQUF3QjtBQUN4QixVQUFVO0FBRVYsd0NBQXdDO0FBQ3hDLDZCQUE2QjtBQUM3QixVQUFVO0FBRVYsc0RBQXNEO0FBQ3RELFFBQVE7QUFFUixtREFBbUQ7QUFDbkQsY0FBYztBQUNkLHdDQUF3QztBQUN4QywwREFBMEQ7QUFDMUQseUJBQXlCO0FBQ3pCLGNBQWM7QUFFZCxxREFBcUQ7QUFDckQseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxXQUFXO0FBQ1gsaUNBQWlDO0FBQ2pDLFFBQVE7QUFDUixNQUFNO0FBRU4sd0NBQXdDO0FBQ3hDLHlFQUF5RTtBQUN6RSxpQ0FBaUM7QUFDakMscURBQXFEO0FBRXJELHNEQUFzRDtBQUN0RCxxQkFBcUI7QUFDckIsVUFBVTtBQUVWLGlEQUFpRDtBQUNqRCxxQkFBcUI7QUFDckIsVUFBVTtBQUNWLDJEQUEyRDtBQUMzRCxRQUFRO0FBRVIsK0NBQStDO0FBQy9DLGlDQUFpQztBQUNqQyxxREFBcUQ7QUFFckQsc0RBQXNEO0FBQ3RELHFCQUFxQjtBQUNyQixVQUFVO0FBRVYsaURBQWlEO0FBQ2pELHFCQUFxQjtBQUNyQixVQUFVO0FBQ1YsMkRBQTJEO0FBQzNELFFBQVE7QUFDUixNQUFNO0FBQ04sS0FBSyJ9