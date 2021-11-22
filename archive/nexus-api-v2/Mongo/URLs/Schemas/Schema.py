# !/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Cloud-Technology LLC.
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

"""
...
"""

# =============================================================================
# Local Imports
# =============================================================================

from . import *

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

__module__ = __name__

class User(Scheme):
    """
    ...
    """

    ID: String
    Email: String
    Username: String

    Token: String = Field(alias = "HTML-Token")

    class Config(Scheme.Config): title = ".".join([__package__, "Base"])

class Base(Scheme):
    """
    ...
    """

    Content: List[Optional[Dictionary]] = Field(
        alias = "Content"
    )

    class Config(Scheme.Config): title = ".".join([__package__, "Base"])

    @property
    def ID(self) -> String:
        return String(self._id)

class Style(Scheme):
    display: String
    margin: String
    marginBottom: String
    fontSize: String
    color: String
    background: String
    borderStyle: String
    borderWidth: String
    borderRadius: String
    borderColor: String

class Map(Scheme):
    Styles: Style

class Properties(Scheme):
    """
    ...
    """

    Name: String = Field(default = "[Label-Name]", alias = "Name")
    Redirect: String = Field(default ="[Redirect-URL]", alias = "Redirect")
    Button: String = Field(default = "[Button-HTML]", alias = "Button")
    Mapping: Map = Field(default = "[Mapping-CSS]", alias = "Mapping")
    Atlas: String = Field(default = "[Atlas-CSS]", alias = "Atlas")

    class Config(Scheme.Config): title = ".".join([__package__, "Properties"])

class Instantiation(Base):
    """
    ...
    """

    Identifier: Union[Object, String, Bytes] = Field(alias = "ID")

    class Config(Scheme.Config): title = ".".join([__package__, "Instantiation"])

class Input(Scheme):
    """
    ...
    """

    Identifier: Union[Object, String, Bytes] = Field(alias = "ID")

    Key: String = Field(default = "[Key-ID]", alias = "Key-ID")
    Name: String = Field(default = "[Name]", alias = "Name")

    Value: Properties = Field(...)

    class Config(Scheme.Config): title = ".".join([__package__, "Content"])

class Schema(Base):
    """
    ...
    """

    Identifier: Union[Object, String, Bytes] = Field(alias = "ID")

    Account: User = Field(alias = "User")

    class Config(Scheme.Config): title = ".".join([__package__, "Schema"])

class Response(Scheme):
    Content: List[Optional[Input]] = Field(alias = "Content")
    Profile: User = Field(alias = "User")

# =============================================================================
# Exports & Schema Type Associations
# =============================================================================

...
