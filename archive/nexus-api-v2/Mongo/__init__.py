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
import re
import sys
import copy
import json
import uuid
import typing
import pkgutil
import decimal
import importlib
import functools

# =============================================================================
# External
# =============================================================================

import fastapi
import pydantic

import starlette
import starlette.config

import motor
import motor.motor_asyncio

Configuration = starlette.config.Config

Motor = motor.motor_asyncio

# =============================================================================
# Local Packaged Imports
# =============================================================================

import API.ASGI

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Float       = float
Double      = decimal.Decimal

Union       = typing.Union
Optional    = typing.Optional

Any         = typing.Any
Generic     = typing.Generic
String      = typing.AnyStr
Integer     = int
Dictionary  = typing.DefaultDict
Boolean     = Union[type(True), type(False)]
Bytes       = typing.ByteString
List        = typing.List
UUID        = uuid.UUID

Secret      = pydantic.SecretStr

Body        = fastapi.Body
Dependency  = fastapi.Depends
Error       = fastapi.HTTPException
File        = fastapi.File
Path        = fastapi.Path
Form        = fastapi.Form
Secure      = fastapi.Security
Header      = fastapi.Header

Data = json.loads(pkgutil.get_data("API", "Environment.json"))
Raw = Data["Database"]["Mongo"]

# ... @Task URI = Mongo(Raw).URI

URI = Raw

Client = Motor.AsyncIOMotorClient(URI)

Server = API.ASGI.Base(host = "0.0.0.0", port = 3000)

__all__ = [
    "Any",
    "Generic",
    "String",
    "Dictionary",
    "Boolean",
    "Bytes",
    "List",
    "UUID",
    "Float",
    "Double",
    "Union",
    "Optional",
    "Secret",
    "Body",
    "Dependency",
    "Error",
    "File",
    "Path",
    "Form",
    "Secure",
    "Header",
    "Client",
    "Server"
]
