"""
...
"""

from . import *

import copy

import devtools

import Database.Business.Schemas

import Database.Business.Schemas.Company
import Database.Business.Schemas.Unit

import Database.Business.Models

import Database.Business.Models.Company
import Database.Business.Models.Unit

# =============================================================================
# ORM
# =============================================================================

import weakref

import sqlalchemy
import sqlalchemy.ext
import sqlalchemy.orm

import sqlalchemy.engine
import sqlalchemy.sql.selectable

from sqlalchemy.ext.asyncio import (
    AsyncSession,
    AsyncConnection
)

Selection = sqlalchemy.sql.Select
Chunk = sqlalchemy.engine.ChunkedIteratorResult
Scalar = sqlalchemy.ext.asyncio.AsyncScalarResult
Load = sqlalchemy.orm.joinedload
Inline = sqlalchemy.orm.selectinload
Lazy = sqlalchemy.orm.lazyload

Insert = sqlalchemy.insert
Values = sqlalchemy.values

# =============================================================================
# CRUD - Application Binary Interface via Python Wrapper(s)
# =============================================================================

Schema = Database.Business.Schemas.Unit
Model = Database.Business.Models.Unit

class SQL(object):
    """ ... """

    @staticmethod
    async def Base():
        """ C[R]UD - Read (Asyncronous) Total """

        Mapping: Selection = sqlalchemy.select(Model.Table)

        async with Database.SQL.Local() as Driver:
            async with Driver.begin():
                Result: Chunk = await Driver.execute(Mapping.fetch(100, percent = True))
                Query = Result.scalars().unique().all()

        return Query

    @staticmethod
    async def All():
        """ C[R]UD - Read (Asyncronous) """

        Mapping: sqlalchemy.sql.Select = sqlalchemy.select(
            Model.Table
        ).options(
            Load(Model.Table.Company),
            Load(Model.Table.User)
        )

        async with Database.SQL.Local() as Driver:
            async with Driver.begin():
                Result: Chunk = await Driver.execute(Mapping.fetch(100, percent = True))
                Query = Result.scalars().unique().all()

        return Query

    @staticmethod
    async def Read(
        ID: Optional[Union[String, UUID, Integer]] = None,
        Name: Optional[String] = None, # ? Validate Type ???
        Type: Optional[String] = None,
        Skip: Optional[Boolean] = False,
        Limit: Optional[Integer] = 1000
    ):
        """ C[R]UD - Read (Asyncronous) """

        raise NotImplementedError("Under Construction")

    @staticmethod
    async def Create():
        raise NotImplementedError("Under Construction")


__all__ = [
    "SQL"
]
