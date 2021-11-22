#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   https://gitlab.cloud-technology.io
# License:  BSD 3-Clause License

"""
...
"""

from Mongo import (
    Client
)

__module__ = __name__

DB = Client["{0}".format(__module__.split(".").pop())]

__all__ = [ "DB", "Client" ]
