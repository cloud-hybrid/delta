import os

import devtools

from . import *

import collections

import Mongo.URLs.Collections.Base
from Mongo.URLs.Schemas.Schema import (
    Base, Schema, User, Instantiation, Properties, Response, Input
)

import bson.errors

import starlette.responses as Responses

import fastapi.requests

import Database.User.Interfaces.User.API
import Database.User.Schemas.Nexus

from devtools import debug
from fastapi.responses import HTMLResponse

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)

    Generator is a Wrapper around FastAPI's Router
    """

    Endpoint = Request.Prefix + __module__.split(".")[-2]

    Generator = Request.Generator()
    Responses = Request.Responses

    Generator.prefix = Endpoint
    Generator.tags = Request.Tags + __module__.split(".")[1:-1]
    Generator.include_in_schema = True

    Request = Request.Ingress

    CRUD = Mongo.URLs.Collections.Base.Document()

    @staticmethod
    @Generator.post("/Row/Create",
        name = "Update User-URLs Row Data",
        summary = "User-URLs HTML [C]RUD Endpoint",
        responses = Responses,
        response_model = Response,
        response_description = "Query Response Return",
        status_code = 201,
        deprecated = False
    )
    async def createRows(Body: Input = Body(...), Authorization: Optional[String] = Header(None)):
        Type = Database.User.Schemas.Nexus.Information

        JWT = Authorization.split(" ")[-1]

        Account = Request.Table(await Authorizer.Information(JWT), Type)

        Profile: User = User(**{"Username": Account.Username, "Email": Account.Email, "ID": Account.ID, "Token": Account.HTML})

        devtools.debug(Profile)

        Combined = Primary(**Profile.dict(), **{"...": "..."})

        devtools.debug(Combined)

        # return await HTTP.CRUD.create(Combined)
        return []

    @staticmethod
    @Generator.get("/All",
        name = "Query All User-URL Configurations",
        summary = "User-URLs C[R]UD (All) Endpoint",
        responses = Responses,
        response_model = List[Schema],
        response_description = "Query Response Return",
        status_code = 200,
        deprecated = False
    )
    async def All():
        return await HTTP.CRUD.gets()

    @staticmethod
    @Generator.get("",
        name = "Query a User-URLs HTML Configuration",
        summary = "User-URLs HTML C[R]UD (Document) Endpoint",
        responses = Responses,
        response_model = Schema,
        response_description = "Query Response Return",
        status_code = 200,
        deprecated = False
    )
    async def Read(
        Authorization: Optional[String] = Header(None)
    ) -> Schema:
        Type = Database.User.Schemas.Nexus.Information

        JWT = Authorization.split(" ")[-1]

        Account = Request.Table(await Authorizer.Information(JWT), Type)

        response = None

        try:
            response = await HTTP.CRUD.get(Account.HTML)
        except bson.errors.InvalidId:
            response = Responses.JSONResponse(
                content = {
                    "Mutation":    "Document Look-Up by Object-ID",
                    "Status-Code": 422,
                    "Message":     "Error - Invalid ID as Input"
                }, status_code = 422)
        finally:
            if response == None or response.get("User", None) is None:
                return await HTTP.Update({"Content": []}, Authorization)
            else:
                return response

    @classmethod
    async def Instantiate(cls) -> Instantiation:
        return await HTTP.CRUD.create({})

    @classmethod
    async def Create(cls, Document: Base = Body(..., embed = False), Authorization: Optional[String] = None) -> Schema:
        return await cls.Update(Document, Authorization = Authorization)

    @staticmethod
    @Generator.post("/Update",
        name = "Update User-URLs HTML",
        summary = "User-URLs HTML [C]RUD Endpoint",
        responses = Responses,
        response_model = Schema,
        response_description = "Query Response Return",
        status_code = 201,
        deprecated = False
    )
    async def Update(Document: Base = Body(..., embed = False, media_type = "Application/JSON"),
        Authorization: Optional[String] = Header(None)):
        Type = Database.User.Schemas.Nexus.Information

        JWT = Authorization.split(" ")[-1]

        Account = Request.Table(await Authorizer.Information(JWT), Type)

        Profile: User = User(
            **{"Username": Account.Username, "Email": Account.Email, "ID": Account.ID, "Token": Account.HTML})

        if type(Document) != type({}):
            Document = Document.dict()

        Document.update(**{"User": Profile.dict()})

        devtools.debug(Document)

        return await HTTP.CRUD.update(Profile.Token, Document)

Mongo.Server.API.include_router(HTTP.Generator)

__all__ = [
    "HTTP"
]
