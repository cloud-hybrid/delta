#!/usr/bin/env python3

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

Configuration = Scheme.Config

__module__ = __name__

class Base(Scheme):
    """
    ...
    """

    Content: String = "..."
    Internal: Boolean = True

    class Config(Configuration): title = "{0}".format(__name__)

class Create(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Create"

class Update(Create):
    """
    ...
    """

    ID: Union[String, UUID, Integer] = Field(UID())

    class Config(Base.Config): title = Base.Config.title + "-" + "Update"

class Delete(Update):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Schema(Base):
    ID: Union[String, UUID, Integer] = Field(UID())

    User: Optional[Union[UUID, String, Integer]] = Field(UID(), alias = "Foreign-Key")

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(alias = "Record-Modification-Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"

class Association(Base):
    ID: Union[UUID, String, Integer]

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(alias = "Record-Modification-Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Association"
