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
import enum
import uuid
import typing
import secrets
import datetime
import functools

import textwrap

import pprint

# =============================================================================
# External
# =============================================================================

import fastapi

import starlette.exceptions
import starlette.responses

# =============================================================================
# Local Imports
# =============================================================================

import API.ASGI as ASGI

import Database

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

import typing

Boolean = bool
Integer = int
String = str
Bytes = bytes
Array = bytearray

Optional = typing.Optional

List = typing.List
Dictionary = typing.Dict
Tuple = typing.Tuple
Union = typing.Union

JSON = starlette.responses.JSONResponse
Error = starlette.exceptions.HTTPException

Random = lambda: secrets.randbelow(9)

# =============================================================================
# Packaged Exports
# =============================================================================

class Request:
    """
    Implicit Instance Idiom
    """

    Responses = {
        200:    {
            "description": "Successful Request Resolution"
        }
    }

    Prefix = "/API"

    Tags = [
        "Utilities"
    ]

    Generator = ASGI.Application.Generator

    __slots__ = ()

    __dict__ = None

    __new__ = lambda *_: ...

Format = textwrap.dedent

Date: type(datetime.datetime) = datetime.datetime

Today = lambda: datetime.date.strftime(datetime.datetime.today(), "%d-%B-%Y")

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

Query = fastapi.Query
Body = fastapi.Body
Form = fastapi.Form
File = fastapi.File

__all__ = [
    "uuid",
    "Random",
    "String",
    "Boolean",
    "Dictionary",
    "Tuple",
    "List",
    "Integer",
    "JSON",
    "Error",
    "Request",
    "Format",
    "Date",
    "Type",
    "Today",
    "Query",
    "ASGI",
    "Body",
    "Form",
    "File",
    "Optional",
    "Union"
]
