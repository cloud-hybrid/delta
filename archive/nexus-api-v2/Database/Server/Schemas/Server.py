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

from Model import Model

# =============================================================================
# Reference Type(s)
# =============================================================================

Scheme = Model

Configuration = Scheme.Config

# =============================================================================
# Class (Schema) Initialization
# =============================================================================

import Database.Server.Schemas.Base

Configuration = _scheme.Configuration

__module__ = __name__


class Base(Scheme):
    Name: String = Field(None, alias="Name")
    Type: String = Field(None, alias="Type")
    VPS_ID: String = Field(None, alias="VPS-ID")
    VPS_UUID: String = Field(None, alias="VPS-UUID")
    VPS_Name: String = Field(None, alias="VPS-Name")
    serviceName: Optional[String] = Field(None, alias="Service-Name")
    serviceFile: Optional[String] = Field(None, alias="Service-File")
    servicePath: Optional[String] = Field(None, alias="Service-Path")
    serviceDirectory: String = Field(None, alias="Service-Directory")
    deploymentURL: Optional[String] = Field(None, alias="Deployment-URL")
    deploymentUser: Optional[String] = Field(None, alias="Deployment-User")
    deploymentToken: Optional[String] = Field(None, alias="Deployment-Token")
    Purpose: Optional[String] = Field(None, alias="Purpose")


class Create(Base):
    ...


class Update(Base):
    ...


class Delete(Base):
    Creation: Date = Field(None, alias="Record-Creation-Timestamp")
    Modification: Optional[Date] = Field(None, alias="Record-Modification-Timestamp")
    Deletion: Optional[Date] = Field(None, alias="Record-Deletion-Timestamp")
    ...


class Schema(Base):
    _UUID: String = Field("{0}".format(UID()), alias="UUID")
    Creation: Date = Field(None, alias="Record-Creation-Timestamp")
    Modification: Optional[Date] = Field(None, alias="Record-Modification-Timestamp")
    Deletion: Optional[Date] = Field(None, alias="Record-Deletion-Timestamp")
