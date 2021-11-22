"""
...
"""

# =============================================================================
# Local Library
# =============================================================================

from . import *

import Database.SQL

from fastapi import Query

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.Business.Interfaces.Unit.CRUD as CRUD
import Database.Business.Schemas.Unit as Module

# =============================================================================
# Schema Reference
# =============================================================================

import Database.Business.Schemas.Company

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, "Unit"
        ), tags = Request.Tags + ["Unit"]
    )

    @staticmethod
    @Generator.get("",
        name = "Query all Business-Unit Records",
        response_model = Union[Module.Schema, List[Module.Schema]],
        responses = Request.Responses)
    async def All():
        """ ... """

        return await CRUD.SQL.All()

    @staticmethod
    @Generator.post("",
        name = "Create a Business-Unit Table-Entry",
        response_model = Module.Schema,
        status_code = 201,
        responses = Request.Responses)
    async def Create(Name: String = Query(None, description = "Business Unit Name"),
        Key: Index = Query(Index.Name,
            description = "Company Query (Search) Type"
        ), Value: Optional[String] = Query(None,
            description = "Company UUID or Name"
        )
    ):
        """ Create a variable amount of Business-Unit Record(s) """

        return await CRUD.SQL.Create(
            Name = Name,
            Key = Key.value,
            Value = Value
        )

    @staticmethod
    @Generator.get("/Base",
        name = "Query all 1-D Base Business-Unit Records",
        response_model = Optional[List[Module.Base]],
        responses = Request.Responses)
    async def Base():
        return await CRUD.SQL.Base()

    @staticmethod
    @Generator.get("/Search",
        name = "Query Business-Unit Record[s]",
        response_model = Union[Module.Schema, List[Module.Schema]],
        responses = Request.Responses)
    async def Search(
        ID: str = None,
        Name: str = None,
        Type: str = None,
        Skip: int = 0,
        Limit: int = 100
    ):
        """ ... """

        if Limit > 1000:
            return JSON({
                "Error":       True,
                "Message":     "Requested Limit Too Large",
                "Status-Code": 413
            }, status_code = 413, headers = {
                "Retry-After": "Request Modification - Limit <= 1000"
            })

        try:
            return await CRUD.SQL.Read(
                ID = ID,
                Name = Name,
                Type = Type,
                Skip = Skip,
                Limit = Limit
            )
        except NotImplementedError:
            raise Error(400, "API Under Construction")


Database.SQL.Application.API.include_router(HTTP.Generator)
Database.SQL.Application.API.add_middleware(
    middleware_class = Middleware
)

__all__ = [
    "HTTP"
]
