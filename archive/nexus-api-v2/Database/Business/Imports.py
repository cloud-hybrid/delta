#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""

[...]

"""

# =============================================================================
# Standard Library
# =============================================================================

import os
import sys
import copy
import http
import json
import uuid
import typing
import pprint
import asyncio
import datetime
import functools
import dataclasses

# =============================================================================
# External Package(s)
# =============================================================================

import fastapi

import pydantic

import sqlalchemy
import sqlalchemy.orm

import starlette.types
import starlette.exceptions
import starlette.responses
import starlette.requests
import starlette.concurrency
import starlette.datastructures

# =============================================================================
# Local Imports
# =============================================================================

import Database

import Database.SQL

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

JSON = starlette.responses.JSONResponse

Local = Database.SQL.Local
Engine = Database.SQL.Engine

Dependency = fastapi.Depends

Query: fastapi.Query = fastapi.Query

Secret = pydantic.SecretStr
# ... Email = pydantic.EmailStr
UUID = pydantic.UUID4

Any = typing.Any
List = typing.List
Union = typing.Union
Optional = typing.Optional

Boolean = bool
Integer = int
String = str
Dictionary = dict
Tuple = tuple

fprint = pprint.pprint

# =============================================================================
# Packaged Exports
# =============================================================================

Connection = Dependency(lambda: Local)

class Request:
    """
    Implicit Instance Idiom
    """

    Responses = {
        200:    {
            "description": "Successful Request Resolution"
        }, 201: {
            "description": "Created - Request has Successfully Provisioned a New Resource"
        }, 202: {
            "description": "Accepted & Processing - Request has been Queued but Cannot be Awaited"
        }, 204: {
            "description": "Successful Query - Response has been Cached"
        }, 205: {
            "description": "Request Initiated - Client is Requested for a DOM Reset"
        }, 400: {
            "description": "Malformed Request - Client Modification(s) Required"
        }, 401: {
            "description": "Access Conditionally Denied - Client Authentication Required"
        }, 403: {
            "description": "Access Denied - Insufficient Application Permission(s)"
        }, 404: {
            "description": "Resource Not Found - Requested Target Resource is Temporarily or Permanently Missing"
        }, 405: {
            "description": "Unsupported Request Method - Target Resource URI is Denied"
        }, 409: {
            "description": "Write Conflict - Source State Conflict with Requested Target Resource"
        }, 415: {
            "description": "Unsupported Media Type - Content Encoding || Type Refused by Server"
        }, 422: {
            "description": "Unprocessable Entity - Content Encoding && Type Accepted, Malformed Client Data"
        }
    }

    Prefix = "/API"

    Tags = [
        "Business"
    ]

    Generator = Database.SQL.Application.Generator

    __slots__ = ()

    __dict__ = None

    __new__ = lambda *_: ...

class HTTPException(Exception):
    def __init__(self, code: int, detail: str = None) -> None:
        if detail is None:
            detail = http.HTTPStatus(code).phrase
        self.code = code
        self.detail = detail

    def __repr__(self) -> str:
        class_name = self.__class__.__name__
        return f"{class_name}(Response-Code = {self.code!r}, Body = {self.detail!r})"

class BackgroundTask:
    def __init__(
        self, func: typing.Callable, *args: typing.Any, **kwargs: typing.Any
    ) -> None:
        self.func = func
        self.args = args
        self.kwargs = kwargs
        self.is_async = asyncio.iscoroutinefunction(func)

    async def __call__(self) -> None:
        if self.is_async:
            await self.func(*self.args, **self.kwargs)
        else:
            await starlette.concurrency.run_in_threadpool(self.func, *self.args, **self.kwargs)

class Response:
    media_type = None
    charset = "utf-8"

    def __init__(
        self,
        content: typing.Any = None,
        status_code: int = 200,
        headers: dict = None,
        media_type: str = None,
        background: BackgroundTask = None,
    ) -> None:
        self.status_code = status_code
        if media_type is not None:
            self.media_type = media_type
        self.background = background
        self.body = self.render(content)
        self.init_headers(headers)

    def render(self, content: typing.Any) -> bytes:
        if content is None:
            return b""
        if isinstance(content, bytes):
            return content
        return content.encode(self.charset)

    def init_headers(self, headers: typing.Mapping[str, str] = None) -> None:
        if headers is None:
            raw_headers = []  # type: typing.List[typing.Tuple[bytes, bytes]]
            populate_content_length = True
            populate_content_type = True
        else:
            raw_headers = [
                (k.lower().encode("latin-1"), v.encode("latin-1"))
                for k, v in headers.items()
            ]
            keys = [h[0] for h in raw_headers]
            populate_content_length = b"content-length" not in keys
            populate_content_type = b"content-type" not in keys

        body = getattr(self, "body", b"")
        if body and populate_content_length:
            content_length = str(len(body))
            raw_headers.append((b"content-length", content_length.encode("latin-1")))

        content_type = self.media_type
        if content_type is not None and populate_content_type:
            if content_type.startswith("text/"):
                content_type += "; charset=" + self.charset
            raw_headers.append((b"content-type", content_type.encode("latin-1")))

        self.raw_headers = raw_headers

    @property
    def headers(self) -> starlette.datastructures.MutableHeaders:
        if not hasattr(self, "_headers"):
            self._headers = starlette.datastructures.MutableHeaders(raw=self.raw_headers)
        return self._headers

    def set_cookie(
        self,
        key: str,
        value: str = "",
        max_age: int = None,
        expires: int = None,
        path: str = "/",
        domain: str = None,
        secure: bool = False,
        httponly: bool = False,
        samesite: str = "lax",
    ) -> None:
        cookie = http.cookies.SimpleCookie()  # type: http.cookies.BaseCookie
        cookie[key] = value
        if max_age is not None:
            cookie[key]["max-age"] = max_age
        if expires is not None:
            cookie[key]["expires"] = expires
        if path is not None:
            cookie[key]["path"] = path
        if domain is not None:
            cookie[key]["domain"] = domain
        if secure:
            cookie[key]["secure"] = True
        if httponly:
            cookie[key]["httponly"] = True
        if samesite is not None:
            assert samesite.lower() in [
                "strict",
                "lax",
                "none",
            ], "samesite must be either 'strict', 'lax' or 'none'"
            cookie[key]["samesite"] = samesite
        cookie_val = cookie.output(header="").strip()
        self.raw_headers.append((b"set-cookie", cookie_val.encode("latin-1")))

    def delete_cookie(self, key: str, path: str = "/", domain: str = None) -> None:
        self.set_cookie(key, expires=0, max_age=0, path=path, domain=domain)

    async def __call__(self, scope: starlette.types.Scope, receive: starlette.types.Receive, send: starlette.types.Send) -> None:
        await send(
            {
                "type": "http.response.start",
                "status": self.status_code,
                "headers": self.raw_headers,
            }
        )
        await send({"type": "http.response.body", "body": self.body})

        if self.background is not None:
            await self.background()

class Error(HTTPException):
    def __init__(
        self,
        Status: int,
        Body: Any = None,
        Headers: Optional[Dictionary[str, Any]] = None,
    ) -> None:
        super().__init__(code = Status, detail = Body)

        self.headers = Headers

        self.Status = Status
        self.Body = Body
        self.Headers = Headers

    def __repr__(self) -> str:
        class_name = self.__class__.__name__

        return json.dumps({
            "Status": self.Status,
            "Body": self.Body,
            "Headers": self.Headers
        })

class Middleware:
    def __init__(
        self, app: starlette.types.ASGIApp, handlers: dict = None, debug: bool = False
    ) -> None:
        self.app = app
        self.debug = debug  # TODO: We ought to handle 404 cases if debug is set.
        self._status_handlers = {}  # type: typing.Dict[int, typing.Callable]
        self._exception_handlers = {
            HTTPException: self.http_exception
        }  # type: typing.Dict[typing.Type[Exception], typing.Callable]
        if handlers is not None:
            for key, value in handlers.items():
                self.add_exception_handler(key, value)

    def add_exception_handler(
        self,
        exc_class_or_status_code: typing.Union[int, typing.Type[Exception]],
        handler: typing.Callable,
    ) -> None:
        if isinstance(exc_class_or_status_code, int):
            self._status_handlers[exc_class_or_status_code] = handler
        else:
            assert issubclass(exc_class_or_status_code, Exception)
            self._exception_handlers[exc_class_or_status_code] = handler

    def _lookup_exception_handler(
        self, exc: Exception
    ) -> typing.Optional[typing.Callable]:
        for cls in type(exc).__mro__:
            if cls in self._exception_handlers:
                return self._exception_handlers[cls]
        return None

    async def __call__(self, scope: starlette.types.Scope, receive: starlette.types.Receive, send: starlette.types.Send) -> None:
        if scope["type"] != "http":
            await self.app(scope, receive, send)
            return

        response_started = False

        async def sender(message: starlette.types.Message) -> None:
            nonlocal response_started

            if message["type"] == "http.response.start":
                response_started = True
            await send(message)

        try:
            await self.app(scope, receive, sender)
        except Exception as exc:
            handler = None

            if isinstance(exc, HTTPException):
                handler = self._status_handlers.get(exc.code)

            if handler is None:
                handler = self._lookup_exception_handler(exc)

            if handler is None:
                raise exc from None

            if response_started:
                msg = "Caught handled exception, but response already started."
                raise RuntimeError(msg) from exc

            request = starlette.requests.Request(scope, receive=receive)
            if asyncio.iscoroutinefunction(handler):
                response = await handler(request, exc)
            else:
                response = await starlette.concurrency.run_in_threadpool(handler, request, exc)
            await response(scope, receive, sender)

    def http_exception(self, request: starlette.requests.Request, exc: HTTPException) -> Response:
        if exc.code in {204, 304}:
            return Response(b"", status_code = exc.code)
        return starlette.responses.PlainTextResponse(exc.detail, status_code = exc.code)

__all__ = [
    "os",
    "sys",
    "copy",
    "uuid",
    "typing",
    "fprint",
    "datetime",
    "functools",
    "dataclasses",

    "JSON",
    "Error",
    "Local",
    "Engine",
    "Dependency",
    "Secret",
    # ... "Email",
    "UUID",
    "List",
    "Union",
    "Optional",
    "Boolean",
    "Integer",
    "String",
    "Dictionary",
    "Tuple",

    "Connection",
    "Request",

    "Database",

    "Query",
    "Middleware"
]
