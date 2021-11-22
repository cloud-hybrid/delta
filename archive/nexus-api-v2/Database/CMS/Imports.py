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
import pprint
import datetime
import functools
import dataclasses

# =============================================================================
# External Package(s)
# =============================================================================

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

JSON = starlette.responses.JSONResponse
Error = starlette.exceptions.HTTPException

Local = Database.SQL.Local
Engine = Database.SQL.Engine

Dependency = fastapi.Depends

Secret = pydantic.SecretStr
# ... Email = pydantic.EmailStr
UUID = pydantic.UUID4

List = typing.List
Union = typing.Union
Optional = typing.Optional

Time = sqlalchemy.sql.func

Boolean = bool
Integer = int
String = str
Dictionary = dict
Tuple = tuple

fprint = pprint.pprint

# =============================================================================
# Packaged Exports
# =============================================================================

Connection = Dependency(lambda: Local)


class Request:
    """
    Implicit Instance Idiom
    """

    Responses = {
        200: {
            "description": "Successful Request Resolution"
        }, 201: {
            "description": "Created - Request has Successfully Provisioned a New Resource"
        }, 202: {
            "description": "Accepted & Processing - Request has been Queued but Cannot be Awaited"
        }, 204: {
            "description": "Successful Query - Response has been Cached"
        }, 205: {
            "description": "Request Initiated - Client is Requested for a DOM Reset"
        }, 400: {
            "description": "Malformed Request - Client Modification(s) Required"
        }, 401: {
            "description": "Access Conditionally Denied - Client Authentication Required"
        }, 403: {
            "description": "Access Denied - Insufficient Application Permission(s)"
        }, 404: {
            "description": "Resource Not Found - Requested Target Resource is Temporarily or Permanently Missing"
        }, 405: {
            "description": "Unsupported Request Method - Target Resource URI is Denied"
        }, 409: {
            "description": "Write Conflict - Source State Conflict with Requested Target Resource"
        }, 415: {
            "description": "Unsupported Media Type - Content Encoding || Type Refused by Server"
        }, 422: {
            "description": "Unprocessable Entity - Content Encoding && Type Accepted, Malformed Client Data"
        }
    }


    Prefix = "/API/CMS"

    Tags = [
        "Content-Management"
    ]

    Generator = Database.SQL.Application.Generator

    __slots__ = ()

    __dict__ = None

    __new__ = lambda *_: ...


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
    # ... "Email",
    "UUID",
    "List",
    "Union",
    "Optional",
    "Boolean",
    "Integer",
    "String",
    "Dictionary",
    "Tuple",
    "Time",

    "Connection",
    "Request",

    "Database"
]
