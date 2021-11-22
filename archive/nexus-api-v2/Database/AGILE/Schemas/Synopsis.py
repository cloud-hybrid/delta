# !/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
...
"""

from . import *

import Database.AGILE.Schemas.Note

import Database.User.Schemas.Nexus
import Database.Business.Schemas.Company
import Database.Business.Schemas.Unit

Scheme = Database.AGILE.Schemas.Base.Model

Configuration = Scheme.Configuration

__module__ = __name__

Now = lambda: Time.now().strftime("%d-%B-%Y")

class Count(Scheme):
    """
    ...
    """

    Total: Integer

    class Config(Configuration):
        title = "{0}".format(
            __module__.split(".").pop()
        ) + "-" + "Count"

class Base(Scheme):
    """
    ...
    """

    Day: Integer = Field(
        description = "ISO Calendar Day",
        default = Integer(Date.today().isoweekday())
    )

    Week: Integer = Field(
        description = "ISO Calendar Week",
        default = Integer(Date.today().strftime("%U"))
    )

    Year: Integer = Field(
        description = "ISO Calendar Year",
        default = Integer(Date.today().year)
    )

    Synopsis: String = Field(..., description = "Progression")

    Projection: String = Field(..., description = "Projection")

    Complication: String = Field(..., description = "Deficit")

    Note: Optional[Database.AGILE.Schemas.Note.Create] = Field(None,
        description = "Content Body for a Note Record")

    class Config(Configuration): title = "%s" % __name__

class JSON(Scheme):
    """
    ...
    """

    UID: Union[String, UUID, Integer] = Field(..., description = "Nexus Username, Email, or Associated Account Alias")

    Synopsis: String = Field(..., description = "Progression")
    Projection: String = Field(..., description = "Projection")

    Complication: Optional[Union[String, Integer]] = Field(None, description = "Deficit")
    Note: Optional[Database.AGILE.Schemas.Note.Shard] = Field(None, description = "Content Body for a Note Record")

    Day: Integer = Field(
        description = "ISO Calendar Day",
        default = Integer(Date.today().isoweekday())
    )

    Week: Integer = Field(
        description = "ISO Calendar Week",
        default = Integer(Date.today().strftime("%U"))
    )

    Year: Integer = Field(
        description = "ISO Calendar Year",
        default = Integer(Date.today().year)
    )

    class Config(Base.Config): title = Base.Config.title + "-" + "JSON"

class Update(JSON):
    """
    ...
    """

    ID: Union[UUID, String, Integer]

    class Config(Base.Config): title = Base.Config.title + "-" + "JSON-Update"

class Create(Base):
    """
    Input Arguments:
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Create"

class Delete(Scheme):
    """
    ...
    """

    ID: UUID

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Association(Base):
    """
    ...
    """

    ID: Optional[UUID] = None

    Note: Optional[Database.AGILE.Schemas.Note.Create] = None

    User: String = Field(None, alias = "User-Foreign-Key")
    Company: String = Field(None, alias = "Company-Foreign-Key")
    Unit: String = Field(None, alias = "Unit-Foreign-Key")
    Discord: String = Field(None, alias = "Discord-User-Foreign-Key")

    class Config(Base.Config): title = Base.Config.title + "-" + "Association"

class Form(Base):
    """
    ...
    """

    UID: Union[String, UUID, Integer]

    Note: Optional[String] = None

    class Config(Base.Config): title = Base.Config.title + "-" + "Form"

class Schema(JSON):
    """
    ...
    """

    ID: Union[String, UUID, Integer]

    User: Database.User.Schemas.Nexus.Shard
    Note: Optional[Database.AGILE.Schemas.Note.Schema] = None
    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(alias = "Record-Modification-Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"

class Response(JSON):
    """
    ...
    """

    ID: UUID

    User: Database.User.Schemas.Nexus.Schema = None

    Note: Optional[Database.AGILE.Schemas.Note.Schema] = None

    Creation: Time = Field(alias = "Record-Creation-Date")

    Modification: Optional[Time] = Field(alias = "Record-Modification-Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Response"

class Shard(JSON):
    """
    Limited Response with Limited User Resolution
    """

    ID: UUID

    User: Database.User.Schemas.Nexus.Shard = None

    Note: Optional[Database.AGILE.Schemas.Note.Shard] = Field(None,
        description = "Content Body for a Note Record")

    Day: Integer
    Week: Integer
    Year: Integer

    Creation: Time = Field(alias = "Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Shard"
