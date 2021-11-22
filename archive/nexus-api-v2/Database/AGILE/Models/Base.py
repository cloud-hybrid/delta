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
        name = "Primary-Key-ID",
        type_ = UUID,
        index = True,
        quote = True,
        unique = True,
        default = lambda: UID(),
        primary_key = True,
        autoincrement = False
    )

    Creation: Column = Column(
        key = "Creation",
        name = "Record-Creation-Timestamp",
        type_ = Date(timezone = True),
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = False,
        primary_key = False,
        autoincrement = False,
        server_default = Time.now()
    )

    Modification: Column = Column(
        key = "Modification",
        name = "Record-Modification-Timestamp",
        type_ = Date(timezone = True),
        index = True,
        quote = True,
        unique = False,
        default = None,
        nullable = True,
        onupdate = Time.now(),
        primary_key = False,
        autoincrement = False
    )
