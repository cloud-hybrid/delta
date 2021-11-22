#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
...
"""

from . import *

class Interface(Request):
    """
    ...
    """

    Route = "UUID"

    Application = ASGI.Application

    Generator = Request.Generator(
        prefix = "{0}/{1}".format(
            Request.Prefix, Route
        ), tags = Request.Tags + [Route]
    )

    Methods = [
        "GET"
    ]

    def __init__(self, *argv, **kwargs):
        super(Interface, self).__init__()

    @staticmethod
    @Generator.get("/Generate",
        name = "Generate a Random UUID",
        responses = Request.Responses
    )
    async def UUID(Format: Boolean = True):
        """
        ...
        """

        return "{0}".format(uuid.uuid4()).upper() if Format else uuid.uuid4()

Interface.Application.API.include_router(Interface.Generator)

__all__ = [
    "Interface"
]
