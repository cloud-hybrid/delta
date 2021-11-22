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

# =============================================================================
# Reference Type(s)
# =============================================================================

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

__module__ = __name__

import Database.Business.Schemas.Unit

import secrets

class Base(Scheme):
    """
    ...
    """

    Name: String = Field("Cloud-Technology LLC.")
    Type: Industry = Field("IT")
    Website: Union[URL, String] = Field("https://nexus.cloud-technology.io/")

    class Config(Scheme.Config): title = ".".join([__package__, "Base"])

class Shard(Base):
    """
    ...
    """

    class Config(Scheme.Config): title = ".".join([__package__, "Shard"])

class Create(Base):
    """
    ...
    """

    class Config(Scheme.Config): title = ".".join([__package__, "Create"])

class Update(Base):
    """
    Input Arguments:
    """

    ID: Union[String, UUID]

    Unit: Optional[List[Database.Business.Schemas.Unit.Schema]] = []

    class Config(Scheme.Config): title = ".".join([__package__, "Update"])

class Delete(Base):
    """
    Input Arguments:
    """

    ID: Union[String, UUID]

class Reference(Base):
    """
    ...
    """

    ID: Union[String, UUID]

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(None, alias = "Record-Modification-Date")

    class Config(Scheme.Config): title = ".".join([__package__, "Reference"])

class Schema(Base):
    """
    ...
    """

    ID: Union[String, UUID, Integer] = Field(UID())

    Creation: Date = Field(alias = "Record-Creation-Date")
    Modification: Optional[Date] = Field(None, alias = "Record-Modification-Date")

    class Config(Scheme.Config): title = ".".join([__package__, "Schema"])

class Association(Schema):
    """
    ...
    """

    ID: Union[UUID, String, Integer]

    Name: String
    Type: Industry
    Website: URL

    Unit: Optional[List[Database.Business.Schemas.Unit.Schema]] = []

    class Config(Scheme.Config): title = ".".join([__package__, "Association"])

class Record(Scheme):
    """
    ...
    """

    Name: String = Field("Cloud-Technology LLC.", alias = "Company-Name")
    Type: Industry = Field("IT", alias = "Industry")
    Website: URL = Field("https://code.cloud-technology.io/")

    Unit: Optional[List[Database.Business.Schemas.Unit.Base]] = None

    class Config(Scheme.Config): title = ".".join([__package__, "Record"])

# =============================================================================
# Exports & Schema Type Associations
# =============================================================================

Unit = Database.Business.Schemas.Unit.Base
