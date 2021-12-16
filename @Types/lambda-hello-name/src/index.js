export const handler = async (event) => {
    const queries = event.queryStringParameters;
    let name = 'there';
    if (queries !== null && queries !== undefined) {
        if (queries["name"]) {
            name = queries["name"];
        }
    }
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
        },
        body: `<p>Hello ${name}!</p>`,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxhbWJkYS1oZWxsby1uYW1lL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUN4QixLQUEyQixFQUNHLEVBQUU7SUFDaEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDO0lBQzVDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUVuQixJQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtRQUMzQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQixJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCO0tBQ0o7SUFFRCxPQUFPO1FBQ0gsVUFBVSxFQUFFLEdBQUc7UUFDZixPQUFPLEVBQUU7WUFDTCxjQUFjLEVBQUUsMEJBQTBCO1NBQzdDO1FBQ0QsSUFBSSxFQUFFLFlBQVksSUFBSSxPQUFPO0tBQ2hDLENBQUE7QUFDTCxDQUFDLENBQUEifQ==