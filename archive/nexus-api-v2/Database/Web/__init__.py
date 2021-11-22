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
import uuid
import typing
import pkgutil
import datetime
import functools

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

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

# Local       = Database.SQL.Local
Engine      = Database.SQL.Engine
Dependency  = fastapi.Depends
Secret      = pydantic.SecretStr
JSON        = json # ... starlette.responses.UJSONResponse
Error       = starlette.exceptions.HTTPException
Email       = pydantic.EmailStr
List        = typing.List
UUID        = uuid.UUID

# =============================================================================
# Packaged Exports
# =============================================================================

# def Connect():
#     DB = Local()
#     try: yield DB
#     finally: DB.close()

# Connection = Dependency(lambda: Local())

# Connection = Dependency(Connect)

Connection = Dependency(lambda: Local)

class Request:
    """
    Implicit Instance Idiom
    """

    Prefix = "/API"

    Tags = [
        "User"
    ]

    Generator = Database.SQL.Application.Generator

    Application = Database.SQL.Application.API

    __slots__ = ()

    __dict__ = None

    __new__ = lambda *_: ...

# __all__ = [
#     "Models",
#     "Connection",
#     "JSON",
#     "Error",
#     "List",
#     "Dependency",
#     "Secret",
#     # ... "Email",
#     "Request",
#     "UUID",
#     "copy"
# ]
