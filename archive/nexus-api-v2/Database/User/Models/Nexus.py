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

import Database.SQL as SQL

import Database.Association

import Database.User.Models.Base as Base

import Database.User.Schemas.Nexus as Type

import Database.User.Models.Name
import Database.User.Models.Note
import Database.Business.Models.Company
import Database.Business.Models.Unit
import Database.User.Models.Verification

class Table(Base.Table, SQL.Base):
    """
    A User SQL ORM Class

    Properties:
        ID: Column - Primary Key
        Email: Column - Indexable User Property Representing an Email Address.
            Note that the email address is not a requirement.

    Token-Safe N-Bytes:
        Return a random URL-safe text string, containing nbytes random bytes. The text is Base64 encoded,
        so on average each byte results in approximately 1.3 characters. If nbytes is None or not
        supplied, a reasonable default is used. --> 32 // 1.333 := 24

        Example:
            >>> import secrets
            ...
            >>> print(32 // 1.333) # --> 24
            ...
            >>> String = secrets.token_urlsafe(24)
            ...
            >>> print(String, "Length", "-", len(String))
    """

    __tablename__ = "User"
    __mapper_args__ = {"eager_defaults": True}

    Username: Column = Column(
        key = "Username",
        name = "Username",
        type_ = String,
        index = True,
        quote = True,
        unique = True,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Email: Column = Column(
        key = "Email",
        name = "Email-Address",
        type_ = String,
        index = True,
        quote = True,
        unique = True,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Password: Column = Column(
        key = "Password",
        name = "Password",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Salt: Column = Column(
        key = "Salt",
        name = "Salt",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Active: Column = Column(
        key = "Active",
        name = "Active",
        type_ = Boolean,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Token: Column = Column(
        key = "Token",
        name = "Token",
        type_ = String,
        index = False,
        quote = True,
        unique = True,
        default = lambda: Token(),
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

    GISO: Column = Column(
        key = "GISO",
        name = "GISO",
        type_ = Enumeration(ISO5218,
            unique = False,
            nullable = False,
        name = "Gender-Code"
        ), index = True,
        quote = True,
        unique = False,
        default = 0x0,
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

    Preferred: Column = Column(
        key = "Preferred",
        name = "Preferred-Name",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = "N/A",
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

    Name = Relationship(Database.User.Models.Name.Table, cascade = "all, delete-orphan", uselist = True, lazy = "joined")
    Note = Relationship(Database.User.Models.Note.Table, cascade = "all, delete-orphan", uselist = True, lazy = "joined")

    BCFK = Column(UUID, Foreign("Business-Company.ID"),
        key = "Company-Foreign-Key",
        name = "Company-Foreign-Key",
        index = True,
        quote = True,
        default = None,
        nullable = True
    );

    Company: Database.Business.Models.Company.Table = Relationship(Database.Business.Models.Company.Table, single_parent = True, back_populates = "User", lazy = "joined")

    BUFK = Column(UUID, Foreign("Business-Unit.ID"),
        key = "Business-Unit-Foreign-Key",
        name = "Business-Unit-Foreign-Key",
        index = True,
        quote = True,
        default = None,
        nullable = True
    );

    Unit: Database.Business.Models.Unit.Table = Relationship(Database.Business.Models.Unit.Table, single_parent = True, back_populates = "User", lazy = "joined")

    UVFK = Column(UUID, Foreign("User-Verification.ID"),
        key = "VFK",
        name = "User-Verification-Foreign-Key",
        index = True,
        quote = True,
        default = None,
        nullable = True
    );

    Verification = Relationship(Database.User.Models.Verification.Table, cascade = "all, delete-orphan", uselist = False, single_parent = True, back_populates = "User", lazy = "joined")

    HTML: Column = Column(
        key = "HTML-Foreign-Key",
        name = "HTML-Foreign-Key",
        type_ = String,
        index = True,
        quote = True,
        unique = True,
        default = None,
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
