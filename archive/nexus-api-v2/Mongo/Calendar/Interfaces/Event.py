from . import *

import Mongo.Calendar.Collections.Events.Event
import Mongo.Calendar.Collections.Calendars.Calendar

from Mongo.Calendar.Schemas.Event import (
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
            Request.Prefix, "Calendar/{Calendar-ID}/Event"
        ), tags = Request.Tags + ["Calendar"]
    )

    Calendar_CRUD = Mongo.Calendar.Collections.Calendars.Calendar.Document()
    CRUD = Mongo.Calendar.Collections.Events.Event.Document()

    @staticmethod
    @Generator.get("/All",
        name = "Query All Event Configurations",
        response_model = List[Optional[Schema]],
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, 
        deprecated = False, 
        summary = "Event C[R]UD (All) Endpoint"
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
        name = "Query a Event Configuration",
        response_model = Schema,
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, 
        deprecated = False, 
        summary = "Event C[R]UD Endpoint"
    )
    async def Read(ID: String = Query(..., description = "...")) -> Schema:
        return await HTTP.CRUD.get(ID)

    @staticmethod
    @Generator.post("/Create",
        name = "Create A Event Configuration",
        response_model = Schema, responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 201, 
        deprecated = False, 
        summary = "Event [C]RUD Endpoint"
    )
    async def Create(ID: String, Config: Create = Body(...)) -> Schema:
        # Check if the Calendar document exists
        Calendar: Dictionary = await HTTP.Calendar_CRUD.document_exists(ID)

        if Calendar is not None:
            # Add ID to Event document attribute
            Document = Config.dict()
            Document.update({"Calendar-ID": ID})

            # Create the event
            Event = await HTTP.CRUD.create(Document)

            # Add Event ID to Calendar document Events attribute
            Calendar["Events"].append(Event.pop("_id"))

            # Update Calendar document
            await HTTP.Calendar_CRUD.update(ID, Calendar)

            return Event
        else:
            return Response(
                "Create",
                404,
                "Error - Calendar ID Not Found"
            )

    @staticmethod
    @Generator.put("/Update",
        name = "Mutate A Event Configuration",
        response_model = Schema, responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "Event CR[U]D Endpoint"
    )
    async def Update(ID: String = Query(...,
        type = String,
        description = "Non-Relational Database Record Index"
    ), Request: Update = Body(...)) -> Schema:
        return await HTTP.CRUD.update(ID, { k: v for k, v in Request.dict().items() if v is not None })


    @staticmethod
    @Generator.delete("/Drop",
        name = "Delete A Event Configuration",
        response_model = Union[Success, Response],
        responses = { 422: {
            "description" : "Type (Schema) Validation Error"
        }}, response_description = "Query Response Return",
        status_code = 200, deprecated = False, summary = "Event CRU[D] Endpoint"
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
