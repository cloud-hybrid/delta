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
import dataclasses
import ipaddress

from . import *

import Mongo.Gaming.Schemas.Base

# =============================================================================
# Reference Type(s)
# =============================================================================

Scheme = Mongo.Gaming.Schemas.Base.Model

Setup = Scheme.Configuration

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

__module__ = __name__

class Address(Scheme):
    """
    ...
    """

    Assignment: String = Field(
        ...,
        alias = "Assignment",
        description = "Game Server Public IPv4 || IPv6 Address"
    )

    FQDN: Optional[String] = Field(
        ...,
        alias = "FQDN",
        description = "Public-Facing Hostname via DNS A Record"
    )

    V6: Boolean = Field(
        ...,
        alias = "V6",
        description = "Boolean Flag Evaluating the IP-V6 Assignment Property"
    )

class Port(Scheme):
    """
    ...
    """

    Name: String = Field(
        ...,
        alias = "Name",
        description = "Canonical Human-Readable Title of Attributed Port"
    )

    Value: Integer = Field(
        ...,
        alias = "Value",
        description = "Network Assigned Port Value"
    )

    Protocol: String = Field(
        ...,
        alias = "Protocol",
        description = "UDP, TCP, UDP+TCP Enumeration Communication Protocol"
    )

    Type: String = Field(
        "Port",
        alias = "Network-Type",
        description = "XOR Port || Socket"
    )

    Description: String = Field(
        ...,
        alias = "Description",
        description = "Server Port Functional Purpose + Description"
    )

class Base(Scheme):
    """
    ...
    """

    Host: Address = Field(
        default = Address(
            Assignment = "0.0.0.0",
            FQDN = None,
            V6 = False
        ),
        description = "Game Server Public IP(v4|v6) Address"
    )

    Game: Port = Field(
        default = Port(
            Name = "Game",
            Type = "Port",
            Value = 27015,
            Protocol = "UDP+TCP",
            Description = """\
                Game Transmission, Ping(s) and RCON Forward Port via TCP + UDP
            """.strip()
        ), alias = "Game-Port",
        description = "Game Transmission Port"
    )

    Client: Port = Field(
        default = Port(
            Name = "Client",
            Type = "Port",
            Value = 27005,
            Protocol = "UDP",
            Description = "Client Connection Port"
        ), alias = "Client-Port",
        description = "Client Transmission Port"
    )

    TV: Port = Field(
        default = Port(
            Name = "Valve-T-V",
            Type = "Port",
            Value = 27020,
            Protocol = "UDP",
            Description = "Valve TV Connection Port"
        ), alias = "Source-T-V-Port",
        description = "Valve TV Transmission Port"
    )

    Map: String = Field(
        default = "de_mirage",
        alias = "Default-Map",
        description = "The Default Server Map"
    )

    Maps: Optional[List[String]] = Field(
        default = ["de_mirage"],
        alias = "Map-Rotation",
        description = "Available Server Ingame Map Rotation"
    )

    Players: Integer = Field(
        default = 16,
        alias = "Max-Players",
        description = "Maximum Server-Connected Players"
    )

    Tick: Integer = Field(
        default = 64,
        alias = "Tick-Rate",
        description = "Ingame Server-State Refresh Rate"
    )

    class Config(Setup):
        title = "{0}".format(__module__.split(".").pop())

class Create(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Create"

class Shard(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Shard"

class Update(Base):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Update"

class Delete(Scheme):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Delete"

class Schema(Base):
    """
    ...
    """

    _id: PydanticObjectId = None

    ID: Union[PydanticObjectId, String, None] = String(_id) if _id else None

    class Config(Base.Config): title = Base.Config.title + "-" + "Schema"

class Association(Schema):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Association"

class Generator(Schema):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "Generator"

class JSON(Generator):
    """
    ...
    """

    class Config(Base.Config): title = Base.Config.title + "-" + "JSON"

@dataclasses.dataclass()
class Response:
    Mutation:   String  = Field(...)
    Status:     Integer = Field(...)
    Message:    String  = Field(...)

@dataclasses.dataclass()
class Success(Response):
    Mutation:   String  = Field("N/A")
    Status:     Integer = Field(200, alias = "Status-Code")
    Message:    String  = Field("Success", description = "...")

@dataclasses.dataclass()
class Error(Response):
    Mutation:   String  = Field("N/A")
    Status:     Integer = Field(400, alias = "Status-Code")
    Message:    String  = Field("Error", description = "...")
