# Limiting Access via Tags #

- https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-tagging-iam-policy.html

The following example policy grants users permission to perform GET actions on all resources. In addition, if a resource has a tag named iamrole with a value of readWrite, the policy grants users permission to perform all actions on the
resource.

The following example policy specifies that:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "apigateway:GET",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "apigateway:*",
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/iamrole": "readWrite"
                }
            }
        }
    ]
}
```

When the user creates a new stage, the request to create the stage must contain a tag named stage. The value of the stage tag must be beta, gamma, or prod. Otherwise, the request to create the stage is denied.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "apigateway:*"
            ],
            "Resource": [
                "*"
            ]
        },
        {
            "Effect": "Deny",
            "Action": "apigateway:POST",
            "Resource": "arn:aws:apigateway:*::/restapis/*/stages",
            "Condition": {
                "Null": {
                    "aws:RequestTag/stage": "true"
                }
            }
        },
        {
            "Effect": "Deny",
            "Action": "apigateway:POST",
            "Resource": "arn:aws:apigateway:*::/restapis/*/stages",
            "Condition": {
                "ForAnyValue:StringNotEquals": {
                    "aws:RequestTag/stage": [
                        "beta",
                        "gamma",
                        "prod"
                    ]
                }
            }
        }
    ]
}
```