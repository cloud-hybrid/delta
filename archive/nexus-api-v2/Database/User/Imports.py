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
import copy
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

import pydantic
import pydantic.types
import pydantic.networks

import sqlalchemy
import sqlalchemy.orm

import starlette.exceptions
import starlette.responses

# =============================================================================
# Local Imports
# =============================================================================

import Database
import Database.SQL

import API.ASGI.Responses

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Unique = enum.unique

Callable = typing.Callable

JSON = starlette.responses.JSONResponse
Error = starlette.exceptions.HTTPException

Local = Database.SQL.Local
Engine = Database.SQL.Engine
Depends = fastapi.Depends
Dependency = fastapi.Depends

List = typing.List
Union = typing.Union
Optional = typing.Optional

Boolean = bool
Integer = int
String = str
Dictionary = dict
Tuple = tuple

Address = pydantic.EmailStr
Secret = pydantic.SecretStr
UUID = pydantic.UUID4
UID = lambda: "{0}".format(uuid.uuid4()).upper()

fprint = pprint.pprint

# =============================================================================
# Packaged Exports
# =============================================================================

Connection = Dependency(lambda: Local())

# Connection = Dependency(Database.SQL.Local)

@Unique
class ISO5218(int, enum.Enum):
    """
    ISO/IEC 5218 - Gender Codes
    """

    Unspecified: Integer = 0x0
    Male: Integer = 0x1
    Female: Integer = 0x2
    Other: Integer = 0x9

    MRO: Callable = lambda: [_ for _ in ISO5218.__members__.keys()]
    Values: Callable = lambda: [_ for _ in ISO5218.__members__.values()]

    @property
    def Default(self) -> Integer:
        return 0x0

@Unique
class Gender(str, enum.Enum):
    """
    ISO/IEC 5218 - Gender Codes
    """

    Unspecified = "N/A"
    Male = "Male"
    Female = "Female"
    Other = "Other"

    MRO: Callable = lambda: [_ for _ in Gender.__members__.keys()]
    Values: Callable = lambda: [_ for _ in Gender.__members__.values()]

    @property
    def Default(self) -> String:
        return "N/A"

    @staticmethod
    def ISO5218IntegerCode(Key: String) -> Integer:
        return {
            "Unspecified": ISO5218(ISO5218.Unspecified),
            "Male":        ISO5218(ISO5218.Unspecified),
            "Female":      ISO5218(ISO5218.Unspecified),
            "Other":       ISO5218(ISO5218.Unspecified),
        }.get(Key, ISO5218(ISO5218.Unspecified))

class Request:
    """
    Implicit Instance Idiom
    """

    Form = fastapi.Form
    File = fastapi.File
    Upload = fastapi.UploadFile

    Responses = API.ASGI.Responses.Types.copy()

    Prefix = "/" + "API" + "/".join(__package__.split(".")[1:-1]) + "/"

    Tags = []

    Generator = Database.SQL.Application.Generator

    Generator.dependencies = {}

    __slots__ = ()

    __dict__ = None

    __new__ = lambda *_: ...

    @classmethod
    def Table(cls, Input, Type):
        return Type(**Input.__dict__)

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

    "JSON",
    "Error",
    "Local",
    "Engine",
    "Dependency",
    "Secret",
    "Address",
    "UUID",
    "List",
    "Union",
    "Optional",
    "Boolean",
    "Integer",
    "String",
    "Dictionary",
    "Tuple",

    "Connection",
    "Request",

    "Database",
    "ISO5218",
    "Gender",

    "UID"
]
