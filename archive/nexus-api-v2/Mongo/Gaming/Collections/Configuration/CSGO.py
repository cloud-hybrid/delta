import abc

from . import *

import Mongo.Gaming.Collections.Base

import Mongo.Gaming.Schemas.CSGO as Schema


class Document(Mongo.Gaming.Collections.Base.CRUD, abc.ABC):
    """
    ...
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
