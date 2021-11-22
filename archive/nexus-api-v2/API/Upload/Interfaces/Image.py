"""
{
    "status_code": 200,
    "success": {
        "message": "image uploaded",
        "code": 200
    },
    "image": {
        "name": "example",
        "extension": "png",
        "size": 53237,
        "width": 1151,
        "height": 898,
        "date": "2020-11-11 15:32:33",
        "date_gmt": "2020-11-11 19:32:33",
        "storage_id": null,
        "description": null,
        "nsfw": "0",
        "md5": "d973298h0d722c956c3629870299735830",
        "storage": "datefolder",
        "original_filename": "pluralsight_logo.png",
        "original_exifdata": null,
        "views": "0",
        "id_encoded": "L",
        "filename": "pluralsight_logo.png",
        "ratio": 1.2817371937639,
        "size_formatted": "52 KB",
        "mime": "image/png",
        "bits": 8,
        "channels": null,
        "url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.png",
        "url_viewer": "http://freeimage.host/image/L",
        "thumb": {
            "filename": "example.th.png",
            "name": "example.th",
            "width": 160,
            "height": 160,
            "ratio": 1,
            "size": 17848,
            "size_formatted": "17.4 KB",
            "mime": "image/png",
            "extension": "png",
            "bits": 8,
            "channels": null,
            "url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.th.png"
        },
        "medium": {
            "filename": "pluralsight_logo.md.png",
            "name": "pluralsight_logo.md",
            "width": 500,
            "height": 390,
            "ratio": 1.2820512820513,
            "size": 104448,
            "size_formatted": "102 KB",
            "mime": "image/png",
            "extension": "png",
            "bits": 8,
            "channels": null,
            "url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.md.png"
        },
        "views_label": "views",
        "display_url": "http://freeimage.host/images/2020/11/11/pluralsight_logo.md.png",
        "how_long_ago": "moments ago"
    },
    "status_txt": "OK"
}
"""

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

    Generator = Request.Generator(prefix = "{0}/{1}/{2}".format(Request.Prefix, "File-Upload", "Image"),
        tags = Request.Tags + ["File-Upload", "Image"])

    @staticmethod
    @Generator.post("/Test",
        name = "Simulate an Image, File Upload",
        response_model = Response,
        responses = Request.Responses
    )
    async def Simulate(Name: String = Query(default = "Test-File-Name", alias = "File-Name"), File: Upload = File(...),
        Await: float = Query(default = 10.0, description = "Additional, Simulated Wait-Time; used to test and debug larger file upload sixes.")):
        Type = File.content_type.split("/")
        if Type[0] != "image":
            return Fail(Message = "File-Type")
        else:
            if len(Type) > 2:
                return Response(Status = Fail(Message = "File-IO"), Name = Name, Extension = str(Type[1:]))
            if len(Type) < 2:
                return Response(Status = Fail(Message = "File-Type"), Name = Name, Extension = str(Type))
            else:
                if Type[-1] in Extensions.MRO():
                    Target = tempfile.gettempdir() + os.sep + "%s" % Name

                    Content = await File.read()

                    Bytes = float(len(Content))
                    Sizes = {
                        "Bytes":    Bytes,
                        "KB":       Bytes / (1024 << 0),
                        "MB":       Bytes / (1024 << 10),
                        "GB":       Bytes / (1024 << 20)
                    }

                    await Upload(filename = Target, file = File.file, content_type = File.content_type).write(Content)

                    await asyncio.sleep(Await)

                    return Response(Status = Success(),
                        Name = Name, Extension = Extensions.png, Size = Size(**Sizes))
                else:
                    return Response(Status = Fail(Message = "Invalid-Extension"), Name = Name, Extension = Type[-1])

API.ASGI.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
