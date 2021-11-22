from . import *

import Mongo.Gaming.Collections.Configuration.CSGO
from Mongo.Gaming.Schemas.CSGO import (
    Base,
    Create,
    Update,
    Schema,
    Response,
    Success
)

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, "CSGO"
        ), tags = Request.Tags + ["CSGO"]
    )

    CRUD = Mongo.Gaming.Collections.Configuration.CSGO.Document()

    @staticmethod
    @Generator.get("/All",
        name = "Query All CSGO Configurations",
        response_model = List[Optional[Schema]],
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "CSGO C[R]UD (All) Endpoint"
    )
    async def All():
        configurations = await HTTP.CRUD.gets()
        return [
            Schema(
                **{
                    **configuration, **{
                        "ID": configuration.pop("_id")
                    }
                }
            ) for configuration in configurations
        ]

    @staticmethod
    @Generator.get("/{ID}",
        name = "Query a CSGO Configuration",
        response_model = Schema,
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "CSGO C[R]UD Endpoint"
    )
    async def Read(ID: String = Query(..., description = "...")) -> Schema:
        return await HTTP.CRUD.get(ID)

    @staticmethod
    @Generator.post("/Create",
        name = "Create A CSGO Configuration",
        response_model = Schema, responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 201, deprecated = False, summary = "CSGO [C]RUD Endpoint"
    )
    async def Create(Config: Base = Body(...)) -> Schema:
        print("---------------------------")
        print(Config.dict())
        return await HTTP.CRUD.create(Config.dict())

    @staticmethod
    @Generator.put("/Update",
        name = "Mutate A CSGO Configuration",
        response_model = Schema, responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "CSGO CR[U]D Endpoint"
    )
    async def Update(ID: String = Query(...,
        type = String,
        description = "Non-Relational Database Record Index"
    ), Request: Update = Body(...)) -> Schema:
        return await HTTP.CRUD.update(ID, { k: v for k, v in Request.dict().items() if v is not None })

    @staticmethod
    @Generator.delete("/Drop",
        name = "Delete A CSGO Configuration",
        response_model = Union[Success, Response],
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "CSGO CRU[D] Endpoint"
    )
    async def Drop(ID: String = Query(...)) -> Union[Success, Response, Error]:
        if await HTTP.CRUD.delete(ID):
            return Success(
                Mutation = "Delete",
                Status = 200,
                Message = "Successfully Dropped Collection"
            )
        else:
            return Response(
                "Delete",
                404,
                "Error - Collection Not Found"
            )

Mongo.Server.API.include_router(HTTP.Generator)

__all__ = [
    "HTTP"
]
