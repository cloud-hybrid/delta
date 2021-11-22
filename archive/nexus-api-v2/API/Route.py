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
[...]
"""

import dataclasses
import typing

Type = dataclasses.dataclass()

Boolean = bool
String = str
Float = float
Double = float
Dictionary = typing.Dict
Tuple = typing.Tuple
List = typing.List
Set = typing.Set

Optional = typing.Optional

@Type
class URL:
    Deprecated: Optional[Boolean] = None
    Dependencies: Optional[List] = None
    Description: Optional[String] = None
    Name: Optional[String] = None
    Schema: Optional[Boolean] = None
    Endpoint: Optional[String] = None
    Methods: Optional[Set] = None
    Tags: Optional[List[String]] = None

    def __init__(self, *, Debug = False, dependencies, deprecated, description, include_in_schema, name, path, methods, tags, **kwargs):
        """
        Object.dependencies: List -> Dependencies
        Object.deprecated: Boolean -> Deprecated
        Object.description: String -> Description
        Object.include_in_schema -> Schema
        Object.name: String -> Name
        Object.path: String -> Endpoint
        Object.methods: Set -> Methods
        Object.tags: List[String] -> Tags
        """

        super(URL, self).__init__()

        print(kwargs) if Debug else ...

        for key, value in kwargs.items():
            setattr(self, String(key), value)

        self.Dependencies = dependencies
        self.Deprecated = deprecated
        self.Description = description
        self.Include_in_schema = include_in_schema
        self.Name = name
        self.Endpoint = path
        self.Methods = methods
        self.Tags = tags


__all__ = [
    "URL"
]