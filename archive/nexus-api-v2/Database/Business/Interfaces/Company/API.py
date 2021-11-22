"""
...
"""

# =============================================================================
# Local Library
# =============================================================================

from . import *

import Database.SQL

import Database.Business.Schemas

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.Business.Interfaces.Company.CRUD as CRUD
import Database.Business.Schemas.Company as Module

# =============================================================================
# Schema Reference
# =============================================================================

# ... import Database.Business.Schemas.Unit as Unit # --> Deprecated; Schemas
# ... with External Definitions as Dependencies should be Imported the `Module`
# ... and therefore Accessed `Module.Example.Base`

# ... import API.Warnings

# ... API.Warnings.Warn(API.Warnings.Schema, __file__)

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, "Company"
        ), tags = Request.Tags + ["Company"]
    )

    Industry = Database.Business.Schemas.Industry

    @staticmethod
    @Generator.get("",
        name = "Query all Company Records",
        response_model = Optional[Union[List[Module.Schema], Module.Schema]],
        responses = Request.Responses)
    async def All():
        """ ... """

        return await CRUD.SQL.All()

    @staticmethod
    @Generator.post("",
        name = "Create a Company Table-Entry",
        response_model = Optional[Module.Schema],
        responses = Request.Responses)
    async def Create(Company: Module.Create):
        """ ... """

        try:
            return await CRUD.SQL.Create()
        except NotImplementedError:
            raise Error(400, "API Under Construction")

    @staticmethod
    @Generator.get("/Base",
        name = "Query all 1-D Company Records",
        response_model = Union[Module.Schema, List[Module.Schema]],
        responses = Request.Responses)
    async def Base():
        """
        ...
        """

        return await CRUD.SQL.Base()

    @staticmethod
    @Generator.get("/Search",
        name = "Query Company Record[s]",
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

    @staticmethod
    @Generator.get("/Industry/Types",
        name = "Query Business Industry Types",
        responses = Request.Responses,
        deprecated = False,
        response_model = type(["String"])
    )
    async def Types(All: Boolean = True, Industry: Optional[Industry] = Query(Industry.Default)):
        """ ... """

        return Industry.MRO()

    @staticmethod
    @Generator.post("/Business-Unit",
        name = "Create a Company Table-Entry with Business-Unit Array",
        response_model = Module.Schema,
        responses = Request.Responses)
    async def Units(Schema: Optional[Module.Record] = None,
        Company: Optional[String] = "[Company-Name]",
        Type: Optional[Database.Business.Schemas.Industry] = "[Industry]",
        Website: Optional[String] = "[URL]",
        Unit: Optional[List[String]] = Query(None),
    DB: Dependency = Connection):
        """ *Creates both `Company` **and** `Business-Unit` Table Entries*.

        **<u>Do Not Use if *Only* Creating a *Business-Unit* Entry.</u>**

        If a JSON Payload (Schema) is used instead of the field types, `Schema`
        will take priority; therefore, the back-end ignoring:

        - `Company`

        - `Type`

        - `Website`

        - `Unit`
        """

        raise Error(400, "API Under Construction")

        # Truths = {
        #     "Schema": Schema is not None,
        #     "Fields": {
        #         "Company": Company is not None,
        #         "Type": Type is not None,
        #         "Website": Website is not None
        #     }
        # }
        #
        # if Truths.get("Schema", False) is False:
        #     if all(Truths.get("Fields", {"...": False}).values()) is True:
        #         Company: Module.Base = Module.Base(
        #             Name = Company,
        #             Type = Type,
        #             Website = Website
        #         )
        #         if Unit is not None:
        #             Unit: [Module.Unit.Base] = [Module.Unit.Base(
        #                 Name = Index
        #             ) for Index in Unit]
        #     else: raise Exception("Error - Invalid, Empty Field Assignments")
        # else:
        #     Schema: Module.Record.dict = Module.Record(**Schema.dict()).dict()
        #     Unit: Optional[List[Module.Unit.Base]] = Schema.get("Unit", None)
        #
        #     Company: Module.Base = Module.Base(
        #         Name = Schema.Name,
        #         Type = Schema.Type,
        #         Website = Schema.Website
        #     )
        #
        #     if Unit is not None:
        #         Unit: [Module.Unit.Base] = [Module.Unit.Base(
        #             Name = Index.Unit
        #         ) for Index in Unit]
        #
        # return CRUD.SQL.Create(
        #     Company = Company,
        #     Unit = Unit,
        #     DB = DB
        # )

Database.SQL.Application.API.include_router(HTTP.Generator)
Database.SQL.Application.API.add_middleware(
    middleware_class = Middleware
)

__all__ = [
    "HTTP"
]
