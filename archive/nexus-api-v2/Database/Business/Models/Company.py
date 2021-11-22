"""
...
"""
import importlib

from . import *

import Database.SQL as SQL

import Database.Business.Models.Base as Base

import Database.Business.Schemas.Company as Module

# import Database.User.Models.Nexus.Table

class Table(Base.Table, Database.SQL.Base):
    """
    ...
    """

    __tablename__ = "Business-Company"
    __mapper_args__ = {"eager_defaults": True}

    Name: Column = Column(String, unique = True, nullable = False, index = True)

    Type: Column = Column(Enumeration(Industry, unique = False, nullable = False,
        name = "Company-Industry-Type", index = True))

    Website: Column = Column(String, nullable = True, index = True, default = "https://cloud-technology.io/")

    User = Relationship("Database.User.Models.Nexus.Table",
        back_populates = "Company",
        cascade = "all, delete-orphan",
        uselist = True,
        lazy = "joined"
    )

    Unit = Relationship("Database.Business.Models.Unit.Table",
        back_populates = "Company",
        cascade = "all, delete-orphan",
        uselist = True,
        lazy = "joined"
    )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
