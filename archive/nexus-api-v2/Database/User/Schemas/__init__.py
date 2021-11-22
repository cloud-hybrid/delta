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

# =============================================================================
# Standard Library
# =============================================================================

import os
import sys
import enum
import uuid
import typing
import secrets
import datetime
import dataclasses

# =============================================================================
# External
# =============================================================================

import json as JSON

import pydantic
import pydantic.typing
import pydantic.networks
import pydantic.typing
import pydantic.types

# =============================================================================
# Local Imports
# =============================================================================

import Model as Schema

Scheme = Schema.Model

# -----------------------------------------------------------------------------
# Object Reference Mapping(s)
# -----------------------------------------------------------------------------

Union = typing.Union

Enumeration = enum.Enum

Requirement = pydantic.Required

Optional = pydantic.typing.Optional

Array = pydantic.typing.List

Secret = pydantic.SecretStr

Any = pydantic.typing.Any

Integer = int
String = str
Boolean = bool
List = typing.List
Bytes = bytes

Email = String

Field = pydantic.Field

Date = datetime.datetime

UUID = pydantic.UUID4

UID = lambda: "{0}".format(uuid.uuid4()).upper()

@dataclasses.dataclass(frozen = True)
class IPv4:
    """
    ...
    """

    IP: pydantic.networks.IPv4Address = pydantic.networks.IPv4Address
    Interface: pydantic.networks.IPv4Interface = pydantic.networks.IPv4Interface
    Network: pydantic.networks.IPv4Network = pydantic.networks.IPv4Network

@dataclasses.dataclass(frozen = True)
class IPv6:
    """
    ...
    """

    IP: pydantic.networks.IPv6Address = pydantic.networks.IPv6Address
    Interface: pydantic.networks.IPv6Interface = pydantic.networks.IPv6Interface
    Network: pydantic.networks.IPv6Network = pydantic.networks.IPv6Network

@dataclasses.dataclass(init = False, frozen = True)
class Network:
    """
    ...
    """

    Module: pydantic.networks = pydantic.networks

    IPv4: IPv4 = IPv4()
    IPv6: IPv6 = IPv6()

class ISO5218(Integer, Enumeration):
    """
    ISO/IEC 5218 - Gender Codes
    """

    NULL    = 0x0
    MALE    = 0x1
    FEMALE  = 0x2
    OTHER   = 0x9

__all__ = [
    "Union",

    "Scheme",

    "Requirement",
    "Optional",

    "String",
    "Integer",
    "List",
    "Boolean",

    "Secret",
    # ... "Email",
    "Array",

    "ISO5218",

    "Any",
    "Field",
    "UUID",
    "UID",
    "Date",
    "JSON",
    "Bytes"
]
