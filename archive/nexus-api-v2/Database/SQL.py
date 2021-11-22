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

import os
import re
import sys
import json
import typing
import asyncio
import devtools
import pkgutil
import dataclasses

import sqlalchemy
import sqlalchemy.orm
import sqlalchemy.ext
import sqlalchemy.ext.declarative

from sqlalchemy.orm import declarative_base
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.ext.asyncio import async_scoped_session

from sqlalchemy.future import select
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.orm import selectinload
from sqlalchemy.orm import sessionmaker
from sqlalchemy import MetaData

from sqlalchemy.pool import NullPool

Identifier = dataclasses.dataclass(order = False, unsafe_hash = True, repr = False)
# Input = "postgresql://postgres:ABCDEFGHIJKLMNOPQRSTUVWXYZ@123.456.78.000:5432/Database-Name"
Pattern = r"(^.*)(postgresql\+asyncpg)(:\/\/)(\S.*)(:)(\S.*)(@)+(\d.*)+(:)+(.*\d)+(\/)+(.*\S)"

Optional = typing.Optional
Union = typing.Union

Dictionary = typing.Dict
Sequence = typing.Sequence
Tuple = typing.Tuple
List = typing.List

String = str
Boolean = bool
Integer = int
Float = float

from starlette.config import Config as Configuration

import API.ASGI

Path = os.path.abspath(os.path.dirname(__file__))

Environment = Path + os.sep + ".env"

@Identifier
class Postgres:
    """
    ...
    """

    Enumeration: Dictionary[String, Sequence[String]]

    Match: Optional[Sequence[String]]

    Username: String
    Password: String
    Host: String
    Port: String
    Database: String

    URI: String

    def __init__(self, input: str, *argv, **kwargs):
        matches = re.finditer(Pattern, input.replace("\"", "").replace("'", ""), re.MULTILINE)

        enumeration = [{"Match": value} for _, value in enumerate(
            match.groups() for match in matches
        )].pop()

        self.Match = enumeration.get("Match", None)
        self.Username = self.Match[3]
        self.Password = self.Match[5]
        self.Host = self.Match[7]
        self.Port = self.Match[9]
        self.Database = self.Match[11]

        self.URI = String().join([
            self.Match[1],
            self.Match[2],
            self.Username,
            self.Match[4],
            self.Password,
            self.Match[6],
            self.Host,
            self.Match[8],
            self.Port,
            self.Match[10],
            self.Database
        ])

Data = json.loads(pkgutil.get_data("API", "Environment.json"))
URI = Data["Database"]["Postgresql"]
# Engine = create_async_engine(URI, echo = True)
Engine = create_async_engine(URI, echo = True)
# Engine = create_async_engine(URI, echo = True, poolclass = NullPool)
# ... # Engine = sqlalchemy.create_engine(URI)

Configurator = sessionmaker(Engine, expire_on_commit = False, class_ = AsyncSession)

Session = Local = Configurator

Configurator.configure(bind = Engine)
Session.configure(bind = Engine)
Local.configure(bind = Engine)

Meta = MetaData(bind = Local, quote_schema = True)

Base = declarative_base(bind = Local, metadata = Meta)

Data = Base.metadata

devtools.debug(Data)
devtools.debug(Meta)

Application = API.ASGI.Base(host = "0.0.0.0", port = 3000)
