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

import Database.SQL as SQL

import Database.User.Models.Base as Base

import Database.User.Schemas.Nexus as Type

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Secret = pydantic.SecretStr
# ... Email = pydantic.EmailStr

Time = sqlalchemy.sql.func

Stamp = datetime.datetime.utcnow

Union = typing.Union

# -----------------------------------------------------------------------------
# Object Reference Mapping(s)
# -----------------------------------------------------------------------------

Relationship = sqlalchemy.orm.relationship
Enumeration = sqlalchemy.dialects.postgresql.ENUM
Unique = enum.unique
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

# =============================================================================
# Packaged Exports
# =============================================================================

@Unique
class ISO5218(int, enum.Enum):
    """
    ISO/IEC 5218 - Gender Codes
    """

    NULL = 0x0
    MALE = 0x1
    FEMALE = 0x2
    OTHER = 0x9
