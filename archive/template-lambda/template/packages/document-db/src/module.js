const Response = (body = {}, status = 200, headers = {}) => {
    return {
        statusCode: status, body, headers: {
            ... {
                "Server": "X-Secrets-Service",
                "Content-Type": "Application/JSON"
            }, ... headers
        }
    }
};

module.exports = {
    Response
};
