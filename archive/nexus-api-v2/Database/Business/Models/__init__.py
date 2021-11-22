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
import enum
import uuid
import typing
import secrets
import datetime

# =============================================================================
# External Package(s)
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

import Database.Business.Schemas

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Secret = pydantic.SecretStr
# ... Email = pydantic.EmailStr
Time = sqlalchemy.sql.func
Stamp = datetime.datetime.utcnow

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

UID = lambda: "{0}".format(uuid.uuid4()).upper()

Union = typing.Union

# =============================================================================
# Packaged Exports
# =============================================================================

Industry = Database.Business.Schemas.Industry

__all__ = [
    "Database",
    "Boolean",
    "Column",
    "Constraint",
    "Foreign",
    "Integer",
    "String",
    "Relationship",
    "Array",
    "MetaData",
    "Secret",
    "Date",
    "Time",
    "Enumeration",
    "Check",
    # ... "Email",
    "secrets",
    "UUID",
    "UID",
    "Industry",
    "Union"
]
