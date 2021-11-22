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

# Local       = Database.SQL.Local
Engine      = Database.SQL.Engine
Dependency  = fastapi.Depends
Secret      = pydantic.SecretStr
JSON        = json # ... starlette.responses.UJSONResponse
Error       = starlette.exceptions.HTTPException
Email       = pydantic.EmailStr
UUID        = uuid.UUID

Integer     = int
String      = str
Boolean     = bool

List        = typing.List

Union       = typing.Union

Optional    = typing.Optional

# =============================================================================
# Packaged Exports
# =============================================================================

def Connect():
    DB = Local()
    try: yield DB
    finally: DB.close()

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
    "Models",
    "Connection",
    "JSON",
    "Error",
    "List",
    "Dependency",
    "Secret",
    # ... "Email",
    "Request",
    "UUID",
    "Format",
    "Boolean",
    "Integer",
    "String",
    "Union",
    "Optional"
]
