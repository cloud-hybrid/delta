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

import Database.User.Schemas.Note as Scheme
import Database.User.Models.Note as Module

# =============================================================================
# CRUD - Application Binary Interface via Python Wrapper(s)
# =============================================================================

class SQL:
    """ ... """

    @staticmethod
    def Read(DB: Connection = Connection,
        ID: Union[String, UUID] = None,
        Internal: Boolean = None,
        User: Union[String, UUID] = None,
        All: bool = False,
        Skip: int = 0,
        Limit: int = 100,
    *argv, **kwargs):
        """ C[R]UD - Read """

        if ID is not None:
            Query = DB.query(Module.Table).filter(
                Module.Table.ID == ID
            ).first()
            return Query if Query is not None else None
        elif Internal is not None:
            Query = DB.query(Module.Table).filter(
                Module.Table.Internal == Internal
            ).offset(Skip).limit(Limit).all()
            return  Query if Query is not None else None
        elif User is not None:
            Query = DB.query(Module.Table).filter(
                Module.Table.User == "{0}".format(User)
            ).offset(Skip).limit(Limit).all()
            return Query if Query is not None else None
        else:
            Query = DB.query(
                Module.Table
            ).offset(Skip).limit(Limit).all()
            return Query if Query is not None and All is True else None

    @staticmethod
    def Create(Data: Scheme.Create,
        DB: Connection = Connection
    ) -> Module.Table:
        """ [C]RUD - Create """

        Record = Module.Table(**Data.dict())

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
    def Update(ID: Union[UUID, String],
        Data: Scheme.Update,
        DB: Connection = Connection,
    *argv, **kwargs):
        """ CR[U]D - Update """

        Record = DB.query(Module.Table).filter(
            Module.Table.ID == "{0}".format(ID)
        ).first()

        try:
            Record.update(Data.dict())

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
    def Delete(ID: Union[UUID, String],
        DB: Connection = Connection,
    *argv, **kwargs):
        """ CRU[D] - Delete """

        Record = DB.query(Module.Table).filter(
            Module.Table.ID == "{0}".format(ID)
        ).first()

        try:
            DB.delete(Record)
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
