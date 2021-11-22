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

from . import *

import Database.Business.Schemas.Implicit

# =============================================================================
# Reference Type(s)
# =============================================================================

Configuration = Scheme.Config

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

import Database.Business.Schemas
import Database.Business.Schemas.Company

__module__ = __name__

User = List[Type(Database.Business.Schemas.Implicit.User)]

class Base(Scheme):
    """
    ...
    """

    Name: String = Field("Research & Development")

    class Config(Configuration): title = "%s" % __name__

class Shard(Base):
    """
    ...
    """

    ID: Optional[Union[UUID, String, Integer]]
    User: Optional[User]
    Creation: Optional[Date] = Field(UID(), alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(None, alias = "Record-Modification-Date")

    class Config(Configuration): title = "%s" % __name__ + "." + "Shard"

class Association(Shard):
    """
    ...
    """

    FK: Union[String, UUID, Integer] = Field(..., alias = "Company-ID")

    class Config(Configuration): title = "%s" % __name__ + "." + "Association"

class Create(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Create"

class Update(Base):
    """
    """

    ID: UUID
    Name: Optional[String]

    class Config(Base.Config): title = Base.Config.title + "-" + "Update"

class Delete(Scheme):
    """
    ...
    """

    ID: Optional[String] = None

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Reference(Base):
    """
    ...
    """

    ID: Union[UUID, String, Integer]

    Creation: Optional[Date] = Field(UID(), alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(None, alias = "Record-Modification-Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Reference"

class Schema(Create):
    """ ... """

    ID: Union[UUID, String, Integer]
    CFK: Union[UUID, String, Integer] = Field(..., alias = "Company-ID")

    Creation: Date = Field(..., alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(alias = "Record-Modification-Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"
