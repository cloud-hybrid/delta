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

import Database.Web.Interfaces.Breadcrumb.CRUD as CRUD

# =============================================================================
# Schema Reference
# =============================================================================

import Database.Web.Schemas.Breadcrumb as Type

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

import Database.SQL

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(prefix = "{0}/{1}".format(Request.Prefix, "Web"),
        tags = Request.Tags + ["Breadcrumb"])

    @staticmethod
    @Generator.get("/Breadcrumb/Index", name = "Query Website Breadcrumbs via Optional Index",
        response_model = Union[List[Type.Schema], Type.Schema, None],
        responses = Request.Responses)
    async def Index(ID: Optional[Union[String, UUID, Integer]] = Query(None,
        description = "Breadcrumb Record ID"
    )) -> Union[List[Type.Schema], Type.Schema, None]:
        """ ... """

        return CRUD.SQL.Index(ID)

    @staticmethod
    @Generator.get("/Breadcrumb/Search", name = "Query Website Breadcrumbs",
        response_model = Union[List[Type.Schema], Type.Schema, None],
        responses = Request.Responses)
    async def Search(ID: Optional[Union[UUID, String, Integer]] = Query(None,
        description = "Breadcrumb Record ID"
    ), WID: Optional[String] = Query(None,
        description = "Website Record ID"
    ), FQDN: Optional[String] = Query(None,
        description = "Breadcrumb's Website Name"
    )) -> Union[List[Type.Schema], Type.Schema, None]:
        """ ... """

        raise NotImplementedError("Under Development")

    @staticmethod
    @Generator.post("/Breadcrumb/Create", name = "Publish Website Breadcrumb Records via Fields",
        response_model = Type.Schema, status_code = 201, responses = Request.Responses)
    async def Create(Website: String = Query(...,
        description = "Website's UUID"
    ), Path: String = Query(...,
        description = "HTML Breadcrumb"
    )):
        """ ...  """

        Data = Type.Generator(Path = Path, Website = Website)

        Transaction = CRUD.SQL.Create(Data)

        return Transaction

Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
