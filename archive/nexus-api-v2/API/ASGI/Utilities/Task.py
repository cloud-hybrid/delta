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

import asyncio

from . import *

class Interface(Request):
    """
    ...
    """

    Route = "Awaitable"

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
    async def Waiter(Time: Integer, Lock: asyncio.Semaphore):
        Internal = asyncio.Semaphore()

        await Internal.acquire()
        await asyncio.sleep(float(Time))

        Internal.release()

        Lock.release()

    @staticmethod
    @Generator.get("",
        name = "Awaitable (GET)",
        responses = Request.Responses,
        response_model = Boolean
    )
    async def Generate(Time: Integer = 5):
        """
        # Spawn an Awaitable #

        *Waiter will block for 5 seconds by default.*
        """

        Internal = asyncio.Semaphore()

        await Internal.acquire()

        await Interface.Waiter(Time, Internal)

        return True

    @staticmethod
    @Generator.post("",
        name = "Awaitable (POST)",
        responses = Request.Responses,
        response_model = Dictionary
    )
    async def Generate(Time: Integer = 5,
        Data: Optional[Union[String, Dictionary]] = Body(default = {})
    ):
        """
        # Spawn an Awaitable #

        *Waiter will block for 5 seconds by default.*
        """

        Internal = asyncio.Semaphore()

        await Internal.acquire()

        await Interface.Waiter(Time, Internal)

        return {
            "Response": True,
            "Body": Data
        }

    @staticmethod
    @Generator.put("",
        name = "Awaitable (PUT)",
        responses = Request.Responses,
        response_model = Dictionary
    )
    async def Generate(Time: Integer = 5,
        Data: Optional[Union[String, Dictionary]] = Body(default = {})
    ):
        """
        # Spawn an Awaitable #

        *Waiter will block for 5 seconds by default.*
        """

        Internal = asyncio.Semaphore()

        await Internal.acquire()

        await Interface.Waiter(Time, Internal)

        return {
            "Response": True,
            "Body": Data
        }

    @staticmethod
    @Generator.delete("",
        name = "Awaitable (DELETE)",
        responses = Request.Responses,
        response_model = Boolean
    )
    async def Generate(Time: Integer = 5):
        """
        # Spawn an Awaitable #

        *Waiter will block for 5 seconds by default.*
        """

        Internal = asyncio.Semaphore()

        await Internal.acquire()

        await Interface.Waiter(Time, Internal)

        return True

Interface.Application.API.include_router(Interface.Generator)

__all__ = [
    "Interface"
]
