"""
...
"""

# =============================================================================
# Local Library
# =============================================================================

from . import *

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.User.Interfaces.User.CRUD

import Database.AGILE.Models as Models

import Database.AGILE.Models.Synopsis as Module
import Database.AGILE.Schemas.Synopsis as Schema

import Database.AGILE.Schemas.Note
import Database.AGILE.Models.Note

import Database.User.Schemas.Nexus

import Database.User.Interfaces.User.CRUD as User
# ... import Database.User.Interfaces.Discord.CRUD as Discord
import Database.Discord.Interfaces.User.CRUD as Discord
import Database.Business.Interfaces.Company.CRUD as Company
import Database.Business.Interfaces.Unit.CRUD as Unit

# =============================================================================
# CRUD - Application Binary Interface via Python Wrapper(s)
# =============================================================================

import sqlalchemy.orm.query as Q

QQ = Q.Query

class SQL(object):
    """ ... """

    @staticmethod
    def Read(
        ID: str = None,
        Week: int = None,
        UID: str = None,
        User: str = None,
        Discord: str = None,
        Unit: str = None,
        Company: str = None,
        Skip: int = 0,
        Limit: int = 100
    ):
        """ C[R]UD - Read """

        DB: Session = Database.SQL.Local

        if ID is not None:
            return DB.query(Module.Table).filter_by(ID = ID).one_or_none()
        elif Week is not None:
            Query = DB.query(Module.Table).filter(
                Module.Table.Week == Week
            ).offset(Skip).limit(Limit).all()
        elif UID is not None:
            Query = DB.query(Module.Table).filter(
                Module.Table.UID == "{0}".format(UID)
            ).offset(Skip).limit(Limit).all()
        elif User is not None:
            Query = DB.query(Module.Table).join(
                Module.Table.User
            ).filter_by(
                Username = User
            ).offset(Skip).limit(Limit).all()
        elif Unit is not None:
            Query = DB.query(Module.Table).filter(
                Module.Table.Unit == "{0}".format(Unit)
            ).offset(Skip).limit(Limit).all()
        else:
            Query = DB.query(Module.Table).offset(Skip).limit(Limit).all()

        return Query

    @staticmethod
    def Count(
        ID: str = None,
        Week: int = None,
        UID: str = None,
        User: str = None,
        Discord: str = None,
        Unit: str = None,
        Company: str = None,
        Skip: int = 0,
        Limit: int = 10000
    ):
        """ C[R]UD - Total, Count """

        Query: Union[Session.query, List] = SQL.Read(**{
            "ID": ID,
            "Week": Week,
            "UID": UID,
            "User": User,
            "Discord": Discord,
            "Unit": Unit,
            "Company": Company,
            "Skip": Skip,
            "Limit": Limit
        })

        if isinstance(Query, list):
            return {
                "Total": len(Query)
            }
        if isinstance(Query, Session.query):
            return {
                "Total": Query.count()
            }

        return {"Total": SQL.Read(**{
            "ID":      ID,
            "Week":    Week,
            "UID":     UID,
            "User":    User,
            "Discord": Discord,
            "Unit":    Unit,
            "Company": Company,
            "Skip":    Skip,
            "Limit":   Limit
        }).count()}

    @staticmethod
    def Create(
        Data: Schema.JSON,
    DB: Connection = Connection) -> Module.Table:
        """ [C]RUD - Create """

        DB: Session = DB if DB else Database.SQL.Local

        Data: Schema.JSON.dict = Data.dict()

        Note: Schema.JSON.Note.dict = Data.pop("Note")

        Record = Database.AGILE.Models.Synopsis.Table(**Data)

        if Note is not None:
            Note = Database.AGILE.Models.Note.Table(**Note)
            Note.Synopsis = Record.ID

            Record.Note = Note

            DB.add_all([Note])
        try:
            DB.add(Record)
            DB.commit()
            DB.refresh(Record)
        except Exception as Error:
            print("Error-Type", type(Error))
            print("Error-Message", String(Error))

            DB.rollback()

            Record = None
        finally:
            return Record

    @staticmethod
    def Update(ID: Union[String, UUID, Integer], Data: Schema.JSON) -> Module.Table:
        """ CR[U]D - Update """

        DB: Session = Database.SQL.Local

        Data: Schema.JSON.dict = Data.dict()

        Projection: Schema.JSON.Projection = Data.pop("Projection")
        Synopsis: Schema.JSON.Synopsis = Data.pop("Synopsis")
        UID: Schema.JSON.UID = Data.pop("UID")

        Note: Schema.JSON.Note.dict = Data.pop("Note", None)

        Record: Module.Table = DB.query(
            Module.Table
        ).filter_by(
            ID = "{0}".format(ID)
        ).one_or_none()

        if Note is not None:
            Note = Database.AGILE.Models.Note.Table(**Note)
            Note.Synopsis = Record.ID

            Record.Note = Note

            DB.add_all([Note])

        try:
            if Record is not None:
                Record.Projection = Projection
                Record.Synopsis = Synopsis
                Record.UID = UID
            else:
                raise IOError("Database Record Not Found")

            DB.add(Record)
            DB.commit()
            DB.refresh(Record)
        except Exception as Error:
            print("Error-Type", type(Error))
            print("Error-Message", String(Error))

            DB.rollback()

            Record = None
        finally:
            return Record

__all__ = [
    "SQL"
]
