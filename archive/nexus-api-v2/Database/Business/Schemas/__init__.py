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
# ============================================================================

import Model as Schema

Scheme = Schema.Model

Type = pydantic.dataclasses.dataclass

# -----------------------------------------------------------------------------
# Object Reference Mapping(s)
# -----------------------------------------------------------------------------

String = str
Boolean = bool

Unique = enum.unique

General = typing.Any
List = typing.List

Enumeration = enum.Enum

Date = datetime.datetime

Union = typing.Union

Email = String

Optional = typing.Optional

Integer = pydantic.PositiveInt
Field = pydantic.Field
UUID = pydantic.UUID4
Corporate = pydantic.NameEmail
Requirement = pydantic.Required
Optional = pydantic.typing.Optional
URL = pydantic.AnyUrl
Password = pydantic.types.SecretStr
Token = pydantic.types.SecretStr

Secret = pydantic.SecretStr

# =============================================================================
# Packaged Exports
# =============================================================================

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

@Unique
class Industry(str, enum.Enum):
    """
    Industry Types
    """

    IT = "IT"
    Medical = "Medical"
    Construction = "Construction"
    Entertainment = "Entertainment"
    Transportation = "Transportation"
    Security = "Security"
    Consulting = "Consulting"
    Hospitality = "Hospitality"
    Automobile = "Automobile"
    Estate = "Real-Estate"
    Finance = "Finance"
    Insurance = "Insurance"
    Oil = "Oil"
    Mining = "Mining"
    Energy = "Energy"
    Engineering = "Engineering"
    Electronics = "Electronics"
    Legal = "Legal"
    Telecommunications = "Telecommunications"
    Retail = "Retail"
    Education = "Education"
    Storage = "Storage"
    Textiles = "Textiles"
    Agriculture = "Agriculture"
    Manufacturing = "Manufacturing"
    Gaming = "Gaming"

    Default = "Default"

    @staticmethod
    def MRO() -> List[str]:
        """

        """

        return [Index for Index in
            Industry.__members__.keys()
        ]

class ISO5218(int, enum.Enum):
    """
    ISO/IEC 5218 - Gender Codes
    """

    NULL = 0x0
    MALE = 0x1
    FEMALE = 0x2
    OTHER = 0x9

# =============================================================================
# Packaged Exports
# =============================================================================

UID = lambda: "{0}".format(uuid.uuid4()).upper()

Week = lambda: datetime.datetime.today().strftime("%U")

__all__ = [
    "JSON",

    "Scheme",

    "Union",

    "URL",

    "Requirement",
    "Optional",

    "String",
    "Integer",
    "List",
    "Boolean",
    "General",
    "Type",
    "Unique",

    # ... "Email",
    "Corporate",

    "Secret",
    "Password",
    "Token",
    # ... "Email",

    "Enumeration",
    "Industry",

    "Network",

    "Field",
    "Date",
    "Week",
    "UUID",
    "UID",

]
