#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:
# Source:
# License:

"""
Note

    Application = API.ASGI.Base(host = "0.0.0.0", port = 10000)
    `Application` Needs to be Imported into the `API` Package
    in order to Initialize & Start Running.

"""

import os
import re
import sys
import json
import pkgutil

import re
import typing
import dataclasses

import motor.motor_asyncio

#import API.ASGI

global URI
global Connection

URI = "mongodb://localhost:27017/"
Connection = "Gaming"

# Identifier = dataclasses.dataclass(order = False, unsafe_hash = True, repr = False)
# Input = "postgresql://postgres:ABCDEFGHIJKLMNOPQRSTUVWXYZ@123.456.78.000:5432/Database-Name"
# Pattern = r"(^.*)(mongodb)(:\/\/)(\S.*)(:)(\S.*)(@)+(\d.*)+(:)+(.*\d)+(\/)+(.*\S)"

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

Client = motor.motor_asyncio.AsyncIOMotorClient(URI)

DB = Client[Connection]

#Application = API.ASGI.Base(host = "0.0.0.0", port = 3000)

__all__ = [
    "Client",
    "DB"
]