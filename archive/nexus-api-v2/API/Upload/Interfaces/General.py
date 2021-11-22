# =============================================================================
# Local Library
# =============================================================================

from . import *

import time
import asyncio
import datetime
import tempfile

import API.ASGI

import API.Upload.Imports

# =============================================================================
# Schema Reference
# =============================================================================

import API.Upload.Schemas.Image

Response = API.Upload.Schemas.Image.Response

Size = API.Upload.Schemas.Image.Size

Extensions = API.Upload.Schemas.Image.Extensions

Success = API.Upload.Schemas.Image.Success
Status = API.Upload.Schemas.Image.Status
Fail = API.Upload.Schemas.Image.Failure

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

Request = API.Upload.Imports.Request

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(prefix = "{0}/{1}/{2}".format(Request.Prefix, "File-Upload", "General"),
        tags = Request.Tags + ["File-Upload"])

    @staticmethod
    @Generator.post("/Dump",
        name = "Simulate a General File Upload",
        response_model = Optional[Dictionary],
        responses = Request.Responses
    )
    async def Simulate(Name: String = Query(default = "Test-File-Name", alias = "File-Name"), File: Upload = File(...)):
        Type = File.content_type.split("/")
        if not Type[0]: return Fail(Message = "File-Type")
        else:
            Target = tempfile.gettempdir() + os.sep + "%s" % Name

            Content = await File.read()

            Bytes = float(len(Content))
            Sizes = {
                "Bytes":    Bytes,
                "KB":       Bytes / (1024 << 0),
                "MB":       Bytes / (1024 << 10),
                "GB":       Bytes / (1024 << 20)
            }

            Binary = await Upload(filename = Target, file = File.file, content_type = File.content_type).write(Content)

            return {
                "Status": Success(),
                "Name": Name,
                "Extension": Type,
                "Size": Size(**Sizes),
                "Binary": Binary
            }
API.ASGI.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
