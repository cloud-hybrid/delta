from . import *

import Database.SQL

from fastapi import HTTPException

from Database.Server.Interfaces.Server import CRUD
from Database.Server.Schemas import Server as Schemas


class HTTP(Request):
    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, "Server"
        ), tags = Request.Tags
    )

#     @staticmethod
#     @Generator.get("/All", response_model=List[Schemas.Schema], responses=Request.Responses,
#                    name="Query all server records")
#     async def READ(skip: int = 0, limit: int = 100, DB: Dependency = Connection):
#         allServers = CRUD.SQL.READ(limit=limit, skip=skip, db=DB)
#
#         return allServers
#
#     @staticmethod
#     @Generator.post("/Create", response_model=Schemas.Schema, responses=Request.Responses,
#                     name="Create a server record")
#     async def CREATE(schematic: Schemas.Create, DB: Dependency = Connection):
#         server_record = CRUD.SQL.get_by_name(Name=schematic.Name, db=DB)
#
#         if server_record:
#             raise HTTPException(status_code=409, detail="Server record already exists")
#
#         return CRUD.SQL.CREATE(schematic=schematic, db=DB)
#
#     @staticmethod
#     @Generator.get("/Search", response_model=Union[List[Schemas.Schema], Schemas.Schema], responses=Request.Responses,
#                    name="Query specific server record(s)")
#     async def GET(_UUID: String = None, Name: String = None, DB: Dependency = Connection):
#         server_record = None
#
#         if _UUID is None:
#             server_record = CRUD.SQL.get_by_name(Name=Name, db=DB)
#
#         else:
#             server_record = CRUD.SQL.get_by_uuid(_UUID=_UUID, db=DB)
#
#         if server_record is None:
#             raise HTTPException(status_code=404, detail="Server record does not exist")
#
#         return server_record
#
#     @staticmethod
#     @Generator.put("/Update", response_model=Schemas.Schema, responses=Request.Responses,
#                    name="Update a server record")
#     async def UPDATE(schematic: Schemas.Update, _UUID: String = None, Name: String = None, Deleted: Boolean = None,
#                DB: Dependency = Connection):
#         server_record = None
#
#         if _UUID is None:
#             server_record = CRUD.SQL.get_by_name(Name=Name, db=DB)
#
#         else:
#             server_record = CRUD.SQL.get_by_uuid(_UUID=_UUID, db=DB)
#
#         if server_record is None:
#             raise HTTPException(status_code=404, detail="Server record does not exist")
#
#         if Deleted:
#             server_record.Deletion = Time.now()
#         else:
#             server_record.Deletion = None
#
#         return CRUD.SQL.UPDATE(record=server_record, schematic=schematic, db=DB)
#
#     @staticmethod
#     @Generator.delete("/Delete", response_model=Schemas.Delete, responses=Request.Responses,
#                       name="Delete a schematic-General record")
#     async def DELETE(ContentID: String = None, ID: String = None, DB: Dependency = Connection):
#         schematic_general = CRUD.SQL.DELETE(ContentID=ContentID, ID=ID, db=DB)
#
#         if schematic_general is None:
#             raise HTTPException(status_code=404, detail="Discord schematic does not exist")
#
#         return schematic_general
#
#
# Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = [
    "HTTP"
]
