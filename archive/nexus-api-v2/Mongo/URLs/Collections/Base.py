from . import *

import abc
import bson
import pprint
import collections

from devtools import debug

class CRUD:
    """
    ...
    """

    def __init__(self, collection: String = __name__.split(".").pop()):
        self.Collection = DB[collection]

    @classmethod
    def construct(cls, Data: Dictionary) -> Dictionary["ID": String, ...]:
        ID = String(Data.pop("_id", Data.get("ID", None)))

        assert ID and ID != ""

        return {
            **Data,
            **{
                "ID": ID
            }
        }

    async def gets(self):
        configs = []
        async for config in self.Collection.find():
            configs.append(self.construct(config))
        return configs

    async def get(self, identifier: String):
        config = await self.Collection.find_one({"_id": BSON.ObjectId(identifier)})
        if config:
            return self.construct(config)

    async def create(self, data: Dictionary) -> Dictionary:
        configuration = await self.Collection.insert_one(data)
        _ = await self.Collection.find_one({"_id": configuration.inserted_id})
        return self.construct(_)

    async def update(self, identifier: String, Data: Dictionary):
        assert Data is not None and Data is not {}

        config = await self.Collection.find_one({"_id": bson.ObjectId(identifier)})
        if config:
            updated_config = await self.Collection.update_one(
                {"_id": BSON.ObjectId(identifier)},
                {"$set": Data}
            )

            if updated_config:
                config = await self.Collection.find_one({"_id": bson.ObjectId(identifier)})
                return self.construct(config)
        else:
            return {}

    async def delete(self, identifier: String):
        config = await self.Collection.find_one({"_id": BSON.ObjectId(identifier)})
        if config:
            await self.Collection.delete_one({"_id": BSON.ObjectId(identifier)})
            return True

    # Checks to see if a document exists, returns the document if it does, else None.
    async def document_exists(self, identifier: String):
        return await self.Collection.find_one({"_id": BSON.ObjectId(identifier)})

class Document(CRUD, abc.ABC):
    """
    ...
    """

    def __init__(self, collection: String = __name__.split(".").pop()):
        super(Document, self).__init__(collection)
