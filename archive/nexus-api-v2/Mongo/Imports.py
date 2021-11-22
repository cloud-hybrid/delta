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
import json
import typing
import pprint
import datetime
import functools
import dataclasses

from devtools import debug

# =============================================================================
# External Package(s)
# =============================================================================

import bson

import fastapi

import pydantic

import starlette.exceptions
import starlette.responses

import motor

# =============================================================================
# Local Imports
# =============================================================================

import Mongo

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Query = fastapi.Query
JSON = json # ... starlette.responses.UJSONResponse
Error = starlette.exceptions.HTTPException

Dependency = fastapi.Depends

Secret = pydantic.SecretStr
# ... Email = pydantic.EmailStr
UUID = pydantic.UUID4

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

fprint = pprint.pprint

Date: type(datetime.datetime) = datetime.datetime

Today = lambda: Date.strptime(Date.today().strftime("%d-%B-%Y"), "%d-%B-%Y")

Stamp = datetime.datetime.utcnow

Agnostic: motor.core.AgnosticCollection = motor.core.AgnosticCollection

BSON: bson = bson

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

UID = lambda: "{0}".format(uuid.uuid4()).upper()

Day = lambda: datetime.datetime.today().isoweekday()
ISO8601 = lambda: datetime.datetime.today().strftime("%U")
Year = lambda: datetime.datetime.today().year

Boolean = bool
Array = bytearray
Dictionary = dict
Enumeration = enum.Enum
String = str

Date = lambda: datetime.datetime.now(tz = None)
UUID = lambda: "{0}".format(uuid.uuid4()).upper()

Database = Mongo.Client
Server = Mongo.Server


class Request:
    """
    Implicit Instance Idiom
    """

    Responses = {
        200:    {
            "description": "Successful Request Resolution"
        }
        # , 201: {
        #     "description": "Created - Request has Successfully Provisioned a New Resource"
        # }, 202: {
        #     "description": "Accepted & Processing - Request has been Queued but Cannot be Awaited"
        # }, 204: {
        #     "description": "Successful Query - Response has been Cached"
        # }, 205: {
        #     "description": "Request Initiated - Client is Requested for a DOM Reset"
        # }, 400: {
        #     "description": "Malformed Request - Client Modification(s) Required"
        # }, 401: {
        #     "description": "Access Conditionally Denied - Client Authentication Required"
        # }, 403: {
        #     "description": "Access Denied - Insufficient Application Permission(s)"
        # }, 404: {
        #     "description": "Resource Not Found - Requested Target Resource is Temporarily or Permanently Missing"
        # }, 405: {
        #     "description": "Unsupported Request Method - Target Resource URI is Denied"
        # }, 409: {
        #     "description": "Write Conflict - Source State Conflict with Requested Target Resource"
        # }, 415: {
        #     "description": "Unsupported Media Type - Content Encoding || Type Refused by Server"
        # }, 422: {
        #     "description": "Unprocessable Entity - Content Encoding && Type Accepted, Malformed Client Data"
        # }
    }

    Prefix = "/API"

    Tags = [
        "Taskboard"
    ]

    Generator = Mongo.Server.Generator

    __slots__ = ()

    __dict__ = None
