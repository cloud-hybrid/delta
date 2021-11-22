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

from Model import Model

Scheme = Model

Configuration = Scheme.Config

__module__ = __name__

class Base(Scheme):
    """
    ...
    """

    First: Optional[String] = "Jacob"
    Middle: Optional[String] = "Brian"
    Last: Optional[String] = "Sanders"

    class Config(Configuration): title = "{0}".format(__name__)


class Create(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Create"

class Update(Base):
    """
    ...
    """

    ID: UUID

    class Config(Base.Config): title = Base.Config.title + "-" + "Update"

class Delete(Base):
    """
    ...
    """

    ID: UUID

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Schema(Base):
    ID: Union[String, UUID, Integer] = Field(...)
    UID: Union[UUID, String, Integer] = Field(..., alias = "User-ID")

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(alias = "Record-Modification-Date")

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"

class Association(Base):
    class Config(Base.Config): title = Base.Config.title + "-" + "Association"
