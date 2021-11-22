Types = {
    200:
        {
            "description": "Successful Request Resolution"
        },
    # ... 201:
    # ...     {
    # ...         "description": "Created - Request has Successfully Provisioned a New Resource"
    # ...     },
    # ... 202:
    # ...     {
    # ...         "description": "Accepted & Processing - Request has been Queued but Cannot be Awaited"
    # ...     },
    # ... 204:
    # ...     {
    # ...         "description": "Successful Query - Response has been Cached"
    # ...     },
    # ... 205:
    # ...     {
    # ...         "description": "Request Initiated - Client is Requested for a DOM Reset"
    # ...     },
    # ... 400:
    # ...     {
    # ...         "description": "Malformed Request - Client Modification(s) Required"
    # ...     },
    401:
        {
            "description": "Access Conditionally Denied - Client Authentication Required"
        },
    # ... 403:
    # ...     {
    # ...         "description": "Access Denied - Insufficient Application Permission(s)"
    # ...     },
    # ... 404:
    # ...     {
    # ...         "description": "Resource Not Found - Requested Target Resource is Temporarily or Permanently Missing"
    # ...     },
    # ... 405:
    # ...     {
    # ...         "description": "Unsupported Request Method - Target Resource URI is Denied"
    # ...     },
    # ... 409:
    # ...     {
    # ...         "description": "Write Conflict - Source State Conflict with Requested Target Resource"
    # ...     },
    # ... 415:
    # ...     {
    # ...         "description": "Unsupported Media Type - Content Encoding || Type Refused by Server"
    # ...     },
    422:
        {
            "description": "Unprocessable Entity - Content Encoding && Type Accepted, Malformed Client Data"
        }
}
