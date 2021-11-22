# !/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Cloud-Technology LLC.
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

"""
...
"""

# =============================================================================
# Local Imports
# =============================================================================

import dataclasses
import ipaddress
import datetime
import secrets
import enum

from . import *

Enum = enum.Enum

# =============================================================================
# Reference Type(s)
# =============================================================================

import Mongo.Calendar.Schemas.Base
import Database.User.Schemas.Nexus

Scheme = Mongo.Calendar.Schemas.Base.Model
User = Database.User.Schemas.Nexus.Shard
Setup = Scheme.Configuration

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

__module__ = __name__

class DateMetadata(Scheme):
    DateTime: Date = Field(
        default_factory = Date.utcnow,
        alias = "Date-Time"
    )

    TimeZone: Date = Field(
        default_factory = Date.utcnow,
        alias = "Time-Zone"
    )

class Status(String, Enum):
    Confirmed = "Confirmed"
    Tentative = "Tentative"
    Cancelled = "Cancelled"


class Reply(String, Enum):
    Waiting = "Waiting"
    Declined = "Declined"
    Tentative = "Tentative"
    Accepted = "Accepted"

class Updates(String, Enum):
    All = "All"
    External = "External"
    NA = "None"

# NOT IN USE
class Attendees(Scheme):
    Additional: Integer = Field(
        default = 0,
        alias = "Additional-Guests"
    )

    Name: String = Field(
        default = ""
    )

    Email: String = Field(
        default = ""
    )

    Optional: Boolean = Field(
        default = False
    )

    Comment: String = Field(
        default = ""
    )

    Response: Reply = Field(
        default = Reply.Waiting,
    )

class Type(String, Enum):
    Calendar = "Calendar"
    Event = "Event"


class Author(Scheme):
    ID: String = Field(
        default = ""
    )

    Email: String = Field(
        default = ""
    )

    Name: String = Field(
        default = ""
    )

class Periodicity(String, Enum):
    Daily = "Daily"
    Weekly = "Weekly"
    Monthly = "Monthly"
    Null = ""
    Default = Null

class Schedule(Scheme):
    Frequency: Optional[Periodicity] = Field(
        default = Periodicity.Default,
        alias = "Frequency",
    )

    Time: List[Optional[Date]] = Field(
        default_factory = Date.utcnow,
        alias = "Time"
    )

class Base(Scheme):

    Category: Type = Field(
        default = Type.Event,
        alias = "Category",
        description = "Defines the type of Event"
    )

    State: Status = Field(
        default = Status.Confirmed,
        alias = "Status",
        description = "Defines the status of the current event"
    )

    # Should be Read-Only
    Link: URL = Field(
        default = "https://gitlab.cloud-technology.io/",
        alias = "Link",
        description = "Link to Event"
    )

    Creator: Author = Field(
        default = Author(),
        alias = "Creator",
        description = "Creator of the Event"
    )

    Organizer: Author = Field(
        default = Author(),
        alias = "Organizer",
        description = "Organizer of the Event"
    )

    Start: DateMetadata = Field(
        default = DateMetadata(),
        alias = "Start-Date",
        description = "Starting date of the Event upon creation"
    )

    End: DateMetadata = Field(
        default = DateMetadata(),
        alias = "Start-Date",
        description = "End date of the Event"
    )

    Recurrence: Optional[List[Schedule]]

    MaxAttendees: Optional[Integer] = Field(
        default = 1000,
        alias = "Max-Attendees"
    )

    Notify: Optional[Updates] = Field(
        default = Updates.NA,
        alias = "Notify",
        description = "Notification of Event to attendees and guests"
    )

    SelfAdd: Boolean = Field(
        default = False,
        alias = "Self-Add",
        description = "Defines whether anyone can add themselves to the event."
    )

    Participants: List[Union[PydanticObjectId, String, UUID, None]] = Field(
        default = [],
        alias = "Participants",
        description = "The list of participants of the Event"
    )

    Description: Optional[String] = Field(
        default = "",
        alias = "Description",
        description = "The description of the Event"
    )

    class Config(Setup):
        title = "{0}".format(__module__.split(".").pop())

class Create(Base):
    """
    ...
    """

    #_id: PydanticObjectId = None

    class Config(Base.Config):
        title = Base.Config.title + "-" + "Create"

class Shard(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Shard"

class Update(Base):
    """
    ...
    """

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

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Schema(Base):
    """
    ...
    """

    CalendarID: Union[PydanticObjectId, String, None] = Field(
        default = "",
        alias = "Calendar-ID"
    )

    ID: Union[PydanticObjectId, String, None] = Field("", alias = "ID")

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"

class Association(Schema):
    """
    ...
    """

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

class Response(Scheme):
    Mutation: String = Field(...)
    Status: Integer = Field(...)
    Message: String = Field(...)

class Success(Response):
    Mutation: String = Field("[Mutation]")
    Status: Integer = Field(200, alias="Status-Code")
    Message: String = Field("Success", description="...")

class Error(Response):
    Mutation: String = Field("[Error]")
    Status: Integer = Field(400, alias="Status-Code")
    Message: String = Field("Error", description="...")
