import os
import pprint
import typing
import dataclasses

import boto3
import botocore

import Utility.Type

from Utility.Type import *

Session     = boto3.Session()

Profile     = Session.profile_name
Region      = Session.region_name

Credentials = Session.get_credentials()

@Type
class Boto:
    API: boto3 = boto3
    Core: botocore = botocore

@Type
class Credential:
    Access: Optional[String] = Credentials.access_key
    Secret: Optional[String] = Credentials.secret_key

@Type
class Wrapper(Utility.Type.Base):
    Name: Utility.Type.String = __name__

    Session: boto3.Session = Session

    Credentials: Credential = Credential

    Profile: Utility.Type.String = Profile
    Region: Utility.Type.String = Region
    Output: Utility.Type.String = "json"

    @staticmethod
    def Client(Service: String) -> Dictionary:
        SDK = boto3.client(("%s" % Service).casefold())

        return {
            "Service": SDK,
            "Meta": SDK.meta.method_to_api_mapping,
            "Waiters": SDK.waiter_names
        }

    @staticmethod
    def Resource(Service: String):
        return boto3.resource(("%s" % Service).casefold())

    @property
    def __repr__(self) -> str:
        return super().__repr__()

__all__ = [
    "Profile",
    "Region",
    "Wrapper",

    "Boto",

    "Integer",
    "String",
    "Float",
    "Bytes",
    "Array",
    "List",
    "Address",
    "Dictionary",
    "Tuple",
    "Optional",
    "Union",
    "Generic",
    "Type",
    "Base"
]
