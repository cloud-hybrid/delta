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
    """ ... """

    __tablename__ = "User-Verification"
    __mapper_args__ = {"eager_defaults": True}

    Verified: Column = Column(
        key = "Verified",
        name = "Verified",
        type_ = Boolean,
        index = True,
        quote = True,
        unique = False,
        default = False,
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

    # UID: Column = Column(UUID, Foreign("User.ID"), name = "User-Foreign-Key", nullable = True, index = True)
    User: Relationship = Relationship("Database.User.Models.Nexus.Table", back_populates = "Verification")

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
     "Meta"
]
