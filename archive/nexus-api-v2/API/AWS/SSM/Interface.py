from . import *

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

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Endpoint = Request.Prefix + __module__.split(".")[-2]

    Generator = Request.Generator()

    Generator.prefix                    = Endpoint
    Generator.tags                      = Request.Tags + __module__.split(".")[1:-1]
    Generator.dependencies              = { Secure }
    Generator.include_in_schema         = True

    @staticmethod
    @Generator.post("/Meta",
        name = "SSM Meta-Data",
        response_model = Optional[Schema.Meta]
    )
    async def Meta():
        Client = Wrapper.Client("SSM")
        Client.pop("Service")

        return Schema.Meta(**{"Data": Client})

API.ASGI.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
