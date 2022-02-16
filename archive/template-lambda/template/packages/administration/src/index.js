const { Service, Response, Schema } = require("./module.js");

console.log("Loading Function ...");
exports.handler = async (event, context) => {
    console.trace("[Trace] Invocation Context" + ":", JSON.stringify(context));

    const Container = [];

    let $ = await Service.listSecrets({MaxResults: 20, SortOrder: "asc", Filters: null, NextToken: null});

    while ($.NextToken) {
        $.SecretList.forEach((Secret) => {
            const Instance = Schema(Secret);
            Container.push(Instance);
        })

        const Token = $?.NextToken;
        if (Token === undefined) break;

        $ = await Service.listSecrets({
            SortOrder: "asc",
            Filters: null,
            NextToken: Token
        });
    }

    console.info("Secrets-List" + ":", Container);

    const Body = JSON.stringify({ Secrets: Container, Trigger: event }, null, 4);

    console.info("Data" + ":", Body);

    return Response(Body);
}
