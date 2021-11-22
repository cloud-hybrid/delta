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

import Database.Web.Schemas.Breadcrumb

Breadcrumb = Database.Web.Schemas.Breadcrumb

__module__ = __name__

class Base(Scheme):
    """
    ...
    """

    Name: String = Field("Example.IO", alias = "Website-FQDN", description = "Website Root FQDN")

    class Config(Configuration): title = "%s" % __name__

class Create(Base):
    """
    ...
    """

    Breadcrumbs: Optional[List[Breadcrumb.Create]]

    class Config(Base.Config): title = Base.Config.title + "-" + "Create"

    @classmethod
    def Response(cls):
        class Schema(Base):
            Breadcrumbs: List[Union[Breadcrumb.Schema, None]]

            Creation: Optional[Date] = Field(alias = "Creation-Date", default_factory = UTC)

            Modification: Optional[Date] = Field(alias = "Modification-Date", default_factory = UTC)

        return Schema

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

    ID: Union[UUID, Integer, String] = Field(...,
        alias = "UUID",
        description = "Record UUID"
    )

    Breadcrumbs: List[Optional[Breadcrumb.Schema]] = Field(alias = "Breadcrumbs")

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
