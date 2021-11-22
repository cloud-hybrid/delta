import abc

from . import *

import Mongo.Calendar.Collections.Base
import Mongo.Calendar.Schemas.Event as Schema


class Document(Mongo.Calendar.Collections.Base.CRUD, abc.ABC):
    """
    @Task - Implement compatibility with Calendar ID on Create/Drop methods
    """

    def __init__(self, collection: String = __name__.split(".").pop()):
        super(Document, self).__init__(collection)

    @classmethod
    def construct(cls, Data: Schema.Base):
        return {
            **Data,
            **{
                "ID": Data.pop("_id")
            }
        }