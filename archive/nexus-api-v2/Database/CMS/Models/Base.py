"""
...
"""

from . import *

class Table:
    """
    ...
    """

    __tablename__ = None


    __mapper_args__ = {"eager_defaults": True}

    ID: Column = Column(
        key = "ID",
        name = "Record-ID",
        type_ = UUID,
        index = True,
        quote = True,
        unique = True,
        default = lambda: UID(),
        primary_key = True,
        autoincrement = False
    )

    Author: Column = Column(
        key="Author",
        name="Author",
        type_=String,
        index=True,
        quote=True,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
        autoincrement=False
    )

    Content: Column = Column(
        key = "Content",
        name = "Content",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        default = None,
        nullable = True,
        primary_key = False,
        autoincrement = False
    )

    # set PK to true later if needed
    ContentID: Column = Column(
        key = "ContentID",
        name = "Content-ID",
        type_ = String,
        index = True,
        quote = True,
        unique = True,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Creation: Column = Column(
        key="Creation",
        name="Record-Creation-Timestamp",
        type_=Date(timezone=True),
        index=True,
        quote=True,
        unique=False,
        server_default=Time.now(),
        nullable=False,
        primary_key=False,
        autoincrement=False,
    )

    Modification: Column = Column(
        key="Modification",
        name="Record-Modification-Timestamp",
        type_=Date(timezone=True),
        index=True,
        quote=True,
        unique=False,
        server_default=None,
        nullable=True,
        onupdate=Time.now(),
        primary_key=False,
        autoincrement=False
    )

    Deletion: Column = Column(
        key="Deletion",
        name="Record-Deletion-Timestamp",
        type_=Date(timezone=True),
        index=True,
        quote=True,
        unique=False,
        server_default=None,
        nullable=True,
        primary_key=False,
        autoincrement=False
    )


__all__ = [
    "Table"
]
