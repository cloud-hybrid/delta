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

Configuration = Scheme.Configuration

__module__ = __name__

class Base(Scheme):
    """
    ...
    """

    Content: String = "..."
    Internal: Boolean = False

    class Config(Configuration): title = "%s" % __name__

class Create(Base):
    """
    Input Arguments:
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Create"

class Shard(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Shard"


class Update(Base):
    """
    ...
    """

    ID: UUID

    Synopsis: Optional[UUID] = Field(alias = "Synopsis-Foreign-Key")

    class Config(Base.Config): title = Base.Config.title + "-" + "Update"

class Delete(Scheme):
    """
    ...
    """

    ID: UUID

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Schema(Base):
    """
    ...
    """

    ID: UUID

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(None, alias = "Record-Modification-Date")

    Synopsis: Optional[UUID] = Field(alias = "Synopsis-Foreign-Key")

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"

class Association(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Association"
