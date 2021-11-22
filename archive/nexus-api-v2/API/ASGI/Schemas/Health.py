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
# Local Imports
# =============================================================================

from . import *

# =============================================================================
# API Schema Initialization
# =============================================================================

class Base(Scheme):
    """
    ...
    """

    Status: String = Field("Online", alias = "API-Status")

class Response(Base):
    """
    ...
    """

    Time: Date = Field(default_factory = Date.utcnow)

# =============================================================================
# Packaged Exportable(s)
# =============================================================================

__all__ = [
    "Response"
]
