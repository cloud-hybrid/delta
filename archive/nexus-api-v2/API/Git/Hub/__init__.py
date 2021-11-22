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

# --> Exports

__all__ = [
    "os",
    "sys",
    "uuid",
    "secrets",
    "datetime",

    "pydantic",

    "Hub",

    "UID",
    "Day",
    "ISO8601",
    "Year"
]

# =============================================================================
# Standard Library
# =============================================================================

import os
import sys
import uuid
import secrets
import datetime

# =============================================================================
# External
# =============================================================================

import pydantic

# =============================================================================
# Local Imports
# =============================================================================

from API.Git import Hub

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

UID = lambda: "{0}".format(uuid.uuid4()).upper()

Day = lambda: datetime.datetime.today().isoweekday()
ISO8601 = lambda: datetime.datetime.today().strftime("%U")
Year = lambda: datetime.datetime.today().year
