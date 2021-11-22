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

import Database.Web.Models.Breadcrumb as Model
import Database.Web.Schemas.Breadcrumb as Type

# =============================================================================
# CRUD - Application Binary Interface via Python Wrapper(s)
# =============================================================================

class SQL(object):
    """ ... """

    @staticmethod
    def Index(
        ID: Optional[Union[UUID, String, Integer]] = None,
        Page: Integer = 0,
        Limit: Integer = 100
    ) -> Union[Model.Table, List[Model.Table], None]:
        """
        C[R]UD - Index

        Index SQL Database Record(s); return all records, a single instance
        record for unique keys, or NULL if the query returns non-indexable
        datasets.

        Please note that the following method is specifically named "Index" as
        opposed to "Search" given the XOR nature of the intended return types.

        Parameters:
            ID: Optional[Union[UUID, String, Integer]]
            Page: Integer
            Limit: Integer
        """

        DB: Session = Database.SQL.Local

        ID: Optional[String] = String(ID) if ID is not None else None

        if ID is not None:
            Query = DB.query(Model.Table).filter_by(ID = ID).one_or_none()
        else:
            Query = DB.query(Model.Table).offset(Page * Limit).limit(Limit).all()

        return Query

    @staticmethod
    def Create(Data: Type.Generator) -> Model.Table:
        """ [C]RUD - Create """

        DB: Session = Database.SQL.Local

        Data: Dictionary = Data.dict()

        FK: UUID = Data.pop(
            "Website-Foreign-Key",
            Data.pop("Website",
                Data.pop("ID")
            )
        )

        Record = Model.Table(**Data, Website = String(FK))

        try:
            DB.add(Record)
            DB.commit()
            DB.refresh(Record)
        except Exception as Error:
            print("Data", Data)
            print("Error-Type", type(Error))
            print("Error-Message", String(Error))

            DB.rollback()

            Record = None
        finally:
            return Record

__all__ = [
    "SQL"
]
