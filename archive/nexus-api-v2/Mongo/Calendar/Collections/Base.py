from . import *

import bson
import pprint

class CRUD:
    """
    ...
    """

    def __init__(self, collection: String = __name__.split(".").pop()):
        self.Collection = DB[collection]

    @classmethod
    def construct(cls, Data: Dictionary) -> Dictionary["ID": String, ...]:
        ID = Data.pop("_id", None)

        assert ID

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

    async def create(self, config_data: Dictionary) -> Dictionary:
        config = await self.Collection.insert_one(config_data)
        new_config = await self.Collection.find_one({"_id": config.inserted_id})
        return self.construct(new_config)

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
