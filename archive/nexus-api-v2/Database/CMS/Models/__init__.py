#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
Database Column Overview
========================

    Primary keys always need to be unique, foreign keys need to allow non-unique values
    if the table is a one-to-many relationship. It is perfectly fine to use a foreign key
    as the primary key if the table is connected by a one-to-one relationship, not a
    one-to-many relationship.

    You can only have one primary key, but you can have multiple columns in your primary key.

    You can also have Unique Indexes on your table, which will work a bit like a primary key
    in that they will enforce unique values, and will speed up querying of those values.

PostgreSQL
==========

    A table can have one and only one primary key. It is a good practice to add a primary
    key to every table. When you add a primary key to a table, PostgreSQL creates a unique
    B-tree index on the column or a group of columns used to define the primary key.

"""

# =============================================================================
# Standard Library
# =============================================================================

import enum
import uuid
import secrets
import datetime

# =============================================================================
# External Package(s)
# =============================================================================

import pydantic
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
Unique = enum.unique
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
class Industry(str, enum.Enum):
    """
    Industry Types
    """

    IT = "IT"
    Medical = "Medical"
    Construction = "Construction"
    Entertainment = "Entertainment"
    Transportation = "Transportation"
    Security = "Security"
    Consulting = "Consulting"
    Hospitality = "Hospitality"
    Automobile = "Automobile"
    Estate = "Real-Estate"
    Finance = "Finance"
    Insurance = "Insurance"
    Oil = "Oil"
    Mining = "Mining"
    Energy = "Energy"
    Engineering = "Engineering"
    Electronics = "Electronics"
    Legal = "Legal"
    Telecommunications = "Telecommunications"
    Retail = "Retail"
    Education = "Education"
    Storage = "Storage"
    Textiles = "Textiles"
    Agriculture = "Agriculture"
    Manufacturing = "Manufacturing"
    Gaming = "Gaming"



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
    "Industry"
]
