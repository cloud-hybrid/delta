from . import *

import Database.SQL

import Database.CMS.Models.Base as Base

class Table(Base.Table, Database.SQL.Base):
    __tablename__ = "CMS-General"

    # REQUIRES FOREIGN KEY ASSOCIATION
    AuthorID: Column = Column(
        key="AuthorID",
        name="Author-ID",
        type_=String,
        index=True,
        quote=True,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
        autoincrement=False
    )

    Title: Column = Column(
        key="Title",
        name="Title",
        type_=String,
        index=False,
        quote=True,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
        autoincrement=False
    )

    Tags: Column = Column(
        key="Tags",
        name="Tags",
        type_=String,
        index=False,
        quote=True,
        unique=False,
        default=None,
        nullable=True,
        primary_key=False,
        autoincrement=False
    )

    Type: Column = Column(
        key="Type",
        name="Type",
        type_=String,
        index=False,
        quote=True,
        unique=False,
        default=None,
        nullable=False,
        primary_key=False,
        autoincrement=False
    )

Meta: MetaData = Table.metadata

__all__ = [
    "Table",
    "Meta"
]
