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
# Copyright (c) 2020, Cloud Hybrid LLC. & Affiliates
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

"""
...
"""

# =============================================================================
# Magic-Method Dunder Typing
# =============================================================================

__all__ = [
    "warnings",

    "String",
    "Import",
    "Schema",
    "Warn",
    "Trace"
]

# =============================================================================
# Python, Standard Library
# =============================================================================

import typing
import inspect
import warnings
import textwrap
import tracemalloc

# -----------------------------
# Environment Warning Overload
# -----------------------------

Trace = tracemalloc

# =============================================================================
# Localized, Packaged Export(s)
# =============================================================================

String: typing.cast(str, "") = lambda _: str(_)

Schema = String(
">>> import [...].Schemas.[...] as ..."
+ "\n" + "\n"
+ "External Definitions as Dependencies should be Imported in the `Module`"
+ " "
+ "import and therefore Accessed `Module.Example.Base`."
+ " "
+ "Example" + ":" + "\n"
+ textwrap.dedent('''
#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    [Engineer-Name]
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
...
"""

# =============================================================================
# Local Library
# =============================================================================

from . import *

# =============================================================================
# Package Module(s)
# =============================================================================

import Database.Business.Interfaces.Company.CRUD as CRUD
import Database.Business.Schemas.Company as Module

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """
    
    ...
    
    @staticmethod
    @Generator.post("/Business-Unit",
        name = "Create a Company Table-Entry with Business-Unit Array",
        response_model = Module.Schema,
        responses = Request.Responses)
    async def POST(Schema: Optional[Module.Record] = None,
        Company: Optional[String] = "[Company-Name]",
        Type: Optional[String] = "[Industry]",
        Website: Optional[String] = "[URL]",
        Unit: List[String] = "",
        DB: Dependency = Connection
    ):
        """ *Creates both `Company` **and** `Business-Unit` Table Entries*.

        **<u>Do Not Use if *Only* Creating a *Business-Unit* Entry.</u>**

        If a JSON Payload (Schema) is used instead of the field types, `Schema`
        will take priority; therefore, the back-end ignoring:

        - `Company`

        - `Type`

        - `Website`

        - `Unit`
        """

        if Schema is None:
            Company: Module.Base = Module.Base(
                Name = Company,
                Type = Type,
                Website = Website
            )

            Unit: [Module.Unit.Base] = [Module.Unit.Base(
                Name = Index
            ) for Index in Unit]
        else:
            Schema: Module.Record = Module.Record(**Schema.dict())

            Company: Module.Base = Module.Base(
                Name = Schema.Name,
                Type = Schema.Type,
                Website = Schema.Website
            )

            Unit: Module.Unit.Base = Module.Unit.Base(
                Name = Schema.Unit
            )

        return CRUD.SQL.Create(
            Company = Company,
            Unit = Unit,
            DB = DB
        )
    ''')
)

class Import(ImportWarning):
    """
    Import Deprecation Warning
    """

    def __init__(self, *args, **kwargs):
        super(Import, self).__init__(*args)

Warn = lambda Warning, File: warnings.warn_explicit(Warning,
    module = "{0}".format(".".join(File.split(".")[:-1])),
    category = Import,
    filename = File,
    lineno = inspect.getframeinfo(inspect.currentframe()).lineno
)
