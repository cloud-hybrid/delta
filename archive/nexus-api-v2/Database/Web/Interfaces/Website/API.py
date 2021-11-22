"""
...
"""

# =============================================================================
# Local Library
# =============================================================================
import fastapi

from . import *

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.Web.Interfaces.Website.CRUD as CRUD

# =============================================================================
# Schema Reference
# =============================================================================

import Database.Web.Schemas.Website as Type

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

import Database.SQL

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(prefix = "{0}/{1}".format(Request.Prefix, "Web"),
        tags = Request.Tags + ["Website"])

    @staticmethod
    @Generator.get("/Website/Index", name = "Query Websites via Optional Index",
        response_model = Union[List[Type.Schema], Type.Schema, None],
        responses = Request.Responses)
    async def Index(ID: Optional[Union[String, UUID, Integer]] = Query(None,
        description = "Website Record ID"
    )) -> Union[List[Type.Schema], Type.Schema]:
        """ ... """

        return CRUD.SQL.Index(ID)

    @staticmethod
    @Generator.get("/Website/Search", name = "Query Websites",
        response_model = Union[List[Type.Schema], Type.Schema, None],
        responses = Request.Responses)
    async def Search(ID: Optional[Union[UUID, String, Integer]] = Query(None,
        description = "Website Record ID"
    ), FQDN: Optional[String] = Query(None,
        description = "Website Entry Name"
    )) -> Union[List[Type.Schema], Type.Schema]:
        """ ... """

        raise NotImplementedError("Under Development")

    @staticmethod
    @Generator.post("/Website/Create", name = "Publish Website Records",
        response_model = Type.Create.Response(), status_code = 201)
    async def Create(Input: Type.Create = fastapi.Body(...)):
        """ ... """

        Data = Type.Create(Name = Name)

        Transaction = CRUD.SQL.Create(Data)

        return Transaction

Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
