#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""

[...]

"""

# =============================================================================
# Standard Library
# =============================================================================

import os
import sys
import copy
import enum
import uuid
import typing
import pprint
import datetime
import functools
import dataclasses

# =============================================================================
# External Package(s)
# =============================================================================

import json

import fastapi
import fastapi.responses

import pydantic

import pydantic.typing
import pydantic.networks
import pydantic.typing
import pydantic.types

import starlette.exceptions
import starlette.responses
import starlette.requests

Ingress = starlette.requests.Request

from bson.objectid import (
    ObjectId
)

# =============================================================================
# Local Imports
# =============================================================================

import API
import API.ASGI
import API.ASGI.Responses

import Mongo

from API.ASGI.Authentication.Context import (
    Interface as Authentication
)

import Model as Schema

Scheme = Schema.Model

Type = pydantic.dataclasses.dataclass

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Depends = fastapi.Depends
Response = fastapi.responses.JSONResponse

Query = fastapi.Query
JSON = json # ... starlette.responses.UJSONResponse
Error = starlette.exceptions.HTTPException

Dependency = fastapi.Depends

Secret = pydantic.SecretStr
# ... Email = pydantic.EmailStr
UUID = pydantic.UUID4

List = typing.List
Optional = typing.Optional
Union = typing.Union

Boolean = bool
Integer = int
String = str
Dictionary = dict
Tuple = tuple
Bytes = bytes
Array = bytearray

fprint = pprint.pprint

Date: type(datetime.datetime) = datetime.datetime

Today = lambda: Date.strptime(Date.today().strftime("%d-%B-%Y"), "%d-%B-%Y")

Unique = enum.unique
General = typing.Any
Enumeration = enum.Enum
Field = pydantic.Field

Email = String
Corporate = pydantic.NameEmail
Requirement = pydantic.Required
URL = pydantic.AnyUrl
Password = pydantic.types.SecretStr
Token = pydantic.types.SecretStr

class Type(str, enum.Enum):
    """
    Industry Types
    """

    String = "String"
    Integer = "Integer"
    Bytes = "Bytes"
    Default = "Integer"
    Pointer = "Pointer"
    Array = "Array"
    Hexadecimal = "Hexadecimal"

    @classmethod
    def MRO(cls) -> List[str]:
        """
        ...
        """

        return [Index for Index in
            cls.__members__.keys()
        ]

    def cast(self, value):
        if self.value == "String":
            return "{0}".format(value)
        elif self.value == "Integer":
            return Integer("%s" % value)
        elif self.value == "Bytes":
            return Bytes(value)
        elif self.value == "Array":
            return String(Array(value), encoding = "UTF-8")
        elif self.value == "Pointer":
            return "%s" % memoryview(Bytes(value))
        elif self.value == "Hexadecimal":
            return memoryview(Bytes(value)).hex()
        else: return value

# =============================================================================
# Packaged Exports
# =============================================================================

Secure = Depends(Authentication.Session)

@dataclasses.dataclass(frozen = True)
class IPv4:
    """
    ...
    """

    IP: pydantic.networks.IPv4Address = pydantic.networks.IPv4Address
    Interface: pydantic.networks.IPv4Interface = pydantic.networks.IPv4Interface
    Network: pydantic.networks.IPv4Network = pydantic.networks.IPv4Network

@dataclasses.dataclass(frozen = True)
class IPv6:
    """
    ...
    """

    IP: pydantic.networks.IPv6Address = pydantic.networks.IPv6Address
    Interface: pydantic.networks.IPv6Interface = pydantic.networks.IPv6Interface
    Network: pydantic.networks.IPv6Network = pydantic.networks.IPv6Network

@dataclasses.dataclass(init = False, frozen = True)
class Network:
    """
    ...
    """

    Module: pydantic.networks = pydantic.networks

    IPv4: IPv4 = IPv4()
    IPv6: IPv6 = IPv6()

@Unique
class Industry(str, enum.Enum):
    """
    Industry Types
    """

    IT = "IT"
    Medical = "Medical"
    Construction = "Construction"
    Entertainment = "Entertainment"
    Transportation = "Transportation"
    Security = "Security"
    Consulting = "Consulting"
    Hospitality = "Hospitality"
    Automobile = "Automobile"
    Estate = "Real-Estate"
    Finance = "Finance"
    Insurance = "Insurance"
    Oil = "Oil"
    Mining = "Mining"
    Energy = "Energy"
    Engineering = "Engineering"
    Electronics = "Electronics"
    Legal = "Legal"
    Telecommunications = "Telecommunications"
    Retail = "Retail"
    Education = "Education"
    Storage = "Storage"
    Textiles = "Textiles"
    Agriculture = "Agriculture"
    Manufacturing = "Manufacturing"
    Gaming = "Gaming"

class ISO5218(int, enum.Enum):
    """
    ISO/IEC 5218 - Gender Codes
    """

    NULL = 0x0
    MALE = 0x1
    FEMALE = 0x2
    OTHER = 0x9


class Request:
    """
    Implicit Instance Idiom
    """

    Form = fastapi.Form
    File = fastapi.File
    Upload = fastapi.UploadFile

    Responses = API.ASGI.Responses.Types

    Ingress: Ingress = Ingress

    Prefix = "/" + "/".join(__module__.split(".")[:-1]) + "/"

    Tags = []

    Generator: API.ASGI.Base.Generator  = API.ASGI.Base.Generator

    Generator.dependencies = { Secure }

    __slots__ = ()

    __dict__ = None

    __new__ = lambda *_: ...

    @classmethod
    def Table(cls, Input, Type):
        return Type(**vars(Input))

class Object(String):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, _):
        if not isinstance(_, Object) or not isinstance(_, ObjectId):
            raise TypeError("Mongo ID-Type Required")
        return String(_)

# MongoDB _id field
class PydanticObjectId(String):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not isinstance(v, ObjectId):
            raise TypeError("ObjectId required")
        return String(v)

__all__ = [
    "os",
    "sys",
    "copy",
    "uuid",
    "typing",
    "fprint",
    "datetime",
    "functools",
    "dataclasses",
    "Mongo",
    "JSON",
    "Error",
    "Dependency",
    "Secret",
    "Query",
    "UUID",
    "List",
    "Union",
    "Optional",
    "Boolean",
    "Integer",
    "String",
    "Dictionary",
    "Tuple",
    "Type",
    "Date",
    "Today",
    "Request",
    "Object",
    "Secure",
    "Unique",
    "General",
    "Enumeration",
    "Field",
    "Email",
    "Corporate",
    "Requirement",
    "Scheme",
    "URL",
    "Password",
    "Token",
    "IPv4",
    "IPv6",
    "Network",
    "Industry",
    "ISO5218",
    "Type",
    "Schema",
    "Scheme",
    "Depends",
    "Bytes",
    "Response",
    "PydanticObjectId"
]
