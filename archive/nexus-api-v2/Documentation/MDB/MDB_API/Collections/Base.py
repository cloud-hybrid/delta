from . import *


class CRUD:
    """
    ...
    """

    def __init__(self, collection: String = __name__.split(".").pop()):
        self.Collection = Database.DB[collection]

    @classmethod
    def construct(cls, model_data):
        if len(model_data) < 1:
            raise NotImplementedError
        else:
            print("called")
            print(model_data)
            return model_data

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

    async def update(self, identifier: String, data: Dictionary):
        if len(data) < 1:
            return False

        config = await self.Collection.find_one({"_id": BSON.ObjectId(identifier)})

        if config:
            updated_config = await self.Collection.update_one(
                {"_id": BSON.ObjectId(identifier)}, {"$set": data})

            if updated_config:
                return True
            return False

    async def delete(self, identifier: String):
        config = await self.Collection.find_one({"_id": BSON.ObjectId(identifier)})
        if config:
            await self.Collection.delete_one({"_id": BSON.ObjectId(identifier)})
            return True
