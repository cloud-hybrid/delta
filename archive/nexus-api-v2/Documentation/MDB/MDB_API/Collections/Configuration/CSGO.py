from . import *
import abc
import Documentation.MDB.MDB_API.Collections.Base


class Document(Documentation.MDB.MDB_API.Collections.Base.CRUD, abc.ABC):
    """
    ...
    """

    def __init__(self, collection: String = __name__.split(".").pop()):
        super().__init__(collection)

    @classmethod
    def construct(cls, model_data):
        return {
            "id": str(model_data["_id"]),
            "ip": model_data["ip"],
            "port": model_data["port"],
            "clientport": model_data["clientport"],
            "sourcetvport": model_data["sourcetvport"],
            "defaultmap": model_data["defaultmap"],
            "maxplayers": model_data["maxplayers"],
            "tickrate": model_data["tickrate"],
        }

