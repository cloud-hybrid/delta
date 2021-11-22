"""
...
"""

# =============================================================================
# Local Library
# =============================================================================

import secrets

import starlette.requests

from . import *

import textwrap
import devtools
import bcrypt
import typing

from fastapi import Query, HTTPException, Header, Body, Form

# =============================================================================
# External, Third-Party
# =============================================================================

import json
import pprint
from typing import Any

from sqlalchemy.orm import Session

from fastapi import Depends

import Database.SQL

# =============================================================================
# Package Model(s)
# =============================================================================

import Database.User.Interfaces.User.CRUD as CRUD
import Database.User.Schemas.Nexus as Model

# =============================================================================
# Schema Reference
# =============================================================================

import Database.User.Schemas.Name
import Database.User.Schemas.Note
import Database.User.Schemas.Verification
import Database.Business.Schemas.Company
import Database.Business.Schemas.Unit as Unit

import Database.User.Models.Nexus
import Database.Business.Models.Company
import Database.Business.Models.Unit

import Database.Business.Interfaces.Unit.API
import Database.Business.Interfaces.Unit.CRUD
import Database.Business.Interfaces.Company.API
import Database.Business.Interfaces.Company.CRUD

# ... import Database.User.Schemas.Discord
# ... import Database.User.Schemas.Discord.User

# import Database.Discord.Schemas.User

import Mongo.URLs.Interfaces.API

# =============================================================================
# Interface Reference
# =============================================================================

# import Database.User.Interfaces.Discord.CRUD

# import Database.Discord.Interfaces.User.API

# =============================================================================
# Local Model(s)
# =============================================================================

from API.ASGI.Authentication import (
    Context as Authentication
)

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

Secure = Depends(Authentication.Interface.Session)

