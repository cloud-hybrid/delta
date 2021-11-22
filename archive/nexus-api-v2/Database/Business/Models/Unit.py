"""
...
"""

from . import *

import Database.SQL as SQL

import Database.Business.Models.Base as Base

import Database.Business.Schemas.Unit as Module

class Table(Base.Table, Database.SQL.Base):
    """
    ...
    """

    __tablename__ = "Business-Unit"
    __mapper_args__ = {"eager_defaults": True}

    Name: Column = Column(String, unique = False, nullable = False, index = True)

    CFK: Column = Column(UUID, Foreign("Business-Company.ID"),
        key = "CFK",
        name = "Company-Foreign-Key",
        index = True,
        quote = True,
        default = None,
        nullable = True
    )

    Company: Relationship = Relationship("Database.Business.Models.Company.Table",
        back_populates = "Unit"
    )

    # UID: Column = Column(UUID, Foreign("User.ID"),
    #     key = "UID",
    #     name = "UID",
    #     index = True,
    #     quote = True,
    #     default = None,
    #     nullable = True
    # )

    User: Relationship = Relationship("Database.User.Models.Nexus.Table",
        back_populates = "Unit",
        cascade = "all, delete-orphan",
        uselist = True
    )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
