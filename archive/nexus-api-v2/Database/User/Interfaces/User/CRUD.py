"""
...
"""

import abc

import pprint
import typing

import asyncio
import devtools

import Database.SQL

# =============================================================================
# Local Library
# =============================================================================

from . import *

# =============================================================================
# ORM
# =============================================================================

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
Immediate = sqlalchemy.orm.immediateload
Defer = sqlalchemy.orm.defer

import sqlalchemy.orm.strategies

from sqlalchemy import inspect

Insert = sqlalchemy.insert
Values = sqlalchemy.values

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.User.Schemas.Nexus as Scheme
import Database.User.Models.Nexus

import Database.User.Models.Verification
import Database.User.Models.Note
import Database.User.Models.Name

import Database.Business.Models.Company
import Database.Business.Schemas.Company
import Database.Business.Models.Unit
import Database.Business.Schemas.Unit

# =============================================================================
# CRUD - Application Binary Interface via Python Wrapper(s)
# =============================================================================

Coroutine = typing.Awaitable
Schema = Database.User.Schemas.Nexus
Model = Database.User.Models.Nexus

Name = List[Optional[String]]

class SQL:
    """ ... """

    @staticmethod
    def Disassociate(Object: Dictionary):
        devtools.debug(Object)
        Object.pop("_sa_instance_state", None)
        devtools.debug(Object)
        return Object

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
    async def Total():
        """ C[R]UD - Read (Asyncronous) Total """

        return len(await SQL.Base())

    @staticmethod
    async def Read(ID: str = None,
        Username: str = None,
        Email: str = None,
        Skip: int = 0,
        Limit: int = 100):
        """ C[R]UD - Read (Asyncronous)

        Syncronous:
            >>> DB: Session = Database.SQL.Local
            >>>
            >>> if ID is not None:
            >>>     Query = DB.query(Model.Table).filter_by(
            >>>         ID = ID
            >>>     ).one_or_none()
            >>> elif Username is not None:
            >>>     Query = DB.query(Model.Table).filter_by(
            >>>         Username = Username
            >>>     ).one_or_none()
            >>> elif Email is not None:
            >>>     Query = DB.query(Model.Table).filter_by(
            >>>         Email = Email
            >>>     ).one_or_none()
            >>> else:
            >>>     Query = DB.query(Model.Table).offset(Skip).limit(Limit).all()
            >>>
            >>> return Query

        Asyncronous:
            >>> Load = sqlalchemy.orm.joinedload
            >>> Inline = sqlalchemy.orm.selectinload
            >>> Mapping: sqlalchemy.sql.selectable.Select = sqlalchemy.select(Model.Table)
            >>>
            >>> async with Database.SQL.Local() as Driver:
            >>>     async with Driver.begin():
            >>>         if ID is not None:
            >>>             Result: sqlalchemy.engine.ChunkedIteratorResult = await Driver.execute(Mapping.where(
            >>>                 Model.Table.Username == Username
            >>>             ))
            >>>             Query = Result.scalar_one_or_none()
            >>>         elif Username is not None:
            >>>             Result: sqlalchemy.engine.ChunkedIteratorResult = await Driver.execute(Mapping.where(
            >>>                 Model.Table.Username == Username
            >>>             ))
            >>>             return Result.scalar_one_or_none()
            >>>         elif Email is not None:
            >>>             Result: sqlalchemy.engine.ChunkedIteratorResult = await Driver.execute(Mapping.where(
            >>>                 Model.Table.Username == Username
            >>>             ))
            >>>             Query = Result.scalar_one_or_none()
            >>>         else:
            >>>             Result: Chunk = await Driver.execute(Mapping.offset(Skip).limit(Limit).options(Load("*")))
            >>>             Query = Result.scalars().unique().all()
            >>>
            >>> return Query

        """

        # Mapping: Selection = sqlalchemy.select(Model.Table)

        Mapping: sqlalchemy.sql.Select = sqlalchemy.select(Model.Table)

        async with Database.SQL.Local() as Driver:
            async with Driver.begin():
                if ID is not None:
                    Result = await Driver.execute(
                        Mapping.where(
                            Model.Table.ID == ID
                        )
                    )

                    User = Result.unique().scalar_one_or_none()

                    return User

                elif Username is not None:
                    Result = await Driver.execute(
                        Mapping.where(
                            Model.Table.Username == Username
                        )
                    )

                    User = Result.unique().scalar_one_or_none()

                    return User

                elif Email is not None:
                    Result = await Driver.execute(
                        Mapping.where(
                            Model.Table.Email == Email
                        )
                    )

                    User = Result.unique().scalar_one_or_none()

                    return User

                else:
                    Result: Chunk = await Driver.execute(Mapping.fetch(100, percent = True))
                    Objects = await Scalar(Result.unique(), 0).all()
                    Rows = await Scalar(Result, 0).fetchall()

                    return [Schema.Base(**Object.__dict__) for Object in Objects]

    @staticmethod
    async def Extended(ID: str = None,
        Username: str = None,
        Email: str = None,
        Skip: int = 0,
        Limit: int = 100,
    __coroutine__: AsyncSession = None) -> Union[Coroutine, Optional[List[Database.User.Models.Nexus.Table]]]:
        """ C[R]UD - Read Extended (Asyncronous) """

        Mapping: sqlalchemy.sql.Select = sqlalchemy.select(
            Model.Table
        )

        if __coroutine__ == None:
            async with Database.SQL.Local() as Driver:
                async with Driver.begin():
                    Statement = await Driver.execute(
                        Mapping.options(
                            Load(Model.Table.Verification),
                            Load(Model.Table.Unit),
                            Load(Model.Table.Company),
                            Load(Model.Table.Name),
                            Load(Model.Table.Note)
                        ).fetch(100, percent = True)
                    )

                    return Statement.unique().scalars().all()
        else:
            async with __coroutine__.begin():
                return await __coroutine__.execute(
                    Mapping.options(
                        Load(Model.Table.Verification),
                        Load(Model.Table.Unit),
                        Load(Model.Table.Company),
                        Load(Model.Table.Name),
                        Load(Model.Table.Note)
                    ).fetch(100, percent = True)
                )

    @staticmethod
    async def Create(User: Database.User.Schemas.Nexus.Create, Salt: String, Token: String, HTML: Optional[String] = None) -> Coroutine[Optional[Model.Table]]:
        """ [C]RUD - Create """

        Session: AsyncSession = Database.SQL.Session()

        Data: User.dict = User.dict()

        Name = [Database.User.Models.Name.Table(**Name) for Name in Data.pop("Name")]
        Verification = Database.User.Models.Verification.Table(**Data.pop("Verification"))

        if Note := Data.pop("Note", None):
            Note = [Database.User.Models.Note.Table(**_) for _ in Note]
        else:
            Note = None

        # --> Company Validation + Generation
        if Company := Data.pop("Company", None):
            Company = Database.Business.Models.Company.Table(**Company)
        else:
            Company = None

        # --> Business-Unit Validation + Generation
        if Unit := Data.pop("Unit", None):
            Unit = Database.Business.Models.Unit.Table(**Unit)
            Unit.Company = Company if Company is not None else None # --> FK Association
        else:
            Unit = None

        User = Database.User.Models.Nexus.Table(**Data)

        Session.add_all([
            User,
            Verification,
            *Name,
            *Note
        ])

        # # --> Optionals
        Session.add(Company) if Company is not None else ...
        Session.add(Unit) if Unit is not None else ...

        User.Verification = Verification
        User.Company = Company
        User.Unit = Unit
        User.Name = Name
        User.Note = Note

        User.Salt = Salt
        User.Token = Token

        User.HTML = HTML

        Session.add(User)

        await Session.commit()
        await Session.close()

        Query: sqlalchemy.engine.result.ChunkedIteratorResult = await SQL.Extended(ID = User.ID, __coroutine__ = Session)

        return Query.unique().scalars().one_or_none()

    @staticmethod
    async def Form(User: Database.User.Schemas.Nexus.Form, Salt: String, Token: String, HTML: Optional[String] = None) -> Coroutine[Optional[Model.Table]]:
        """ [C]RUD - Create """

        Session: AsyncSession = Database.SQL.Session()

        Data: User.dict = User.dict()

        Name = [
            Database.User.Models.Name.Table(
                **{
                    "First": Data.pop("First", None),
                    "Middle": Data.pop("Middle", None),
                    "Last": Data.pop("Last", None)
                }
            )
        ]

        Verification = Database.User.Models.Verification.Table(
            **{
                "Verified": Data.pop("Verification", False)
            }
        )

        if Note := Data.pop("Note", None):
            Note = [Database.User.Models.Note.Table(**Note) for Note in Data.pop("Note")]
        else:
            Note = []

        # --> Company Validation + Generation
        if Company := Data.pop("Company", None):
            Company = Database.Business.Models.Company.Table(
                **{
                    "Name":     Company,
                    "Type":     Data.pop("Industry", None),
                    "Website":  Data.pop("Website", None)
                }
            )
        else:
            Company = None

        # --> Business-Unit Validation + Generation
        if Unit := Data.pop("Unit", None):
            Unit = Database.Business.Models.Unit.Table(
                **{
                    "Name": Unit
                }
            )
            Unit.Company = Company if Company is not None else None # --> FK Association
        else:
            Unit = None

        devtools.debug(Data)

        User = Database.User.Models.Nexus.Table(**Data)

        Session.add_all([
            User,
            Verification,
            *Name,
            *Note
        ])

        # # --> Optionals
        Session.add(Company) if Company is not None else ...
        Session.add(Unit) if Unit is not None else ...

        User.Verification = Verification
        User.Company = Company
        User.Unit = Unit
        User.Name = Name
        User.Note = Note

        User.Salt = Salt
        User.Token = Token

        User.HTML = HTML

        Session.add(User)

        await Session.commit()
        await Session.close()

        Query: sqlalchemy.engine.result.ChunkedIteratorResult = await SQL.Extended(ID = User.ID, __coroutine__ = Session)

        return Query.unique().scalars().one_or_none()

SQL.Create.Form = SQL.Form

__all__ = [
    "SQL"
]
