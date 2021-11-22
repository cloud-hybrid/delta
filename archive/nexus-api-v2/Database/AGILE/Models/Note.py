"""
...
"""

from . import *

import Database.SQL

import Database.AGILE.Models.Base as Base

class Table(Base.Table, Database.SQL.Base):
    """
    ...
    """

    __tablename__ = "AGILE-Note"

    Internal: Column = Column(
        key = "Internal",
        name = "Internal",
        type_ = Boolean,
        index = False,
        quote = True,
        unique = False,
        default = False,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Content: Column = Column(
        key = "Content",
        name = "Content",
        type_ = String,
        index = True,
        quote = True,
        unique = False,
        default = "...",
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Synopsis: Column = Column(UUID, Foreign("AGILE-Update.ID"),
        key = "Synopsis",
        name = "Synopsis-Foreign-Key",
        index = True,
        quote = True,
        default = None,
        nullable = True
    )

    Assignment: Relationship = Relationship(
        "Database.AGILE.Models.Synopsis.Table",
        back_populates = "Note"
    )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
