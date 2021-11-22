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

# =============================================================================
# Standard Library
# =============================================================================

import os
import sys
import uuid
import typing
import pkgutil
import secrets
import datetime
import importlib
import dataclasses

import importlib.util

Loader = importlib.find_loader(__file__)

Type = dataclasses.dataclass
Importer = importlib.import_module
Module = importlib.util.LazyLoader
Optional = typing.Optional
String = typing.AnyStr
List = typing.List
Union = typing.Union
Integer = typing.SupportsInt

# =============================================================================
# External
# =============================================================================

import pydantic
import sqlalchemy
import sqlalchemy.orm
import sqlalchemy.dialects
import sqlalchemy.dialects.postgresql

# =============================================================================
# Local Imports
# =============================================================================

import Database

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Stamp = datetime.datetime.utcnow

Secret = pydantic.SecretStr
Time = sqlalchemy.sql.func

# ... Email = pydantic.EmailStr

# -----------------------------------------------------------------------------
# Object Reference Mapping(s)
# -----------------------------------------------------------------------------

Relationship = sqlalchemy.orm.relationship
Enumeration = sqlalchemy.Enum
Constraint = sqlalchemy.PrimaryKeyConstraint
MetaData = sqlalchemy.MetaData
Foreign = sqlalchemy.ForeignKey
Integer = sqlalchemy.dialects.postgresql.INTEGER
Boolean = sqlalchemy.dialects.postgresql.BOOLEAN
Column = sqlalchemy.Column
String = sqlalchemy.dialects.postgresql.VARCHAR
Array = sqlalchemy.dialects.postgresql.ARRAY
Check = sqlalchemy.CheckConstraint
Table = sqlalchemy.Table
Date = sqlalchemy.dialects.postgresql.TIMESTAMP
UUID = sqlalchemy.dialects.postgresql.UUID
Text = sqlalchemy.Text
Literal = sqlalchemy.literal_column

# =============================================================================
# Packaged Exports
# =============================================================================

UID = lambda: "{0}".format(uuid.uuid4()).upper()

Day = lambda: datetime.datetime.today().isoweekday()
ISO8601 = lambda: datetime.datetime.today().strftime("%U")
Year = lambda: datetime.datetime.today().year

Import = lambda Name, Package: Importer(Name,
    package = Package
)

__all__ = [
    "Type",
    "Importer",
    "Import",
    "Module",
    "Loader",
    "Boolean",
    "Column",
    "Constraint",
    "Text",
    "Foreign",
    "Integer",
    "String",
    "Relationship",
    "List",
    "Array",
    "MetaData",
    "Secret",
    "Date",
    "Time",
    "Enumeration",
    "String",
    "Literal",
    "Optional",
    "Check",
    "secrets",
    "Union",
    "UUID",
    "UID",
    "ISO8601",
    "Year",
    "Day"
]
