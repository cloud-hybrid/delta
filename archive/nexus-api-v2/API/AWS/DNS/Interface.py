import asyncio
import dataclasses
import json
import os
import ssl

import botocore.exceptions
import starlette.requests

from fastapi.exceptions import HTTPException

from . import *

import API.ASGI.Authentication.Token as Token

# =============================================================================
# Standard Library
# =============================================================================

import time
import asyncio
import datetime
import tempfile

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

import boto3.s3.transfer

import Database.User.Interfaces.User.API
import Database.User.Schemas.Nexus

from devtools import debug

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)

    Generator is a Wrapper around FastAPI's Router
    """

    Bucket = "nexus-client-storage"

    Endpoint = Request.Prefix + __module__.split(".")[-2]

    Generator = Request.Generator()

    Generator.prefix                    = Endpoint
    Generator.tags                      = Request.Tags + __module__.split(".")[1:-1]
    Generator.dependencies              = {} # ... { Secure }
    Generator.include_in_schema         = True

    @classmethod
    def set(cls, client: boto3.client):
        return client.change_resource_record_sets(
            ChangeBatch={
                'Changes': [
                    {
                        'Action': 'CREATE',
                        'ResourceRecordSet': {
                            'Name': 'example.com',
                            'ResourceRecords': [
                                {
                                    'Value': '192.0.2.44',
                                },
                            ],
                            'TTL': 60,
                            'Type': 'A',
                        },
                    },
                ],
                'Comment': 'Web server for example.com',
            },
            HostedZoneId='Z3M3LMPEXAMPLE',
        )

    @staticmethod
    @Generator.post("/Meta",
        name = "Route-53 Meta-Data",
        responses = Request.Responses,
        response_model = Optional[Schema.Meta]
    )
    async def Meta():
        Client = Wrapper.Client("Route53")
        Client.pop("Service")

        return Schema.Meta(**{"Data": Client})

    @staticmethod
    @Generator.post("/Create/JSON",
        name = "Route-53 Create Record-Set (JSON)",
        responses = Request.Responses,
        # response_model = Optional[Schema.Create]
    )
    async def Create(Data: Schema.Create = Body(..., media_type = "Application/JSON")):
        """
        ## Hosted Zone(s) ##

        |            ID             |         URL          |
        |:-------------------------:|:--------------------:|
        | `Z062169438ARKPJ0QLEG5`   | **url-list.com**     |
        | `Z0903881WW4VJX06O83`     | **social-url.com**   |
        | `Z07370352I7Q5NXRZZQLH`   | **social-url.link**  |
        | `Z0730147BDV3KR69STTA`    | **socials.name**     |

        """

        Data.Name = Data.Name.lower()

        TLD = ".".join(Data.Name.split(".")[1:])
        if TLD not in Schema.TLD.values():
            raise HTTPException(422, {
                "Error": "{0} !:= Available TLD Domain Name(s)".format(Data.Name)
            })

        if Data.Zone not in Schema.IDs.Map.values():
            raise HTTPException(422, {
                "Error": "{0} !:= in Available Host-Zone(s)".format(Data.Zone)
            })

        Client = Wrapper.Client("Route53").get("Service")

        Response = Client.change_resource_record_sets(
            HostedZoneId = Data.Zone,
            ChangeBatch = {
                "Changes": [
                    {
                        "Action": Data.Action.value,
                        "ResourceRecordSet": {
                            "Name": Data.Name,
                            "ResourceRecords": [
                                {
                                    "Value": Data.Assignment,
                                },
                            ],
                            "TTL": Data.TTL,
                            "Type": Data.Type.value,
                        },
                    },
                ],
                "Comment": Data.Comment if Data.Comment else None
            }
        )

        return Response

    @staticmethod
    @Generator.post("/Create/Form",
        name = "Route-53 Create Record-Set (Form)",
        # responses = Request.Responses,
        # response_model = Optional[Schema.Create]
    )
    async def Form(
        Zone: Schema.ID = Form(...),
        Name: String = Form(...),
        Assignment: String = Form(...),
        Action: Schema.CRUD = Form(...),
        TTL: Integer = Form(default = 60),
        Type: Schema.Record = Form(...),
        Comment: Optional[String] = Form(default = "")
    ):
        """
        ## Hosted Zone(s) ##

        |            ID             |         URL          |
        |:-------------------------:|:--------------------:|
        | `Z062169438ARKPJ0QLEG5`   | **url-list.com**     |
        | `Z0903881WW4VJX06O83`     | **social-url.com**   |
        | `Z07370352I7Q5NXRZZQLH`   | **social-url.link**  |
        | `Z0730147BDV3KR69STTA`    | **socials.name**     |

        """

        Name = Name.lower()

        TLD = ".".join(Name.split(".")[1:])
        if TLD not in Schema.TLD.values():
            raise HTTPException(422, {
                "Error": "{0} !:= Available TLD Domain Name(s)".format(Name)
            })

        if Zone not in Schema.IDs.Map.values():
            raise HTTPException(422, {
                "Error": "{0} !:= in Available Host-Zone(s)".format(Zone)
            })

        Client = Wrapper.Client("Route53").get("Service")

        Response = Client.change_resource_record_sets(
            HostedZoneId = Zone,
            ChangeBatch = {
                "Changes": [
                    {
                        "Action": Action.value,
                        "ResourceRecordSet": {
                            "Name": Name,
                            "ResourceRecords": [
                                {
                                    "Value": Assignment,
                                },
                            ],
                            "TTL": TTL,
                            "Type": Type.value,
                        },
                    },
                ],
                "Comment": Comment if Comment else None
            }
        )

        return Response

API.ASGI.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
