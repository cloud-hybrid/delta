"""
...
"""

from . import *

import Database.SQL as SQL
import Database.Web.Models.Base as Base

class Table(SQL.Base, Base.Table):
    """
    Child Table Type
    - Child -> Many-to-One
    - Parent -> One-to-Many
    """

    __tablename__ = "Website" + "-" + __module__.split(".").pop()

    Path: String = Column(
        key = "Path",
        name = "Path",
        type_ = String,
        index = False,
        quote = True,
        unique = False,
        nullable = False,
        primary_key = False,
        autoincrement = False
    )

    Association = Column(
        Foreign("Website.ID"),
        name = "Website-Foreign-Key"
    )

    # Website = Relationship("Website",
    #     back_populates = "Breadcrumbs"
    # )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
