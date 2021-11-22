import os

from . import *

import Mongo.Calendar.Collections.Calendars.Calendar
from Mongo.Calendar.Schemas.Calendar import (
    Base,
    Create,
    Update,
    Schema,
    Response,
    Success,
    Array
)

import bson.errors

import starlette.responses as Responses

import fastapi.requests

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, "Calendar"
        ), tags = Request.Tags + ["Calendar"]
    )

    CRUD = Mongo.Calendar.Collections.Calendars.Calendar.Document()

    @staticmethod
    @Generator.get("/All",
        name = "Query All Calendar Configurations",
        response_model = List[Schema],
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "Calendar C[R]UD (All) Endpoint"
    )
    async def All():
        return await HTTP.CRUD.gets()

    @staticmethod
    @Generator.get("/{ID}",
        name = "Query a Calendar Configuration",
        response_model = Union[Schema, Response, Any],
        response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "Calendar C[R]UD Endpoint"
    )
    async def Read(
        __request__: fastapi.requests.Request,
        ID: String = Query(..., description = "..."),
        # ID
    ) -> Schema:
        try:
            response = await HTTP.CRUD.get(ID)
        except bson.errors.InvalidId:
            response = Responses.JSONResponse(
                content = {
                    "Mutation": "Document Look-Up by Object-ID",
                    "Status-Code": 422,
                    "Message": "Error - Invalid ID as Input"
                }, status_code = 422)
        finally:
            return response

    @staticmethod
    @Generator.post("/Create",
        name = "Create A Calendar Configuration",
        response_model = Schema, responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 201, deprecated = False, summary = "Calendar [C]RUD Endpoint"
    )
    async def Create(Config: Create = Body(...)):
        fprint(Config)

        Configuration = await HTTP.CRUD.create(Config.dict())

        fprint(Configuration)

        return Configuration

    @staticmethod
    @Generator.put("/Update",
        name = "Mutate A Calendar Configuration",
        response_model = Schema, responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "Calendar CR[U]D Endpoint"
    )
    async def Update(
            ID: String = Query(..., type = String,
            description = "Non-Relational Database Record Index"),
            Request: Update = Body(...)
    ):
        try:
            response = await HTTP.CRUD.get(ID)
        except bson.errors.InvalidId:
            response = Responses.JSONResponse(
                content = {
                    "Mutation": "Document Look-Up by Object-ID",
                    "Status-Code": 422,
                    "Message": "Error - Invalid ID as Input"
                }, status_code = 422)
        finally:
            if response == None:
                ...
            else:
                return await HTTP.CRUD.update(
                    ID, **Request.dict()
                )

        #return await HTTP.CRUD.update(
        #    ID, Update(
        #        **{
        #            Key: Value for Key, Value in Request.dict().items()
        #        }
        #    )
        #)

    @staticmethod
    @Generator.delete("/Drop",
        name = "Delete A Calendar Configuration",
        response_model = Response,
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "Calendar CRU[D] Endpoint"
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
