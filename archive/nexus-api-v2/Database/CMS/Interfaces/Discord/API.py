"""
...
"""

from . import *

import Database.SQL

from fastapi import HTTPException

from Database.CMS.Interfaces.Discord import CRUD
from Database.CMS.Schemas import Discord as Schemas


class HTTP(Request):
    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, "Discord"
        ), tags = Request.Tags
    )

#     @staticmethod
#     @Generator.get("/All", response_model=List[Schemas.Schema], responses=Request.Responses,
#                    name="Query all CMS-Discord records")
#     async def READ(skip: int = 0, limit: int = 100, DB: Dependency = Connection):
#         discord_all = CRUD.SQL.READ(limit=limit, skip=skip, db=DB)
#
#         return discord_all
#
#     @staticmethod
#     @Generator.post("/Create", response_model=Schemas.Schema, responses=Request.Responses,
#                     name="Create a CMS-Discord record")
#     async def CREATE(cms: Schemas.Create, DB: Dependency = Connection):
#         cms_discord = CRUD.SQL.get_by_content_id(ContentID=cms.ContentID, db=DB)
#
#         if cms_discord:
#             raise HTTPException(status_code=409, detail="Discord CMS record already exists")
#
#         return CRUD.SQL.CREATE(cms=cms, db=DB)
#
#     @staticmethod
#     @Generator.get("/Search", response_model=Union[List[Schemas.Schema], Schemas.Schema], responses=Request.Responses,
#                    name="Query specific CMS-Discord record(s)")
#     async def GET(ContentID: String = None, ID: String = None, AuthorID: String = None, ChannelID: String = None,
#             DB: Dependency = Connection):
#
#         cms_discord = None
#
#         if ContentID or ID:
#             if ContentID is None:
#                 cms_discord = CRUD.SQL.get_by_id(ID=ID, db=DB)
#
#             elif ID is None:
#                 cms_discord = CRUD.SQL.get_by_content_id(ContentID=ContentID, db=DB)
#
#         elif AuthorID or ChannelID:
#             if AuthorID is None:
#                 cms_discord = CRUD.SQL.get_all_by_channel_id(ChannelID=ChannelID, db=DB)
#
#             elif ChannelID is None:
#                 cms_discord = CRUD.SQL.get_all_by_author_id(AuthorID=AuthorID, db=DB)
#
#         if cms_discord is None:
#             raise HTTPException(status_code=404, detail="Discord CMS does not exist")
#
#         return cms_discord
#
#     @staticmethod
#     @Generator.put("/Update", response_model=Schemas.Schema, responses=Request.Responses,
#                    name="Update a CMS-Discord record")
#     async def UPDATE(cms: Schemas.Update, ContentID: String = None, ID: String = None, Deleted: Boolean = None,
#                DB: Dependency = Connection):
#         cms_discord = None
#
#         if ContentID is None:
#             cms_discord = CRUD.SQL.get_by_id(ID=ID, db=DB)
#
#         elif ID is None:
#             cms_discord = CRUD.SQL.get_by_content_id(ContentID=ContentID, db=DB)
#
#         if cms_discord is None:
#             raise HTTPException(status_code=404, detail="Discord CMS does not exist")
#
#         if Deleted:
#             cms_discord.Deletion = Time.now()
#         else:
#             cms_discord.Deletion = None
#
#         return CRUD.SQL.UPDATE(record=cms_discord, cms=cms, db=DB)
#
#     @staticmethod
#     @Generator.delete("/Delete", response_model=Schemas.Delete, responses=Request.Responses,
#                       name="Delete a CMS-Discord record")
#     async def DELETE(ContentID: String = None, ID: String = None, DB: Dependency = Connection):
#         cms_discord = CRUD.SQL.DELETE(ContentID=ContentID, ID=ID, db=DB)
#
#         if cms_discord is None:
#             raise HTTPException(status_code=404, detail="Discord CMS does not exist")
#
#         return cms_discord
#
#
# Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = [
    "HTTP"
]


