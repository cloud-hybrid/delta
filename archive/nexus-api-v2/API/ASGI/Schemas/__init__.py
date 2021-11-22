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
import uuid
import typing
import pkgutil
import datetime
import functools

import textwrap

import dataclasses

# =============================================================================
# External
# =============================================================================

import json

import fastapi

import pydantic

import sqlalchemy
import sqlalchemy.orm

import starlette.exceptions
import starlette.responses

# =============================================================================
# Local Imports
# =============================================================================

import Database
import Database.SQL
import Database.User

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Scheme = pydantic.BaseModel

Local = Database.SQL.Local
Engine = Database.SQL.Engine
Dependency = fastapi.Depends
Secret = pydantic.SecretStr
JSON = json # ... starlette.responses.UJSONResponse
Error = starlette.exceptions.HTTPException
# ... Email = pydantic.EmailStr

Integer = int
String = str
Boolean = bool
Float = pydantic.PositiveFloat

Date = datetime.datetime

List = typing.List

Union = typing.Union

Optional = typing.Optional

Binary: pydantic.StrBytes = pydantic.StrBytes

Field: pydantic.Field = pydantic.Field

UUID = pydantic.UUID4

UID = lambda: "{0}".format(uuid.uuid4()).upper()

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


# =============================================================================
# Packaged Exports
# =============================================================================

Connection = Dependency(lambda: Local())

class Request:
    """
    Implicit Instance Idiom
    """

    Responses = {
        200: {

        }, 201: {

        }, 202: {

        },
        400: {

        }, 401: {

        }, 404: {

        }, 422: {

        }
    }

    __slots__ = ()

    __dict__ = None

    __new__ = lambda *_: ...

Format = textwrap.dedent

__all__ = [
    "Scheme",
    "Connection",
    "JSON",
    "Error",
    "List",
    "Dependency",
    "Secret",
    "Request",
    "UUID",
    "Format",
    "Boolean",
    "Integer",
    "String",
    "Union",
    "Optional",
    "Network",
    "Field",
    "Date",
    "Float",
    "Binary"
]
