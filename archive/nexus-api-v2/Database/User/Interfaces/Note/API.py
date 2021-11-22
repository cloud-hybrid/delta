"""
...
"""

# =============================================================================
# Local Library
# =============================================================================

from . import *

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.User.Interfaces.Note.CRUD as CRUD
import Database.User.Schemas.Note as Module

# =============================================================================
# Schema Reference
# =============================================================================

...

# =============================================================================
# Interface Reference
# =============================================================================

...

# =============================================================================
# Local Module(s)
# =============================================================================

import API.ASGI.Authentication as Authentication
import API.ASGI.Authentication.Context as Context

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(
        prefix = "{0}/{1}/{2}".format(
            Request.Prefix, "User", "Note"
        ), tags = Request.Tags + ["Note"]
    )

    @staticmethod
    @Generator.get("/Search",
        response_model = Union[List[Module.Schema], Module.Schema],
        responses = {**Request.Responses, **{200:
            {"content": {"application/json": {"example": {}}}}}}
    )
    async def GET(
        ID: Union[String, UUID] = None,
        Internal: Boolean = None,
        User: Union[String, UUID] = None,
        All: bool = False,
        Skip: int = 0,
        Limit: int = 100,
        DB: Dependency = Connection,
    ):
        """ ... """

        if ID is None and Internal is None and User is None and All is False:
            return JSON({
                "Error":       True,
                "Message":     "All must be set to True, or an ID, Internal, or User Specified",
                "Status-Code": 422
            }, status_code = 422)

        Query = CRUD.SQL.Read(DB = DB,
            ID = ID,
            User = User,
            Internal = Internal,
            All = True,
            Limit = Limit,
            Skip = Skip
        )

        if Query is None:
            return JSON({
                "Error":       True,
                "Message": "Record(s) Not Found",
                "Tag": HTTP.Generator.tags,
                "Route-Prefix": HTTP.Generator.prefix,
                "Status-Code": 404
            }, status_code = 404)
        else:
            return Query

    @staticmethod
    @Generator.get("/All",
        name = "List all Users' Notes",
        response_model = List[Module.Schema],
        responses = Request.Responses)
    async def GET(Skip: int = 0, Limit: int = 100, DB: Dependency = Connection):
        """ ... """

        return CRUD.SQL.Read(DB, Skip = Skip, Limit = Limit, All = True)

    @staticmethod
    @Generator.post("/Create",
        name = "Create a Complete User Record",
        response_model = Module.Schema,
        status_code = 201,
        responses = Request.Responses)
    async def POST(Data: Module.Base,
        User: String = None,
        # ... Authentication --> Token: Boolean = None,
    DB: Dependency = Connection):
        """ Create a User Note Database Record """

        Data = Module.Create(**Data.dict(), User = User)

        import pprint

        pprint.pprint(Data)

        return CRUD.SQL.Create(Data = Data, DB = DB)

    @staticmethod
    @Generator.put("/Update",
        name = "Update a User Note Record",
        response_model = Database.User.Schemas.Nexus.Schema,
        status_code = 201,
        responses = Request.Responses)
    async def Update(
        Data: Module.Update,
    DB: Dependency = Connection):
        """ Update a User Note Database Record """
        ...

    @staticmethod
    @Generator.delete("/Delete",
        name = "Decommission a User Note via UUID",
        response_model = Module.Delete,
        responses = Request.Responses)
    async def DELETE(
        ID: Union[String, UUID] = None,
    DB: Dependency = Connection):
        """
        Delete a User Note Database Record
        """
        if ID is None:
            return JSON({
                "Error":       True,
                "Message":     "ID, must be Specified",
                "Status-Code": 422
            }, status_code = 422)
        else: Record = CRUD.SQL.Read(DB = DB, ID = ID, All = False)
        if Record is None:
            return JSON({
                "Error":       True,
                "Message":     "User Record Not Found",
                "Status-Code": 404
            }, status_code = 404)
        else:
            return CRUD.SQL.Delete(DB, ID = Record.ID)

Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = [
    "HTTP"
]
