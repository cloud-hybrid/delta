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

from Model import Model

# =============================================================================
# Reference Type(s)
# =============================================================================

Scheme = Model

Configuration = Scheme.Config

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

__module__ = __name__

class Base(Scheme):
    """
    ...
    """

    Path: String = Field("/", alias = "Path", description = "Breadcrumb Path")

    class Config(Configuration): title = "%s" % __name__

class Create(Base):
    """
    ...
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

    ID: Union[UUID, Integer, String] = Field((lambda: UID())(),
        alias = "UUID",
        description = "Record UUID"
    )

    Website: Union[UUID, Integer, String] = Field((lambda: UID())(),
        alias = "Website-Foreign-Key",
        description = "Website-ID"
    )

    Creation: Optional[Date] = Field(alias = "Creation-Date", default_factory = UTC)

    Modification: Optional[Date] = Field(alias = "Modification-Date", default_factory = UTC)

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
