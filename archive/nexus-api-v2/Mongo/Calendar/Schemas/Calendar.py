# !/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Cloud-Technology LLC.
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

"""
Resources:
https://developers.google.com/calendar/api/concepts/events-calendars
https://developers.google.com/calendar/api/v3/reference
https://developers.google.com/calendar/api/v3/reference/events#resource
https://developers.google.com/calendar/api/v3/reference/calendars#resource

"""

# =============================================================================
# Local Imports
# =============================================================================

import dataclasses
import ipaddress
import datetime
import secrets
import enum
import typing

from . import *

# =============================================================================
# Reference Type(s)
# =============================================================================

import Mongo.Calendar.Schemas.Base
import Mongo.Calendar.Schemas.Event

Scheme = Mongo.Calendar.Schemas.Base.Model
Setup = Scheme.Configuration
Event = Mongo.Calendar.Schemas.Event
Enum = enum.Enum

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

__module__ = __name__


class Zone(String, Enum):
    """
    Time-Zone Enumeration Type
    """

    HST: String = "HST"
    AKDT: String = "AKDT"
    PDT: String = "PDT"
    MDT: String = "MDT"
    CDT: String = "CDT"
    EDT: String = "EDT"

    Default = CDT

class City(String, Enum):
    def __call__(self, *args, **kwargs):
        raise NotImplementedError

class Type(String, Enum):
    Calendar = "Calendar"
    Event = "Event"

class Base(Scheme):
    Category: Type = Field(
        default = Type.Calendar,
        alias = "Category")

    Summary: String = Field(
        default = "[...]",
        alias = "Summary"
    )

    Description: String = Field(
        default = "[...]",
        alias = "Description"
    )

    # Location: Optional[String] = Field(
    #     default = Zone.Default,
    #     alias = "Location"
    # )

    TZ: Date = Field(
        default_factory = Date.utcnow,
        alias = "Time-Zone"
    )

    Events: Optional[List[Optional[PydanticObjectId]]] = Field(default = [], alias = "Event-List")

    # Field(
    #     default = [],
    #     alias = "Events-List"
    # )

    class Config(Setup):
        title = "{0}".format(__module__.split(".").pop())

class Create(Base):
    """
    ...
    """

    class Config(Base.Config):
        title = Base.Config.title + "-" + "Create"

class Update(Base):
    """
    ...
    """

    ID: Union[PydanticObjectId, String, None] = Field("", alias = "ID")

    Modification: Date = Field(
        default_factory = Date.utcnow,
        alias = "Modification",
        description = "Document Last Modified Date"
    )

    class Config(Base.Config): title = Base.Config.title + "-" + "Update"

class Delete(Scheme):
    """
    ...
    """

    ID: Union[PydanticObjectId, String, None] = Field("", alias = "ID")

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Shard(Base):
    """
    ...
    """

    ID: Union[PydanticObjectId, String, None] = Field("", alias = "ID")

    class Config(Base.Config): title = Base.Config.title + "-" + "Shard"

class Schema(Base):
    """
    ...
    """

    ID: PydanticObjectId

    Events: List[Optional[Event.Schema]]

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"

class Array(Schema):
    """
    ...
    """

    Schemas: List[Schema]

    class Config(Base.Config): title = Base.Config.title + "-" + "Association"

class Generator(Schema):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Generator"

class JSON(Generator):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "JSON"

class Response(Schema):
    """
    ...
    """

    Mutation: String = Field(...)
    Status: Integer = Field(...)
    Message: String = Field(...)

    def String(self):
        return "%s" % self

class Success(Response):
    """
    ...
    """

    Mutation: String = Field("[Mutation]")
    Status: Integer = Field(200, alias="Status-Code")
    Message: String = Field("Success", description="...")

class Error(Response):
    """
    ...
    """

    Mutation: String = Field("[Error]")
    Status: Integer = Field(400, alias="Status-Code")
    Message: String = Field("Error", description="...")

# class Response(Basic):
#     content: Basic
#     ensure_ascii = False
#     allow_nan = True
#     indent = 4
#     separators = (", ", ": ")
