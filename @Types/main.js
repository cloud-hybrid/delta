import { App, TerraformStack } from "cdktf";
class MyStack extends TerraformStack {
    constructor(scope, name) {
        super(scope, name);
        // define resources here
    }
}
const app = new App();
new MyStack(app, "aws-lambda");
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUU1QyxNQUFNLE9BQVEsU0FBUSxjQUFjO0lBQ2xDLFlBQVksS0FBZ0IsRUFBRSxJQUFZO1FBQ3hDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFbkIsd0JBQXdCO0lBQzFCLENBQUM7Q0FDRjtBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDdEIsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyJ9