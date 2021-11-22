#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

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
import json
import uuid
import typing
import pprint
import datetime
import functools
import dataclasses

from devtools import debug

# =============================================================================
# External Package(s)
# =============================================================================

import fastapi
from fastapi import (
    Query,
    Form,
    File,
    Header,
    UploadFile,
    Path,
    Body,
    Request,
    Response,
    Security,
    Depends,
    HTTPException,
    websockets,
    WebSocket,
    WebSocketDisconnect
)

# =============================================================================
# Local Imports
# =============================================================================

import API

import API.ASGI as ASGI

from API.ASGI.Authentication.Context import (
    Interface as Authentication
)

import API.ASGI.Responses

import Utility.AWS

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

JSON = json # ... starlette.responses.UJSONResponse
Error = HTTPException
List = typing.List
Union = typing.Union
Optional = typing.Optional
Boolean = bool
Integer = int
String = str
Dictionary = dict
Tuple = tuple
Bytes = bytes
Array = bytearray

Date: type(datetime.datetime) = datetime.datetime

Today = lambda: Date.strptime(Date.today().strftime("%d-%B-%Y"), "%d-%B-%Y")

class Type(str, enum.Enum):
    """
    Type-Hinted, Type-Forced Casting Types
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

class Request:
    """
    Implicit Instance Idiom
    """

    Form = fastapi.Form
    File = fastapi.File
    Upload = fastapi.UploadFile

    Responses = API.ASGI.Responses.Types

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

Wrapper: Utility.AWS.Wrapper = Utility.AWS.Wrapper()

__all__ = [
    "os",
    "sys",
    "copy",
    "enum",
    "json",
    "uuid",
    "typing",
    "pprint",
    "fastapi",
    "datetime",
    "functools",
    "dataclasses",

    "API",
    "ASGI",

    "List",
    "Union",
    "Optional",
    "Boolean",
    "Integer",
    "String",
    "Dictionary",
    "Tuple",
    "Bytes",
    "Array",

    "JSON",
    "Error",

    "Date",
    "Today",
    "Type",

    "Query",
    "Form",
    "File",
    "Header",
    "UploadFile",
    "Path",
    "Body",
    "Request",
    "Response",
    "Security",
    "Depends",

    "Request",

    "Secure",

    "Wrapper",

    "websockets",
    "WebSocket",
    "WebSocketDisconnect"
]
