"""
...
"""

from fastapi import Query

# =============================================================================
# Local Library
# =============================================================================

from . import *

import datetime

import API.ASGI

# import API.ASGI.Utilities.Date
# import API.ASGI.Utilities.Schema.Date

# import API.ASGI

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.AGILE.Interfaces.Synopsis.CRUD as CRUD
import Database.AGILE.Schemas.Synopsis as Module

# =============================================================================
# Schema Reference
# =============================================================================

# ... import API.ASGI.Utilities.Date

import Database.AGILE.Schemas.Note
# ... import Database.AGILE.Interfaces.Note.API
# ... import Database.AGILE.Interfaces.Note.CRUD

import Database.User.Schemas.Nexus
import Database.User.Interfaces.User.API
import Database.User.Interfaces.User.CRUD

import Database.Discord.Schemas.User
import Database.Discord.Interfaces.User.API
import Database.Discord.Interfaces.User.CRUD

import Database.Business.Schemas.Company
import Database.Business.Interfaces.Company.API
import Database.Business.Interfaces.Company.CRUD

import Database.Business.Schemas.Unit
import Database.Business.Interfaces.Unit.API
import Database.Business.Interfaces.Unit.CRUD

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

import Database.SQL


class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(prefix = "{0}/{1}".format(Request.Prefix, "AGILE"),
        tags = Request.Tags + ["Synopsis"])

    @staticmethod
    @Generator.get("", name = "Query SCRUM Submissions",
        response_model = List[Database.AGILE.Schemas.Synopsis.Schema],
        responses = Request.Responses, deprecated = True)
    async def Index(ID: Union[String, UUID, Integer] = None, Discord: String = None,
        Unit: Union[String, UUID, Integer] = None,
        Week: Integer = Query(None, description = "Integer from Range [1 ... 54]"),
        User: Union[String, UUID, Integer] = None):
        """ ...  """

        return CRUD.SQL.Read(ID = ID, Week = Week, User = User, Discord = Discord, Unit = Unit)

    @staticmethod
    @Generator.get("/Base", name = "Query Base SCRUM Submissions",
        response_model = Optional[List[Module.JSON]], responses = Request.Responses,
        deprecated = True)
    async def Base(ID: Optional[Union[String, UUID, Integer]] = None,
        Unit: Optional[Union[String, UUID, Integer]] = None,
        Week: Optional[Integer] = Query(None, description = "Integer from Range [1 ... 54]"),
        User: Optional[Union[String, UUID, Integer]] = None):
        """ ...  """

        return CRUD.SQL.Read(ID = ID, Week = Week, User = User, Unit = Unit)

    @staticmethod
    @Generator.post("/Scrum", name = "Publish a Weekly SCRUM Submission",
        response_model = Module.Schema,
        status_code = 201,
        responses = Request.Responses)
    async def JSON(Submission: Module.JSON):
        """ ...  """

        Response = CRUD.SQL.Create(Submission)

        return Response

    @staticmethod
    @Generator.post("/Scrum/Create", name = "Publish a Weekly SCRUM Submission",
        response_model = Module.Schema, status_code = 201, responses = Request.Responses)
    async def Create(Submission: Module.JSON):
        """ ...  """

        Response = CRUD.SQL.Create(Submission)

        return Response

    @staticmethod
    @Generator.get("/Scrum/Read", name = "Query Sharded SCRUM Submissions",
        response_model = Union[List[Module.Shard], Module.Shard],
    responses = Request.Responses)
    async def Shard(ID: Optional[Union[String, UUID, Integer]] = None,
        Unit: Optional[Union[String, UUID, Integer]] = None,
        Week: Optional[Integer] = Query(None, description = "Integer from Range [1 ... 54]"),
        User: Optional[Union[String, UUID, Integer]] = None):
        """ ...

        Example HTTP API Request:

        ```bash
        export URL="http://localhost:3000/API/AGILE/Scrum/Read"
        export ID="6aa2821c-8898-4afe-aa8c-4fe8f336d97b"

        curl -X 'GET' "${URL}?ID=${ID}" \\
            --header "accept: application/json"
        ```
        """

        return CRUD.SQL.Read(ID = ID, Week = Week, User = User, Unit = Unit)

    @staticmethod
    @Generator.put("/Scrum/Update", name = "Publish a Weekly SCRUM Submission",
        response_model = Module.Schema, status_code = 200, responses = Request.Responses)
    async def Update(Submission: Module.JSON,
        ID: Union[String, Integer, UUID] = Query(None, title = "Record-ID",
            description = "Unique Record Identifier")):
        """
        ...

        Example HTTP API Request:

        ```bash
        export URL="http://localhost:3000/API/AGILE/Scrum/Update?ID=6aa2821c-8898-4afe-aa8c-4fe8f336d97b"

        curl -X "PUT" "${URL}" \\
            --header "accept: application/json" \\
            --header "Content-Type: application/json" \\
            --data '{
                "UID": "string",
                "Synopsis": "string",
                "Projection": "string",
                "Complication": "string",
                "Note": {
                    "Content": "...",
                    "Internal": false
                },
                "Day": 6,
                "Week": 10,
                "Year": 2021
            }'
        ```
        """

        Response = CRUD.SQL.Update(ID, Submission)

        return Response

    @staticmethod
    @Generator.delete("/Scrum/Delete", name = "Delete a SCRUM Submission",
        responses = Request.Responses, status_code = 200)
    async def Delete(ID: Union[String, UUID, Integer] = None):
        """ ...  """
        return 200  # return CRUD.SQL.Delete()

    @staticmethod
    @Generator.get("/Total", name = "Query Total SCRUM Submissions", response_model = Module.Count,
        responses = Request.Responses)
    async def Total(ID: Union[String, UUID, Integer] = None, Discord: String = None,
        Unit: Union[String, UUID, Integer] = None,
        Week: Integer = Query(None, description = "Integer from Range [1 ... 54]"),
        User: Union[String, UUID, Integer] = None):
        """ ...  """

        return CRUD.SQL.Count(ID = ID, Week = Week, User = User, Discord = Discord, Unit = Unit)


Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
