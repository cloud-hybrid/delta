from . import *

from fastapi import HTTPException

from Database.CMS.Interfaces.General import CRUD
from Database.CMS.Schemas import General as Schemas


class HTTP(Request):
    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, "General"
        ), tags = Request.Tags
    )

    @staticmethod
    @Generator.get("/All", response_model=List[Schemas.Schema], responses=Request.Responses,
                   name="Query all CMS-General records")
    async def READ(skip: int = 0, limit: int = 100, DB: Dependency = Connection):
        general_all = CRUD.SQL.READ(limit=limit, skip=skip, db=DB)

        return general_all

    @staticmethod
    @Generator.post("/Create", response_model=Schemas.Schema, responses=Request.Responses,
                    name="Create a CMS-General record")
    async def CREATE(cms: Schemas.Create, DB: Dependency = Connection):
        cms_general = CRUD.SQL.get_by_content_id(ContentID=cms.ContentID, db=DB)

        if cms_general:
            raise HTTPException(status_code=409, detail="Discord CMS record already exists")

        return CRUD.SQL.CREATE(cms=cms, db=DB)

    @staticmethod
    @Generator.get("/Search", response_model=Union[List[Schemas.Schema], Schemas.Schema], responses=Request.Responses,
                   name="Query specific CMS-General record(s)")
    async def GET(ContentID: String = None, ID: String = None, DB: Dependency = Connection):
        cms_general = None

        if ContentID is None:
            cms_general = CRUD.SQL.get_by_id(ID=ID, db=DB)

        elif ID is None:
            cms_general = CRUD.SQL.get_by_content_id(ContentID=ContentID, db=DB)

        if cms_general is None:
            raise HTTPException(status_code=404, detail="Discord CMS does not exist")

        return cms_general

    @staticmethod
    @Generator.put("/Update", response_model=Schemas.Schema, responses=Request.Responses,
                   name="Update a CMS-General record")
    async def UPDATE(cms: Schemas.Update, ContentID: String = None, ID: String = None, Deleted: Boolean = None,
               DB: Dependency = Connection):
        cms_general = None

        if ContentID is None:
            cms_general = CRUD.SQL.get_by_id(ID=ID, db=DB)

        elif ID is None:
            cms_general = CRUD.SQL.get_by_content_id(ContentID=ContentID, db=DB)

        if cms_general is None:
            raise HTTPException(status_code=404, detail="Discord CMS does not exist")

        if Deleted:
            cms_general.Deletion = Time.now()
        else:
            cms_general.Deletion = None

        return CRUD.SQL.UPDATE(record=cms_general, cms=cms, db=DB)

    @staticmethod
    @Generator.delete("/Delete", response_model=Schemas.Delete, responses=Request.Responses,
                      name="Delete a CMS-General record")
    async def DELETE(ContentID: String = None, ID: String = None, DB: Dependency = Connection):
        cms_general = CRUD.SQL.DELETE(ContentID=ContentID, ID=ID, db=DB)

        if cms_general is None:
            raise HTTPException(status_code=404, detail="Discord CMS does not exist")

        return cms_general


Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = [
    "HTTP"
]
