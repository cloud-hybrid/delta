import asyncio
import dataclasses
import os
import ssl

__module__ = __name__

import botocore.exceptions

from fastapi import HTTPException

from . import *

import API.ASGI.Authentication.Token as Token

# =============================================================================
# Standard Library
# =============================================================================

import time
import asyncio
import datetime
import tempfile

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

import boto3.s3.transfer

import Database.User.Interfaces.User.API
import Database.User.Schemas.Nexus

from devtools import debug
from fastapi.responses import HTMLResponse

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)

    Generator is a Wrapper around FastAPI's Router
    """

    Bucket = "nexus-client-storage"

    Endpoint = Request.Prefix + __module__.split(".")[-2]

    Generator = Request.Generator()

    Generator.prefix                    = Endpoint
    Generator.tags                      = Request.Tags + __module__.split(".")[1:-1]
    # Generator.dependencies              = { Secure }
    Generator.include_in_schema         = True

    @staticmethod
    @Generator.post("/Meta",
        name = "S3 Meta-Data",
        responses = Request.Responses,
        response_model = Optional[Schema.Meta]
    )
    async def Meta():
        Client = Wrapper.Client("S3")
        Client.pop("Service")

        return Schema.Meta(**{"Data": Client})

    @staticmethod
    @Generator.get("/Get-Bucket-Content", name = "Update Bucket Content", responses = Request.Responses, response_class = HTMLResponse)
    async def updateBucketContent(
        Bucket: String,
        Object: String,
        # Authorization: Optional[String] = Header(...)
    ):
        # --> Counter := 0
        # Lock = asyncio.Semaphore(0)

        # --> Counter := 1
        # await Lock.acquire()

        # Type = Database.User.Schemas.Nexus.Information

        # JWT = Authorization.split(" ")[-1]

        # Account = await Authorizer.Information(JWT)

        # User: Type = Request.Table(Account, Database.User.Schemas.Nexus.Information)

        Content = None
        Thrown = None

        try:
            Client = Wrapper.Client("S3").get("Service")
            Content = Client.get_object(Bucket = Bucket, Key = Object).get("Body").read()
        except Exception as Error:
            debug(Error)

            Thrown = Error
        finally:
            # --> Counter := 0
            # Lock.release()

            if Thrown is not None:
                raise Thrown

        return Content

    @staticmethod
    @Generator.put("/Update-Bucket-Content", name = "Update Bucket Content", responses = Request.Responses, response_class = HTMLResponse)
    async def updateBucketContent(
        Bucket: String,
        Object: String,
        Content = Body(default = ..., media_type = "text/html")
        # Authorization: Optional[String] = Header(...)
    ):
        # --> Counter := 0
        # Lock = asyncio.Semaphore(0)

        # --> Counter := 1
        # await Lock.acquire()

        # Type = Database.User.Schemas.Nexus.Information
        #
        # JWT = Authorization.split(" ")[-1]
        #
        # Account = await Authorizer.Information(JWT)
        #
        # User: Type = Request.Table(Account, Database.User.Schemas.Nexus.Information)

        Content = None
        Thrown = None

        try:
            Client = Wrapper.Client("S3").get("Service")
            Content = Client.put_object(Body = Content, Bucket = Bucket, ContentType = Content.media_type, Key = Object)
        except Exception as Error:
            debug(Error)

            Thrown = Error
        finally:
            # --> Counter := 0
            # Lock.release()

            if Thrown is not None:
                raise Thrown

        return Content

    @staticmethod
    @Generator.post("/Instantiate-User-Directories",
        name = "S3 Upload File",
        responses = Request.Responses
    )
    async def Instantiate(User: Optional[uuid.UUID]):
        Type = Database.User.Schemas.Nexus.Information

        Client = Wrapper.Client("S3").get("Service")

        Account = await Database.User.Interfaces.User.API.HTTP.GET

        User: Type = Request.Table(Account, Database.User.Schemas.Nexus.Information)

        Type = Account.content_type
        Name = Account.filename
        Directory = tempfile.tempdir

        Target = "{0}/{1}/{2}".format(
            User.ID, User.Username, Name
        )

        with tempfile.NamedTemporaryFile(delete = True, dir = Directory) as File:
            File.write(await Account.read())

            Response = Client.upload_file(File.name, HTTP.Bucket, Target,
                Callback = Thread.Percentage(File.name)
            )

            File.close()

            return {
                "Status": "Complete",
                "Return": 0,
                "Error": Response,
                "Account": User
            }

    @staticmethod
    @Generator.post("/Upload-File",
        name = "S3 Upload File",
        responses = Request.Responses,
        response_model = Optional[Dictionary]
    )
    async def Upload(Input: Request.Upload = File(...), Authorization: Optional[String] = Header(...)):
        Type = Database.User.Schemas.Nexus.Information

        Client = Wrapper.Client("S3").get("Service")

        JWT = Authorization.split(" ")[-1]

        Account = await Authorizer.Information(JWT)

        User: Type = Request.Table(Account, Database.User.Schemas.Nexus.Information)

        Type = Input.content_type
        Name = Input.filename
        Directory = tempfile.tempdir

        Public = "{0}/{1}".format(
            User.Username, Name
        )

        Target = "{0}/{1}/{2}".format(
            User.ID, User.Username, Name
        )

        with tempfile.NamedTemporaryFile(delete = True, dir = Directory) as File:
            File.write(await Input.read())

            Percentage = Thread.Percentage(File.name)

            Response = Client.upload_file(File.name, HTTP.Bucket, Target,
                Callback = Percentage
            )

            File.close()

        return {
            "Status": "Complete",
            "Return": 0,
            "Error": Response,
            "Account": User,
            "Type": Type,
            "Name": Name,
            "Directory": Public
        }

    @staticmethod
    @Generator.post("/Upload-Files",
        name = "S3 Upload File(s)",
        responses = Request.Responses,
        response_model = Optional[Dictionary]
    )
    async def Uploads(Input: List[UploadFile] = File(...), Authorization: Optional[String] = Header(None)):
        """
        ...
        """

        Type = Database.User.Schemas.Nexus.Information

        Client = Wrapper.Client("S3").get("Service")

        JWT = Authorization.split(" ")[-1]

        Account = await Authorizer.Information(JWT)

        User: Type = Request.Table(Account, Database.User.Schemas.Nexus.Information)

        for Upload in Input:
            Type = Upload.content_type
            Name = Upload.filename
            Directory = tempfile.tempdir

            Target = "{0}/{1}/{2}".format(
                User.ID, User.Username, Name
            )

            with tempfile.NamedTemporaryFile(delete = True, dir = Directory) as File:
                File.write(await Upload.read())

                Percentage = Thread.Percentage(File.name)
                Response = Client.upload_file(File.name, HTTP.Bucket, Target,
                    Callback = Percentage
                )

                File.close()

        return {
            "Status": "Complete",
            "Return": 0,
            "Error": Response,
            "Account": User
        }

    @staticmethod
    @Generator.post("/User-Root/Folders",
        name = "S3 Bucket User Folder(s)",
        responses = Request.Responses,
        response_model = Optional[List]
    )
    async def Folders(Authorization: Optional[String] = Header(None)):
        """
        @Task: Create a Scoped JWT-Derivable Array Type
        """

        Type = Database.User.Schemas.Nexus.Information

        Client = Wrapper.Client("S3").get("Service")

        JWT = Authorization.split(" ")[-1]

        Account: Database.User.Models.Nexus.Table = await Authorizer.Information(JWT)

        User = Request.Table(Account, Type)

        S3 = Wrapper.Client("S3").get("Service")

        Limit = "/"

        Cursor = "%s/" % User.ID

        Paginator = S3.get_paginator("list_objects")

        try:
            Pagination = Paginator.paginate(Bucket = HTTP.Bucket, Prefix = Cursor, Delimiter = Limit)

            return [Folder.pop("Prefix") for Folder in Pagination.search("CommonPrefixes") if Folder.get("Prefix", None) is not None]

        except botocore.exceptions.ClientError:
            raise HTTPException(428, "Cloud Setup Invalid")

    @staticmethod
    @Generator.post("/Objects",
        name = "S3 Bucket User Object(s)",
        responses = Request.Responses,
        response_model = Optional[List[Schema.File]]
    )
    async def Objects(Path: String = None, Authorization: Optional[String] = Header(None)):
        """
        ...
        """

        Type = Database.User.Schemas.Nexus.Identifier

        Client = Wrapper.Client("S3").get("Service")

        JWT = Authorization.split(" ")[-1]

        Account: Database.User.Models.Nexus.Table = await Authorizer.Information(JWT)

        User = Request.Table(Account, Type)

        Root = "%s/%s" % (HTTP.Bucket, "%s" % User.ID + "%s" % Path)

        S3 = Wrapper.Client("S3").get("Service")

        Limit = "/"

        Cursor = "%s/" % User.ID if Path is None else "%s/" % User.ID + "%s/" % Path

        Paginator = S3.get_paginator("list_objects")
        Pagination = Paginator.paginate(Bucket = HTTP.Bucket, Prefix = Cursor, Delimiter = Limit)

        Files = [Schema.File.remux(**File) for File in Pagination.search("Contents") if File]
        Folders = [Folder for Folder in Pagination.search("CommonPrefixes") if Folder]

        return Files

    @classmethod
    def createBucket(cls, name: String, region = "us-east-2"):
        """Create an S3 bucket in a specified region

        If a region is not specified, the bucket is created in the S3 default
        region (us-east-1).

        :param bucket_name: Bucket to create
        :param region: String region to create bucket in, e.g., 'us-west-2'
        :return: True if bucket created, else False
        """

        S3 = Wrapper.Client("S3").get("Service", region_name = region)

        try:
            S3.create_bucket(
                Bucket = name,
                CreateBucketConfiguration = {
                    "LocationConstraint": region
                }
            )

        except Exception as Error:
            raise Error

        return True

    @classmethod
    def createBucketFolder(cls, folder: String, bucket: Bucket = Bucket):
        """
        ...
        """

        S3 = Wrapper.Client("S3").get("Service")

        try:
            S3.put_object(Bucket = bucket, ContentType = "x-directory", Key = (folder + "/"))
        except Exception as Error:
            raise Error
        return True

API.ASGI.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
