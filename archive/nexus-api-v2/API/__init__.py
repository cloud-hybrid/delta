#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:   Jacob B. Sanders
# Source:  code.cloud-technology.io
# License: BSD 2-Clause License

#
# BSD 2-Clause License
#
# Copyright (c) 2021, Cloud Hybrid LLC. & Affiliates
#
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
#
# * Redistributions of source code must retain the above copyright notice, this
#   list of conditions and the following disclaimer.
#
# * Redistributions in binary form must reproduce the above copyright notice,
#   this list of conditions and the following disclaimer in the documentation
#   and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#

# =============================================================================
# Python, Standard Library
# =============================================================================

import os
import sys
import time
import atexit
import typing
import asyncio
import logging
import warnings

# ... import ssl as SSL

# =============================================================================
# Contextual & Synchronization
# =============================================================================

# import uvloop as UV

# Context = UV.new_event_loop()

Lock    = lambda: asyncio.Lock()
Wait    = lambda: asyncio.sleep(2.5)

# UV.install()

# asyncio.set_event_loop(Context)

# ----------------------
# Environment Constants
# ----------------------

ENVIRONMENT = "NEXUS_API_ENVIRONMENT_LOCK"

# =============================================================================
# Type Hinting
# =============================================================================

Integer = int
Boolean = bool
String = str
Float = float

Optional = typing.Optional

List = typing.List
Tuple = typing.Tuple
Dictionary = typing.Dict
Collection = typing.OrderedDict
Callable = typing.Callable
Type = typing.Final

# ------------------------------
# Logging & Debug Configuration
# ------------------------------

import API.Warnings

os.environ["PYTHONWARNINGS"] = "0"

logging.captureWarnings(False)

# --------------------------------
# Database Package & SQL Settings
# --------------------------------

import Database.SQL
# import Database.Async

# -------------------
# HTTP CRUD REST API
# -------------------

import Database.Interfaces

import API.ASGI.Utilities.Date
import API.ASGI.Utilities.UUID
import API.ASGI.Utilities.Time
import API.ASGI.Utilities.Task

# -----------------------------
# API Modules, Web Application
# -----------------------------

import API.ASGI
import API.Upload

import API.Git.Lab.Interfaces.API
import API.Upload.Interfaces.Image
import API.Upload.Interfaces.General

import API.Route as Route

import API.AWS

# import API.AWSExtended
import API.Development

Cloud = API.AWS.Cloud

# -----------------------------
# Command-Line Argument Parser
# -----------------------------

import Parser.Parse as CLI

# =============================================================================
# Program Configuration + Instantiation(s)
# =============================================================================

import Calendar

# ---------------------------
# Database APIs and Wrappers
# ---------------------------

Engine = Database.SQL.Engine

# -----------------------------
# Non-Relational Database APIs
# -----------------------------

import Mongo.Gaming
import Mongo.Gaming.Interfaces.CSGO

import Mongo.Taskboard
import Mongo.Taskboard.Interfaces.Task
import Mongo.Taskboard.Interfaces.LinkedResource

import Mongo.Calendar
import Mongo.Calendar.Interfaces.Calendar
import Mongo.Calendar.Interfaces.Event

import Mongo.URLs
import Mongo.URLs.Interfaces.API

# -------------------------------
# Database & ASGI Application(s)
# -------------------------------

Application = API.ASGI.Base()

Gitlab = API.Git.Lab.Interfaces.API
Images = API.Upload.Interfaces.Image
Upload = API.Upload.Interfaces.General

Driver = Database.SQL.Application
Mongo = Mongo.Server

# =============================================================================
#  --> Exports
# =============================================================================

ASGI        = asyncio.get_event_loop()
ASGI.wait   = asyncio.sleep
ASGI.run    = asyncio.run
ASGI.queue  = ASGI.run_until_complete

__all__ = [
    "os",
    "sys",
    "time",
    "atexit",
    "typing",
    "logging",
    "asyncio",
    "Application",
    "CLI",
    "Engine",
    "Driver",
    "Integer",
    "Boolean",
    "String",
    "Mongo",
    "Float",
    "Optional",
    "List",
    "Tuple",
    "Dictionary",
    "Collection",
    "Callable",
    "Type",
    "Lock",
    "Wait",
    "ENVIRONMENT",
    "Gitlab",
    "Images",
    "Route",
    "Cloud",
    "AWS",
    "ASGI",
    "Upload"
]
