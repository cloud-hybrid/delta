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
import json
import uuid
import typing
import pkgutil
import decimal
import importlib
import functools

# =============================================================================
# External
# =============================================================================

import pydantic

# =============================================================================
# Local Imports
# =============================================================================

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

Float       = float
Double      = decimal.Decimal

Union       = typing.Union
Optional    = typing.Optional

Any         = typing.Any
Generic     = typing.Generic
String      = typing.AnyStr
Map         = typing.Dict
Dictionary  = typing.DefaultDict
Boolean     = Union[type(True), type(False)]
Bytes       = typing.ByteString
List        = typing.List
UUID        = uuid.UUID

Secret      = pydantic.SecretStr

__all__ = [
    "Any",
    "Generic",
    "String",
    "Map",
    "Dictionary",
    "Boolean",
    "Bytes",
    "List",
    "UUID",
    "Float",
    "Double",
    "Union",
    "Optional",
    "Secret"
]