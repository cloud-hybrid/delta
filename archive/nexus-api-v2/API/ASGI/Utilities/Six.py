#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
Six-Digit Random Number Generator
"""

from . import *

class Interface(Request):
    """
    ...
    """

    Route = "Six-Digit-Generator"

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
    @Generator.get("",
        name = "Six-Digit-Array",
        responses = Request.Responses
    )
    async def Generate():
        """
        Generate a Random Six-Digit Array

        While being Intended for One-Time-Code Generation in Mobile + Web
        Applications, Overall Purpose is General and Applicable in Many
        Contexts.
        """

        return [Random() for _ in range(0, 6, 1)]

Interface.Application.API.include_router(Interface.Generator)

__all__ = [
    "Interface"
]
