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

import Database.SQL

import Database.User.Models.Base as Base

class Table(Base.Table, Database.SQL.Base):
    """
    ...
    """

    __tablename__ = "User-Name"
    __mapper_args__ = {"eager_defaults": True}

    First: Column = Column(
        key = "First",
        name = "First",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Middle: Column = Column(
        key = "Middle",
        name = "Middle",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Last: Column = Column(
        key = "Last",
        name = "Last",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    UID: Column = Column(UUID, Foreign("User.ID"), name = "User-Foreign-Key", nullable = True, index = True)
    User: Relationship = Relationship("Database.User.Models.Nexus.Table", back_populates = "Name")

    # UID: Column = Column(UUID, Foreign("User.ID"), name = "User-Foreign-Key", nullable = True, index = True)


Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