from devtools import debug

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Endpoint = Request.Prefix + __module__.split(".")[-2]

    Generator = Request.Generator()

    Generator.prefix = Endpoint
    Generator.tags = Request.Tags + ["Users"]
    # Generator.dependencies              = { Secure }
    Generator.include_in_schema = True

    Descriptions = {
        "Parameters": {
            "Gender-Codes": textwrap.dedent("""\
            "**ISO / IEC5218 - Gender Codes**
                - Unspecified:  `0x0`
                - Male:         `0x1`
                - Female:       `0x2`
                - Other:        `0x9`
            """)
        }
    }

    @staticmethod
    @Generator.get("",
        response_model = Optional[List[Model.Base]],
        responses = Request.Responses,
        name = "Query All 1-D Application Users")
    async def Base():
        """ ... """

        return await CRUD.SQL.Base()

    @staticmethod
    @Generator.get("/Total",
        response_model = Integer,
        responses = Request.Responses,
        name = "Query Total Users")
    async def Total():
        """ ... """

        return await CRUD.SQL.Total()

    @staticmethod
    @Generator.get("/All",
        response_model = List[Model.Schema],
        responses = Request.Responses,
        name = "Query All Application Users & Relationships")
    async def All(
        Skip: Optional[Integer] = Query(0, description = "0"),
        Limit: Optional[Integer] = Query(100, description = "100")
    ):
        """ ... """

        Collection = []

        Users = await CRUD.SQL.Extended(Skip = Skip, Limit = Limit)

        if Users is not None:
            for User in Users:
                Proxy = Dictionary(**vars(User))
                Proxy.pop("_sa_instance_state", None)

                Names = []
                for _ in User.Name:
                    _ = Dictionary(**vars(_))
                    _.pop("_sa_instance_state", None)

                    Names.append(_)

                Proxy["Name"] = Names

                Notes = []
                for _ in User.Note:
                    _ = Dictionary(**vars(_))
                    _.pop("_sa_instance_state", None)

                    Notes.append(_)

                Proxy["Note"] = Notes

                Proxy["Company"] = Dictionary(**vars(User.Company))
                Proxy["Verification"] = Dictionary(**vars(User.Verification))
                Proxy["Unit"] = Dictionary(**vars(User.Unit))

                Proxy["Company"].pop("_sa_instance_state", None)
                Proxy["Verification"].pop("_sa_instance_state", None)
                Proxy["Unit"].pop("_sa_instance_state", None)

                Collection.append(Proxy)

        return Collection

    @staticmethod
    @Generator.get("/Search",
        response_model = Optional[List[Model.Schema]],
        responses = Request.Responses,
        name = "Query Application Users")
    async def Search(
        ID: Optional[Union[String, UUID, Integer]] = Query(None, description = "ID"),
        Username: Optional[Union[String, UUID, Integer]] = Query(None, description = "Username"),
        Email: Optional[Union[String, Address]] = None,
        Skip: Integer = 0,
        Limit: Integer = 100
    ):
        """ ... """

        try:
            Email = Address.validate(Email).lower() if Email is not None else None
        except Exception as Error:
            print("Type: {0}".format(type(Error)))
            print("Error: {0}".format(Error))
            raise Error

        return CRUD.SQL.Read(
            ID = ID,
            Username = Username,
            Email = Email,
            Skip = Skip,
            Limit = Limit
        )

    @staticmethod
    @Generator.get("/Account",
        response_model = Model.Schema,
        responses = Request.Responses,
        name = "Query a Single Application User")
    async def Account(Username: String):
        """ ... """

        User = await CRUD.SQL.Read(Username = Username)

        devtools.debug(User)

        return User

    @staticmethod
    @Generator.get("/Account/Shard",
        response_model = Model.Shard,
        responses = Request.Responses,
        name = "Query a Sharded, Simplified Application User")
    async def Shard(Username: String) -> Optional[Model.Shard]:
        """ ... """

        return await CRUD.SQL.Read(Username = Username)

    @staticmethod
    @Generator.get("/ID",
        response_model = Optional[Model.Schema],
        responses = {**Request.Responses, **{200:
            {"content": {"application/json": {"example": UID()}}}}},
        name = "Query a Single Application User.ID")
    async def ID(User: Union[String, UUID]) -> Optional[UUID]:
        """ ... """

        return await CRUD.SQL.Read(ID = "{0}".format(User))

    @staticmethod
    @Generator.get("/Account/Notes",
        response_model = Model.Types.Note.Schema,
        responses = Request.Responses,
        name = "Query Nexus User-Note Records")
    async def Note(Username: String = Query(
        ..., description = "Application (Nexus) User"
    )):
        """ ... """

        return await CRUD.SQL.Read(Username = Username)

    @staticmethod
    @Generator.get("/Account/Verification",
        response_model = Model.Types.Verification.Schema,
        responses = Request.Responses,
        name = "Query a Nexus-User Verification Status")
    async def Verification(Username: String = Query(
        ..., description = "Application (Nexus) User"
    )):
        """ ... """

        return await CRUD.SQL.Read(Username = Username)

    @staticmethod
    @Generator.get("/Account/Company",
        response_model = Model.Types.Company.Shard,
        responses = Request.Responses,
        name = "Query a Nexus-User Company")
    async def Companies(Username: String = Query(
        ..., description = "Application (Nexus) User"
    )):
        """ ... """

        User: Model.Schema = await HTTP.Account(Username = Username)

        return Database.Business.Interfaces.Company.CRUD.SQL.Read(
            Name = User.Company.Name
        )

    @staticmethod
    @Generator.post("/Create",
        name = "Create a Complete User Record",
        status_code = 201,
        responses = {
            201: {
                "description": textwrap.dedent("""
                Create a new User Record
                
                Note, when creating any of the following types:
                
                - `Company`
                
                - `Unit`
                
                the API will handle edge cases to either create a new `Company` and/or `Business-Unit`
                record(s), or update such record(s) with the new User.
                """).lstrip(),
                "content":     {
                    "application/json": {
                        "example": {
                            "Password":     "$2b$12$s1LV6iXfb8qFFHxSzsD8/eZ2K0ytUYedhsJPUjji/LNjUPbx9fxCi",
                            "VFK":          "863f5651-1fe3-4422-9c1a-b1bcd59c9b4f",
                            "Salt":         "$2b$12$s1LV6iXfb8qFFHxSzsD8/e",
                            "Creation":     "2021-08-26T04:09:17.029681+00:00",
                            "Active":       True,
                            "ID":           "2b6f09fa-2130-4b15-9283-5e2416269638",
                            "Token":        "Fud0uXmEk3dL56G7BxP5VXBeekpDC5KEbNLmMcDnj1I",
                            "Modification": None,
                            "GISO":         9,
                            "Username":     "Administrator",
                            "Preferred":    "Name",
                            "Email":        "Engineer@Cloud-Technology.IO",
                            "CFK":          "8abc1863-052a-4136-966d-292b2ef4666e",
                            "UFK":          "dbc5fb21-a8ab-4bd7-a8a6-466ee22b9319",
                            "Company":      {
                                "ID":           "8abc1863-052a-4136-966d-292b2ef4666e",
                                "Name":         "Cloud-Technology LLC.",
                                "Website":      "https://nexus.cloud-technology.io/",
                                "Creation":     "2021-08-26T04:09:17.029681+00:00",
                                "Modification": None,
                                "Type":         "IT"
                            },
                            "Unit":         {
                                "Creation":     "2021-08-26T04:09:17.029681+00:00",
                                "ID":           "dbc5fb21-a8ab-4bd7-a8a6-466ee22b9319",
                                "Name":         "Research & Development",
                                "Modification": None,
                                "CFK":          "8abc1863-052a-4136-966d-292b2ef4666e"
                            },
                            "Verification": {
                                "Verified":     False,
                                "ID":           "863f5651-1fe3-4422-9c1a-b1bcd59c9b4f",
                                "Modification": None,
                                "Creation":     "2021-08-26T04:09:17.029681+00:00"
                            },
                            "Name":         [
                                {
                                    "ID":           "a0ac27d0-8d80-40e9-a9e5-f6f5d3651597",
                                    "Modification": None,
                                    "Middle":       "Brian",
                                    "Creation":     "2021-08-26T04:09:17.029681+00:00",
                                    "UID":          "2b6f09fa-2130-4b15-9283-5e2416269638",
                                    "First":        "Jacob",
                                    "Last":         "Sanders"
                                }
                            ],
                            "Note":         [
                                {
                                    "ID":           "6fb6e529-1caf-411a-8247-1cc651b88819",
                                    "Creation":     "2021-08-26T04:09:17.029681+00:00",
                                    "Modification": None,
                                    "Internal":     True,
                                    "UID":          "2b6f09fa-2130-4b15-9283-5e2416269638",
                                    "Content":      "..."
                                }
                            ],
                            "HTML-Foreign-Key": "..."
                        }
                    }
                }
            }
        }
    )
    async def Create(User: Model.Create = Body(...)) -> CRUD.Coroutine:  # example = Model.JSON.Example())):
        """
        ...
        """

        try: Address.validate(User.Email).lower()
        except Exception as Error:
            print(Error)
            return JSON({
                "Error":       True,
                "Message":     "Malformed Email Address",
                "Status-Code": 422
            }, status_code = 422)

        if Partial := await CRUD.SQL.Read(Username = User.Username) is not None:
            sys.stdout.write("[Nexus-API]: User.Create Attempt - %s" % Partial + "\n")
            return JSON({
                "Error":       True,
                "Message":     "Username is Unavailable",
                "Status-Code": 409
            }, status_code = 409)

        Password: Secret = User.dict().pop("Password").get_secret_value()

        Buffer = memoryview(bytes(str(Password), encoding = "UTF-8"))

        try:
            Salt = bcrypt.gensalt()
            User.Password = String(
                bcrypt.hashpw(Buffer.tobytes("F"), Salt),
                encoding = "UTF-8"
            )

        except Exception as Error:
            Password = None
            Buffer.release()

            raise HTTPException(400, "Bad Request Attempt [@Task Update Exception]")
        finally:  # --> Always Ensure RAW Password is Released from Memory
            Password = None
            Buffer.release()

        Document = await Mongo.URLs.Interfaces.API.HTTP.Instantiate()

        return await CRUD.SQL.Create(User, String(Salt, encoding = "UTF-8"), secrets.token_urlsafe(32), HTML = Document.get("ID"))

    @staticmethod
    @Generator.post("/Create/URL-Encoded",
        name = "Create a Complete User Record (Form)",
        status_code = 201,
        responses = {
            201: {
                "description": textwrap.dedent("""
                Create a new User Record
                
                Note, when creating any of the following types:
                
                - `Company`
                
                - `Unit`
                
                the API will handle edge cases to either create a new `Company` and/or `Business-Unit`
                record(s), or update such record(s) with the new User.
                """).lstrip(),
                "content":     {
                    "application/json": {
                        "example": {
                            "Salt":         "$2b$12$1DVEw2LiSbpPbE7VOICH/O",
                            "Creation":     "2021-08-26T06:10:37.016507+00:00",
                            "Active":       True,
                            "ID":           "44a52781-af81-4c4e-b27a-fa96ffee118a",
                            "Token":        "MvKs_-AlkTGh5DrZh21EvxL6SqCehCL-4K_u6nZ_KSc",
                            "Modification": None,
                            "GISO":         0,
                            "Username":     "Segmentational",
                            "Preferred":    "Null-Byte",
                            "Email":        "jacob.sanders@cloudhybrid.io",
                            "CFK":          "f8931e57-568e-421b-8747-3a4082a3226a",
                            "Password":     "$2b$12$1DVEw2LiSbpPbE7VOICH/OP8Y3acIuLGAQUDK4cVMBCa/Ep0Ua8Gu",
                            "UFK":          "c3f2128c-1cc1-4f9c-ba39-4ad03105d3fa",
                            "VFK":          "885ab58e-81f2-4c91-8b37-0f9990bb4d5b",
                            "Company":      {
                                "ID":           "f8931e57-568e-421b-8747-3a4082a3226a",
                                "Name":         "Cloud-Technology LLC.",
                                "Website":      "https://cloud-hybrid.io",
                                "Creation":     "2021-08-26T06:10:37.016507+00:00",
                                "Modification": None,
                                "Type":         "IT"
                            },
                            "Unit":         {
                                "ID":           "c3f2128c-1cc1-4f9c-ba39-4ad03105d3fa",
                                "Creation":     "2021-08-26T06:10:37.016507+00:00",
                                "Name":         "Business-Unit-Example",
                                "Modification": None,
                                "CFK":          "f8931e57-568e-421b-8747-3a4082a3226a"
                            },
                            "Verification": {
                                "Creation":     "2021-08-26T06:10:37.016507+00:00",
                                "Modification": None,
                                "Verified":     True,
                                "ID":           "885ab58e-81f2-4c91-8b37-0f9990bb4d5b"
                            },
                            "Name":         [
                                {
                                    "UID":          "44a52781-af81-4c4e-b27a-fa96ffee118a",
                                    "Creation":     "2021-08-26T06:10:37.016507+00:00",
                                    "First":        "Jacob",
                                    "Last":         "Sanders",
                                    "ID":           "78a7fe9e-f804-4010-8b99-a80a425e8b67",
                                    "Modification": None,
                                    "Middle":       "Brian"
                                }
                            ],
                            "Note":         [],
                            "HTML-Foreign-Key": "..."
                        }
                    }
                }
            },
            409: {
                "description": "An Error Return when Username is Unavailable",
                "content":     {
                    "application/json": {
                        "example": {
                            "Error":       True,
                            "Message":     "Username is Unavailable",
                            "Status-Code": 409
                        }
                    }
                }
            }
        }
    )
    async def Form(User: Model.Form = Body(None, media_type = "application/x-www-form-urlencoded")) -> CRUD.Coroutine:
        """
        Fundamentally, the difference between Form and Create should be minimal. Realistically, there are
        differences in how Python signs the class-function (staticmethod) signatures and the expected
        type casting of input type(s).

        ***Actual* Required Fields**:

        - `Username`

        - `Email-Address`

        - `Password`

        - `Active`
            - Only `True`

        - `Gender-Code`

            ```py
            >>> class ISO5218(Integer, Enumeration):
            >>>     NULL    = 0x0
            >>>     MALE    = 0x1
            >>>     FEMALE  = 0x2
            >>>     OTHER   = 0x9
            ```

        - `First-Name`

        - `Last-Name`

        - `Verification`

        *Optionals*:

        - `Company`

        - `Industry`

            ```py
            >>> class Industry(str, enum.Enum):
            >>>     IT = "IT"
            >>>     Medical = "Medical"
            >>>     Construction = "Construction"
            >>>     Entertainment = "Entertainment"
            >>>     Transportation = "Transportation"
            >>>     Security = "Security"
            >>>     Consulting = "Consulting"
            >>>     Hospitality = "Hospitality"
            >>>     Automobile = "Automobile"
            >>>     Estate = "Real-Estate"
            >>>     Finance = "Finance"
            >>>     Insurance = "Insurance"
            >>>     Oil = "Oil"
            >>>     Mining = "Mining"
            >>>     Energy = "Energy"
            >>>     Engineering = "Engineering"
            >>>     Electronics = "Electronics"
            >>>     Legal = "Legal"
            >>>     Telecommunications = "Telecommunications"
            >>>     Retail = "Retail"
            >>>     Education = "Education"
            >>>     Storage = "Storage"
            >>>     Textiles = "Textiles"
            >>>     Agriculture = "Agriculture"
            >>>     Manufacturing = "Manufacturing"
            >>>     Gaming = "Gaming"
            >>>     Default = "Default"
            ```

        - `Preferred-Name`

        - `Middle-Name`

        - `Website`
            - Aliased to `URL`

        - `Unit`
            - Aliased to `Business-Unit`

        """

        try: Address.validate(User.Email).lower()
        except Exception as Error:
            print(Error)
            return JSON({
                "Error":       True,
                "Message":     "Malformed Email Address",
                "Status-Code": 422
            }, status_code = 422)

        if (Partial := await CRUD.SQL.Read(Username = User.Username)) != None:
            devtools.debug("ERROR", Partial)

            return JSON({
                "Error":       True,
                "Message":     "Username is Unavailable",
                "Status-Code": 409
            }, status_code = 409)

        devtools.debug(User)

        Password: String = User.dict().pop("Password")

        Buffer = memoryview(bytes(str(Password), encoding = "UTF-8"))

        try:
            Salt = bcrypt.gensalt()
            User.Password = String(
                bcrypt.hashpw(Buffer.tobytes("F"), Salt),
                encoding = "UTF-8"
            )

        except Exception as Error:
            Password = None
            Buffer.release()

            raise HTTPException(400, "Bad Request Attempt [@Task Update Exception]")
        finally:  # --> Always Ensure RAW Password is Released from Memory
            Password = None
            Buffer.release()

        Document = await Mongo.URLs.Interfaces.API.HTTP.Instantiate()

        return await CRUD.SQL.Form(User, String(Salt, encoding = "UTF-8"), secrets.token_urlsafe(32), HTML = Document.get("ID"))

Database.SQL.Application.API.include_router(HTTP.Generator)

__all__ = [
    "HTTP"
]
